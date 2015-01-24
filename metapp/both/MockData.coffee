if Meteor.isClient

  @MockData = {
    start:
      title: "start"
      image: "/images/bg/start.jpg"

    skunk:
      title: "skunk"
      image: "/images/bg/skunk"
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