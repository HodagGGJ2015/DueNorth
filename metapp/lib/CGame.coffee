@CGame = {}

CGame.go = (where) ->
  console.log("called: CGame go", where)
  Router.go("/game/#{where}")

CGame.alert = (msg) ->
  $('#alert').text(unescape(msg))
  $('#alert')
    .fadeIn()
    .delay(2000)
    .fadeOut()
