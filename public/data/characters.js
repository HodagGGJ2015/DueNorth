(function() {
  _.extend(window.Stuff, {
    lush: {
      location: 'bar',
      receive: {
        objects: ['booze']
      }
    },
    bartender: {
      location: 'bar',
      receive: {
        objects: ['coin']
      }
    }
  });
}).call(this);
