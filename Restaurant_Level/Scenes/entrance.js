var a = {
  "sceneName" : "Entrance",
  "img" : "restaurant_entrance.jpg",
  "actions" : [
    [
      {
        "matchingWords" : [
          "menu", "look", "get menu", "grab menu"
        ]
      }, 
      "Look at Menu"
   ],
    [
      {
        "notPriorActions" : [
          "Look at Menu"
        ],
        "timeRequirement" : 10
      }, {
        "narration" : "Your friends..." 
      }
    ]
  ]

};

scenes[a.sceneName] = a;