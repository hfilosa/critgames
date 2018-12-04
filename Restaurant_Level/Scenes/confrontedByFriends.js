var a = {
  "sceneName" : "confronted by friends",
  "img" : "concernedFriends2.png",
  "actions" : [
    [
      {
        "notPriorActions" : [
          "fail to answer"
        ],
        "timeRequirement" : 15
      }, {
        "narration" : "You sit there and refuse to answer. Your friends are extremely concerned.",
        "actionName" : "fail to answer",
        "increments" : {"concern" : 2}
      }
   ],

   [
     {
       "matchingWords" : [
         "no","nope","refuse"
       ]
     }, {
       "narration" : "You refuse. 'You're just going to eat nothing? See, I told you Micah needed help'",
       "actionName" : "answer no",
       "increments" : {"concern" : 2}
     }
   ],

   [
     {
       "matchingWords" : [
         "yes","agree","soup","order","ok"
       ]
     }, {
       "narration" : "You give in and agree to order",
       "actionName" : "answer yes",
       "scene" : {"concern" : 1}
     }
   ]
   
 ]
};

scenes[a.sceneName] = a;
