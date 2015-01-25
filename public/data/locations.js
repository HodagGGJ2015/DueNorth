(function() {
  _.extend(window.Stuff, {
    motel: {
      visited: false,
      fullDescription: 'A dark motel.',
      shortDescription: 'A motel.',
      image: '',
      directions: {
        south: 'motorhome'
      }
    },
    bar: {
      visited: false,
      fullDescription: 'There is a dark bar with a lush, bartender and slot machine.',
      shortDescription: 'A bar: lush, bartender, slots.',
      image: '',
      directions: {
        west: 'motorhome'
      }
    },
    motorhome: {
      visited: false,
      fullDescription: 'A 1970 Winnebago Chieftain, the pride of your family name. Beige body with a large brown W on the side that your dad keep as polished as the day he first bought it. Sometimes you think he loves the Winnebago more than you.',
      shortDescription: 'Your family\'s motorhome.',
      image: '',
      directions: {
        north: 'motel',
        south: 'woods',
        east: 'bar'
      }
    }
  });
}).call(this);
