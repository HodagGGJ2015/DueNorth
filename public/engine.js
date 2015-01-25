(function() {
  // matches a variable within a string in the format of ${words}
  var variableRe = /\$\{([\w\.]+)\}/gi;

  // maintains state and processes input and output
  var Engine = window.Engine = function(state, actions) {
    this.state = state;
    this.actions = actions;
  };

  Engine.prototype.getOutput = function() {
    return {
      description: this.format(this.state.global.description),
      response: this.format(this.state.global.response),
      image: this.format(this.state.global.image)
    };
  };

  // formats a string, usually a description,
  // replacing variables with their values from state
  Engine.prototype.format = function(description) {
    return description.replace(variableRe, function($0, $1) {
      return $1.split('.').reduce(function(context, part) {
        return context[part];
      }, this.state);
    }.bind(this));
  };

  // advances the story, given a query in the format of "<verb> <noun>"
  Engine.prototype.act = function(query) {
    _.find(this.actions, function(action) {
      var args = action.parse(query);

      if (!args) {
        return false;
      }

      action.act.call(this, args);
      return true;
    }, this);

    return this.getOutput();
  };

}).call(this);
