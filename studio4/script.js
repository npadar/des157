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

    //film functions
    film2.addEventListener("mouseover", function () {
      console.log("mouse over film");
      tipTimer = setTimeout(showFilmTip, 1000);
    });

    function showFilmTip() {
      console.log("showing msg");
      filmTip.style.opacity = 1;
    }

    film2.addEventListener("mouseout", function () {
      console.log("mouse out film");
      clearTimeout(tipTimer);
      filmTip.style.opacity = 0;
    });

    film2.addEventListener("click", function () {
      console.log("film clicked");
      msg.style.display = "block";
    })

    //orange timer functions
    timer2.addEventListener("mouseover", function () {
      console.log("mouse over timer1");
      var tipTimer = setTimeout(showTimerTip, 1000);
    })

    function showTimerTip() {
      console.log("msg");
      countdown1Tip.style.opacity = 1;
    }

    timer2.addEventListener("mouseout", function () {
      console.log("mouse out");
      clearTimeout(tipTimer);
      countdown1Tip.style.opacity = 0;
    })

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

    //red timer functions

    timer.addEventListener("mouseover", function () {
      console.log("mouseover red timer");
      var tipTimer = setTimeout(showTimerTip2, 1000);
    })

    function showTimerTip2() {
      console.log("msg");
      countdown2Tip.style.opacity = 1;
    }

    timer.addEventListener("mouseout", function () {
      console.log("mouseout red timer");
      clearTimeout(tipTimer);
      countdown2Tip.style.opacity = 0;
    })

    timer.addEventListener("click", function () {
      console.log("red timer clicked");
      picture1.style.opacity = 0;
      timerInterval = setInterval(countDown2, 1000);
    })

    function countDown2 () {
      if(seconds10 == 0 ) {
        clearInterval(timerInterval);
        picture2.style.opacity = .6;
      }
      else {
        seconds10--;
      }

      document.getElementById("countdown2").innerHTML =
      "Time Left: " + seconds10 + " seconds";
    }

    //pink timer functions

    timer3.addEventListener("mouseover", function () {
      console.log("mouseover pink");
      var tipTimer = setTimeout(showTimerTip3, 1000);
    })

    function showTimerTip3() {
      console.log("tip3 msg");
      countdown3Tip.style.opacity = 1;
    }

    timer3.addEventListener("mouseout", function () {
      console.log("mouseout pink");
      clearTimeout(tipTimer);
      countdown3Tip.style.opacity = 0;
    })

    timer3.addEventListener("click", function () {
      console.log("pink clicked");
      picture2.style.opacity = 0;
      timerInterval = setInterval(countDown3, 1000);
    })

    var seconds7 = 7;
    function countDown3 () {
      if(seconds7 == 0 ) {
        clearInterval(timerInterval);
        picture3.style.opacity = .9;
      }
      else {
        seconds7--;
      }

    document.getElementById("countdown3").innerHTML =
    "Time Left: " + seconds7 + " seconds";
    }

    //blue timer functions
    timer4.addEventListener("mouseover", function () {
      console.log("mouseover blue");
      var tipTimer = setTimeout(showTimerTip4, 1000);
    })

    function showTimerTip4() {
      countdown4Tip.style.opacity = 1;
    }

    timer4.addEventListener("mouseout", function () {
      console.log("mouseout blue");
      clearTimeout(tipTimer);
      countdown4Tip.style.opacity = 0;
    })

    timer4.addEventListener("click", function () {
      console.log("blue clicked");
      picture3.style.opacity = 0;
      timerInterval = setInterval(countDown4, 1000);
    })

    var seconds5 = 5;
    function countDown4 () {
      if(seconds5 == 0 ) {
        clearInterval(timerInterval);
        picture4.style.opacity = 1;
      }
      else {
        seconds5--;
      }

      document.getElementById("countdown4").innerHTML =
      "Time Left: " + seconds5 + " seconds";
    }

});
