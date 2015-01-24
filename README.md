Welcome to Wisconsin
===

An interactive fiction.

- Everything is an object.

|WW|WW|WW|WW|WW|WW|WW|
|WW|WW|WW|WW|MO|WW|WW|
|WW|PY|CP|GS|PR|GF|WW|
|WW|WW|MT|BR|PZ|TX|WW|
|WW|WW|WW|WW|AR|WW|WW|
|WW|WW|WW|WW|WW|WW|WW|

WW: Woods
MO: Motor Home
PR: Park
PZ: Pizza
AR: Arcade
TX: Taxidermist
GF: Gift Shop
GS: Gas Station
BR: Bar
CP: Camp
MT: Motel
PY: Party

TODO
---

#### Engine

1. Conversations
2. Conditionals: how do we prevent "take skunk" x 2, see `$eq` in story.json
3. Better error handling for missing stuff (helpful warnings)
4. Directions: "go north", etc.
5. Add `random` operation

#### HTML

- Arrow up/down for previous commands
- Serialize/deserialize to localStorage

story.json format
---

`name : action : target : operation : data`

- name — the name of the object
- action — the action performed on the object
- target — the target of the update
- operation — the operation to apply to the target data
- data — the update data to use in the operation
