@CGame = {}

CGame.go = (where) ->
  console.log("called: CGame go", where)
  Router.go("/game/#{where}")

