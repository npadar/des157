// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // all other js here
    var film2 = document.getElementById("film2");
    var timer = document.getElementById("timer");
    var timer2 = document.getElementById("timer2");
    var timer3 = document.getElementById("timer3");
    var timer4 = document.getElementById("timer4");

    var tipTimer;

    film2.addEventListener("mouseover", function () {
      console.log("mouse over film");
      tipTimer = setTimeout(showFilmTip, 1000);
    })
});
