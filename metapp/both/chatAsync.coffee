
clog = (msg, obj) ->
  obj ?= ""
  console.log("cbot| #{msg}", obj)


if Meteor.isServer
  Fiber = Npm.require('fibers')
  net = Npm.require("net")
  # return

  try
    @CBotPipe = {}
    @CBotServer = new net.Socket()
    # before startup
    CBotServer.connect 2000, "127.0.0.1", ->
      clog "connected"

    CBotServer.on "data", (data) ->
      console.log("data: " + data)

      Fiber(->
        str = "#{data}"    # binary to string
        console.log("fiber: " + str)
        CBot.insert({test:true, data: str})
      ).run()

  catch
    console.error("cant connect to chat pipe")

  Meteor.methods
    chatAsync: (msg) ->
      console.log("callAsync", msg)
      CBotServer.write(msg)






    # fiber = Fiber.current
    # # // var fence = Meteor._CurrentWriteFence.get()
    # # //   , handle = fence && fence.beginWrite();
    # return (Fiber.yield())

    # async = (err, res) ->
    #   console.log("callAsync.cb")
    #   console.log "data received: " + data
    #   CBot.insert({test:true})
    #   fiber.run(res);
    # Meteor.publish "CBot", ->
    #   CBotPipe = this
    #   clog("created pipe")
 
    # async = (cb) ->
    #   console.log("callAsync.async")
    #   CBot.insert({test:true})
    # // Meteor.setTimeout(function () {
    # //   console.log("callAsync.inner")
    # //   cb(null, 'hello');
    # // }, 3000);
