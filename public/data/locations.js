(function() {
  _.extend(window.Stuff, {
    motorhome: {
      name: "Mini-Winne",
      visited: false,
      fullDescription: "<p>A 1973 Mini Winnebago, AKA the Mini-Winne, the pride of your family name. It's beige body has a large brown W on the side that your dad keeps as polished as the day he first bought it. Sometimes you think he loves the Winnebago more than you.</p><p>Woods are all around you except to the south where there is a road.</p>",
      shortDescription: "<p>Your family's motorhome.</p><p>There is a road to the south.</p>",
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
      fullDescription: "<p>The current resting place of the family Winnebago, as well as a resting place for a large group of Hells Angels bikers who seem to be in the middle of a cross-country road trip. They are a drunk, rowdy bunch who either left the bar, or were kicked out. You keep your distance.</p><p>You see some blinking neon lights off to the east, past several churches. To the west is a gas station and from the south comes a wonderful smell. Thankfully a short walk back to the north is your motorhome.</p><p>There is a skunk sniffing at a pile of trash.</p>",
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
  	  audio: "backroomLoop", //not ready
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
      fullDescription: "<p>Hodag Cave.</p>",
      shortDescription: "<p>Hodag Cave.</p>",
      audio: "caveLoop",
      image: "images/cave.png",
      directions: {
      }
    }
  });
}).call(this);
