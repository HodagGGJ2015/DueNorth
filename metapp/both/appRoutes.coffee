Meteor.startup ->

  Router.configure
    # notFoundTemplate: 'NotFound',
    layoutTemplate: "main"
    # loadingTemplate: 'loading'
    # onBeforeAction: "loading"


  Router.route "/game/:scenename", ->
    name: "game"
    @render "game",
      data: ->
        blob = {
          scenename: @params.scenename
          scene: MockData[@params.scenename]
          MockData: MockData
        }
        console.log("data", blob)
        return blob

