(function() {
  _.extend(window.Stuff, {
    mom: {
      name: 'Mom',
      location: 'motorhome',
      fullDescription: "<p>Renowned Archeologist Professor at the University of Illinois, you give her an old arrowhead from your backyard and she'll write you a novel on it.</p>",
      receive: {
        objects: ['arrowhead']
      },
      talk: {
        act: function(args) {
          this.global.response = 'Interesting...';
        }
      },
      receive: {
        act: function(args) {
        }
      }
    },
    sister: {
      name: 'Emma',
      location: 'motorhome',
      fullDescription: "<p>It's very rare that sisters can get along so well, but given how absent-minded your parents can be, you've formed a pretty strong alliance. Emma's only in 6th grade, but sharp as a whip.</p>",
      receive: {
        objects: ['arrowhead']
      },
      talk: {
        act: function(args) {
          this.global.response = 'Oh cool!';
        }
      },
      receive: {
        act: function(args) {
        }
      }
    },
    dog: {
      name: 'Charlie',
      location: 'parking',
      fullDescription: "<p>Charlie is the spitting image of Lassie the dog. Loyal, reliable, and totally lovable, Charlie is a very crucial member of the Caldwell family unit. </p>",
      receive: {
        objects: ['bone', 'bait', 'skunk']
      },
      stop: {
        act: function(args) {
          this.dog.shortDescription = "";

          var location = this.end;

          this.global.description = location.fullDescription;
          this.global.image = location.image;
          this.global.audio = location.audio;
          this.global.response = 'THE END';
       }
      },
      talk: {
        act: function(args) {
          this.global.response = 'Woof Woof!';
        }
      },
      receive: {
        act: function(args) {
        }
      }
    },
    clerk: {
      name: 'Sammy',
      location: 'giftshop',
      fullDescription: "<p>Sammy owns the gift shop, which is easily the cleanest business in the whole town. Sammy herself, however, is a completely different story. Absolutely neurotic and germaphobic to boot, like an over-caffeinated hawk Sammy keeps a watchful eye over her countless trinkets. I wouldn't say she's friendly, but she is polite. She is, after all, running a tourist trap.</p>",
      receive: {
        objects: ['shirt', 'pizza']
      },
      talk: {
        act: function(args) {
          this.global.response = 'What is that smell?';
        }
      },
      receive: {
        act: function(args) {
        }
      }
    },
    bartender: {
      name: 'Big Sal',
      location: 'bar',
      fullDescription: "<p>Big Sal was probably a boulder in her past life. She looks tough as nails, with a voice that sounds like it's been soaked in whiskey and old cigarette butts for years. She sports a flannel vest, Doc Marten boots, and has her hair tied back in a bun. From the pictures on the walls, it's clear she's been in this town for her whole life, but something about her demeanor says that she's not keen to visitors playing 20 questions in her bar.</p>",
      receive: {
        objects: ['coin']
      },
      ask: {
        lush: "He's already had enough to drink.",
        slots: function() {
          this.global.response = "That old machine hasn't been used in years.";
        }
      },
      talk: {
        response: 'Grunt'
      }
    },
    lush: {
      name: 'Delbert',
      location: 'bar',
      fullDescription: "<p>Every town has a lush, and this town's lush is named Delbert. Skinny-looking fella wearing a high school varsity jacket over some navy blue long johns and a raccoon tail hat to complement his black bushy beard. There's not much to say about Delbert, but give him enough to drink and he'll tell you everything you want to know, and then some!</p><p>&quot;Hey kids.. ya get me somethin' ta drink and I'll let ya in on a little secret..&quot;</p>",
      receive: {
        objects: ['booze']
      },
      talk: {
        act: function(args) {
          this.global.response = 'Woo!';
        }
      },
      receive: {
        act: function(args) {
        }
      }
    },
    attendent: {
      name: 'Paul',
      location: 'campground',
      fullDescription: "<p>At almost 7 feet tall and with biceps bigger than your little sister Emma's head, Paul looks like he should be cutting down trees by the dozens. Instead, he tends to a small campground just outside of town. Friendly guy though, and more than happy to tell you about these woods. It a bit weird that he always seems to have an axe resting on his shoulder, but otherwise real real friendly.</p>",
      talk: {
        act: function(args) {
          this.global.response = 'Bon Yenne!';
        }
      },
      receive: {
        act: function(args) {
        }
      }
    },
    receptionist: {
      name: 'Dorris',
      location: 'motel',
      fullDescription: "<p>The totem of hospitality, Dorris is the head of this motel and is almost a polar opposite of her sister, Big Sal, at the bar in terms of friendliness and courtesy. All of her sentences have a happy sing-songy chime to it, but something about her seems… off. You can't quite put your finger on it, but it's almost as if she's too friendly.</p><p>&quot;Ah, you's the city folks I been hearing about.&quot;</p>",
      receive: {
        objects: ['key']
      },
      talk: {
        act: function(args) {
          this.global.response = "Hi You's!";
        }
      },
      receive: {
        act: function(args) {
        }
      }
    },
    ranger: {
      name: 'Danny',
      location: 'arcade',
      fullDescription: "<p>Though technically not a real police officer, Danny is the closest thing you'll get in this town. Very whimsical and easy-going, but not too observant. His naivete would be detrimental anywhere else, but this is a good ol' simple town with none of those big-city problems. If Danny had once vice, it would be the town's arcade/pizza joint.</p>",
      receive: {
        objects: ['coin']
      },
      talk: {
        act: function(args) {
          this.global.response = "Huh?";
        }
      },
      receive: {
        act: function(args) {
        }
      }
    },
    doctor: {
      name: 'Dr. Toby',
      location: 'taxidermy',
      fullDescription: "<p>Being surrounded by dead and stuffed animals, you find it really hard to believe that Dr. Toby is a real doctor, but the dusty diploma hung up behind his desk would say otherwise. His profession is medical, but his passion is clearly taxidermy. Despite his choice in interior decorating, he's no joker and seems to really know his stuff.</p>",
      receive: {
        objects: ['antler']
      },
      talk: {
        act: function(args) {
          this.global.response = "OOh. This will look great on the wall.";
        }
      },
      receive: {
        act: function(args) {
        }
      }
    },
    skunk: {
      name: 'Skunk',
      location: 'parking',
      fullDescription: "<p>It's a skunk! Better keep your distance, don't wanna startle it.</p>",
      image: "images/skunk.png",
      receive: {
        objects: ['dog']
      },
      talk: {
        act: function(args) {
          this.global.response = "Sniff. Sniff.";
        }
      },
      receive: {
        act: function(args) {
        }
      }
    },
    hodag: {
      name: 'Hodag',
      location: 'woods',
      fullDescription: "<p>Holy crap what is that? Part dinosaur, part frog?!?!</p><p>This creature has the grinning face of a giant elephant, the head of a frog, the back of a dinosaur, thick short legs set off by huge claws and (of course) a long tail with spears at the end</p>",
      receive: {
        objects: ['music']
      },
      talk: {
        act: function(args) {
          this.global.response = "Sniff. Sniff.";
        }
      },
      receive: {
        act: function(args) {
        }
      }
    }
  });
}).call(this);
