var a = {
  "sceneName" : "meal 1",
  "img" : "foodcomes.png",
  "actions" : [
    [
      {
        "notPriorActions" : [
          "meal 1 intro text"
        ],
        "timeRequirement" : 1
      },
      {
        "narration" : "The food arrives",
        "actionName" : "meal 1 intro text",
      }
   ]
    [
      {
        "notPriorActions" : [
          "friends are suspicious" , "eat" , "converse" , "vomit" , "drink"
        ],
        "timeRequirement" : 15
      }, {
        "narration" : "Your friends are beginning to notice that you are not eating.",
        "actionName" : "friends are suspicious",
        "img" : "concern1.png",
        "increments" : {"concern" : 1}
      }
   ],

   [
     {
       "notPriorActions" : [
         "friends are super suspicious", "eat" , "converse" , "vomit" , "drink"
       ],
       "timeRequirement" : 30
     }, {
       "narration" : "!!.",
       "actionName" : "friends are super suspicious",
       "img" : "noEat.png",
       "increments" : {"concern" : 2}
     }
  ],

    [
      {
        "matchingWords" : [
          "<look"
        ]
      }, {
        "narration" : "It’s a new Italian restaurant, one that your friends are excited to try out.",
      }
    ],

    [
      {
        "matchingWords" : [
          "look at table","look table"
        ]
      }, {
        "narration" : "There’s your food. You shouldn’t have ordered that.. Don’t even bother looking at their food, it’ll just make things worse.",
      }
    ],

    [
      {
        "matchingWords" : [
          "look at friends","look friends"
        ]
      }, {
        "narration" : "They seem like they’re having fun.",
      }
    ],

    [
      {
        "matchingWords" : [
          "eat", "bite"
        ]
      }, {
        "actionName" : "eat",
        "img" : "forkFood.png",
        "narration" : "What are you doing? You can’t eat that. Spit it out.",
        "increments" : {"anxiety" : 1}
      }
    ],

    [
      { "PriorActions" : [
        "eat"
        ],
        "matchingWords" : [
          "chew", "swallow", "bite", "consume"
        ],

      }, {
        "actionName" : "chew",
        "increments" : {"anxiety" : 1},
        "img" : "chew.png",
        "narration" : "WhY d1d y0u just d0 th4t? Y0u have no self-contr0l. Y0u have no 1dea h0w m4ny C4lor13s that is. Y0u’ll g3t t00 fat!",
      }
    ],

    [
      { "PriorActions" : [
        "eat"
        ],
        "matchingWords" : [
          "spit out food", "spit", "bite", "consume"
        ],

      }, {
        "actionName" : "spit out food",
        "increments" : {"concern" : 2},
        "narration" : "You spit up your food on the table. Your friends are appalled. You couldn’t have thought of anything better to do?",
        "img" : "spit.png"
      }
    ],

    [
      { "PriorActions" : [
        "eat"
        ],
        "matchingWords" : [
          "spit food into napkin", "spit food into napkin", "spit napkin", "consume"
        ],
      }, {
        "actionName" : "spit out food into nakpkin",
        "narration" : "Your friends didn’t notice that. Good job.",
        "img" : "napkin.png"
      }
    ],

    [
      {
        "matchingWords" : [
          "drink", "sip"
        ],
      }, {
        "actionName" : "drink",
        "narration" : "You take a sip of your water. No calories there, but you’ll need to figure out something about the food problem still.",
        "img" : "sipsip.png"
      }
    ],

    [
      {
        "matchingWords" : [
          "throw up", "vomit", "barf"
        ],
      }, {
        "actionName" : "vomit",
        "narration" : "You are such an idiot. You just… You threw up on the table. Your friends are definitely worried now.",
        "increments" : {"concern" : 2, "anxiety" : 2},
        "img" : "barf.png"
      }
    ],

    [
      {
        "matchingWords" : [
          "talk", "chat", "converse", "gossip", "speak"
        ],
        "priorActions" : ["converse"]
      }, {
        "actionName" : "converse",
        "narration" : "You talk to your friends about a person you all know. They seem to be distracted by this - maybe they won’t notice if you don’t eat that...",
        "increments" : {"concern" : -1},
        "img" : "barf.png"
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
