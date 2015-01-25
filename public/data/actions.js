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
          /^inventory$/i,
          /^inv$/i,
          /^stuff$/i,
          /^(?:fanny|back)(?:\s*|-)pack$/i,
          /^i$/i
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

        this.global.response = '<h3>Your Fanny Pack</h3>';
        if (_.size(inventory) > 0) {
          this.global.response += _.keys(inventory).join(', ');
        } else {
          this.global.response += 'Empty.';
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

    		if (object.audio) {
          playAudio(object.audio);
        }

        if (object.take.act) {
          object.take.act.call(this, args);
        } else if (object.take.response) {
          global.response = object.take.response;
        } else {
          global.response = 'You took the ' + args.object;
        }
      }
    },
    drop: {
      parse: function(input) {
        return match(input, [
          /^drop\s+(.+)$/i,
          /^throw\s+(.+)$/i
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
          global.response = "You don't have " + args.object;
          return;
        }

        if (!object.drop) {
          global.response = "Don't drop that, you might need it!";
          return;
        }

        if (object.audio) {
          playAudio(object.audio);
        }

        if (object.drop.act) {
          object.drop.act.call(this, args);
        } else {
          global.response = 'This might not be the right place to drop ' + args.object;
        }
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

        if (nextLocation == "introb") {
        	playAudio("screamSFX");
          
        }
		
		if (nextLocation != "introa") {
			audio['barkLoop'].stop();
		}

        if (nextLocation == "hostilehodag") {
          playAudio("hodagSFX");
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
            }
          }
        }, this);

        nextLocationObj.visited = true;
        this.global.location = nextLocation;
      }
    },
    sing: {
      parse: function(input) {
        return match(input, [
          /^sing\s+(.+)$/i
        ], function(matches) {
          return {
            object: matches[1]
          };
        });
      },
      act: function(args) {
        var object = get(this, args.object);
        if (!object) {
          this.global.response = 'You cannot sing to nothing...';
          return;
        }

        if (!object.stop || !object.stop.act) {
          this.global.response = 'You can\'t sing that.';
          return;
        }

        object.stop.act.call(this, args);
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
          /^hit\s+(.+)$/i,
          /^bump\s+(.+)$/i,
          /^push\s+(.+)$/i,
          /^shake\s+(.+)$/i
        ], function(matches) {
          return {
            object: matches[1]
          };
        });
      },
      act: function(args) {
        console.log('hit', args);

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
          /^give\s+(.+)\s+to\s+(.+)$/i,
          /^share\s+(.+)\s+with\s+(.+)$/i,
          /^pass\s+(.+)\s+to\s+(.+)$/i
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
          global.response = '<p>' + args.object + ' does not exist.</p>';
          return;
        }

        if (object.location != 'inventory') {
          global.response = '<p>You don\'t have ' + args.object + '</p>';
          return;
        }

        if (!recipient) {
          global.response = '<p>There is no ' + args.recipient + '</p>';
          return;
        }

        if (!object.give) {
          global.response = '<p>Cannot give ' + args.object + '</p>';
          return;
        }

        if (!recipient.receive || !_.contains(recipient.receive.objects, this.global.names[args.object] || args.object)) {
          global.response = '<p>Cannot give ' + args.object + ' ' + args.recipient + '</p>';
          return;
        }

        object.location = args.recipient;

        if (recipient.receive.response) {
          global.response = recipient.receive.response;
        } else if (recipient.receive.act) {
          global.response = recipient.receive.act.call(this, args);
        } else {
          global.response = '<p>You gave the ' + args.object + ' to ' + args.recipient + '</p>';
        }
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
          /^(?:hello|hi)\s+(.+)$/i
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
            }
          }, this);

    	  this.global.audio = location.audio;
          this.global.response = 'You look around.';

		  if (playerLocation == "introa") playAudio("barkLoop")
        }
      }
    },
    save: {
      parse: function(input) {
        return match(input, [
          /^(save)$/i,
        ], function(matches) {
          return {
            save_text: matches[1]
          };
        });
      },
      act: function(args) {
        args.engine.saveState();
        this.global.response = 'Game saved!';
      }
    },
    load: {
      parse: function(input) {
        return match(input, [
          /^(load|reset|die)$/i,
        ], function(matches) {
          return {
            reset_text: matches[1]
          };
        });
      },
      act: function(args) {
        args.engine.loadState();
      }
    },
    restart: {
      parse: function(input) {
        return match(input, [
          /^(restart|apocalypse)$/i,
        ], function(matches) {
          return {
            restart_text: matches[1]
          };
        });
      },
      act: function(args) {
        args.engine.restart();
        args.engine.act('look');
      }
    }
  });
}).call(this);
