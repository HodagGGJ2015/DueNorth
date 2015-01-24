(function() {

  // matches a variable within a string in the format of ${words}
  var variableRe = /\$\{([\w\.]+)\}/gi;

  // operations to describe how to update objects
  var operations = {
    set: function(obj, update) {
      return update;
    },
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
      this.apply(name, 'init');
    }, this);
  };

  // apply an action to a named object
  // returns success status
  Engine.prototype.apply = function(name, action) {
    var obj = this.story[name];
    if (!obj) {
      return false;
    }

    var targets = obj[action];
    if (!targets) {
      return false;
    }

    // XXX: this is messy, yayyyy nested data structures!
    _.each(targets, function(target) {
      _.each(target, function(ops, target) {
        _.each(ops, function(update, operation) {
          var op = operations[operation.slice(1)]; // remove `$`
          if (!op) {
            console.warn('Invalid operation:', operation);
            return false;
          }
          this.state[target] = op(this.state[target], update);
        }, this);
      }, this);
    }, this);

    return true;
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

    var success = this.apply(noun, verb);
    if (!success) {
      // apply the invalid action
      this.apply('global', 'invalid');
    }

    return {
      image: this.format(this.get('global.image')),
      description: this.format(this.get('global.description')),
      response: this.format(this.get('global.response'))
    };
  };

}).call(this);
