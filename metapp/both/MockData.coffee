if Meteor.isClient

  @MockData = {
    start:
      title: "start"
      image: "/images/bg/start.jpg"
      description: "you see a skunk and a caravan"
      links: [
        { text: "kick skunk", href:"kick_skunk"}
        { text: "enter caravan", href:"caravan_int"}
      ]

    kick_skunk:
      title: "angry skunk"
      description: "The skunk squirts you!"
      image: "/images/bg/skunk"
      links: [
        { text: "restart", href: "start" }
      ]

    caravan_int:
      title: "caravan interior"
      description: "A dank caravan"
      image: "/images/bg/caravan-int.jpg"
      links: [
        {text: "go back outside", href: "start"}
      ]

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