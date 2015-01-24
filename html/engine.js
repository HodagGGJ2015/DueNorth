(function() {
  // change player location
  // add to inventory (change object location)
  // initial state
  // increment, decrement, merge, push, pop, remove, add, set
  // description updates
  // random!
  // current scene
  // look at scene what actions and objects are available, description and image
  // look: print description
  // help

  // "$global": {
  //   "actions": {
  //     "help": {
  //     }
  //   }
  // }

  function parseInput(input) {
    var parts = input.split(/\s+/gi);
    return {
      verb: parts[0],
      noun: parts.slice(1).join(' ')
    };
  }

  var Engine = window.Engine = function() {
    this.description = '';
    this.image = '';
  };

  Engine.prototype.processInput = function(input) {
    var parts = parseInput(input);
    this.description = 'You did ' + parts.verb + ' on ' + parts.noun;
    this.image = '';
  };

}).call(this);
