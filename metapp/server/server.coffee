# remote chat parser as a service


# Meteor.startup ->

    # CBotServer.write "login"

  # CBotServer.on "data", (data) ->
  #   console.log "Received: " + data
    # Fiber ->
    #   CBot.insert(data)

  # CBotServer.on "data", (data)->
  #   Meteor.bindEnvironment((err, res) ->
  #     console.log "chat response", data
  #     CBot.insert(data)
  #   , ->
  #     console.log "Failed to bind environment"
  #     return
  #   )

  # CBotServer.on "data", (data) ->
  #   console.log "data received: " + data
    # CBot.insert(data)
    # console.log("CBotPipe", CBotPipe)
    # CBotPipe.added( "CBot", "madeUpId1", { m: data} )
    # CBotPipe.ready()

  # CBotServer.destroy(); // kill CBotServer after server's response
  # CBotServer.on "close", ->
  #   console.log "Connection closed"
  #   return

  # Meteor.methods
  #   'parse': (msg) ->
  #     console.log("parse", msg)
  #     # console.log("CBotServer", CBotServer)
  #     CBotServer.write msg
  #     # CBotPipe.added("CBot", "sup")
  #     return "ack"
