window.objects = {
  "booze": {
    "location": "bartender"
  },
  "coin": {
    "location": "",
    "takeable": {
      "response": "You picked up the coin."
    },
    "take": [{
      "coin": {
        "$merge": {
          "location": "player"
        }
      },
      "global": {
        "$merge": {
          "response": "You pick up a shiny coin."
        }
      }
    }]
  },
  "slots": {
    "init": {
      "location": "bar",
      "fullDescription": "A slot machine lures you in."
    },
    "hit": [{
      "coin": {
        "$merge": {
          "location": "bar"
        }
      },
      "slots": {
        "$merge": {
          "fullDescription": "You see a coin."
        }
      },
      "global": {
        "$merge": {
          "response": "The slot machine rattles"
        }
      }
    }]
  }
}
