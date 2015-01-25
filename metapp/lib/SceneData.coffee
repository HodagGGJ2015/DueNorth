@SceneData = new Meteor.Collection("SceneData")

Meteor.startup ->
  if Meteor.isServer
    reloadSceneData()
    Meteor.publish "SceneData", (query, fields) ->
      console.log("sub SceneData", query, fields)
      query ?= {}
      fields ?= {}
      return SceneData.find(query, fields)



# reusable script
goHome = {
  verb: "go"
  noun: "home"
  script: """
    CGame.go('start')
  """
}

look = {
  verb: "look"
  script: "
    CGame.alert('you look around')
  "
}


testingActions = {
  verb: "reset"
  script: "
    CPlayer.reset();
    CGame.go('start')
  "
}

@MockData = [
  {
    name: "start"
    image: "/assets/start.svg"
    description: "you see a skunk and a house"
    links: [
      { text: "kick skunk", href:"kick_skunk"}
      { text: "enter house", href:"house_int"}
    ]
    actions: [
      {
        verb: "say"
        noun: "hi"
        script: "
          CGame.alert('the skunk asks you what time it is.')
        "
      }
      {
        verb: "kick"
        noun: "skunk"
        script: "
          CGame.go('angry_skunk');
          CPlayer.getItem('skunk smell');
          CPlayer.say('you ugly skunk');
        "
      }

      {
        verb: ["go", "enter"]
        noun: "house"
        script: "CGame.go('house_int')"
      }

      {
        verb: ["use", "give"]
        noun: "watch"
        script: "
          if (CPlayer.hasItem('watch')) {
            CGame.alert('The skunk takes the watch. Thanks! he says');
            CPlayer.removeItem('watch');
          } else {
            CGame.alert('what watch?');
          }
        "
      }

      {
        verb: "look"
        script: "
          CGame.alert('not much here')
        "
      }
      
      testingActions
    ]
  }

  {
    name: "angry_skunk"
    description: "The skunk squirts you in goop!"
    image: "/assets/angry_skunk.svg"
    actions: [
      {
        verb: "say"
        noun: "sorry"
        script: "
          CPlayer.say('sorry!')
          CGame.go('start')
        "
      }
      goHome, look
      testingActions
    ]
  }

  {
    name: "house_int"
    image: "/assets/house_int.svg"
    description: """
      The inside of the house.
      It's painted green.
      There's a box here"""
    actions: [
      {
        verb: 'look'
        script: "
          CGame.alert('not much here except the box')
        "
      }

      {
        verb: "bored"
        script: "
          CGame.openBoredSim()
        "
      }

      {
        verb: ["open", 'inspect', 'look']
        noun: "box"
        script: """
          if (CPlayer.hasItem('watch')) {
            CGame.go('empty_box');
          } else {
            CGame.go('open_box');
          }
        """
      }
      goHome, look
      testingActions
    ]
  }

  {
    name: "open_box"
    image: "/assets/open_box.svg"
    description: "There's an old watch inside the box."
    actions: [
      {
        verb: "get"
        noun: "watch"
        script: "
          CPlayer.getItem('watch');
          CGame.go('empty_box')
        "
      }
      goHome, look
      testingActions
    ]
  }

  {
    name: "empty_box"
    image: "/assets/empty_box.svg"
    description: "An empty box"
    actions: [
      goHome, look
      testingActions
    ]
  }

]

reloadSceneData = () ->
  SceneData.remove({})
  for scene in MockData
    SceneData.insert(scene)


