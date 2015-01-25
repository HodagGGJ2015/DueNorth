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
