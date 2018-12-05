let hunger = 0;
let concern = 0;
let anxiety = 0;

let currScene = scenes["start"];

let pastActions = []; // list of strings

function randInt(low, high)
{
  return low + Math.floor(Math.random() * (high + 1));
}

function getRandomCharacter()
{
  let aCharCode = "a".charCodeAt(0);
  return String.fromCharCode(aCharCode + randInt(0, 25))[0];
}

String.prototype.replaceAt=function(index, replacement) {
  return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

function queerCommandPrompt()
{ 
  console.log("Queering command prompt");
  let inp = $("#command-prompt").val();
  console.log(inp);
  if (inp.length > 0)
  {
    let index = randInt(0, inp.length - 1);
    let char = getRandomCharacter();
    inp = inp.replaceAt(index, char);
  }
  console.log(inp);
  $("#command-prompt").val(inp);
}

function blurImage()
{
  $("#image").toggleClass("blurred");
  console.log("BLURRING!");
  setTimeout(() => $("#image").toggleClass("blurred"), 1500);
}

window.setInterval(blurImage, 15 * 1000);


// queer element
window.setInterval(queerCommandPrompt, 10 * 1000);

function setGlobals()
{
  // $("#hunger-stat").innerHTML = hunger;
  // $("#concern-stat").innerHTML = concern;
  // $("#anxiety-stat").innerHTML = anxiety;
}

function narrate(str)
{
  let to_write = str;
  // array of things to narrate
  if (typeof(str) == "object" && str.length > 0) {
    to_write = str[0];
    setTimeout(() => narrate(str.slice(1)), 5000);
  }
  console.log(to_write);
  narrator.innerHTML = to_write;
}

function setImage(img){
  console.log("Seting image to " + img);
  imageWindow.src = "Restaurant_Level/images/" + img;
}

// narrates the call
function helpCalled()
{
  let input_options = [];
  for (let index in currScene.actions)
  {
    let action = currScene.actions[index];
    let action_condition = action[0];
    if ("matchingWords" in action_condition)
    {
      let action_str = action_condition.matchingWords[0];
      action_str = action_str.replace("<", "");
      input_options.push(action_str);
    }
  }
  narrate("You can: " + input_options.join(", "));
}

function changeScene(sceneToChangeTo)
{
  currScene = getSceneByName(sceneToChangeTo);
  setImage(currScene.img);
  setTime();
  console.log(getTimeInScene());
}

function onSubmit(str) {
  console.log(`Command ${str} entered`);
  if (str == "undefined")
    return;
  if (str == "?" || str=="help") {
    helpCalled();
  } else {
    parseCommand(str);
  }
}

//return true if word is present in some form in input
//If synonym in synonyms has a '<' as first character, must be exact match
function word_present(command, synonyms){
  for (n in synonyms){
    var synonym = synonyms[n];
    if (synonym.charAt[0] == '<'){
      //must be an exact match
      synonym = synonym.substring(1);
      if (command == synonym)
        return true;
    }
    else{
      if (command.includes(synonym))
        return true;
    }
  }
  return false;
}

function getActionByName(action)
{
  if (typeof(action) != "string"){
    console.log("ERROR EXPECTED ACTION AS STRING " + action);
  }
  return actions[action];
}

function getSceneByName(scene)
{
  if (typeof(scene) != "string"){
    console.log("ERROR EXPECTED ACTION AS STRING " + scene);
  }
  return scenes[scene];
}

// return time elapsed in the current scene
function getTimeInScene(){
  let dt = new Date();
  return (dt.getTime() - currScene.timeInScene)/1000;
}

// Set time entered of a scene
function setTime(){
  let dt = new Date();
  currScene.timeInScene = dt.getTime();
}

// executes an action
function executeAction(action)
{
  console.log("Executing action");
  console.log(action);
  // if action passed by name
  if (typeof(action) == "string")
  {
    action = getActionByName(action);
  }

  if ("narration" in action)
  {
    narrate(action.narration);
  }

  if ("actionName" in action)
   {
     pastActions.push(action.actionName);
   }

  if ("increments" in action)
  {
    let increments = action.increments;

    hunger += increments.hunger == undefined ? 0 : increments.hunger;
    concern += increments.concern == undefined ? 0 : increments.concern;
    anxiety += increments.anxiety == undefined ? 0 : increments.anxiety;
    setGlobals();
  }

  if ("img" in action)
  {
    setImage(action.img);
  }

  if ("scene" in action)
  {
    changeScene(action.scene);
  }
}

function checkCondition(command, cond)
{
  if("matchingWords" in cond)
  {
    if (!word_present(command, cond.matchingWords))
      return false;
  }

  if ("priorActions" in cond)
  {
    if (cond.priorActions.some(actionName => !pastActions.includes(actionName)))
    {
      return false;
    }
  }

  if ("notPriorActions" in cond)
  {
    if (cond.notPriorActions.some(actionName => pastActions.includes(actionName)))
    {
      return false;
    }
  }

  if ("imageRequired" in cond)
  {
    if (imageWindow.src != cond.imageRequired)
    {
      return false;
    }
  }

  if ("globals" in cond)
   {
     let globals = cond.globals;
     if ("hunger" in globals)
     {
      if (hunger > globals.hunger.high || hunger < globals.hunger.low)
        return false;
     }
     if ("concern" in globals)
     {
      if (concern > globals.concern.high || concern < globals.concern.low)
        return false;
     }
     if ("anxiety" in globals)
     {
      if (anxiety > globals.anxiety.high || anxiety < globals.anxiety.low)
        return false;
     }
   }

   if ("timeRequirement" in cond){
     if (cond.timeRequirement > getTimeInScene())
      return false;
   }
  return true;
}

//Called periodically to check for any time based events that should fire
function timedEvents(){
  if (!currScene)
    return;

  for (index in currScene.actions) {
    let condition = currScene.actions[index][0];
    let action = currScene.actions[index][1];
    if (!("matchingWords" in condition)){
      if (checkCondition("undefined", condition)) {
        console.log("executing time based action")
        executeAction(action);
        return;
      }
    }
  }
}

// parse a command that was stripped for actions
// NOTE: does not handle "help" commands
function parseCommand(command) {
  console.log(currScene);
  // go through each action and try to run
  for (index in currScene.actions) {
    let condition = currScene.actions[index][0];
    let action = currScene.actions[index][1];

    if (checkCondition(command, condition)) {
      console.log("condition passed");
      console.log(condition);
      console.log("---");
      executeAction(action);
      return;
    }
  }

  // if we failed to parse execute the action Error
  narrate(`I don't know what "${command}" means.`);
}
