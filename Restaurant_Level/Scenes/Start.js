var a = {
  "sceneName" : "start",
  "img" : "cleanTable.png",
  "actions" : [
    [
      {
        "notPriorActions" : [
          "intro text"
        ],
        "timeRequirement" : 1
      },
      {
        "narration" : "You’re at dinner with your friends, and you’re not having a great time. The moment you sit down, you feel thrown off. On one had, the anxiety would kill you if you had to eat. On the other, the shame would kill you if your friends found out about your little problem. It’s a difficult game you’re playing",
        "actionName" : "intro text",
        "increments" : {"anxiety" : 1},
      }
   ],

   [
     {
       "notPriorActions" : [
         "waiter arrives"
       ],
       "timeRequirement" : 7
     },
     {
       "narration" : "The waiter has arrived",
       "actionName" : "waiter arrives",
       "scene" : "menus given"
     }
   ]
 ]
};

scenes[a.sceneName] = a;
