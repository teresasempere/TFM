/* --- Toggle menu --- */

function toggleMenu() {
  var element = document.getElementById("menu");
  element.classList.toggle("show");
}


/* --- Sticky header" --- 

window.onscroll = function() {myFunction()};


var navbar = document.getElementById("header");


var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} */


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




/* Text to speech */

onload = function () {
  if ('speechSynthesis' in window) {
    /* speech synthesis supported */
  } else {
    /* speech synthesis not supported */
  }
}

if('speechSynthesis' in window) {
  var synth = speechSynthesis;
  var flag = false;

  /* references to the buttons */
  var playEle = document.querySelector('#play');
  var pauseEle = document.querySelector('#pause');
  var stopEle = document.querySelector('#stop');

  /* click event handlers for the buttons */
  playEle.addEventListener('click', onClickPlay);

  function onClickPlay() {
    if (!flag) {
      flag = true;
      utterance = new SpeechSynthesisUtterance(
        document.querySelector('article').textContent);
      utterance.voice = synth.getVoices()[0];
      utterance.onend = function () {
        flag = false;
      };
      synth.speak(utterance);
    }
    if (synth.paused) {
      /* unpause/resume narration */
      synth.resume();
    }
  }
}