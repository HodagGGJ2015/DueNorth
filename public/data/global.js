(function() {
  _.extend(window.Stuff, {
    global: {
      name: 'Welcome to Wisconsin',
      description: '${global.name}',
      response: 'What would you like to do?',
      image: ''
    },
    player: {
      name: 'Jim',
      location: 'motorhome'
    }
  });
}).call(this);
