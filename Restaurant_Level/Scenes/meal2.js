var a = {
  "sceneName" : "meal 2",
  "img" : "menuFarWaiter.png",
  "actions" : [
    [
      {
        "notPriorActions" : [
          "ordering intro"
        ],
        "timeRequirement" : 1
      }, {
        "narration" : "You can’t do this. You should just make up an excuse.",
        "actionName" : "ordering intro",
      }
   ],

    [
      {
        "matchingWords" : [
          "look", "menu"
        ],
      }, {
        "actionName" : "look at menu again",
        "img" : "menuCloseWaiter.png"
      }
    ],

    [
      {
        "matchingWords" : [
          "stop", "down"
        ],
      }, {
        "actionName" : "stop looking at menu",
        "img" : "menuFarWaiter.png"
      }
    ],

  ]
};

scenes[a.sceneName] = a;
