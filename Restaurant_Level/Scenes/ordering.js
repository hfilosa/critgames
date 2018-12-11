var a = {
  "sceneName" : "ordering",
  "img" : "menuFarWaiter.png",
  "actions" : [
    [
      {
        "matchingWords" : [
          "look", "menu"
        ]
      }, {
        "actionName" : "look at menu again",
        "img" : "menuCloseWaiter.png"
      }
    ],
    [
      {
        "matchingWords" : [
          "stop", "down"
        ],
        "imageRequired" : "menuCloseWaiter.png",
        "priorActions": ["look at menu again"]
      }, {
        "actionName" : "stop looking at menu again",
        "img" : "menuFarWaiter.png"
      }
    ],
    [
      {
        "matchingWords" : [
          "<order"
        ]
      }, {
        "actionName" : "order1",
        "narration" : "order what?"
      }
    ],

    [
      {
        "matchingWords" : [
          "<order"
        ],
        "priorActions" : [
          "order1"
        ]
      }, {
        "actionName" : "order2",
        "narration" : "Okay, okay, you order some food - but you panic and pick the first thing you see. It’s way too much, but maybe you can still figure this out",
        "scene" : "meal 1"
      }
    ],

    [
      {
        "matchingWords" : [
          "<order nothing"
        ]
      }, {
        "actionName" : "order nothing",
        "narration" : "What? Your friends are extremely concerned",
        "increments" : {"concern" : 3}
      }
    ],
    [
      {
        "matchingWords" : [
          "order the second option", "order second option", "order 2nd option"
        ],
        "PriorActions" : [
          "ask what to order"
        ],
      }, {
        "actionName" : "order second option",
        "narration" : "The waiter scribbles down your order. At least that ordeal is over",
        "scene" : "meal 1",
        "increments" : {"anxiety" : 1}
      }
    ],

    [
      {
        "matchingWords" : [
          "ask","recommend","recommendation"
        ]
      }, {
        "actionName" : "ask what to order",
        "narration" : "You ask what to order. The waiter recommends the second option",
        "img" : "askWaiter.png"
      }
    ],

    [
      {
        "matchingWords" : [
          "order"
        ],
      }, {
        "actionName" : "order anything",
        "narration" : "I don't think that's on the menu"
      }
    ],

    [
      {
        "matchingWords" : [
          "excuse","lie","not hungry","sick","stomach bug"
        ],
      }, {
        "actionName" : "give excuse",
        "narration" : "Your friends aren’t buying it - That’s what you said last time. 'Why don't you just order the soup?' Ashley says",
        "scene" : "confronted by friends",
        "increments" : {"concern" : 1}
      }
    ],
    [
      {
        "notPriorActions" : [
          "ordering intro"
        ],
        "timeRequirement" : 1
      }, {
        "narration" : "Oh God, he wants your order. Make something up, or do something - quick.",
        "actionName" : "ordering intro",
      }
   ],

   [
     {
       "notPriorActions" : [
         "take too long"
       ],
       "timeRequirement" : 30
     }, {
       "actionName" : "take too long",
       "narration" : "Your friends and the waiter are awkwardly waiting. After a long silence, he says that the soup is pretty popular, 'would you like a bowl?'",
       "scene" : "confronted by friends",
       "increments" : {"concern" : 1}
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
