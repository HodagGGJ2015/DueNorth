(function() {
  _.extend(window.Stuff, {
    global: {
      description: 'Welcome to Wisconsin',
  	  audio: "",
      response: 'What do you do now?',
      location: 'introa',
      image: '',
      help: "<h3>Welcome to Wisconsin!</h3><p>Wisconsin is full adventure, but navigating the possibilities doesn't have to be a chore:</p><p>look, look at [thing]: <i>Look around you or at the thing</i><br>go [up,down,left,right,north,south,east,west]: <i>Go somewhere new</i><br>pack, fannypack, inventory, stuff: <i>Check what's in your fanny pack</i><br>take, get [thing]: <i>Pick up the thing</i><br>talk to [person]: <i>Talk to a real life person</i><br>save, load, restart: <i>save/load your game or start over entirely</i></p><h4>And many more! Experiment!</h4>"
    }
  });
}).call(this);
