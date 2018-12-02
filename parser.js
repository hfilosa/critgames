let hunger = 0;
let concern = 0;
let anxiety = 0;

let currScene = scenes["Entrance"];

let pastActions = []; // list of strings

function narrate(str)
{
  console.log(str);
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
      input_options.push(action_condition.matchingWords[0]);
    }
  }
  narrate("Your options are: " + input_options.join(", "));
}

function changeScene(sceneToChangeTo)
{
 // reset the time DONT FORGET 
}

function onSubmit(str) {
  if (str == "?") {
    helpCalled();
  } else {
    parseCommand(str);
  }
}
//return true if word is present in some form in input
function word_present(command, synonyms){
  for (n in synonyms){
    if (command == synonyms[n])
      return true;
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

// executes an action 
function executeAction(action)
{
  // if action passed by name
  if (typeof(action) == "string")
  {
    action = getActionByName(action);
  }

  if ("narration" in action)
  {
    narrate(action.narration);
  }

  if ("increments" in action)
  {
    let increments = action.increments;

    hunger += increments.hunger == undefined ? 0 : increments.hunger;
    concern += increments.concern == undefined ? 0 : increments.concern;
    anxiety += increments.anxiety == undefined ? 0 : increments.anxiety;
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
    if (cond.priorActions.some(actionName => pastActions.includes(actionName)))
    {
      return false;
    }
  }

  // if ("globals" in cond)
  // {
  //   let globals = cond.globals;
  //   if ("hunger" in globals)
  //   {
  //     if ("low" in globals.hunger)
  //     {
  //       if 
  //     }
  //   }
  // }
  return true;
}

// parse a command that was stripped for actions
// NOTE: does not handle "help" commands
function parseCommand(command) {

  // go through each action and try to run
  for (actionCondPair in currScene.actions) {
    let condition = actionCondPair[0];
    let action = actionCondPair[1];

    if (checkCondition(command, conditon)) {
      executeAction(action);
      pastActions.push(action.actionName);
      return;
    }
  }

  // if we failed to parse execute the action Error
  executeAction("Error");
}
