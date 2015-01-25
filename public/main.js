(function() {

  var inputEl = document.querySelector('.input');
  var imageEl = document.querySelector('.image');
  var descriptionEl = document.querySelector('.description');
  var responseEl = document.querySelector('.response');

  var engine = new Engine(Stuff, Actions);

  // set the description and image src
  function renderOutput(output) {
    if (output.image) {
      imageEl.setAttribute('src', output.image);
    }
    if (output.description) {
      descriptionEl.textContent = output.description;
    }
    if (output.response) {
      responseEl.textContent = output.response;
    }
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

      // clear input
      inputEl.value = '';
    }
  });

  renderOutput(engine.act('look'));

}).call(this);