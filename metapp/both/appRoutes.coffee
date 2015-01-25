Meteor.startup ->

  Router.configure
    # notFoundTemplate: 'NotFound',
    layoutTemplate: "main"
    # loadingTemplate: 'loading'
    # onBeforeAction: "loading"

  Router.route "/", ->
    Router.go("/game/start")


  Router.route "/game/:scenename",
    name: "game"
    waitOn: ->
      subs = [
        Meteor.subscribe("SceneData"),
        Meteor.subscribe("CBot")
      ]
      console.log("subs", subs)
      return subs

    data: ->
      CGame.scene = SceneData.findOne({name:@params.scenename})
      blob = {
        scenename: @params.scenename
        scene: CGame.scene
      }
      console.log("route data", blob)
      return blob

    action: ->
      console.log("game.render")
      @render "game"


  Router.route "/chat", ->
    @render "chat"
