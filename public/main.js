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
  var outputEl = document.querySelector('.output');
  var imageEl = document.querySelector('.image');

  var RETURN_CODE = 13;

  var engine;
  var stories = ['stories/story.json'];
  var storyData = {};

  // when all of the stories are loaded, start the engine
  var storiesLoaded = _.after(stories.length, function() {
    engine = new Engine(storyData);

    // load the initial output
    var output = engine.step('init global');
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
    if (output.description) {
      outputEl.textContent = output.description;
    }
    if (output.image) {
      imageEl.setAttribute('src', output.image);
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
