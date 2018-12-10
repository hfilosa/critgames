var a = {
  "sceneName" : "title card",
  "img" : "MICAH.png",
  "actions" : [
    [
      {
        "matchingWords" : [
          "play","start","game"
        ],
        "notPriorActions" : [
          "start"
        ]
      }, {
        "actionName" : "start",
        "music" : "intro.wav",
        "scene" : "monologue"
      }
    ]
 ]
};

scenes[a.sceneName] = a;
