var a = {
  "sceneName" : "looking at menu",
  "img" : "menuClose.png",
  "actions" : [
    [
      {
        "matchingWords" : [
          "read", "comprehend"
        ]
      }, {
        "narration" : "There is something wrong with you. You are so anxious you can barely read. Your friends are going to find out if you don’t figure this out",
        "actionName" : "read menu"
      }
   ],

    [
      {
        "timeRequirement" : 10,
      }, {
        "actionName" : "waiter arrives",
        "scene" : "ordering"
      }
   ]

  ]

};

scenes[a.sceneName] = a;
