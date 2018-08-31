$( document ).ready(function() {

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

//create variable for audio file
var timerSound = new Audio('assets/sounds/timerSound.wav');
//function for simple timer with start button
function startTimer(){
  var counter = 10;
  setInterval(function() {
    counter--;
    if (counter >= 0) {
      span = document.getElementById("count");
      span.innerHTML = counter;
		}
		//when counter === 0 play sound
    if (counter === 0) {
        timerSound.play();
        clearInterval(counter);
    }
  }, 1000);
}
//function for on.click to start timer
$("#startClock").click(function(){
    startTimer();
 });



















});