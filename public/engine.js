(function() {

  var THEME = 'What do you do now?';

  // matches a variable within a string in the format of ${words}
  var variableRe = /\$\{([\w\.]+)\}/gi;

  // operations to describe how to update objects
  var operations = {
    merge: function(obj, update) {
      return _.extend(obj, update);
    },
    increment: function(obj, update) {
      _.each(update, function(val, key) {
        obj[key] = (obj[key] || 0) + val;
      });
      return obj;
    },
    decrement: function(obj, update) {
      _.each(update, function(val, key) {
        obj[key] = (obj[key] || 0) - val;
      });
      return obj;
    }
  };

  // story data hierarchy
  // name : action : target : operation : data

  // maintains state and processes input and output
  var Engine = window.Engine = function(story) {
    this.story = story; // describes object updates
    this.state = {}; // describes current state

    // run default "init" action on each object
    _.each(this.story, function(object, name) {
      this.state[name] = object.init;
    }, this);

    this.updateLocation(this.state.player.location);
  };

  Engine.prototype.getOutput = function() {
    return {
      image: this.format(this.get('global.image')),
      description: this.format(this.get('global.description')),
      response: this.format(this.get('global.response'))
    };
  };

  Engine.prototype.getLocation = function() {
    return this.state[this.state.player.location];
  };

  Engine.prototype.updateLocation = function(name) {
    var location = this.state[name];
    var visited = location.visited;
    var description = visited ? location.shortDescription : location.fullDescription;
    _.extend(this.state.global, {
      description: description,
      image: location.image,
      response: THEME
    });
    location.visited = true;
    this.state.player.location = name;
  };

  // apply an action to a named object
  // returns success status
  Engine.prototype.apply = function(noun, verb) {
    if (verb == 'go') {
      var location = this.getLocation();
      var nextLocation = location.directions[noun];
      if (nextLocation && this.state[nextLocation]) {
        this.updateLocation(nextLocation);
        return;
      } else {
        this.state.global.response = 'You cannot go to ' + noun + '.';
        return;
      }
    }

    if (verb == 'look' && noun == 'global') {
      var location = this.getLocation();
      this.state.global.description = location.fullDescription;
      return;
    }

    if (verb == 'inventory') {
      var inventory = this.getInventory();
      this.state.global.response = inventory;
      return;
    }

    var obj = this.state[noun];
    if (!obj || obj.location != this.state.player.location) {
      this.state.global.response = 'There is no ' + noun + ' here.'
      return;
    }

    if (verb == 'look') {
      this.state.global.response = obj.fullDescription;
      return;
    }

    var actions = this.story[noun];
    if (!actions) {
      this.state.global.response = 'You cannot do that to ' + noun + '.';
      return;
    }

    var targets = actions[verb];
    if (!targets) {
      this.state.global.response = 'You cannot do that to ' + noun + '.';
      return;
    }

    // XXX: this is messy, yayyyy nested data structures!
    _.each(targets, function(target) {
      _.each(target, function(ops, target) {
        _.each(ops, function(update, operation) {
          var op = operations[operation.slice(1)]; // remove `$`
          if (!op) {
            console.warn('Invalid operation:', operation);
            return;
          }
          this.state[target] = op(this.state[target], update);
        }, this);
      }, this);
    }, this);
  };

  // formats a string, usually a description,
  // replacing variables with their values from state
  Engine.prototype.format = function(description) {
    return description.replace(variableRe, function($0, $1) {
      return this.get($1);
    }.bind(this));
  };

  // given a query like "skunk.description",
  // returns that value from state
  Engine.prototype.get = function(query) {
    return query.split('.').reduce(function(context, part) {
      return context[part];
    }, this.state);
  };

  // advances the story, given a query in the format of "<verb> <noun>"
  Engine.prototype.step = function(query) {
    var parts = query.split(/\s+/gi); // split the query on whitespace
    var verb = parts[0]; // first word
    var noun = parts.slice(1).join(' ') || 'global'; // remaining words or "global"

    this.apply(noun, verb);

    return this.getOutput();
  };

}).call(this);
