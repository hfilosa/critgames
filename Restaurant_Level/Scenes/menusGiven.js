var a = {
  "sceneName" : "MenusGiven",
  "img" : "cleanTableWaiter.png",
  "actions" : [
    [
      {
        "matchingWords" : [
          "menu", "look", "get menu", "grab menu"
        ],
        "timeRequirement" : 2
      }, {
        "narration" : "You look at the menu and frantically try to determine what is safe to eat. Your mental math abilities have improved significantly since you started counting calories, but it is still difficult under stress",
        "actionName" : "Look at Menu",
        "scene" : "LookingAtMenu",
      }
   ],

    [
      {
        "notPriorActions" : [
          "Waiter Hands Out Menus",
        ],
        "timeRequirement" : 2
      }, {
        "narration" : "The waiter hands out menus, according to his name tag he is Jeremy",
        "actionName" : "Waiter Hands Out Menus",
        "image" : "menuFarWaiter.png"
      }
    ],

    [
      {
        "notPriorActions" : [
          "Waiter Departs",
        ],
        "timeRequirement" : 6
      }, {
        "actionName" : "Waiter Departs",
        "image" : "menuTable.png"
      }
    ],

     [
       {
         "notPriorActions" : [
           "Look at Menu",
           "Hesistant to look at menu"
         ],
         "timeRequirement" : 10
       }, {
         "narration" : "Your friends are all looking at their menus. You should, too, or else they might think something is wrong",
         "actionName" : "Hesistant to look at menu"
       }
     ],

  ]
};

scenes[a.sceneName] = a;
