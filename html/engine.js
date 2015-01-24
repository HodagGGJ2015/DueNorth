(function() {

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
