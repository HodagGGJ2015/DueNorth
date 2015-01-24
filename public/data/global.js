window.global = {
  "global": {
    "init": {
      "name": "Welcome to Wisconsin",
      "description": "${global.name}",
      "response": "What would you like to do?",
      "image": ""
    },
    "help": [{
      "global": {
        "$merge": {
          "response": "Welcome to Wisconsin. You can look, go <direction> and stuff..."
        }
      }
    }]
  },
  "player": {
    "init": {
      "name": "Jim",
      "location": "motorhome"
    }
  }
}
