var a = {
  "sceneName" : "Start",
  "img" : "cleanTable.png",
  "actions" : [
    [
      {
        "notPriorActions" : [
          "Intro Text"
        ],
        "timeRequirement" : 1
      },
      {
        "narration" : "You’re at dinner with your friends, and you’re not having a great time. The moment you sit down, you feel thrown off. On one had, the anxiety would kill you if you had to eat. On the other, the shame would kill you if your friends found out about your little problem. It’s a difficult game you’re playing",
        "actionName" : "Intro Text",
        "increments" : {"anxiety" : 1},
      }
   ],

   [
     {
       "notPriorActions" : [
         "Waiter Arrives"
       ],
       "timeRequirement" : 7
     },
     {
       "narration" : "The waiter has arrived",
       "actionName" : "Waiter Arrives",
       "scene" : "MenusGiven"
     }
   ]
 ]
};

scenes[a.sceneName] = a;
