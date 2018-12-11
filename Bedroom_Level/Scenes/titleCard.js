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
    ],
    [
      {
        "matchingWords" : [
          "debug"
        ]
      }, {
        "actionName" : "debug",
        "music" : "RestaurantMusic.wav",
        "scene" : "start",
        "level" : "Restaurant_Level",
      }
    ]
 ]
};

scenes[a.sceneName] = a;
