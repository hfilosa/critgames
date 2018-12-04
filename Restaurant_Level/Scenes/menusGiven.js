var a = {
  "sceneName" : "menus given",
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
        "actionName" : "look at menu",
        "scene" : "looking at menu",
      }
   ],

    [
      {
        "notPriorActions" : [
          "waiter hands out menus",
        ],
        "timeRequirement" : 2
      }, {
        "narration" : "The waiter hands out menus, according to his name tag he is Jeremy",
        "actionName" : "waiter hands out menus",
        "image" : "menuFarWaiter.png"
      }
    ],

    [
      {
        "notPriorActions" : [
          "waiter departs",
        ],
        "timeRequirement" : 6
      }, {
        "actionName" : "waiter departs",
        "image" : "menuTable.png"
      }
    ],

     [
       {
         "notPriorActions" : [
           "look at menu",
           "hesistate to look at menu"
         ],
         "timeRequirement" : 10
       }, {
         "narration" : "Your friends are all looking at their menus. You should, too, or else they might think something is wrong",
         "actionName" : "hesistate to look at menu"
       }
     ],

  ]
};

scenes[a.sceneName] = a;
