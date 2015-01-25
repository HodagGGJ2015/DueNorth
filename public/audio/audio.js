//Gather all audio files as objects to be expanded later
//Placed in order of importance
audio = {
	motorhomeLoop: 'backgrounds/motor_home_loop.ogg',
	caveLoop: 'backgrounds/cave_loop.ogg',
	arcadeLoop: 'backgrounds/arcade_loop.ogg',
	gasLoop: 'backgrounds/gas_loop.ogg',
	forestLoop: 'backgrounds/forest_loop.ogg',
	giftshopLoop: 'backgrounds/giftshop_loop.ogg',
	partyLoop: 'backgrounds/party_loop.ogg',
	saloonLoop: 'backgrounds/saloon_loop.ogg',
	medicalClinicLoop: 'backgrounds/medical_clinic_loop.ogg',
	pizzaLoop: 'backgrounds/pizza_loop.ogg',
	motelLoop: 'backgrounds/clinic_loop.ogg',
	
	musicLoop: "music/music_loop.ogg",
	
	textEnter: 'sfx/text_enter.ogg',
	textEnterFalse: 'sfx/text_enter_false.ogg',
	
	barkLoop: "sfx/bark_loop.ogg",
	dogGrowl: "sfx/dog_growl.ogg",
	artifact: "sfx/artifact_grab.ogg",
	booze: "sfx/booze.ogg",
	coin: "sfx/coin.ogg",
	bell: "sfx/shop_bell.ogg",
	slots: "sfx/slot_machine.ogg",
	wrench: "sfx/wrench_pickup.ogg",
	scream: "sfx/woman_scream.ogg",
	hodag: "sfx/hodag.ogg"
	
};

//Create an array of keys for the audio files
audioKeys = Object.keys(audio);

function playAudio(audioName) {
    if (!audio[audioName].isLoaded) {
  	    loadSound(audioName, audio[audioName.audio], true);
    } else {
	    audio[audioName].play();
    }
}

//Preload all of the audio files
function loadSound(name, url, playOnLoad) {
	
	//Create XML Request
	var request = new XMLHttpRequest();
	request.open('GET', '/audio/'+url, true);
	request.responseType = 'arraybuffer';

	request.onload = function() {
		//Once loaded, decode the audio
		context.decodeAudioData(request.response, function(buffer) {	
					
			audio[name] = { 
				//Add new information to the audio object
				
				buffer: buffer,
				play: function(time) {
					
					time = time ? time : 0;
					
					this.gainNode = context.createGain(); 		//Create gain node
					var source = context.createBufferSource(); 	//Create source node
					source.buffer = this.buffer; 				//Connect buffer to source
					source.connect(this.gainNode); 				//Connect gain to source
					this.gainNode.connect(context.destination); //Connect gain to destination
					
					this.gainNode.gain.value = name.indexOf('Loop') > -1 ? 0.1 : 1;
					
					//Create loop for music and rain
					source.loop = name.indexOf('Loop') > -1 ? true : false;
					
					//Start the music and save the source
					source.start(time);
					this.source = source;
					
				}, 
				
				stop: function() {
					this.reduceGain(0);
				},
				
				adjustGain: function(value, current) {
					//This function currrently only increases gain
					
					//If first time, set the current value
					current = current ? current : 0.05;
				    this.gainNode.gain.value = current;
					
					//For use in setTimeout function
					$this = this;
					
					setTimeout(function() {
						//Recursion used to increase gain until desired value
						if (current < value) $this.adjustGain(value, current+0.05);
					}, 400)
					
				},
				
				reduceGain: function(value) {
					//This function currrently only increases gain
					
					if (this.gainNode.gain.value <= 0.05) {
						this.source.stop();
						return false;
					}
					
					//If first time, set the current value
				    this.gainNode.gain.value = this.gainNode.gain.value - 0.005;
					
					//For use in setTimeout function
					$this = this;
					
					setTimeout(function() {
						//Recursion used to increase gain until desired value
						if ($this.gainNode.gain.value > value) $this.reduceGain(value);
					}, 50)
					
				},
				
				isLoaded: true
							
			};	
			
			if (playOnLoad) audio[name].play();
			
			audioLoadCount++;
			
			//Load the audio into playback
			if (audioLoadCount == audioKeys.length && !audioLoaded) audioLoaded = true;	
				
		});
	}
	
	request.send();
	
}

//Load Audio Context
window.AudioContext = window.AudioContext || window.webkitAudioContext;
context = new AudioContext();
context.createGain = context.createGain ? context.createGain : context.createGainNode;
	
audioLoadCount = 0;	//How many sounds are loaded
audioLoaded = false;

//Cycle
//for (i = 0; i < audioKeys.length; i++) {
//	loadSound(audioKeys[i], audio[audioKeys[i]])
//}