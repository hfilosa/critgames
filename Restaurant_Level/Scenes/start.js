var a = {
  "sceneName" : "start",
  "img" : "cleanTable.png",
  "actions" : [
    [
      {
        "notPriorActions" : [
          "intro text"
        ],
        "timeRequirement" : 5
      },
      {
        "narration" : "This wasn’t the best idea you’ve ever had, was it? Now you’re stuck at an Italian restaurant. You should have stayed home - What are you even going to eat here?",
        "actionName" : "intro text",
        "increments" : {"anxiety" : 1},
      }
   ],
   [
     {
       "notPriorActions" : [
         "waiter arrives"
       ],
       "timeRequirement" : 10
     },
     {
       "narration" : "The waiter comes and gives you the menus.",
       "actionName" : "waiter arrives",
       "scene" : "menus given"
     }
   ],
   [
     {
       "matchingWords" : [
         "flip table", "flip", "throw"
       ]
     },
     {
       "narration" : "Oh my God. Why did you do that. That was a horrible idea - you got kicked out of the restaurant. You avoided eating, though, so.. Good job?",
       "actionName" : "waiter arrives",
       "img" : "alarmlevel2_fliptable_nodrinks.png",
       "increments" : {"concern":2}
     }
   ]
 ]
};

scenes[a.sceneName] = a;
