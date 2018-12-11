var a = {
  "sceneName" : "game over",
  "actions" : [
    [
      {
        "notPriorActions" : [
          "concern end"
        ],
        "timeRequirement" : 5,
        "globals" : {"concern": {"low" : 2, "high" : 10}}
      },
      {
        "narration" : "!!",
        "img" : "!!",
        "actionName" : "concern end"
      }
   ],
   [
     {
       "notPriorActions" : [
         "anxiety end"
       ],
       "timeRequirement" : 5,
       "globals" : {"anxiety": {"low" : 2, "high" : 10}}
     },
     {
       "narration" : "!!",
       "img" : "!!",
       "actionName" : "anxiety end"
     }
  ],

  [
    {
      "notPriorActions" : [
        "success end"
      ],
      "timeRequirement" : 5,
      "globals" : {"concern": {"low" : 0, "high" : 2}
                   "anxiety": {"low" : 0, "high" : 2}
                  }
    },
    {
      "narration" : "!!",
      "img" : "!!",
      "actionName" : "success end"
    }
  ]

  ]
};

scenes[a.sceneName] = a;
