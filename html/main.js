(function() {

  var engine = new Engine();

  var inputEl = document.querySelector('.input');
  var outputEl = document.querySelector('.output');
  var imageEl = document.querySelector('.image');

  var RETURN_CODE = 13;

  // prevent blur
  inputEl.addEventListener('blur', function(e) {
    e.preventDefault();
    e.target.focus();
  });

  // handle enter
  inputEl.addEventListener('keydown', function(e) {
    if (e.keyCode == RETURN_CODE) {
      e.preventDefault();

      // handle input
      engine.processInput(inputEl.value);

      // set output
      outputEl.innerText = engine.description;
      imageEl.setAttribute('src', engine.image);

      // clear input
      inputEl.value = '';
    }
  });

}).call(this);
