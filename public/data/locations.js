(function() {
  _.extend(window.Stuff, {
window.locations = {
  "motorhome": {
    "init": {
      "name": "Motorhome",
      "visited": false,
      "fullDescription": "<p>A 1973 Mini Winnebago, AKA the Mini-Winne, the pride of your family name. Beige body with a large brown W on the side that your dad keep as polished as the day he first bought it. Sometimes you think he loves the Winnebago more than you.</p>",
      "shortDescription": "<p>Your family's motorhome.</p>",
      "image": "../images/motorhome.png",
      "directions": {
        "north": "woods",
        "south": "parking",
        "east": "woods",
        "west": "woods"
      }
    }
  },
  "party": {
    "init": {
      "name": "Party",
      "visited": false,
      "fullDescription": "<p>Just outside of the main campground area, a group of college kids are causing a ruckus. Clearly we’re not the only ones on summer vacation, but the only difference is they look like they’re actually having fun.</p>",
      "shortDescription": "<p>A group of people having more fun then you.</p>",
      "image": "../images/party.png",
      "directions": {
        "north": "woods",
        "west": "woods",
        "east": "campground",
        "south": "woods"
      }
    }
  },
  "campground": {
    "init": {
      "name": "Happy Hodag Campground",
      "visited": false,
      "fullDescription": "<p>This has to be the worst campground in the history of campgrounds. Instead of pine needles, old beer cans, a diaper and a mysteriously burnt tent litter the ground. There is a large party off to the right. Somewhere you hear a dog barking.</p>",
      "shortDescription": "<p>The worst campground ever.</p>",
      "image": "../images/campground.png",
      "directions": {
        "north": "woods",
        "west": "party",
        "east": "gas",
        "south": "motel"
      }
    }
  },
  "gas": {
    "init": {
      "name": "Luke's Gas",
      "visited": false,
      "fullDescription": "<p>Part truck stop, part tourist trap, 100% cheese curds and bait. This gas station sells exactly half of what you need for your vacation.</p>",
      "shortDescription": "<p>A gas station.</p>",
      "image": "../images/gasstation.png",
      "directions": {
        "west": "campground",
        "east": "parking",
        "south": "giftshop"
      }
    }
  },
  "parking": {
    "init": {
      "name": "Parking Lot",
      "visited": false,
      "fullDescription": "<p>The current resting place of the family Winnebago, as well as a resting place for a large group of Hells Angels bikers who seem to be in the middle of a cross-country road trip. They are a drunk, rowdy bunch who either left the bar, or were kicked out. You keep your distance.</p>",
      "shortDescription": "<p>A weedy lot.</p>",
      "image": "../../images/parkinglot.png",
      "directions": {
        "north": "motorhome",
        "south": "pizza",
        "east": "bar",
        "west": "gas"
      }
    }
  },
  "bar": {
    "init": {
      "name": "Sal's Saloon",
      "visited": false,
      "fullDescription": "<p>Musky trophys and a signed dollar bill decorate the walls. The smell of cheap beer and fried cheese sticks perfumes the air. Below a large screen TV, the bartender is talking with a patron. In front of you is a row of stools.</p><p>A cigarette machine sits forlornly next to the door.</p>",
      "shortDescription": "<p>A deep woods bar.</p>",
      "image": "../images/bar.png",
      "directions": {
        "south": "taxidermy",
        "west": "parking",
        "east": "woods"
      }
    }
  },
  "motel": {
    "init": {
      "name": "Northwoods Motel",
      "visited": false,
      "fullDescription": "<p>The air is thick with the smell of cheap industrial soap, there is a dusty rack of maps and tourist guides by the front desk. The front attendant is a middle-aged woman with a large “Dorris” nametag and an unnaturally large smile. The tacky, dated furniture reminds you of grandma’s house.</p>",
      "shortDescription": "<p>A rundown motel.</p>",
      "image": "../images/motel.png",
      "directions": {
        "north": "campground",
        "east": "giftshop"
      }
    }
  },
  "giftshop": {
    "init": {
      "name": "Giftshop",
      "visited": false,
      "fullDescription": "<p>Cheap nicknacks with “Welcome to Hodag Country” are on shelves to the right. There is a row of dusty moccasins for sale. Seated behind a counter is a bored looking clerk.</p><p>To the south is a door.</p>",
      "shortDescription": "<p>An authentic tourist trap.</p>",
      "image": "../images/giftshop.png",
      "directions": {
        "north": "gas",
        "west": "motel",
        "east": "pizza",
        "south": "backroom"
      }
    }
  },
  "pizza": {
    "init": {
      "name": "Pizza",
      "visited": false,
      "fullDescription": "<p>This is apparently THE place to be. The pizza may be so-so, but the arcade area is top notch. Galaga and Ms Pac-Man abound. A man with a green uniform and a large mustache enthusiastically plays skee-ball.</p>",
      "shortDescription": "<p>A pizza joint.</p>",
      "image": "../images/pizza.png",
      "directions": {
        "north": "parking",
        "east": "giftshop",
        "west": "taxidermy"
      }
    }
  },
  "taxidermy": {
    "init": {
      "name": "Medical Clinic",
      "visited": false,
      "fullDescription": "<p>Being surrounded by dead and stuffed animals, you find it really hard to believe that Dr. Toby is a real doctor, but the dusty diploma hung up behind his desk would say otherwise. His profession is medical, but his passion is clearly taxidermy. Despite his choice in interior decorating, he’s no joker and seems to really know his stuff.</p>",
      "shortDescription": "<p>Part medical clinic part taxidery.</p>",
      "image": "../images/taxidermy.png",
      "directions": {
        "north": "bar",
        "east": "pizza",
        "west": "woods"
      }
    }
  },
  "woods": {
    "init": {
      "name": "The Woods",
      "visited": false,
      "fullDescription": "<p>Big pine trees in every direction.</p>",
      "shortDescription": "<p>Big pine trees.</p>",
      "image": "../images/woods.png",
      "directions": {
      }
    }
  },
  "cave": {
    "init": {
      "name": "Hodag Cave",
      "visited": false,
      "fullDescription": "<p>Hodag Cave.</p>",
      "shortDescription": "<p>Hodag Cave.</p>",
      "image": "../images/cave.png",
      "directions": {
      }
    }
  });
}).call(this);
