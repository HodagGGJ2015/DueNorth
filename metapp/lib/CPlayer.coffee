@CPlayer = {
  name: "user1"
}


CPlayer.say = (msg) ->
  CGame.alert(msg)

CPlayer.getItem = (itemName) ->
  item = {
    name: itemName
    player: CPlayer.name   # FIX me - per user
  }
  CPlayerItems.insert(item)
  CGame.alert("you got the #{itemName}")
  console.log "added item:", item

CPlayer.hasItem = (itemName) ->
  item = CPlayerItems.findOne({
    name: itemName
    player: CPlayer.name #FIXME
  })
  return item

CPlayer.useItem = (itemName) ->
  item = CPlayerItems.find({
    name: itemName
    player: CPlayer.name #FIXME
  })
  if item
    #TODO item properties and scene interaction
    CGame.alert("you use the #{itemName}")
  else
    console.log("you don't have a #{itemName}")
    return false


CPlayer.removeItem = (itemName) ->
  item = CPlayerItems.findOne({
    name: itemName
    player: CPlayer.name #FIXME
  })
  if item
    console.log("removed:", item)
    CPlayerItems.remove({_id: item._id})
  else
    console.log("don't have item:", itemName)


CPlayer.items = () ->
  CPlayerItems.find({
    player: CPlayer.name  #FIXME
  })

CPlayer.reset = () ->
  allItems = CPlayerItems.find().fetch()
  for item in allItems
    CPlayerItems.remove({_id: item._id})