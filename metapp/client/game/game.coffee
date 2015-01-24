clog = (msg, obj) ->
  console.log(msg, obj)

currentScene = null

getActions = (scene, verb, noun) ->
  # debugger

  ## minimongo subselect support?
  # res = SceneData.findOne({
  #   'name': CGame.scene.name   # currentScene limit to
  #   # 'actions.noun': noun
  #   # 'actions.verb': verb
  # }, {
  #   actions: { '$elemMatch': {
  #     noun: noun,
  #     verb: verb
  #   }}
  # })

  res = _.find scene.actions, (act) ->
    if typeof(act.verb) == "string"
      test = (act.verb == verb and act.noun==noun)
    else
      if verb in act.verb and act.noun == noun
        test = true
    console.log("res", act, test)
    return test
  return res


# first time only
Template.game.rendered = () ->
  CGame.alert("a pretty scene")

handleInput = (msg) ->
  $("#inputbox").val("")
  $("#yousaid").text(msg)
  stuff = msg.split(" ")
  verb = stuff[0]
  noun = stuff[1]

  actions = getActions(CGame.scene, verb, noun)
  console.log("res:", actions)

  if actions?.script
    try
      eval(actions.script)
    catch err
      console.error("eval err", actions.script, err)
  else
    console.log("no script for ", verb, noun)
    noun ?= ""
    CGame.alert("you cant #{verb} #{noun} here.")

Template.game.events
  'submit form': (evt) ->
    evt.preventDefault()
    input = evt.target.value
    console.log("input", input)

  'keypress #inputbox': (evt, template) ->
    if (evt.which == 13)
      txt = $("#inputbox").val()
      console.log("txt", txt)
      handleInput(txt)

    # else
      # clog("input", evt)


Template.game.helpers

  # turn hash into noun: a, verb: b

  actionsList: ->
    # debugger
    actions = CGame.scene.actions
    vlist = []
    for k, v of actions
      vlist.push(verb: k, noun: v )
      window.vlist = vlist
    return vlist

  playerItems: ->
    CPlayer.items()
