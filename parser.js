
let hunger = 0;
let concern = 0;
let anxiety = 0;

let currScene = {};

let pastActions = []; // list of strings

function helpCalled()
{

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


function checkCondition(command, cond)
{
  if("matchingWords" in cond)
  {
    if (!word_present(command, cond.matchingWords))
      return false;
 
  }
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
