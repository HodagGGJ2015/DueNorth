(function() {
  var STORAGE_STATE_NAME = 'engineState';

  // matches a variable within a string in the format of ${words}
  var FORMAT_VAR_RE = /\$\{([\w\.]+)\}/gi;

  // maintains state and processes input and output
  var Engine = window.Engine = function(state, actions, storage) {
    this.state = state;
    this.actions = actions;

    this.storage = storage;

    this.state.global.names = _.reduce(this.state, function(names, object, name) {
      if (name != 'global') {
        if (object.name) {
          names[object.name.toLowerCase()] = name;
        } else {
          console.warn(name, 'has no "name".');
        }
      }
      return names;
    }, {});

    // save the unmodified state to reset back to
    this.vanilla_state = _.cloneDeep(this.state);
  };

  Engine.prototype.saveState = function() {
    this.storage.setItem(STORAGE_STATE_NAME, this.serialize());
  }

  Engine.prototype.loadState = function() {
    this.deserialize(this.storage.getItem(STORAGE_STATE_NAME));
  }

  Engine.prototype.clearState = function() {
    this.storage.removeItem(STORAGE_STATE_NAME);
  }

  Engine.prototype.serialize = function() {
    return JSON.stringify(this.state);
  };

  Engine.prototype.deserialize = function(state) {
    this.state = _.extend(this.state, JSON.parse(state));
  };

  Engine.prototype.restart = function() {
    this.state = this.vanilla_state;
  }

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
    return description.replace(FORMAT_VAR_RE, function($0, $1) {
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
