// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // all other js here
    var lanyard = document.getElementById("lanyard");
    var answer = document.getElementById("answer");
    var close = document.getElementById("close");

    lanyard.addEventListener("click", function () {
      console.log("clicked");
      //lanyard.style.backgroundColor = "#111";
      answer.style.display = "block";
    });

    lanyard.addEventListener("mouseover", function() {
      console.log("mouseover");
      lanyard.style.boxShadow = "0px 0px 30px yellow";
    })

    close.addEventListener("click", function () {
      console.log("closeclicked");
      answer.style.display="none";
    });

});
