(function() {
  _.extend(window.Stuff, {
    booze: {
      location: "bartender",
      give: {
      }
    },
    coin: {
      location: "",
      take: {
        response: "You picked up the coin."
      },
      give: {
      }
    },
    slots: {
      location: "bar",
      fullDescription: "A slot machine lures you in.",
      hit: {
        action: function(args) {
          // coin: {
          //   "$merge": {
          //     location: "bar"
          //   }
          // },
          // slots: {
          //   "$merge": {
          //     fullDescription: "You see a coin."
          //   }
          // },
          // global: {
          //   "$merge": {
          //     response: "The slot machine rattles"
          //   }
          // }
        }
      }
    }
  });
}).call(this);
