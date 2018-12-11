var a = {
  "sceneName" : "game over",
  "actions" : [
    [
      {
        "notPriorActions" : [
          "concern end"
        ],
        "timeRequirement" : 5,
        "globals" : {"concern": {"low" : 2, "high" : 100}}
      },
      {
        "narration" : "",
        "img" : "concernEnd.png",
        "actionName" : "concern end"
      }
   ],
   [
     {
       "notPriorActions" : [
         "anxiety end"
       ],
       "timeRequirement" : 5,
       "globals" : {"anxiety": {"low" : 2, "high" : 100}}
     },
     {
       "narration" : "",
       "img" : "anxietyEnd.png",
       "actionName" : "anxiety end"
     }
  ],

  [
    {
      "notPriorActions" : [
        "success end"
      ],
      "timeRequirement" : 5,
      "globals" : {"concern": {"low" : 0, "high" : 2},
                   "anxiety": {"low" : 0, "high" : 2}
                  }
    },
    {
      "narration" : "",
      "img" : "successEnd.png",
      "actionName" : "success end"
    }
  ],

  [
    {
      "matchingWords" : [
        "try again","restart"
      ],
      "timeRequirement" : 5,
    },
    {
      "narration" : "",
      "scene" : "choice",
      "level" : "Bedroom_Level",
      "music" : "intro.wav"
    }
  ]

  ]
};
scenes[a.sceneName] = a;
