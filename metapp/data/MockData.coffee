

# reusable scripts
goHome = {
  verb: "go"
  noun: "home"
  script: """
    CGame.go('start')
  """
}

help = {
  verb: "help"
  script: "CGame.showHints() "
}

look = {
  verb: "look"
  script: "CGame.look()"
}

testingActions = {
  verb: "reset"
  script: "
    CPlayer.reset();
    CGame.go('start')
  "
}


# ----------

@MockData = [

  {
    name: "start"
    description: "you wake up on a train"
    actions: [
      {
        verb: "look"
        script: "CGame.go('inspector')"
      }
    ]
  }

  {
    name: "inspector"
    description: "A train ticket inspector is looming over you"
    image: "/assets/train.png"
    actions: [
      {
        verb: "go"
        script: "CGame.go('street')"
      }
    ]
  }

  {
    name: "street"
    description: "A dark street. It's dark and scary. You're lost."
  }

]



for scene in MockData
  unless scene.actions
    scene.actions = [testingActions]

  scene.actions.push(testingActions)
  scene.actions.push(look)
  scene.actions.push(help)
  scene.actions.push(goHome)


