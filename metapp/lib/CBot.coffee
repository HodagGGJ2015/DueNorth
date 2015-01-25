@CBot = new Meteor.Collection("CBot")

if Meteor.isServer
  Meteor.publish "CBot", (query, fields) ->
    query ?= {}
    fields ?= {}
    console.log("sub Cbot", query, fields)
    return CBot.find(query, fields)

if Meteor.isClient

  Meteor.startup ->
    Meteor.subscribe("CBot")

    Deps.autorun ->
      message = CBot.findOne({})
      if ( message )
        console.log("CBot message", message)
