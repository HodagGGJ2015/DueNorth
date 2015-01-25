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
          /^take\s+(.+)$/i
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

        if (object.image) {
          this.global.image = object.image;
        } else {
          var location = this[this.global.location];
          this.global.image = location.image;
        }

        object.location = 'inventory';
        global.response = object.take.response || 'You took the ' + args.object;
      }
    },
    go: {
      parse: function(input) {
        return match(input, [
          /^(?:go|move)\s+(north|south|east|west)$/i
        ], function(matches) {
          return {
            direction: matches[1]
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
		
		audio[global.audio].stop();
		
	    if (!audio[nextLocationObj.audio].isLoaded) 
	  	  loadSound(nextLocationObj.audio, audio[nextLocationObj.audio], true);
	    else
		  audio[nextLocationObj.audio].play();
		
		global.audio = nextLocationObj.audio;
		
        global.description = nextLocationObj.visited ? nextLocationObj.shortDescription : nextLocationObj.fullDescription;
        global.image = nextLocationObj.image;
        global.response = 'What do you do now?';
		
        nextLocationObj.visited = true;
        this.global.location = nextLocation;
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

        if (object.image) {
          this.global.image = object.image;
        } else {
          var location = this[this.global.location];
          this.global.image = location.image;
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

        if (recipient.image) {
          this.global.image = recipient.image;
        } else {
          var location = this[this.global.location];
          this.global.image = location.image;
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

        if (person.image) {
          this.global.image = person.image;
        } else {
          var location = this[this.global.location];
          this.global.image = location.image;
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

        if (object.image) {
          this.global.image = object.image;
        } else {
          var location = this[this.global.location];
          this.global.image = location.image;
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
		  this.global.audio = location.audio;
		  		  
		  if (!audio[location.audio].isLoaded) 
		  	  loadSound(location.audio, audio[location.audio], true);
		  else
			  audio[location.audio].play();
		  
        }
      }
    }
  });
}).call(this);
