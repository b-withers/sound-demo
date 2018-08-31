$(document).ready(function () {


	//SIMPLE BUTTON CLICK SOUND
	//basic on click with jquery
	//create variable for the audio file
	var basicSound = new Audio('assets/sounds/basicSound.mp3');
	//call the id of the element you want to make a sound when clicked
	$("#basicSound").on("click", function () {
		//console log to make sure click is working.
		console.log("#basicSound clicked");
		//call the variable you created above, BAM, sound.
		basicSound.play();
	});


	//COUNTDOWN TIME SOUND
	//create variable for audio file
	var timerSound = new Audio('assets/sounds/timerSound.wav');
	//function for simple timer with start button
	function startTimer() {
		var counter = 10;
		setInterval(function () {
			counter--;
			if (counter >= 0) {
				span = document.getElementById("count");
				span.innerHTML = counter;
			}
			//when counter === 0 play sound
			if (counter === 2) {
				timerSound.play();
				clearInterval(counter);
			}
		}, 1000);
	}
	//function for on.click to start timer
	$("#startClock").click(function () {
		startTimer();
	});


	$("nav ul li").hover(function(){
		nav_audio.play();
		},
function(){
		nav_audio.load();
});




$('a.hover').mouseenter(function(){
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src','assets/sounds/hover.wav');
  audioElement.play();
});


















});