(function() {

  var inputEl = document.querySelector('.input');
  var imageEl = document.querySelector('.image');
  var descriptionEl = document.querySelector('.description');
  var responseEl = document.querySelector('.response');

  var engine = new Engine(Stuff, Actions);

  // set the description and image src
  function renderOutput(output, delay) {
    if (output.image) {
      imageEl.style.backgroundImage = 'url(' + output.image + ')';
    }

    descriptionEl.innerHTML = output.description;
    responseEl.innerHTML = output.response;
  }

  // prevent blur
  inputEl.addEventListener('blur', function(e) {
    e.preventDefault();
    e.target.focus();
  });

  // handle enter
  inputEl.addEventListener('keydown', function(e) {
    if (e.keyCode == 13) {
      e.preventDefault();

      // update the engine and render its output
      renderOutput(engine.act(inputEl.value));

      // serialize state
      localStorage.setItem('state', engine.serialize());

      // play audio
      if (inputEl.value.length === 0 || responseEl.innerText == "Nothing happened.") {
        audio['textEnterFalse'].play();
      } else {
        audio['textEnter'].play();
      }

      // clear input
      inputEl.value = '';
    }
  });

  engine.deserialize(localStorage.getItem('state'));
  renderOutput(engine.act('look'));

}).call(this);