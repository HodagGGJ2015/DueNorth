(function() {
  // matches a variable within a string in the format of ${words}
  var variableRe = /\$\{([\w\.]+)\}/gi;

  // maintains state and processes input and output
  var Engine = window.Engine = function(state, actions) {
    this.state = state;
    this.actions = actions;

    this.state.global.names = _.reduce(this.state, function(names, object, name) {
      if (!object.name) {
        console.warn(name, 'has no "name".');
        return names;
      }

      names[object.name.toLowerCase()] = name;
      return names;
    }, {});
  };

  Engine.prototype.serialize = function() {
    return JSON.stringify(this.state);
  };

  Engine.prototype.deserialize = function(state) {
    this.state = _.extend(this.state, JSON.parse(state));
  };

  Engine.prototype.getOutput = function() {
    return {
      description: this.state.global.description,
      response: this.state.global.response,
      location: this.state[this.state.global.location].name,
      image: this.state.global.image,
      success: this.state.global.success
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
    var action = _.find(this.actions, function(action) {
      var args = action.parse(query);

      if (!args) {
        return false;
      }

      action.act.call(this.state, args);
      return true;
    }, this);

    this.state.global.success = !!action;

    if (!action) {
      this.state.global.response = 'Nothing happened.';
    }

    return this.getOutput();
  };

}).call(this);
