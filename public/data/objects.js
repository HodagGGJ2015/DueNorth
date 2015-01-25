(function() {
  _.extend(window.Stuff, {
    booze: {
      location: 'bartender'
    },
    coin: {
      location: '',
      take: {
        response: 'You picked up the coin.'
      }
    },
    artifact: {
      location: 'woods',
      fullDescription: 'There is an unusual artifact on the ground.'
      take: {
        response: 'It was half-buried in the ground. You reach down to pull it out. It’s a weird… artifact of some sort. Whatever it is, I bet your mom would know more about it. You put the artifact in your fanny pack for later.'
      }
    },
    wrench: {
      location: 'parking',
      take: {
        response: 'You picked up the wrench.'
      }
    },
    slots: {
      location: 'bar',
      fullDescription: 'A slot machine lures you in.',
      hit: {
        act: function(args) {
          this.coin.location = 'inventory';
          this.global.response = 'You pick up the coin and put it in your pocket.';
        }
      }
    }
  });
}).call(this);
