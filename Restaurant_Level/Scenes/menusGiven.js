var a = {
  "sceneName" : "menus given",
  "img" : "cleanTableWaiter.png",
  "actions" : [
    [
      {
        "matchingWords" : [
          "look at menu","menu", "look", "get menu", "grab menu"
        ],
        "timeRequirement" : 2
      }, {
        "narration" :
        [
         "While your friends are chatting about TV, you look at the menu. None of this can fit into your calories for today. There aren’t even sides that are small enough…",
         "You ask your friend to split something with you, but she says she’s starving. You’ll have to order for yourself."
        ],
        "actionName" : "look at menu",
        "scene" : "looking at menu",
      }
   ],
   [
      {
        "notPriorActions" : [
          "waiter hands out menus",
        ],
        "timeRequirement" : 2
      }, {
        "narration" : "He hands out menus, according to his name tag his name is Jeremy.",
        "actionName" : "waiter hands out menus",
        "img" : "menuFarWaiter.png"
      }
    ],

    [
      {
        "notPriorActions" : [
          "waiter departs",
        ],
        "timeRequirement" : 6
      }, {
        "actionName" : "waiter departs",
        "img" : "menuTable.png"
      }
    ],

     [
       {
         "notPriorActions" : [
           "look at menu",
           "hesistate to look at menu"
         ],
         "timeRequirement" : 10
       }, {
         "narration" : "Come on, your friends are all looking at their menus. At least pretend to look, you don’t want them to think you’re weird.",
         "actionName" : "hesistate to look at menu"
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
         "actionName" : "waiter arrives",
         "img" : "alarmlevel2_fliptable_nodrinks.png",
         "increments" : {"concern":2}
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
         "increments" : {"concern" : 2}
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
         "increments" : {"concern" : 2}
       }
     ]

  ]
};

scenes[a.sceneName] = a;
