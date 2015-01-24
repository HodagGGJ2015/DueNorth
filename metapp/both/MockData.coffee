if Meteor.isClient

  gohome = {
    home:
      scripts: [
        "CGame.go('start')"
      ]
  }

  @MockData = {
    start:
      title: "start"
      image: "/assets/start.svg"
      description: "you see a skunk and a caravan"
      links: [
        { text: "kick skunk", href:"kick_skunk"}
        { text: "enter caravan", href:"caravan_int"}
      ]
      actions:
        say: {
          hi:
            scripts: [
              "CPlayer.say('you say hi')"
            ]
        }
        kick: {
          skunk:
            response: "ouch, says the skunk!"
            scripts: [
              "CGame.go('kick_skunk')"
              "CPlayer.addItem('skunk smell')"
              "CPlayer.say('you ugly skunk')"
            ]
        }
        go: {
          caravan:
            scripts: ["CGame.go('caravan_int')"]
        }

    kick_skunk:
      title: "angry skunk"
      description: "The skunk squirts you!"
      image: "/assets/angry_skunk.svg"
      links: [
        { text: "restart", href: "start" }
      ]
      actions:
        go: gohome

    caravan_int:
      title: "caravan interior"
      description: "A dank caravan"
      image: "/assets/caravan_int.svg"
      links: [
        {text: "go back outside", href: "start"}
      ]
      actions:
        go: gohome

  }

  


  # _.each MockData, (mock, idx) ->
  #   prefix = "https://docs.google.com/a/biz.pikkle.com/drawings/d/"
  #   # console.log("idx", idx)
  #   prev = mock
  #   mock.cname = mock.title + "-#{idx}"
  #   if mock.src[0] == "/"
  #     mock.img = mock.src
  #   else
  #     mock.editUrl = prefix + mock.src + "/edit"
  #     mock.img = prefix + mock.src + "/pub?w=250"

  #   unless mock.next
  #     nextMock = MockData[idx+1]  # each one points forward by default
  #     mock.next = nextMock.title if nextMock

  # # console.log MockData




