/* --- Toggle menu --- */

function toggleMenu() {
  var element = document.getElementById("menu");
  element.classList.toggle("show");
}

/* Text to speech */

onload = function () {
  if ('speechSynthesis' in window) {
    if ('speechSynthesis' in window) {
      var synth = speechSynthesis;
      var flag = false;

      /* references to the buttons */
      var playEle = document.querySelector('#play');

      /* click event handlers for the buttons */
      playEle.addEventListener('click', onClickPlay);

      function onClickPlay() {
        if (!flag) {
          flag = true;
          utterance = new SpeechSynthesisUtterance(
            document.querySelector('.modal_description').textContent);
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
  } else {
    /* speech synthesis not supported */
    alert("");
  }
}

$(document).ready(
  function () {

    // bluetooth

    // exit 1
    $(".close").click(function () {
      $(".1_step1").hide();
      $(".1_step2").hide();
      $(".1_step3").hide();
      $(".1_step4").hide();
    });

    // exit 2
    $(".close").click(function () {
      $(".2_step1").hide();
      $(".2_step2").hide();
      $(".2_step3").hide();
      $(".2_step4").hide();
      $(".2_step5").hide();
    });

    //support1

    // 1_step1
    $(".support1").click(function () {
      $(".1_step1").show();
      $(".1_step2").hide();
      $(".1_step3").hide();
      $(".1_step4").hide();
    });

    // 1_step2
    $(".1_next1").click(function () {
      $(".1_step2").show();
      $(".1_step1").hide();
      $(".1_step3").hide();
      $(".1_step4").hide();
    });
    4

    // 1_step3
    $(".1_next2").click(function () {
      $(".1_step3").show();
      $(".1_step1").hide();
      $(".1_step2").hide();
      $(".1_step4").hide();
    });

    // 1_step4
    $(".1_next3").click(function () {
      $(".1_step4").show();
      $(".1_step1").hide();
      $(".1_step2").hide();
      $(".1_step3").hide();
    });



    //support2

    // 2_step1
    $(".support2").click(function () {
      $(".2_step1").show();
      $(".2_step2").hide();
      $(".2_step3").hide();
      $(".2_step4").hide();
      $(".2_step5").hide();
    });

    // 2_step2
    $(".2_next1").click(function () {
      $(".2_step2").show();
      $(".2_step1").hide();
      $(".2_step3").hide();
      $(".2_step4").hide();
      $(".2_step5").hide();
    });
    4

    // 2_step3
    $(".2_next2").click(function () {
      $(".2_step3").show();
      $(".2_step1").hide();
      $(".2_step2").hide();
      $(".2_step4").hide();
      $(".2_step5").hide();
    });

    // 2_step4
    $(".2_next3").click(function () {
      $(".2_step4").show();
      $(".2_step1").hide();
      $(".2_step2").hide();
      $(".2_step3").hide();
      $(".2_step5").hide();
    });

    // 2_step4
    $(".2_next4").click(function () {
      $(".2_step5").show();
      $(".2_step1").hide();
      $(".2_step2").hide();
      $(".2_step3").hide();
      $(".2_step4").hide();
    });

  }

);




/*----------- USERS ------------*/

/*----------- GROUPS ------------*/

/*----------- PLACES ------------*/