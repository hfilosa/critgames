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
        "narration" : "You’re looking at it, aren’t you? It’s all right there, plain as day. Young people these days can’t read anything that isn’t on a screen...",
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
