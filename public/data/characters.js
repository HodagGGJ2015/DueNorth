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
      image: "images/giftshopclerk.png",
      location: 'giftshop',
      fullDescription: "<p>Sammy owns the gift shop, which is easily the cleanest business in the whole town. Sammy herself, however, is a completely different story. Absolutely neurotic and germaphobic to boot, like an over-caffeinated hawk Sammy keeps a watchful eye over her countless trinkets. I wouldn't say she's friendly, but she is polite. She is, after all, running a tourist trap.</p>",
      receive: {
        objects: ['artifact'],
        act: function(args) {
          var key = this.global.names[args.object] || args.object;
          if (key == 'artifact') {
            this.global.response = '<p>Before you realize it, Emma points at the trinket and says “HEY! That looks like the thing you found in the woods!”</p><p>She reaches into your fanny pack and pulls out the weird artifact. And whaddaya know, they looks almost identical! The gift shop clerk sees everything and is in a complete fluster.</p><p>“WHERE DID YOU GET THAT?”</p><p>Emma speaks honestly. “We found it out in the woods. Is that where you get these things?”</p><p>Sammy the gift shop clerk snatches up the artifact from Emmas hands. “GET OUT! GET OUT OF MY STORE!” She chases the three of you out of the store.</p><p>“Sheesh” says Emma. “What was that all about?”</p>';
            this.motorhome.visited = false;
            this.motorhome.fullDescription = this.noparents.fullDescription;
            this.motorhome.shortDescription = this.noparents.shortDescription;
          }
        }
      },
      talk: {
        response: 'What is that smell?'
      }
    },
    bikers: {
      name: 'Bikers',
      location: 'parking',
      fullDescription: "<p>Big and tough looking. These aren't people you want to bother.</p>",
      talk: {
        response: "<p>Grunt. Grunt.</p>"
      }
    },
    bartender: {
      name: 'Big Sal',
      image: "images/bigsal.png",
      location: 'bar',
      fullDescription: "<p>Big Sal was probably a boulder in her past life. She looks tough as nails, with a voice that sounds like it's been soaked in whiskey and old cigarette butts for years. She sports a flannel vest, Doc Marten boots, and has her hair tied back in a bun. From the pictures on the walls, it's clear she's been in this town for her whole life, but something about her demeanor says that she's not keen to visitors playing 20 questions in her bar.</p>",
      receive: {
        objects: ['coin']
      },
      ask: {
        lush: "<p>“What can ya say about Delbert? He's here more than I am. I wouldn't give him too much attention, otherwise you'll never hear the end of it.”</p>",
        'Delbert': "<p>“What can ya say about Delbert? He's here more than I am. I wouldn't give him too much attention, otherwise you'll never hear the end of it.”</p>",
        hodag: "<p>“I always thought it was just a small town legend, but I swear I saw it once! Out by the woods, big ol’ green thing.”</p> <p>Delbert interrupts, “Ha, ya probably saw a big tree and couldn’t tell the difference!”</p> <p>Big Sal slaps Delbert upside the head and he slumps back to his original position.</p>",
        town: "<p>“Nothing about this town would interest yous city folk.”</p> <p>Delbert interrupts, “Ya, sure nothin’ interesting about this bar!</p>” <p>Big Sal slaps Delbert upside the head and he slumps back to his original position.</p>",
        motel: "<p>“My sister own the motel cross the way. She’s a lot more interested in tourists than I am.”</p> <p>Delbert interrupts, “Ya, and she’s a lot nicer than you are too!”</p> <p>Big Sal slaps Delbert upside the head and he slumps back to his original position.</p>",
        'Northwoods Motel': "<p>“My sister own the motel cross the way. She’s a lot more interested in tourists than I am.”</p> <p>Delbert interrupts, “Ya, and she’s a lot nicer than you are too!”</p> <p>Big Sal slaps Delbert upside the head and he slumps back to his original position.</p>"
      },
      talk: {
        response: "<p>“Ya right, like I'll be giving a drink to you. Ya better run off before I tell your parents.”</p>"
      }
    },
    lush: {
      name: 'Delbert',
      image: "images/lush.png",
      location: 'bar',
      fullDescription: "<p>Every town has a lush, and this town's lush is named Delbert. Skinny-looking fella wearing a high school varsity jacket over some navy blue long johns and a raccoon tail hat to complement his black bushy beard. There's not much to say about Delbert, but give him enough to drink and he'll tell you everything you want to know, and then some!</p><p>&quot;Hey kids.. ya get me somethin' ta drink and I'll let ya in on a little secret..&quot;</p>",
      receive: {
        objects: ['coin'],
        act: function(args) {
          var key = this.global.names[args.object] || args.object;
          if (key == 'coin') {
            this.global.response = '<p>Delbert takes the coin and in a single motion hands it to the bartender who glares at you as he pours Delbert another drink.</p>';
          }
        }
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
      image: "images/campgroundattendant.png",
      location: 'campground',
      fullDescription: "<p>At almost 7 feet tall and with biceps bigger than your little sister Emma's head, Paul looks like he should be cutting down trees by the dozens. Instead, he tends to a small campground just outside of town. Friendly guy though, and more than happy to tell you about these woods. It a bit weird that he always seems to have an axe resting on his shoulder, but otherwise real real friendly.</p>",
      talk: {
        response: "<p>“Well I tell ya, I used to look up to being a lumberjack like my dad and grandpa was. But ya know, now they got these big great machines that just do all the cuttin’ for you. It’s okay, I own this campground, and I’ve got this axe, so really I could cut down a tree anytime I wanted.”</p>"
      },
      ask: {
        campgrounds: "<p>“These campgrounds don’t get a whole lot of attention, ‘cept for college kids lookin’ to have some fun in the woods. I always tell them to watch out for that dang Hodag. It keeps to itself, but sometimes it’ll just gobble people up!”</p>",
        hodag: "<p>“The Hodag lives in these woods around the town. It doesn’t bother us much, but sometimes you can hear it roaring in the woods. Sometimes… it likes to eat visitors.”</p><p>That’s not creepy at all.</p><p>“But don’t worry! Just stay in the town and you’ll be fine.”</p>"
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
        response: "<p>“Hi yous! Welcome to our town! Sorry though, yous kids are too young to rent a room.”</p>"
      },
      ask: {
        town: "<p>“Can’t say many folks know about our town, but the ones who do come back every year! Sometimes...” Dorris leans in uncomfortably close. “... sometimes, they stay forever.”</p>",
        'gift shop': "<p>“That there gift shop is full of wonderful things, very rare stuff I say. You should bring your parents over there!”</p>",
        sammy: "<p>“That there gift shop is full of wonderful things, very rare stuff I say. You should bring your parents over there!”</p>",
        bikers: "<p>“Ah, we always get bikers stopping in our town. They might look mean, but they’re real friendly!”</p>",
        hodag: "<p>“I’ve heard so much about the Hodag, but I’ve never seen the thing before. People swear they seen it, so I have no reason to believe otherwise.”</p>",
        motel: "<p>“I’ve owned this motel for…about 23 years? Wow, saying that out loud makes me feel a heck of a lot older.”</p>",
        bar: "<p>“My sister own the bar across the road. She’s not to keen on visitors, thats why she works the bar and I work the Motel.”</p>",
        tavern: "<p>“My sister own the bar across the road. She’s not to keen on visitors, thats why she works the bar and I work the Motel.”</p>",
      }
    },
    teenager: {
      name: 'Pizza Dude',
      location: 'pizza',
      fullDescription: 'A bored-looking teenager is selling pizza from behind the counter.',
      shortDescription: 'A bored teenager with pizza.',
      receive: {
        objects: ['coin', 'tickets'],
        act: function(args) {
          var key = this.global.names[args.object] || args.object;
          if (key == 'coin') {
            this.slice.location = 'inventory';
            this.coin.location = 'teenager';
          }
          if (key == 'tickets') {
            this.slice.location = 'inventory';
            this.tickets.location = 'teenager';
          }
        }
      },
      talk: {
        response: "<p>“We have pizza slices, but it’ll cost ya either money or tickets from our ski-ball”</p>"
      }
    },
    ranger: {
      name: 'Danny',
      image: "images/parkranger.png",
      location: 'arcade',
      fullDescription: "<p>Though technically not a real police officer, Danny is the closest thing you'll get in this town. Very whimsical and easy-going, but not too observant. His naivete would be detrimental anywhere else, but this is a good ol' simple town with none of those big-city problems. If Danny had once vice, it would be the town's arcade/pizza joint.</p>",
      receive: {
        objects: ['coin']
      },
      talk: {
        response: "<p>“This town technically doesn’t have any police officers, too small for it they say. I’m kinda like the police, except they won’t let me have a gun. And now you tell me what the fun is in that?”</p>"
      },
      ask: {
        town: "<p>“Not much happens in this town. I can’t complain: less crime means more time at the arcade!”</p>",
        hodag: "<p>“I ain’t ever seen that Hodag, but you betcha I could take that sucker down. I’m not scared of some dumb green monster.”</p>",
        'gift shop': "<p>“Some folks ask questions about that place, but I don’t pay much attention to them. What’s crimes could happen at a dang gift shop? People are just paranoid, I tell ya.”</p>",
        sammy: "<p>“Some folks ask questions about that place, but I don’t pay much attention to them. What’s crimes could happen at a dang gift shop? People are just paranoid, I tell ya.”</p>"
      }
    },
    doctor: {
      name: 'Dr. Toby',
      image: "images/taxidermist.png",
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
      },
      hit: {
        act: function(args) {

          var location = this.introb;
          audio['barkLoop'].stop();
          playAudio("screamSFX");
          this.global.location = 'introb';
          this.global.description = location.fullDescription;
          this.global.image = location.image;
          this.global.audio = location.audio;
          this.skunk.location = ''
       }
      },
    },
    hodag: {
      name: 'Hodag',
      location: 'woods',
      fullDescription: "<p>Holy crap what is that? Part dinosaur, part frog?!?!</p><p>This creature has the grinning face of a giant elephant, the head of a frog, the back of a dinosaur, thick short legs set off by huge claws and (of course) a long tail with spears at the end</p>",
      talk: {
        act: function(args) {
          if (this.happyhodag.visited == true) {
            var location = this.happyhodag;

            this.global.description = location.fullDescription;
            this.global.image = location.image;
            this.global.audio = location.audio;
            this.global.response = 'What do you do next?';
          } else {
            var location = this.pepperoni;

            this.global.description = location.fullDescription;
            this.global.image = location.image;
            this.global.audio = location.audio;
            this.global.response = 'THE END';
          }
       }
      },
      sing: {
        act: function(args) {
          var location = this.happyhodag;

          this.global.description = location.fullDescription;
          this.global.image = location.image;
          this.global.audio = location.audio;
          this.global.response = 'What do you do next?';
       }
      }
    },
    raccoon: {
      name: 'Racoon',
      location: 'motel',
      fullDescription: "<p>You’ve never seen a racoon so up-close in your life. It looks like it’s trying to eat things off the grounds, but having no luck. With a town this empty, there probably isn’t a whole lot of garbage for it to go through for food.</p>",
      talk: {
        response: "You say hi, but it’s a racoon so it can’t talk back."
      },
      receive: {
        objects: ['slice'],
        act: function(args) {
          var key = this.global.names[args.object] || args.object;
          if (key == 'slice') {
            this.global.response = '<p>You lay the pizza on the ground next to the racoon, and it immediately begins to devour the slice.</p><p>“Look at it go! It loves pizza!” shouts Emma in excitement. “From now on, I’m going to call you Pepperoni!”</p><p>Pepperoni is a very fitting name for the racoon.</p>';
            this.raccoon.name = "Pepperoni";
            this.raccoon.fullDescription = "<p>After eating a whole slice of pizza, Pepperoni the Racoon looked very satisfied, and almost grateful for your generosity.</p>";
            this.raccoon.shortDescription = "<p>Pepperoni looks at you in adoration.</p>";
          }
        }
      },
    }
  });
}).call(this);
