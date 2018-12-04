var a = {
  "sceneName" : "LookingAtMenu",
  "img" : "menuClose.png",
  "actions" : [
    [
      {
        "matchingWords" : [
          "read", "comprehend"
        ]
      }, {
        "narration" : "There is something wrong with you. You are so anxious you can barely read. Your friends are going to find out if you don’t figure this out",
        "actionName" : "Read Menu"
      }
   ],

    [
      {
        "timeRequirement" : 10,
      }, {
        "actionName" : "Waiter Arrives",
        "scene" : "Ordering"
      }
   ]

  ]

};

scenes[a.sceneName] = a;
