var a = {
  "sceneName" : "choice",
  "img" : "phonestuff.png",
  "actions" : [
    [
      {
        "matchingWords" : [
          "yes","ok","agree"
        ],
      }, {
        "music" : "RestaurantMusic.wav",
        "narration" : "You say yes to them for some stupid reason. Well, your parents have been noticing your eating habits lately. Good idea to get out of the house.",
        "scene" : "start",
        "level" : "Restaurant_Level"
      }
    ],
    [
      {
        "matchingWords" : [
          "no","refuse","disagree"
        ],
      }, {
        "narration" : "This part of the game hasn’t been made just yet, but you can read about it in the accompanying design document. Try going to dinner!"
      }
    ]
 ]
};

scenes[a.sceneName] = a;
