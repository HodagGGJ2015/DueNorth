@SceneData = new Meteor.Collection("SceneData")

Meteor.startup ->
  if Meteor.isServer
    reloadSceneData()
    Meteor.publish "SceneData", (query, fields) ->
      query ?= {}
      fields ?= {}
      scenes = SceneData.find(query, fields)
      console.log("sub SceneData", query, fields)
      console.log("res scenes: ", scenes.count() )
      return scenes




reloadSceneData = () ->
  SceneData.remove({})
  for scene in MockData
    SceneData.insert(scene)


