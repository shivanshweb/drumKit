// alert("Hello");


// document.querySelectorAll('button')[0].addEventListener('click',Hello);
// document.querySelectorAll('button')[1].addEventListener('click',Hello);
// document.querySelectorAll('button')[2].addEventListener('click',Hello);
// document.querySelectorAll('button')[3].addEventListener('click',Hello);
// document.querySelectorAll('button')[4].addEventListener('click',Hello);
// document.querySelectorAll('button')[5].addEventListener('click',Hello);
// document.querySelectorAll('button')[6].addEventListener('click',Hello);

//function Hello (){
  //  alert('You clicked');
//}

// other way of doing it

var drumTotalLength = document.querySelectorAll(".drum").length;


// Detecing Button press 
for (var i = 0; i < drumTotalLength; i++){

    document.querySelectorAll(".drum")[i].addEventListener('click',function(){
        
      var buttonInnerHTML = this.innerHTML;
      soundMaker(buttonInnerHTML)
      drumAnimation(buttonInnerHTML)

    });  
}


// Detecting Keypress 
document.addEventListener('keydown', function(event){
  soundMaker(event.key);
  drumAnimation(event.key);
});

function soundMaker(key){

  switch(key)  {
    case "w":
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
    break;

    case "a":
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
    break;

    case "s":
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;

    case "d":
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;

    case "j":
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
    break;

    case "k":
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
    break;

    case "l":
    var kick = new Audio('sounds/kick-bass.mp3');
    kick.play();
    break;

    default: console.log(buttonInnerHTML);
  }
}

function drumAnimation (currentKey){

  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout (function (){
    activeButton.classList.remove("pressed");
  }, 100);
}

function play() {
  var crowdLaughter = new Audio('sounds/crowd-laughing.mp3');
  crowdLaughter.play();
}
