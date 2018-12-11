var a = {
  "sceneName" : "title card",
  "img" : "titleScreen.png",
  "actions" : [
    [
      {
        "matchingWords" : [
          "start","play","game"
        ],
        "notPriorActions" : [
          "start"
        ]
      }, {
        "actionName" : "start",
        "music" : "intro.wav",
        "scene" : "monologue"
      }
    ],
    [
      {
        "matchingWords" : [
          "expresso"
        ]
      }, {
        "actionName" : "debug",
        "music" : "intro.wav",
        "scene" : "choice",
      }
    ]
 ]
};

scenes[a.sceneName] = a;
