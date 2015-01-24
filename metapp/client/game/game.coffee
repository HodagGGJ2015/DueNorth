clog = (msg, obj) ->
  console.log(msg, obj)

currentScene = null

# Template.game.rendered = () ->
#   console.log("rendered", this.data)
#   currentScene = CGame.scene
#   window.currentScene = currentScene

handleInput = (msg) ->
  $("#inputbox").val("")
  $("#yousaid").text(msg)
  stuff = msg.split(" ")
  verb = stuff[0]
  noun = stuff[1]
  console.log("#{verb} > #{noun}")
  try
    actions = CGame.scene.actions?[verb][noun]
    scripts = actions?.scripts
    console.log("actions:", actions)
    console.log("scripts:", scripts)
    _.each scripts, (sc) ->
      eval(sc)
  catch err
    console.log("eval err", err)
    # console.log("no script for ", verb, noun)

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


