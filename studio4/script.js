// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // all other js here
    var film2 = document.getElementById("film2");
    var timer = document.getElementById("timer");
    var timer2 = document.getElementById("timer2");
    var timer3 = document.getElementById("timer3");
    var timer4 = document.getElementById("timer4");
    var msg = document.getElementById("msg");
    var countdown = document.getElementById("countdown");

    var tipTimer;
    var timerInterval;
    var seconds = 15;

    film2.addEventListener("mouseover", function () {
      console.log("mouse over film");
      tipTimer = setTimeout(showFilmTip, 1000);
    });

    film2.addEventListener("mouseout", function () {
      console.log("mouse out film");
      clearTimeout(tipTimer);
      filmTip.style.opacity = 0;
    });

    film2.addEventListener("click", function () {
      console.log("film clicked");
      msg.style.display = "block";
    })

    function showFilmTip() {
      console.log("showing msg");
      filmTip.style.opacity = 1;
    }

    timer2.addEventListener("click", function () {
      console.log("orange timer clicked");
      timerInterval = setInterval(countDown, 1000);
    })

    function countDown () {
      if (seconds == 0) {
        clearInterval(timerInterval);
      }
      else {
        seconds--;
      }
      document.getElementById("countdown").innerHTML =
      "Time Left: " + seconds + " seconds";
    }
});
