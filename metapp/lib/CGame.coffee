@CGame = {}

CGame.go = (where) ->
  console.log("called: CGame go", where)
  CGame.hideSim()
  CBot.chatAsync("go #{where}")
  Router.go("/game/#{where}")

CGame.alert = (msg) ->
  $('#alert').text(unescape(msg))
  $('#alert')
    .fadeIn()
    .delay(2000)
    .fadeOut()

CGame.openBoredSim = () ->
  simurl = "http://www.boredomsimulator.com/"
  window.open(simurl, "iframeX")
  $("#iframeX").show()

CGame.hideSim = ->
  $("#iframeX").hide()