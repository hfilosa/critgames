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
        ]
      }, {
        "actionName" : "stop looking at menu",
        "img" : "menuFarWaiter.png"
      }
    ],

    [
      {
        "matchingWords" : [
          "<order"
        ]
      }, {
        "actionName" : "order?",
        "narration" : "order what?"
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
        "scene" : "meal1"
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
        "image" : "askWaiter.png"
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
        "narration" : "Your friends aren’t buying it. That’s what you said last time. 'Why don't you just order the soup?'",
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
        "narration" : "You can’t do this. You should just make up an excuse.",
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
       "narration" : "'What's taking you so long? Why don't you just order the soup?'",
       "scene" : "confronted by friends",
       "increments" : {"concern" : 1}
     }
  ]

  ]
};

scenes[a.sceneName] = a;
