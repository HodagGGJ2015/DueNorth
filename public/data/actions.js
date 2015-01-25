(function() {
  function match(input, exprs, processor) {
    for (var i = 0; i < exprs.length; i++) {
      var groups = input.match(exprs[i]);
      if (groups) {
        return processor(groups);
      }
    }
  }

  function get(state, name) {
    name = name.toLowerCase();
    return state[state.global.names[name] || name];
  }

  window.Actions = _.extend({}, {
    inventory: {
      parse: function(input) {
        return match(input, [
          /^inventory$/i
        ], function(matches) {
          return true;
        });
      },
      act: function(args) {
        var inventory = _.reduce(this, function(inventory, obj, name) {
          if (obj.location == 'inventory') {
            inventory[name] = true;
          }
          return inventory;
        }, {});

        if (_.size(inventory) > 0) {
          this.global.response = _.keys(inventory).join(', ');
        } else {
          this.global.response = 'You have nothing.';
        }
      }
    },
    take: {
      parse: function(input) {
        return match(input, [
          /^take\s+(.+)$/i,
          /^pickup\s+(.+)$/i,
          /^grab\s+(.+)$/i,
          /^get\s+(.+)$/i
        ], function(matches) {
          return {
            object: matches[1]
          };
        });
      },
      act: function(args) {
        var global = this.global;
        var object = get(this, args.object);
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
          /^(?:go|move)\s+(north|south|east|west)$/i,
          /^(?:go|move)\s+(up|down|right|left|back|front)$/i

        ], function(matches) {
          var directions = {
            up: "north",
            down: "south",
            right: "east",
            left: "west",
            back: "south",
            front: "north"
          };
          return {
            direction: directions[matches[1]] || matches[1]
          };
        });
      },
      act: function(args) {
        var location = this[this.global.location];
        var global = this.global;

        var nextLocation = location.directions[args.direction];
        if (!nextLocation) {
          global.response = 'There is nothing ' + args.direction + '.';
          return;
        }

        var nextLocationObj = this[nextLocation];
        if (!nextLocationObj) {
          console.warn('Missing location:', nextLocation, 'from', this.global.location);
          global.response = 'Cannot go ' + args.direction + '.';
          return;
        }

	     	if (audio[global.audio].isLoaded) audio[global.audio].stop();

  	    if (!audio[nextLocationObj.audio].isLoaded) {
	  	    loadSound(nextLocationObj.audio, audio[nextLocationObj.audio], true);
        } else {
  		    audio[nextLocationObj.audio].play();
        }

    		global.audio = nextLocationObj.audio;

        global.description = nextLocationObj.visited ? nextLocationObj.shortDescription : nextLocationObj.fullDescription;
        global.image = nextLocationObj.image;
        global.response = 'You traveled ' + args.direction;

        _.each(this, function(object, key) {
          if (key != 'global' && object.location == nextLocation) {
            if (nextLocationObj.visited) {
              if (object.shortDescription) {
                this.global.description += '<h3>' + object.name + '</h3>';
                this.global.description += object.shortDescription;
              }
            } else {
              this.global.description += '<h3>' + object.name + '</h3>';
              this.global.description += object.fullDescription;
              if (object.shortDescription) {
                this.global.description += object.shortDescription;
              }
            }
          }
        }, this);

        nextLocationObj.visited = true;
        this.global.location = nextLocation;
      }
    },
    stop: {
      parse: function(input) {
        return match(input, [
          /^stop\s+(.+)$/i
        ], function(matches) {
          return {
            object: matches[1]
          };
        });
      },
      act: function(args) {
        var object = get(this, args.object);
        if (!object) {
          this.global.response = 'You cannot stop nothing...';
          return;
        }

        if (!object.stop || !object.stop.act) {
          this.global.response = 'You can\'t stop that.';
          return;
        }

        object.stop.act.call(this, args);
      }
    },
    hit: {
      parse: function(input) {
        return match(input, [
          /^hit\s+(.+)$/i
        ], function(matches) {
          return {
            object: matches[1]
          };
        });
      },
      act: function(args) {
        var object = get(this, args.object);
        if (!object) {
          global.response = 'You cannot hit nothing...';
          return;
        }

        if (!object.hit || !object.hit.act) {
          global.response = 'That\' not very nice.';
          return;
        }

        object.hit.act.call(this, args);
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
        var global = this.global;
        var object = get(this, args.object);
        var recipient = get(this, args.recipient);

        if (!object) {
          global.response = 'You don\'t have ' + args.object;
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
    ask: {
      parse: function(input) {
        return match(input, [
          /^ask\s+(.+)\s+about\s+(.+)$/i
        ], function(matches) {
          return {
            person: matches[1],
            topic: matches[2]
          };
        });
      },
      act: function(args) {
        var person = get(this, args.person);
        var topic = get(this, args.topic);

        if (!person || !person.ask) {
          this.global.response = 'You\'re talking to yourself.'
          return;
        }

        var topicResponse = person.ask[args.topic];
        if (topicResponse) {
          if (_.isString(topicResponse)) {
            this.global.response = topicResponse;
          } else if (_.isFunction(topicResponse)) {
            topicResponse.call(this, args);
          }
        } else {
          this.global.response = args.person + ' doesn\'t know what you\'re talking about';
        }
      }
    },
    help: {
      parse: function(input) {
        return match(input, [
          /^help$/i
        ], function(matches) {
          return {
            person: matches[1],
            topic: matches[2]
          };
        });
      },
      act: function(args) {
        this.global.response = this.global.help;
      }
    },
    talk: {
      parse: function(input) {
        return match(input, [
          /^talk\s+(?:to\s+)?(.+)$/i,
          /^hello\s+(.+)$/i
        ], function(matches) {
          return {
            object: matches[1]
          };
        });
      },
      act: function(args) {
        var object = get(this, args.object);
        if (!object) {
          this.global.response = 'There is nothing by that name to talk to.'
          return;
        }

        if (object.talk && object.talk.response) {
          this.global.response = object.talk.response;
          return;
        }

        if (object.talk && object.talk.act) {
          object.talk.act.call(this, args);
          return;
        }

        this.global.response = 'You say hello to ' + args.object + '.';
      }
    },
    look: {
      parse: function(input) {
        return match(input, [
          /^examine\s+at\s+(.+)$/i,
          /^examine$/i,
          /^look\s+(?:at\s+)?(.+)$/i,
          /^look$/i
        ], function(matches) {
          return {
            object: matches[1]
          };
        });
      },
      act: function(args) {
        if (args.object) {
          var object = get(this, args.object);
          if (!object) {
            this.global.response = 'Cannot see ' + args.object;
            return;
          }
          this.global.image = object.image;
          this.global.response = object.fullDescription;
        } else {
          var location = this[this.global.location];
          this.global.image = location.image;
          this.global.description = location.fullDescription;

          var playerLocation = this.global.location;
          _.each(this, function(object, key) {
            if (key != 'global' && object.location == playerLocation) {
              this.global.description += '<h3>' + object.name + '</h3>';
              this.global.description += object.fullDescription;
              if (object.shortDescription) {
                this.global.description += object.shortDescription;
              }
            }
          }, this);

    		  this.global.audio = location.audio;
          this.global.response = 'You look around.';

    		  if (!audio[location.audio].isLoaded) {
            loadSound(location.audio, audio[location.audio], true);
          } else {
            audio[location.audio].play();
          }
        }
      }
    }
  });
}).call(this);
