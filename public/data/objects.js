(function() {
  _.extend(window.Stuff, {
    booze: {
      name: "Drink",
      location: 'bartender',
	  audio: 'boozeSFX'
    },
    slice: {
      name: 'Slice of pizza',
      location: 'pizza',
      give: true,
      fullDescription: "Oh boy, a slice of pizza! Too bad you're not hungry.",
      shortDescription: "Slice of pizza",
      take: {
        response: "You receive a slice of pizza. You're not hungry right now, so you just carefully put it away in your fanny pack.",
      },
      drop: {
        act: function() {
          if (this.global.location == 'giftshop' && !this.clerk.flustered) {
            this.global.response = "<p>You drop the slice of pizza on the floor and quickly hide. Sammy the gift shop clerk smells something funky and makes her way over the pizza.</p><p>“What what WHAT? FILTHY!” she grabs a broom and sweeps the slice out the front door. “EWW!” she pulls out disinfectant wipes and sprays and gets to work on the entire store.</p><p>With Sammy completely distracted with disinfecting the store, you can now free to go south to the back room.</p>";
            this.slice.location = 'giftshop';
            this.clerk.flustered = true;
            this.giftshop.directions = {
              north: "gas",
              west: "motel",
              east: "pizza",
              south: "backroom"
            };
          }
          else {
            this.global.response = "<p>This might not be the best place to drop the pizza.</p>";
          }
        }
      },
      audio: "pizzaSFX"
    },
    shirt: {
      name: 'Shirt (smelly)',
      location: 'motorhome',
      fullDescription: "A shirt that was sprayed by the skunk.",
      shortDescription: "Shirt (smelly)",
      take: {
        response: "You stow away the smelly shirt in your fanny pack. It might come in handy."
      },
      drop: {
        act: function() {
          if (this.global.location == 'giftshop' && !this.clerk.flustered) {
            this.global.response = "<p>You drop the skunk-spray-soaked shirt on the floor and quickly hide. Sammy the gift shop clerk smells something funky and makes her way over the shirt.</p><p>“What what WHAT? FILTHY!” she grabs a broom and sweeps the skunk shirt out the front door. “EWW!” she pulls out disinfectant wipes and sprays and gets to work on the entire store.</p><p>With Sammy completely distracted with disinfecting the store, you can now free to go to south                                  the back room.</p>";
            this.slice.location = 'giftshop';
            this.clerk.flustered = true;
            this.giftshop.directions = {
              north: "gas",
              west: "motel",
              east: "pizza",
              south: "backroomdoor"
            };
          }
          else {
            this.global.response = "<p>This might not be the best place to drop the pizza.</p>";
          }
        }
      },
      audio: "clothSFX"
    },
    strut: {
      name: 'Small Strut',
      fullDescription: '<p>Small flexible piece of metal. It looks a lot like a a lockpick.</p>',
      shortDescription: "<p>Small piece of metal.</p>",
      location: 'campground',
      give: true,
      take: {
        response: '<p>You pick up the strut and put it in your fanny pack.</p>'
      },
      use: {
        act: function() {
          if (this.global.location == 'backroomdoor' && this.clerk.flustered) {
            this.global.response = "<p>You pick the lock and can now successfully go south through the door.</p>";
            this.backroomdoor.directions = {
              north: "giftshop",
              south: "backroomdoor"
            };
          }
          else {
            this.global.response = "<p>This might not be the best place to use the strut.</p>";
          }
        }
      }
    },
    coin: {
      name: 'Coin',
      fullDescription: '<p>A shiny coin glistens on the ground in front of the cigarette machine.</p>',
      shortDescription: "<p>There's a coin in front of the cigarette machine.</p>",
      location: '',
      give: true,
      take: {
        response: '<p>You pick up the coin and put it in your pocket.</p>'
      },
      audio: 'coinSFX'
    },
    artifact: {
      name: 'Artifact',
      location: 'woodsB4',
      give: true,
      fullDescription: 'There is an unusual artifact on the ground.',
      shortDescription: "An artifact protrudes from the ground.",
      take: {
        response: 'It was half-buried in the ground. You reach down to pull it out. It’s a weird… artifact of some sort. Whatever it is, I bet your mom would know more about it. You put the artifact in your fanny pack for later.',
        act: function(args) {
          artifactdesc = "<p>You see an over-priced trinket that looks just like your artifact</p>";
          this.giftshop.fullDescription +=  artifactdesc;
          this.giftshop.shortDescription +=  artifactdesc;
        }
      },
	  audio: 'artifactSFX'
    },
    diploma: {
      name: "Diploma",
      location: 'taxidermist',
      fullDescription: '<p>It’s hard to read the entire diploma from where you standing, but all you can manage to read is:</p><p>“Lucas Toby” and “Doctor of Veterinary Medicine”.</p><p>Wait, is this guy a veterinarian?</p>',
      shortDescription: "A diploma collects dust on the wall.",
	  audio: "diplomaSFX"
	  },
    wrench: {
      name: 'Wrench',
      location: 'parking',
      fullDescription: 'There is a wrench on the ground by the bikers.',
      shortDescription: 'A wrench.',
      take: {
        act: function(args) {
          this.wrench.fullDescription = this.wrench.shortDescription;
          this.global.response = '<p>You see the wrench on the ground. Hmm, that may come in handy later. You, Emma and Charlie slowly creep up towards the backside of the bikers. You don’t think they notice you when suddenly...</p><p>“HEY YOU KIDS!” shouts one of the bikers. The mass of burly men turns in your direction. Busted!</p><p>“Is that your dog?”</p><p>“... yes?”</p><p>“Can I pet it?”</p><p>“.... sure...”</p><p>All of the bikers make make a bee-line towards Charlie and start petting his head, rubbing his belly, making baby noises to him, the works. The collie is having the time of his life, and the bikers cannot get enough of him. While the bikers are completely distracted by Charlie’s doggy charm, you pick up the wrench and put it in your backpack.</p>';
        }
      },
	    audio: 'wrenchSFX'
    },
    machine: {
      name: 'Cigarette Machine',
      location: 'bar',
      fullDescription: '<p>A cigarette machine stands in the corner with a sign that reads “out of order”.</p><p>There is a coin stuck in the coin slot.</p>',
      shortDescription: "<p>Cigarette machine sits broken in the corner.</p><p>There is something in the coin slot</p>",
      hit: {
        act: function(args) {
          this.coin.location = 'bar';
          this.global.response = '<p>You give the cigarette machine a good nudge and something falls on to the ground.</p>';
        }
      },
	  audio: 'slotsSFX'
    }
  });
}).call(this);
