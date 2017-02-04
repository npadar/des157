// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // all other js here
    var lanyard = document.getElementById("lanyard");
    var hair = document.getElementById("hair");
    var hawaii = document.getElementById("hawaii");
    var iceland = document.getElementById("iceland");
    var clog = document.getElementById("clog");
    var mickey = document.getElementById("mickey");
    var italy = document.getElementById("italy");
    var answer = document.getElementById("answer");
    var close = document.getElementById("close");

    //lanyard.addEventListener("click", function () {
      //console.log("clicked");
      //lanyard.style.backgroundColor = "#111";
      //answer.style.display = "block";
    //});

    hawaii.addEventListener("mouseover", function() {
      console.log("mouseover hawaii");
      hawaii.style.transition = "width 4s";
    });

    hawaii.addEventListener("click", function () {
      console.log("hawaii clicked");
      answer.style.display = "block";
    })

    iceland.addEventListener("mouseover", function () {
      console.log("mouseover iceland");
      iceland.style.transition = "width 4s";
    });

    clog.addEventListener("mouseover", function () {
      console.log("mouseover clog");
      clog.style.transition = "width 4s";
    });

    mickey.addEventListener("mouseover", function () {
      console.log("mouseover mickey");
      mickey.style.transition = "width 4s";
    });

    italy.addEventListener("mouseover", function () {
      console.log("mouseover italy");
      italy.style.transition = "width 4s";
    });

    close.addEventListener("click", function () {
      console.log("closeclicked");
      answer.style.display="none";
    });

});
