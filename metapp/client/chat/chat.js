var WITTOKEN=Meteor.settings.public.WITTOKEN;
Template.chat.rendered = witInit;

function witInit() {

  var mic = new Wit.Microphone(document.getElementById("microphone"));
  var info = function (msg) {
    document.getElementById("info").innerHTML = msg;
  };

  var error = function (msg) {
    document.getElementById("error").innerHTML = msg;
  };

  mic.onready = function () {
    info("Microphone is ready to record");
  };

  mic.onaudiostart = function () {
    info("Recording started");
    error("");
  };

  mic.onaudioend = function () {
    info("Recording stopped, processing started");
  };

  mic.onresult = function (intent, entities) {
    var r = kv("intent", intent);

    for (var k in entities) {
      var e = entities[k];

      if (!(e instanceof Array)) {
        r += kv(k, e.value);
      } else {
        for (var i = 0; i < e.length; i++) {
          r += kv(k, e[i].value);
        }
      }
    }

    document.getElementById("result").innerHTML = r;
  };

  mic.onerror = function (err) {
    error("Error: " + err);
  };
  mic.onconnecting = function () {
    info("Microphone is connecting");
  };
  mic.ondisconnected = function () {
    info("Microphone is not connected");
  };

  mic.connect(WITTOKEN);
  // mic.start();
  // mic.stop();

  function kv (k, v) {
    if (toString.call(v) !== "[object String]") {
      v = JSON.stringify(v);
    }
    return k + "=" + v + "\n";
  }

}




function chatter() {
  
  var wit = require('node-wit');

  wit.captureTextIntent(ACCESS_TOKEN, "Hello world", function (err, res) {
    console.log("Response from Wit for text input: ");
    if (err) console.log("Error: ", err);
      console.log(JSON.stringify(res, null, " "));
    });
}
