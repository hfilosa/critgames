var a = {
  "sceneName" : "Ordering",
  "img" : "menuFarWaiter.png",
  "actions" : [
    [
      {
        "notPriorActions" : [
          "Ordering Intro"
        ],
        "timeRequirement" : 1
      }, {
        "narration" : "You can’t do this. You should just make up an excuse.",
        "actionName" : "Ordering Intro",
      }
   ],

    [
      {
        "matchingWords" : [
          "look", "menu"
        ],
      }, {
        "actionName" : "Look at Menu Again",
        "img" : "menuCloseWaiter.png"
      }
    ],

    [
      {
        "matchingWords" : [
          "stop", "down"
        ],
      }, {
        "actionName" : "Stop Looking Menu",
        "img" : "menuFarWaiter.png"
      }
    ],

    [
      {
        "notPriorActions" : [
          "Waiter Departs",
        ],
        "timeRequirement" : 4
      }, {
        "actionName" : "Waiter Departs",
        "img" : "menuTable.png"
      }
    ],

     [
       {
         "notPriorActions" : [
           "Look at Menu",
           "Friends are getting worried"
         ],
         "timeRequirement" : 10
       }, {
         "narration" : "Your friends are all looking at their menus. You should, too, or else they might think something is wrong",
         "actionName" : "Friends are getting worried"
       }
     ],

     [
       {
         "matchingWords" : [
           "read", "comprehend"
         ]
       }, {
         "narration" : "There is something wrong with you. You are so anxious you can barely read. Your friends are going to find out if you don’t figure this out",
         "actionName" : "Read Menu",
         "img" : "menuClose.png"
       }
    ]

    [
      {
        "matchingWords" : [
          "Stop", "Down"
        ]
      }, {
        "actionName" : "Put Menu Down",
        "img" : "menuTable.png"
      }
   ]

  ]

};

scenes[a.sceneName] = a;
