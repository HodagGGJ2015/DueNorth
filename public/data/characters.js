(function() {
  _.extend(window.Stuff, {
    lush: {
      name: 'Delbert',
      location: 'bar',
      fullDescription: 'Every town has a lush...',
      receive: {
        objects: ['booze']
      },
      talk: {
        act: function(args) {
          this.global.response = 'Woo!';
        }
      },
      receive: {
        act: function(args) {
        }
      }
    },
    bartender: {
      name: 'Big Sal',
      location: 'bar',
      fullDescription: 'Big Sal was probably a boulder in her past life.',
      receive: {
        objects: ['coin']
      },
      ask: {
        lush: "He's already had enough to drink.",
        slots: function() {
          this.global.response = "That old machine hasn't been used in years.";
        }
      },
      talk: {
        response: 'Hello...'
      }
    }
  });
}).call(this);
