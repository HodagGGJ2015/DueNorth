(function() {

  // helper to load json
  function loadJSON(path, callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType('application/json');
    xhr.open('GET', path, true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == '200') {
        callback(JSON.parse(xhr.responseText));
      }
    };
    xhr.send(null);
  }

  var inputEl = document.querySelector('.input');
  var imageEl = document.querySelector('.image');
  var descriptionEl = document.querySelector('.description');
  var responseEl = document.querySelector('.response');

  var RETURN_CODE = 13;

  var engine;
  var stories = [
    'stories/global.json',
    'stories/locations.json',
    'stories/objects.json',
    'stories/characters.json'
  ];
  var storyData = {};

  // when all of the stories are loaded, start the engine
  var storiesLoaded = _.after(stories.length, function() {
    engine = new Engine(storyData);

    // load the initial output
    var output = engine.getOutput();
    renderOutput(output);
  });

  // load each story and merge them together
  _.each(stories, function(path) {
    loadJSON(path, function(story) {
      _.extend(storyData, story);
      storiesLoaded();
    })
  });

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
    if (e.keyCode == RETURN_CODE) {
      e.preventDefault();

      // update the engine and render its output
      var output = engine.step(inputEl.value);
      renderOutput(output);

      // clear input
      inputEl.value = '';
    }
  });

}).call(this);