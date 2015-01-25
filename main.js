(function() {
  var MAX_HISTORY = 100;
  var IS_DEBUG = true;

  var inputEl = document.querySelector('.input');
  var imageEl = document.querySelector('.image');
  var descriptionEl = document.querySelector('.description');
  var locationEl = document.querySelector('.location');
  var responseEl = document.querySelector('.response');
  var bgMusic = '';

  var engine = new Engine(Stuff, Actions, localStorage);
  var history = [''];
  var history_index = 0;

  var textDelay = 30;
  var textTimeoutID = -1;

  function printText(el, text, callback) {
    clearTimeout(textTimeoutID);

    if (el.innerHTML != '') {
      if (callback) {
        callback();
      }
      return;
    }

    function recur(positionIndex) {
      return function() {
        if (positionIndex <= text.length) {
          el.innerHTML = text.slice(0, positionIndex);
          textTimeoutID = setTimeout(recur(positionIndex + 1), textDelay);
        } else if (callback) {
          callback();
        }
      };
    }

    textTimeoutID = setTimeout(recur(0, 0), textDelay);
  }

  function prepOutput(output) {
    if (/<p>(.+)<\/p>/.test(output)) {
      return output;
    } else {
      return '<p>' + output + '</p>';
    }
  }

  // set the description and image src
  function renderOutput(output, printDelay) {
    output.description = prepOutput(output.description);
    output.response = prepOutput(output.response);

    if (output.image) {
      imageEl.style.backgroundImage = 'url(' + output.image + ')';
    }

    // if output.audio changed, stop old audio, start new one
    if (output.audio && output.audio != bgMusic) {
      if (audio[bgMusic] && audio[bgMusic].isLoaded) {
        audio[bgMusic].stop();
      }
      bgMusic = output.audio;
      playAudio(bgMusic);
    }

    if (printDelay) {
      // check and clear outputs that need to be updated
      var updateLocation = locationEl.innerHTML != output.location;
      var updateDescription = descriptionEl.innerHTML != output.description;
      var updateResponse = responseEl.innerHTML != output.response;

      if (updateLocation) locationEl.innerHTML = '';
      if (updateDescription) descriptionEl.innerHTML = '';
      if (updateResponse) responseEl.innerHTML = '';

      // PYRAMID OF DOOM! (for animation...)
      printText(locationEl, output.location, function() {
        printText(descriptionEl, output.description, function() {
          printText(responseEl, output.response);
        });
      });
    } else {
      descriptionEl.innerHTML = output.description;
      responseEl.innerHTML = output.response;
      locationEl.innerHTML = output.location;
    }
  }

  // prevent blur
  inputEl.addEventListener('blur', function(e) {
    e.preventDefault();
    e.target.focus();
  });

  // handle enter
  inputEl.addEventListener('keydown', function(e) {
    if (history_index + 1 == history.length) {
      history[history_index] = inputEl.value;
    }

    if (e.keyCode == 13) {
      e.preventDefault();

      // update the engine and render its output
      var value = inputEl.value.trim();

      if (!value) {
        // stop animation on any keydown
        clearTimeout(textTimeoutID);
        renderOutput(engine.getOutput(), false);

        playAudio('textEnterFalse');

        return;
      }

      if (history.length == MAX_HISTORY) {
        history = history.slice(1);
      }
      history_index = history.push('') - 1;

      var output = engine.act(value);
      renderOutput(output, true);

      // TODO: should we add auto-save back in?
      //engine.saveState();

      // play audio
      if (!output.success) {
        playAudio('textEnterFalse');
      } else {
        playAudio('textEnter');
      }

      // clear input
      inputEl.value = '';

    } else if (e.keyCode == 38) {
      e.preventDefault();
      // scroll back in history
      if (history_index > 0) {
        history_index -= 1;
        inputEl.value = history[history_index];
      }
    } else if (e.keyCode == 40) {
      e.preventDefault();
      // scroll forward in history
      if (history_index + 1 < history.length) {
        history_index += 1;
        inputEl.value = history[history_index];
      }
    }
  });

  if (!IS_DEBUG) {
    engine.loadState();
  }
  renderOutput(engine.act('look'), true);

}).call(this);
