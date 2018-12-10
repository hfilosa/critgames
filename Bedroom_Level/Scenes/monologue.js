var a = {
  "sceneName" : "monologue",
  "img" : "MICAH.png",
  "actions" : [
    [
      {
        "matchingWords" : [
          ""
        ],
      }, {
        "actionName" : "be patient",
        "narration" : "You can’t do that just yet. Can you just be patient?"
      }
    ],
    [
      {
        "timeRequirement" : 7,
        "notPriorActions" : [
          "1"
        ]
      }, {
        "actionName" : "1",
        "img" : "disclaimer.png"
      }
    ],
    [
      {
        "timeRequirement" : 14,
        "notPriorActions" : [
          "2"
        ]
      }, {
        "actionName" : "2",
        "narration" : "You don’t remember falling asleep. It’s the middle of the day, doing this really throws off your sleep schedule. And on top of that, it makes you so groggy…",
        "img" : "bedroomslep.png"
      }
    ],
    [
      {
        "timeRequirement" : 20,
        "notPriorActions" : [
          "3"
        ]
      }, {
        "actionName" : "3",
        "narration" : " \"What’s your name?\"",
        "img" : "micahbedroomawake.png"
      }
    ],
    [
      {
        "timeRequirement" : 25,
        "notPriorActions" : [
          "4"
        ]
      }, {
        "actionName" : "4",
        "narration" : "My name is Micah.",
        "img" : "finalfinalgif.gif"
      }
    ],
    [
      {
        "timeRequirement" : 30,
        "notPriorActions" : [
          "5"
        ]
      }, {
        "actionName" : "5",
        "narration" : "Ugh. Your friends are texting you, asking if you can come to dinner tonight.",
        "img" : "bedroomphone.png"
      }
    ],
    [
      {
        "timeRequirement" : 35,
        "notPriorActions" : [
          "6"
        ]
      }, {
        "actionName" : "6",
        "narration" : "You need to figure out what you want to do for dinner",
        "img" : "standing bedroom.png"
      }
    ],
    [
      {
        "timeRequirement" : 40,
        "notPriorActions" : [
          "7"
        ]
      }, {
        "actionName" : "7",
        "narration" : "Well, it’s s l i g h t l y more difficult than that. It’s not like you can just go and eat n0rmally.",
        "img" : "micahmirror.png"
      }
    ],
    [
      {
        "timeRequirement" : 45,
        "notPriorActions" : [
          "8"
        ]
      }, {
        "actionName" : "8",
        "narration" : "Your hips, they’re much too wide. Your arms too thick. Your stomach is bloated. Eating would only make it get larger.",
        "img" : "micahmirror2.png"
      }
    ],
    [
      {
        "timeRequirement" : 50,
        "notPriorActions" : [
          "9"
        ]
      }, {
        "actionName" : "9",
        "narration" : "If you go out to eat, you’ll get wider. Larger. Bigger.",
        "img" : "micahmirror2.png"
      }
    ],
    [
      {
        "timeRequirement" : 55,
        "notPriorActions" : [
          "10"
        ]
      }, {
        "actionName" : "10",
        "narration" : "Become an even bigger burden",
        "img" : "micahmirrortwoandahalf.png"
      }
    ],
    [
      {
        "timeRequirement" : 60,
        "notPriorActions" : [
          "11"
        ]
      }, {
        "actionName" : "11",
        "narration" : "If you eat, your mind will go...",
        "img" : "Distoryit.png"
      }
    ],
    [
      {
        "timeRequirement" : 63,
        "notPriorActions" : [
          "12"
        ]
      }, {
        "actionName" : "12",
        "narration" : "Down",
        "img" : "distort1.png"
      }
    ],
    [
      {
        "timeRequirement" : 65,
        "notPriorActions" : [
          "13"
        ]
      }, {
        "actionName" : "13",
        "narration" : "Down",
        "img" : "distort2.png"
      }
    ],
    [
      {
        "timeRequirement" : 67,
        "notPriorActions" : [
          "14"
        ]
      }, {
        "actionName" : "14",
        "narration" : "down",
        "img" : "distort5.png"
      }
    ],
    [
      {
        "timeRequirement" : 69,
        "notPriorActions" : [
          "16"
        ]
      }, {
        "actionName" : "16",
        "narration" : "d 0 w n",
        "img" : "distortionagain.png"
      }
    ],
    [
      {
        "timeRequirement" : 73,
        "notPriorActions" : [
          "17"
        ]
      }, {
        "actionName" : "17",
        "narration" : "Sorry about that.",
        "img" : "micahmirror.png"
      }
    ],
    [
      {
        "timeRequirement" : 77,
        "notPriorActions" : [
          "18"
        ]
      }, {
        "actionName" : "18",
        "narration" : "Clearly you can’t go. You’d have to eat, and you absolutely can’t eat anything.",
        "img" : "standing bedroom.png"
      }
    ],
    [
      {
        "timeRequirement" : 81,
        "notPriorActions" : [
          "19"
        ]
      }, {
        "actionName" : "19",
        "narration" : "Well, maybe you can have a little, but they want Italian, and you can’t eat at an Italian restaurant - The pasta! The bread!",
        "img" : "you can_t eat.png"
      }
    ],
    [
      {
        "timeRequirement" : 86,
        "notPriorActions" : [
          "20"
        ]
      }, {
        "actionName" : "20",
        "narration" : "But your friends are insistent. You picked last time and it was all just salads, they say they need “real food”.",
        "img" : "phoneup.png"
      }
    ],
    [
      {
        "timeRequirement" : 91,
        "notPriorActions" : [
          "21"
        ]
      }, {
        "actionName" : "21",
        "narration" : "You wish you didn’t need real food.",
        "img" : "phoneup but sad.png"
      }
    ],
    [
      {
        "timeRequirement" : 95,
        "notPriorActions" : [
          "22"
        ]
      }, {
        "actionName" : "22",
        "narration" : "So, will you go out for dinner?",
        "scene" : "choice"
      }
    ]
 ]
};

scenes[a.sceneName] = a;
