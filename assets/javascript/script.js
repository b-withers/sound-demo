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





















});