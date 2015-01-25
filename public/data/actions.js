(function() {
  function match(input, exprs, processor) {
    for (var i = 0; i < exprs.length; i++) {
      var groups = input.match(exprs[i]);
      if (groups) {
        return processor(groups);
      }
    }
  }

  window.Actions = _.extend({}, {
    inventory: {
      parse: function(input) {
        return input == 'inventory';
      },
      act: function(args) {
        // TODO:
        if (verb == 'inventory') {
          var inventory = this.getInventory();
          this.state.global.response = inventory;
          return;
        }
      }
    },
    take: {
      parse: function(input) {
        return match(input, [
          /^take\s+(.+)$/i
        ], function(matches) {
          return {
            object: matches[1]
          };
        });
      },
      act: function(args) {
        var global = this.state.global;
        var object = this.state[args.object];
        if (!object) {
          global.response = 'There is no ' + args.object;
          return;
        }

        if (!object.take) {
          global.response = 'Cannot take ' + args.object;
          return;
        }

        object.location = 'inventory';
        global.response = object.take.response || 'You took the ' + args.object;
      }
    },
    go: {
      parse: function(input) {
        return match(input, [
          /^go\s+(north|south|east|west)$/i
        ], function(matches) {
          return {
            direction: matches[1]
          };
        });
      },
      act: function(args) {
        var location = this.state[this.state.player.location];
        var global = this.state.global;

        var nextLocation = location.directions[args.direction];
        if (!nextLocation) {
          global.response = 'Cannot go ' + args.location;
          return;
        }

        var nextLocationObj = this.state[nextLocation];
        if (!nextLocationObj) {
          global.response = 'Cannot go ' + args.location;
          return;
        }

        global.description = nextLocationObj ? nextLocationObj.shortDescription : nextLocationObj.fullDescription;
        global.image = nextLocationObj.image;
        global.response = 'What do you do now?';

        nextLocationObj.visited = true;
        this.state.player.location = nextLocation;
      }
    },
    give: {
      parse: function(input) {
        return match(input, [
          /^give\s+(.+)\s+to\s+(.+)$/i
        ], function(matches) {
          return {
            object: matches[1],
            recipient: matches[2]
          };
        });
      },
      act: function(args) {
        var global = this.state.global;
        var object = this.state[args.object];
        var recipient = this.state[args.recipient];

        if (!object) {
          global.response = 'There is no ' + args.object;
          return;
        }

        if (!recipient) {
          global.response = 'There is no ' + args.recipient;
          return;
        }

        if (!object.give) {
          global.response = 'Cannot give ' + args.object;
          return;
        }

        if (!recipient.receive && _.contains(recipient.receive.objects, args.object)) {
          global.response = args.recipient + ' cannot receive ' + args.object;
          return;
        }

        object.location = args.recipient;
        global.response = object.take.response || 'You gave the ' + args.object + ' to ' + args.recipient;
      }
    },
    talk: {
      parse: function(input) {
        return match(input, [
          /^talk\s+to\s+(.+)$/i
        ], function(matches) {
          return {
            person: matches[1]
          };
        });
      },
      act: function(args) {
      }
    },
    look: {
      parse: function(input) {
        return match(input, [
          /^examine\s+at\s+(.+)$/i,
          /^examine$/i,
          /^look\s+at\s+(.+)$/i,
          /^look$/i
        ], function(matches) {
          return {
            object: matches[1]
          };
        });
      },
      act: function(args) {
        if (args.object) {
          var object = this.state[args.object];
          if (!object) {
            this.state.global.response = 'Cannot see ' + args.object;
            return;
          }
          this.state.global.image = object.image;
          this.state.global.response = object.fullDescription;
        } else {
          var location = this.state[this.state.player.location];
          this.state.global.image = location.image;
          this.state.global.description = location.fullDescription;
        }
      }
    }
  });
}).call(this);
