(function() {
  _.extend(window.Stuff, {
    introa: {
      name: "Home of the Hodag",
      visited: true,
      fullDescription: "<p>“This looks like a better town than any to stretch our legs!” your dad proclaims. He pulls the Winnebago into a parking lot, right past a large sign reading ‘Welcome to the Home of the Great Hodag’.</p><p>“Honey, do we really need to stop here?” Mom asks, peeking over at the group of bikers in the parking lot. “Maybe we can wait till we get to another town.”</p><p>“Nonsense!” Dad throws the gear up to park and shuts off the engine. Emma, your little sister, immediately opens up the side door and rushes out without a word. Before you can step out, Charlie bolts after Emma, barking and running circles around her. You hop onto the lot and catch up to Emma.</p><p>Beyond the group of rowdy bikers you make out a small Wisconsin town with typical small Wisconsin town things: a bar, a gas station, a gift shop, a motel. It’s basically a carbon copy of every other small town you guys have visited on your road trip. Further beyond this town are woods. Lots and lots of woods.</p><p>“Do you think dad could take on those bikers?” Emma asks as your parents exit the Winnebago. You chuckle. “Maybe in a dweeb contest.”</p><p>Dad pats you and your sister on the shoulder. “Isn’t this great, you guys? Getting out of the city, being out in the middle of nowhere in such a small town? I bet the locals are going to be amazed when they meet a family from the big city.”</p><p>Emma turns. “Dad, this looks like the place from Deliverance.”</p><p>Your mom gasps. “Who showed you that movie? You’re not allowed to see R movies.”</p><p>Suddenly, loud barking erupts in the air. Your family turns to see Charlie barking at a skunk right next to the Minni-Winnie’s side door, wide open. It’s posed in a defensive position and stares down Charlie. Your dad lets out an ‘Oh!” as your mom throws her hands over her face. If there is such thing as a Wisconsin Stand-Off, this is it. The air is tense, everyone knows the gravity of the situation.</p><p>Everyone is frozen except for Charlie, who continues to bark. You cannot rely on your family, YOU need to defuse this situation. There is no room for error here. You need to think of something, and something fast.</p><p>There a parking lot to the south.</p>",
      shortDescription: "<p>Everyone is frozen except for Charlie, who continues to bark. You cannot rely on your family, YOU need to defuse this situation. There is no room for error here. You need to think of something, and something fast.</p><p>There a parking lot to the south.</p>",
      audio: "musicLoop",
      image: "images/Logo3.png",
      directions: {
        south: "introb"
      }
    },
    introb: {
      name: "Home of the Hodag",
      visited: false,
      fullDescription: "<p>At last, you find the courage to react, but it is already too late. Agitated by Charlie and acting in defense, the skunk totally freaks out and unleashes its veritable skunk spray into the open side door. Your mom shrieks in horror as Charlie retreats behind the you.</p><p>The damage has been done. The skunk, the clear victor of this small Wisconsin town conflict, hobbles away back into the woods. You and your family move towards the Winnebago, but you can barely get within five feet before the repulsive stench repels everyone back.</p><p>“ARE YOU KIDDING ME? ARE YOU FREAKIN’ KIDDING ME? ALL MY CLOTHES ARE IN THERE!” shouts Emma, on the verge of tears. There is absolutely no way you guys will be able to continue the road trip with the Mini-Winnie in this condition. Your little sister sobs silently, your parents are in silent shock.</p><p>What do we do now?</p><p>Finally, Dad breaks the silence.</p><p>“Well, no use trying to drive the Winnie in this condition. Looks like we’re stuck here until we can clean up this skunk mess. Why don’t you kids go and explore this town while your mother and I try to clean up the Winnie?”</p><p>Surprised that you parents didn’t ask you to help with the cleaning, you grab your sister’s hand and make a quick getaway before they change their minds. Charlie follows close behind.</p><p>“Just don’t talk to those scary bikers!” Your mom shouts.</p><p>There is a parking lot to the south.</p>",
      shortDescription: "<p>Your family's motorhome.</p><p>There is a parking lot to the south.</p>",
      audio: "musicLoop",
      image: "images/Logo3.png",
      directions: {
        north: "motorhome",
        south: "parking"
      }
    },
    motorhome: {
      name: "Mini-Winne",
      visited: false,
      fullDescription: "<p>A 1973 Mini Winnebago, AKA the Mini-Winne, the pride of your family name. It's beige body has a large brown W on the side that your dad keeps as polished as the day he first bought it. Sometimes you think he loves the Winnebago more than you.</p><p>Woods are all around you except to the south where there is a road.</p>",
      shortDescription: "<p>Your family's motorhome.</p><p>There is a parking lot to the south.</p>",
	    audio: "motorhomeLoop",
      image: "images/motorhome.png",
      directions: {
        north: "woods",
        south: "parking",
        east: "woods",
        west: "woods"
      }
    },
    party: {
      name: "Party",
      visited: false,
      fullDescription: "<p>Just outside of the main campground area, a group of college kids are causing a ruckus. Clearly we’re not the only ones on summer vacation, but the only difference is they look like they’re actually having fun.</p><p>Off to the right is the campground entrance.</p>",
      shortDescription: "<p>A group of people having more fun then you.</p><p>The campground entrance is to the right</p>",
  	  audio: "partyLoop", //not ready
      image: "images/campground.png",
      directions: {
        north: "woods",
        west: "woods",
        east: "campground"
      }
    },
    campground: {
      name: "Happy Hodag Campground",
      visited: false,
      fullDescription: "<p>This has to be the worst campground in the history of campgrounds. Instead of pine needles, old beer cans, a diaper and a mysteriously burnt tent litter the ground. There is a large party off to the right. Somewhere you hear a dog barking.</p><p>Paul the campground attendant is eyeing a small tree and pointedly ignoring the activity going on to the left.</p><p>Just to cement the worst campground award, to the south there is a motel and to the east there is a gas station. Some scraggly woods can be seen to the north.</p>",
      shortDescription: "<p>The worst campground ever.</p><p>There is a motel to the south, a gas station to the east, and some loud activity to the west. Almost as an afterthought there are a few trees to the north.</p>",
  	  audio: "forestLoop",
      image: "images/campground.png",
      directions: {
        north: "woods",
        west: "party",
        east: "gas",
        south: "motel"
      }
    },
    gas: {
      name: "Luke's Gas",
      visited: false,
      fullDescription: "<p>Part truck stop, part tourist trap, 100% cheese curds and bait. This gas station sells exactly half of what you need for your vacation.</p><p>There is a parking lot to the east and a sad looking campground to the west. To the south there is a sign that says gifts.</p>",
      shortDescription: "<p>A gas station.</p><p>To the east is a parking lot. To the west is a campground. There is a sign that says gifts to the south.</p>",
  	  audio: "gasLoop",
      image: "images/gasstation.png",
      directions: {
        west: "campground",
        east: "parking",
        south: "giftshop"
      }
    },
    parking: {
      name: "Parking Lot",
      visited: false,
      fullDescription: "<p>The current resting place of the family Winnebago, as well as a resting place for a large group of Hells Angels bikers who seem to be in the middle of a cross-country road trip. They are a drunk, rowdy bunch who either left the bar, or were kicked out. You keep your distance.</p><p>You see some blinking neon lights off to the east, past several churches. To the west is a gas station and from the south comes a wonderful smell. Thankfully a short walk back to the north is your motorhome.</p>",
      shortDescription: "<p>A weedy lot. There are a lot of bikers here.</p><p>Your motorhome is to the north and there is a mouth watering smell to the south. To the west are some blinking lights and to the east is a gas station.</p>",
  	  audio: "gasLoop",
      image: "images/road.png",
      directions: {
        north: "motorhome",
        south: "pizza",
        east: "bar",
        west: "gas"
      }
    },
    bar: {
      name: "Sal's Tavern",
      visited: false,
      fullDescription: "<p>You must have passed half a dozen churches to get to Sal's Tavern. Musky trophys and a signed dollar bill decorate the walls. The smell of cheap beer and fried cheese sticks perfumes the air. Below a large screen TV, Sal, the bartender, is talking with a patron. In front of you is a row of stools.</p><p>A cigarette machine sits forlornly next to the door.</p><p>To the south are a large number of animal parts. Back far to the west is a parking lot. Woods are to the north and east</p>",
      shortDescription: "<p>A deep woods bar.</p><p>Roads lead off to the south and west. You can see woods to the north and east.</p><p>Sal is behind the counter and Delbert is nursing a beer.</p>",
  	  audio: "saloonLoop", //not ready
      image: "images/tavern.png",
      directions: {
        south: "taxidermy",
        west: "parking",
        east: "woods",
        north: "woods"
      }
    },
    motel: {
      name: "Northwoods Motel",
      visited: false,
      fullDescription: "<p>The air is thick with the smell of cheap industrial soap, there is a dusty rack of maps and tourist guides by the front desk. The front attendant is a middle-aged woman with a large “Dorris” nametag and an unnaturally large smile. The tacky, dated furniture reminds you of grandma’s house.</p><p>To the right is the motel gift shop. There is a campground to the north and some trees to the west.</p>",
      shortDescription: "<p>A rundown motel with a giftshop.</p><p>To the right is the giftshop and to the north is a campground.</p>",
  	  audio: "motelLoop", //not ready
      image: "images/motel.png",
      directions: {
        north: "campground",
        east: "giftshop",
        west: "woods"
      }
    },
    giftshop: {
      name: "Giftshop",
      visited: false,
      fullDescription: "<p>Along with a row of dusty moccasins for sale, cheap nicknacks with “Welcome to Hodag Country” are on all the shelves. Seated behind a counter is a bored looking clerk.</p><p>To the back is a door.</p><p>From the north wafts the smell of gasoline and from the east wafts the smell of onions making for a paticularly stomach turning experiance. There is a motel to the left.</p>",
      shortDescription: "<p>An authentic tourist trap. There is a door in the back of the room.</p><p>To the right is a motel, to the east is food and to the north is a gas station.</p>",
  	  audio: "giftshopLoop", //not ready
      image: "images/giftshop.png",
      directions: {
        north: "gas",
        west: "motel",
        east: "pizza",
        south: "backroom"
      }
    },
    backroom: {
      name: "Backroom",
      visited: false,
      fullDescription: "<p>Nothing to see here right now... This is just an innocent storage room. There is a door to the west.</p>",
      shortDescription: "<p>Backroom. To the front is the door to the giftshop. To the west is another door.</p>",
  	  audio: "giftshopLoop", //not ready
      image: "images/giftshop.png",
      directions: {
        north: "giftshop",
        west: "woods"
      }
    },
    pizza: {
      name: "Pizza",
      visited: false,
      fullDescription: "<p>This is apparently THE place to be. The pizza may be so-so, but the arcade area in the back looks top notch.</p>",
      shortDescription: "<p>A pizza joint.</p><p>An archway leads to a really </p>",
  	  audio: "pizzaLoop",
      image: "images/pizzaria.png",
      directions: {
        north: "parking",
        south: "arcade",
        east: "taxidermy",
        west: "giftshop"
      }
    },
    arcade: {
      name: "Arcade",
      visited: false,
      fullDescription: "<p>This has to be the best arcade this side of the Mississippi. Galaga and Ms Pac-Man abound. There is even a machine playing Zork. A man with a green uniform and a large mustache enthusiastically plays skee-ball.</p>",
      shortDescription: "<p>An Amazing Arcade.</p>",
  	  audio: "arcadeLoop",
      image: "images/arcade.png",
      directions: {
        north: "pizza"
      }
    },
    taxidermy: {
      name: "Medical Clinic",
      visited: false,
      fullDescription: "<p>Being surrounded by dead and stuffed animals, you find it really hard to believe that Dr. Toby is a real doctor, but the dusty diploma hung up behind his desk would say otherwise. His profession is medical, but his passion is clearly taxidermy. Despite his choice in interior decorating, he’s no joker and seems to really know his stuff.</p><p>The smell of tomatoes comes from the east. To the north are some blinking lights. Stunted trees can be seen to the east.</p>",
      shortDescription: "<p>Part medical clinic part taxidermy.</p><p>The smell of tomatoes comes from the east. To the north are some blinking lights. Stunted trees can be seen to the east.</p>",
  	  audio: "medicalClinicLoop", //not ready
      image: "images/taxidermy.png",
      directions: {
        north: "bar",
        east: "woods",
        west: "pizza"
      }
    },
    woods: {
      name: "The Woods",
      visited: false,
      fullDescription: "<p>Big pine trees in every direction.</p>",
      shortDescription: "<p>Big pine trees.</p>",
      audio: "forestLoop",
      image: "images/woods.png",
      directions: {
      }
    },
    cave: {
      name: "Hodag Cave",
      visited: false,
      fullDescription: "<p>While walking through the woods, you see a bright green boulder, almost the size of a large couch. What the heck could that be?</p><p>Suddenly, it starts moving! It turns around to reveal sharp spikes, and then you see the head of a monster with sharp teeth, pointy devil horns and dark red eyes.</p><p>“Holy crap, It’s the Hodag!” screeches Emma.</p><p>“Whats a Hodag?” you ask.</p><p>The Hodag, or whatever it is, has noticed you guys and lets out a loud roar that shakes all the surrounding trees and bushes. This monster looks hellbent to eat you the three. There is no way to escape, you must think fast!</p>",
      shortDescription: "<p>The Hodag Cave.</p><p>There is no way to escape, you must think fast!</p>",
      audio: "caveLoop",
      image: "images/cave.png",
      directions: {
      }
    },
    hostilehodag: {
      name: "The End",
      visited: false,
      fullDescription: "<p></p>",
      shortDescription: "&lt;HOSTILE HODAG ENDING&gt;",
      audio: "caveLoop", //not ready
      image: "images/winners.png",
      directions: {
      }
    },
    pepperoni: {
      name: "The End",
      visited: false,
      fullDescription: "<p></p>",
      shortDescription: "&lt;PEPPERONI ENDING&gt;",
      audio: "motorhomeLoop", //not ready
      image: "images/winners.png",
      directions: {
      }
    },
    noskunk: {
      name: "The End",
      visited: false,
      fullDescription: "<p>You signal for Charlie to stop his barking, to which he immediately runs over to you. The skunk, no longer in immediate danger from the Caldwell family, scurries away back into the woods from whence it came. You all let out a sigh of relief.</p><p>“That was a close call,” says Dad. “Let’s get going before it comes back.” The Caldwell family eagerly hops back in the Winnebago. You move towards the rear and stare out the back window as Dad starts up the RV.</p><p>Something in the distance catches your eye. An odd animal, at least fifty feet out in the woods behind the parking lot. It’s not the skunk, no, something much bigger than a skunk. Is it a buck? No way, it’s entirely too fat and round. It’s a very bright green too, clear as day. As you squint your eyes at the strange creature, it suddenly raises one of it’s front legs and shakes it in the air.</p><p>It’s waving! It has to be waving! You’ve never seen any animal move like that before. Thoughtlessly, you lift your hand and wave back through the rear window of the Winnebago.</p><p>“And we’re off!” Dad puts the RV into gear and drives back on the road. Whatever that animal is, it’s still waving at you, even as you speed away. What could that thing have been? Leaving this small Wisconsin town, the creature gets smaller and smaller until you can no longer see it.</p>",
      shortDescription: "&lt;NO SKUNK ENDING&gt;",
      audio: "motorhomeLoop", //not ready
      image: "images/winners.png",
      directions: {
      }
    }
  });
}).call(this);
