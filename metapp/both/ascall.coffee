
clog = (msg, obj) ->
  obj ?= ""
  console.log("cbot| #{msg}", obj)


if Meteor.isServer
  Fiber = Npm.require('fibers')

  net = Npm.require("net")
  @CBotPipe = {}
  @CBotServer = new net.Socket()
  # before startup
  CBotServer.connect 2000, "127.0.0.1", ->
    clog "connected"

  Meteor.publish "CBot", ->
    CBotPipe = this
    clog("created pipe")

  CBotServer.on "data", (data) ->
    console.log("data: " + data)

    Fiber(->
      str = "#{data}"    # binary to string
      console.log("fiber: " + str)
      CBot.insert({test:true, data: str})
    ).run()

    # async = (err, res) ->
    #   console.log("callAsync.cb")
    #   console.log "data received: " + data
    #   CBot.insert({test:true})
    #   fiber.run(res);

 
  # async = (cb) ->
  #   console.log("callAsync.async")
  #   CBot.insert({test:true})
    # // Meteor.setTimeout(function () {
    # //   console.log("callAsync.inner")
    # //   cb(null, 'hello');
    # // }, 3000);

  Meteor.methods
    chatAsync: (msg) ->
      console.log("callAsync", msg)
      CBotServer.write(msg)

      # fiber = Fiber.current

      # # // var fence = Meteor._CurrentWriteFence.get()
      # # //   , handle = fence && fence.beginWrite();


      # return (Fiber.yield())




if Meteor.isClient
  window.chatAsync = (msg) ->

    console.log("chatAsync: ", msg)
    Meteor.call "chatAsync", msg, (err, res) ->
      if err
        console.log err
      else
        console.log "response: ", res
      return

    return