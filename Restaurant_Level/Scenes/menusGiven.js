var a = {
  "sceneName" : "menus given",
  "img" : "cleanTableWaiter.png",
  "actions" : [
    [
      {
        "matchingWords" : [
          "look at menu","menu", "look", "get menu", "grab menu"
        ],
        "timeRequirement" : 2
      }, {
        "narration" :
        [
         "While your friends are chatting about TV, you look at the menu. None of this can fit into your calories for today. There aren’t even sides that are small enough…",
         "You ask your friend to split something with you, but she says she’s starving. You’ll have to order for yourself."
        ],
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
        "narration" : "The waiter hands out menus, according to his name tag he's Jeremy.",
        "actionName" : "waiter hands out menus",
        "img" : "menuFarWaiter.png"
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
        "img" : "menuTable.png"
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
         "narration" : "Come on, your friends are all looking at their menus. At least pretend to look, you don’t want them to think you’re weird.",
         "actionName" : "hesistate to look at menu"
       }
     ],

  ]
};

scenes[a.sceneName] = a;
