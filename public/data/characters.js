(function() {
  _.extend(window.Stuff, {
    mom: {
      name: 'Mom',
      location: 'motorhome',
      fullDescription: "<p>Renowned Archeologist Professor at the University of Illinois. Give her an old arrowhead from your backyard and she’ll write you a novel on it. Your mom fell in love with your dad at a teachers conference in Chicago. Your dad was making a total fool of himself, and your mom couldn’t help but find his corny one-liners charming.</p>",
      receive: {
        objects: ['arrowhead']
      },
      talk: {
        response: 'Interesting...'
      }
    },
    dad: {
      name: 'Dad',
      location: 'motorhome',
      fullDescription: "<p>Just because Dad is the Superintendent of Chicago State University doesn’t mean he’s a total nerd. But living in the city and suburbs all of his life doesn’t make him a mountain man either. Your dad fell in love with your mom at a teacher’s conference in Chicago when he wooed her with witty conversation. It was clear that she could not resist dad’s intelligence and handsome charm...</p>",
      receive: {
        objects: ['arrowhead']
      },
      talk: {
        response: 'Interesting...'
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
        response: 'Oh cool!'
      }
    },
    dog: {
      name: 'Charlie',
      location: 'introa',
      fullDescription: "<p>Charlie is the spitting image of Lassie the dog. Loyal, reliable, and totally lovable, Charlie is a very crucial member of the Caldwell family unit.</p><p>Bark! Bark! Bark! Bark!</p>",
      shortDescription: "<p>Bark! Bark! Bark! Bark!</p>",
      receive: {
        objects: ['bone', 'bait', 'skunk']
      },
      stop: {
        act: function(args) {

          var location = this.noskunk;

          this.global.description = location.fullDescription;
          this.global.image = location.image;
          this.global.audio = location.audio;
          this.global.response = 'THE END';
       }
      },
      talk: {
        response: 'Woof woof!'
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
        response: 'What is that smell?'
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
        slots: "That old machine hasn't worked in years."
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
      ask: {
        'Big Sal': function() {
          if (this.booze.location == 'lush') {
            this.global.response = ["<p>“Big Sal... Big Sal might be a mean motherfucker…” mutters Delbert, “But I tell ya, she's nothing compared to her sister at the Motel!”</p>", "<p>“Now you just shut your trap!” Big Sal says to Delbert, pointing her large, meaty index finger right in his face. “There’s nothin wrong with my sister, y’understand?”</p>",, "<p>“The only ones worse than your sis is that gift shop lady and that big lumberjack on the campgrounds right there. Now THOSE two, I don't know what it is, but I know that they up to somethin’!”</p>", "<p>“What are ya, sherlock holmes or sometin?” Big Sal slaps Delbert upside the head. “The only people you know are a certain Jack Daniels and Captain Morgan.”</p>", "<p>Delbert looks like he's about to say something, but then just lets out a big sign and slumps over again.</p>"].join('');
          } else {
            this.global.response = "<p>“I'm not saying anything until I have another drink!”</p>";
          }
        },
        bartender: function() {
          if (this.booze.location == 'lush') {
            this.global.response = ["<p>“Big Sal... Big Sal might be a mean motherfucker…” mutters Delbert, “But I tell ya, she's nothing compared to her sister at the Motel!”</p>", "<p>“Now you just shut your trap!” Big Sal says to Delbert, pointing her large, meaty index finger right in his face. “There’s nothin wrong with my sister, y’understand?”</p>",, "<p>“The only ones worse than your sis is that gift shop lady and that big lumberjack on the campgrounds right there. Now THOSE two, I don't know what it is, but I know that they up to somethin’!”</p>", "<p>“What are ya, sherlock holmes or sometin?” Big Sal slaps Delbert upside the head. “The only people you know are a certain Jack Daniels and Captain Morgan.”</p>", "<p>Delbert looks like he's about to say something, but then just lets out a big sign and slumps over again.</p>"].join('');
          } else {
            this.global.response = "<p>“I'm not saying anything until I have another drink!”</p>";
          }
        },
        hodag: function() {
          if (this.booze.location == 'lush') {
            this.global.response = "<p>“There is no Hodag. And if there was, I betcha it’s someone in a dang costume trying to scare kids. But heck, what do I know?”</p>";
          } else {
            this.global.response = "<p>“I'm not saying anything until I have another drink!”</p>";
          }
        },
        'gift shop': function() {
          if (this.booze.location == 'lush') {
            this.global.response = "<p>“Now that place is doing something shady! They keep coming in with these weird artifacts and trinket, but where are they gettin’ them? I never seen a truck stop by there!”</p>";
          } else {
            this.global.response = "<p>“I'm not saying anything until I have another drink!”</p>";
          }
        },
        giftshop: function() {
          if (this.booze.location == 'lush') {
            this.global.response = "<p>“Now that place is doing something shady! They keep coming in with these weird artifacts and trinket, but where are they gettin’ them? I never seen a truck stop by there!”</p>";
          } else {
            this.global.response = "<p>“I'm not saying anything until I have another drink!”</p>";
          }
        }
      },
      talk: {
        response: "<p>Delbert lets out an odd groan, followed by a hiccup. “Hey Kid, if you can get me money for another drink, I'll tell you whatever you want!”</p>"
      }
    },
    attendent: {
      name: 'Paul',
      location: 'campground',
      fullDescription: "<p>At almost 7 feet tall and with biceps bigger than your little sister Emma's head, Paul looks like he should be cutting down trees by the dozens. Instead, he tends to a small campground just outside of town. Friendly guy though, and more than happy to tell you about these woods. It a bit weird that he always seems to have an axe resting on his shoulder, but otherwise real real friendly.</p>",
      talk: {
        response: 'Bon Yenne!'
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
        response: "Hi You's!"
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
        response: "Huh?"
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
        response: "<p>“Ya, I’m the town’s doctor and taxidermist. Normally a fella just does one thing in his life, but I was able to do two!”</p>"
      },
      ask: {
        animals: "<p>“Do yous guys have an appointment, or just browsing? It’s fine if yous browsing, I don’t have these animals up just for myself.”</p>",
        diploma: "<p>“Well ya know, I specialize in animals, but humans can be real animals too ya know. Sometimes even more so. So I tend to both sides”</p><p>That conversation got weird really quickly. You just nod.</p>",
        town: "<p>“I’ve been the doctor slash taxidermist here for nearly 40 years. As they say, ‘When Dr. Toby’s on the job, he’ll fix em up one way or another!’”</p>",
        hodag: "<p>“Ah heck, that old story? Yous listen to me, I’ve seen just about every animal in these dang woods, and I’ve never seen a Hodang in my life. Buncha baloney if yous ask me.”</p>"
      }
    },
    skunk: {
      name: 'Skunk',
      location: 'introa',
      fullDescription: "<p>It's a skunk! Right now it is peacefully sniffing a pile of trash. Better keep your distance, don't wanna startle it.</p>",
      image: "images/skunk.png",
      receive: {
        objects: ['dog']
      },
      talk: {
        response: "Sniff. Sniff."
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
        response: "Sniff. Sniff."
      }
    }
  });
}).call(this);
