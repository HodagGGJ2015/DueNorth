Meteor.startup ->

  Router.configure
    # notFoundTemplate: 'NotFound',
    layoutTemplate: "main"
    # loadingTemplate: 'loading'
    # onBeforeAction: "loading"

  Router.route "/", ->
    Router.go("/game/start")


  Router.route "/game/:scenename", ->
    name: "game"
    @render "game",
      waitOn: ->
        Meteor.subscribe("SceneData")
      data: ->
        CGame.scene = SceneData.findOne({name:@params.scenename})
        blob = {
          scenename: @params.scenename
          scene: CGame.scene
        }
        console.log("route data", blob)

        return blob

