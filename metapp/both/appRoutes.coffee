Meteor.startup ->

  Router.configure
    # notFoundTemplate: 'NotFound',
    layoutTemplate: "main"
    # loadingTemplate: 'loading'
    # onBeforeAction: "loading"


  Router.route "/game/:scene", ->
    name: "game"
    @render "game",
      data: ->
        blob = {
          scene: @params.scene
          scenedata: @MockData[@params.scene]
          MockData: MockData
        }
        console.log("data", blob)
        return blob

