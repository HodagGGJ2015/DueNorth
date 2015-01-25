(function() {

  var inputEl = document.querySelector('.input');
  var imageEl = document.querySelector('.image');
  var descriptionEl = document.querySelector('.description');
  var locationEl = document.querySelector('.location');
  var responseEl = document.querySelector('.response');

  var engine = new Engine(Stuff, Actions);
  var history = [''];
  var history_index = 0;
  var MAX_HISTORY = 100;

  // set the description and image src
  function renderOutput(output, delay) {
    if (output.image) {
      imageEl.style.backgroundImage = 'url(' + output.image + ')';
    }

    descriptionEl.innerHTML = output.description;
    responseEl.innerHTML = output.response;
    locationEl.innerHTML = output.location;
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

      if (history.length == MAX_HISTORY) {
        history = history.slice(1);
      }
      history_index = history.push('') - 1;

      // update the engine and render its output
      var output = engine.act(inputEl.value.trim());
      renderOutput(output);

      // serialize state
      localStorage.setItem('state', engine.serialize());

      // play audio
      if (output.success) {
        audio['textEnter'].play();
      } else {
        audio['textEnterFalse'].play();
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

  engine.deserialize(localStorage.getItem('state'));
  renderOutput(engine.act('look'));

}).call(this);
