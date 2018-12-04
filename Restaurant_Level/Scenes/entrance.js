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
          "Look at Menu",
          "Friends are getting worried"
        ],
        "timeRequirement" : 10
      }, {
        "narration" : "Your friends are getting worried...",
        "actionName" : "Friends are getting worried"
      }
    ]

  ]

};

scenes[a.sceneName] = a;
