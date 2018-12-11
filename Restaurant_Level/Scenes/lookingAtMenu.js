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

   [[
     {
       "matchingWords" : [
         "flip table", "flip", "throw"
       ]
     },
     {
       "narration" : "Oh my FUCKING God. Why did you do that? That was a horrible idea - you got kicked out of the restaurant. You avoided eating, though, so.. Good job?",
       "actionName" : "flip table",
       "img" : "alarmlevel2_fliptable_nodrinks.png",
       "increments" : {"concern":2},
       "scene" : "game over"
     }
   ],

   [
     {
       "matchingWords" : [
         "confess", "tell the truth", "truth", "tell them", "ask for help"
       ]
     },
     {
       "narration" : "You really shouldn’t do that. Y0u can’t trust them to und3rstand. They w0n’t say the right th1ng.",
     }
   ],

   [
     {
       "matchingWords" : [
         "recover", "get better" , "get help"
       ]
     },
     {
       "narration" : "You can’t. Is it worth it, if it means you’ll get fat? You couldn’t l1v3 w1th0ut m3.",
     }
   ],

   [
     {
       "matchingWords" : [
         "die", "play dead", "play possum"
       ]
     },
     {
       "narration" : "That was the dumbest thing you’ve ever done in your life. Your friends had no idea what to do - how embarrassing.",
       "img" : "ohmygodshesfuckingdead.png",
       "increments" : {"concern" : 2},
       "scene" : "game over"
     }
   ],

   [
     {
       "matchingWords" : [
         "flee", "leave", "go home", "exit", "run"
       ]
     },
     {
       "narration" : "Well, you just left. You avoided eating, but your friends are really weirded out. You really messed that one up.",
       "img" : "shejustfuckingleft.png",
       "increments" : {"concern" : 2},
       "scene" : "game over"
     }
   ]

  ]

};

scenes[a.sceneName] = a;
