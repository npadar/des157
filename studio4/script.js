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
    var countdown1 = document.getElementById("countdown1");
    var countdown2 = document.getElementById("countdown2");
    var countdown3 = document.getElementById("countdown3");
    var countdown4 = document.getElementById("countdown4");
    var picture1 = document.getElementById("picture1");
    var picture2 = document.getElementById("picture2");
    var picture3 = document.getElementById("picture3");

    var tipTimer;
    var timerInterval;
    var seconds15 = 15;
    var seconds10 = 10;

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
      timerInterval = setInterval(countDown1, 1000);
    })

    function countDown1 () {
      if (seconds15 == 0) {
        clearInterval(timerInterval);
        picture1.style.opacity = .3;
      }
      else {
        seconds15--;
      }

      document.getElementById("countdown1").innerHTML =
      "Time Left: " + seconds15 + " seconds";
    }

    picture1.addEventListener("mouseover", function () {
      tipTimer = setTimeout(showPicTip, 1000);
    })

    picture1.addEventListener("mouseout", function () {
      clearTimeout(tipTimer);
      picTip.style.opacity = 0;
    })

    timer.addEventListener("click", function () {
      console.log("red timer clicked");
      timerInterval(countDown2, 1000);
    })

    function countDown2 () {
      if(seconds10 ==0 ) {
        clearInterval(timerInterval);
        picture1.style.opacity = .6;
      }
      else {
        seconds10--;
      }

      document.getElementById("countdown2").innerHTML =
      "Time Left: " + seconds10 + " seconds";
    }



});
