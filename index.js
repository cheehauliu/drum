// Detecting button press

//to target all of the elements that under class drum
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    //by using "this", it will net us know it is currently trigger the event
    //console.log(this.innerHTML);

    //by changeing style and color using "this"
    // this.style.color = "White";

    // Identify current press button and stored into variable
    var buttonInnerHTML = this.innerHTML;

    //pass button value into makeSound function
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Detecting keyboard press

document.addEventListener("keypress", function(event) {
  //console.log(event);
  makeSound(event.key);
  buttonAnimation(event.key);
})

function makeSound(key) {
  //use of switch
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}

//pass in the current key (keyboard or mouse click), assign a variable to stored the class associated
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  //add class "pressed" into that particular key to activate css animation
  activeButton.classList.add("pressed");

  //add timer to remove "pressed" class so that it back to it original animation
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}
