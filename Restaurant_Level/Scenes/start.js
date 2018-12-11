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
        "increments" : {"anxiety" : 1}
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
