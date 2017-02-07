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

    var hawaiiAnswer = document.getElementById("hawaiiAnswer");
    var icelandAnswer = document.getElementById("icelandAnswer");
    var clogAnswer = document.getElementById("clogAnswer");
    var italyAnswer = document.getElementById("italyAnswer");
    var mickeyAnswer = document.getElementById("mickeyAnswer");

    var answer = document.getElementsByClassName("answer");
    var close = document.getElementsByClassName("close");

    var answers = [hawaiiAnswer, icelandAnswer, clogAnswer, italyAnswer, mickeyAnswer];
    var imgs = [hawaii, iceland, clog, mickey, italy];
    //console.log(imgs.length);

    /*for (var i = 0; i < imgs.length; i++) {
      imgs[i].addEventListener("click", function () {
        var attribute = getAttribute(this) + "Answer";
        attribute.style.display = "block";
      })
    }*/

    //add event listerns to all the objects
    hawaii.addEventListener("click", function () {
      console.log("hawaii clicked");
      hawaiiAnswer.style.display = "block"; //show the answer
      //document.getElementById("hawaiiAnswer").className = "show";
      document.getElementById("hawaiiAnswer").className = "answer"; //style
    })

    iceland.addEventListener("click", function () {
      console.log("iceland clicked");
      icelandAnswer.style.display = "block";
      //document.getElementById("icelandAnswer").className = "show";
      document.getElementById("icelandAnswer").className = "answer";
    })

    clog.addEventListener("click", function () {
      console.log("clog clicked");
      clogAnswer.style.display = "block";
      //document.getElementById("clogAnswer").className = "show";
      document.getElementById("clogAnswer").className = "answer";
    })

    mickey.addEventListener("click", function () {
      console.log("mickey clicked");
      mickeyAnswer.style.display = "block";
      //document.getElementById("mickeyAnswer").className = "show";
      document.getElementById("mickeyAnswer").className = "answer";
    })

    italy.addEventListener("click", function () {
      console.log("italy clicked");
      //document.getElementById("italyAnswer").className = "show";
      italyAnswer.style.display = "block";
      document.getElementById("italyAnswer").className = "answer";
    })


    //add event listener for close
    for (var i = 0; i < close.length; i++) { //loop through all the classes named close
      close[i].addEventListener("click", function () { //if theres a click
        this.parentElement.style.display = "none"; //the parent (which is the whole answer section) displays none
        //this.style.cursor = "pointer";
        //var attribute = getAttribute("id") + "Answer";
        //console.log("close");
        //document.getElementsByClassName("close").className = "hidden";
      });
    }
});
