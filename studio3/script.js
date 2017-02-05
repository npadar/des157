// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // all other js here
    /*var imgs = ["images/clog.png", "images/iceland.png", "images/extra-01.png",
    "images/extra-02.png", "images/hawaii.png"];

    var preload = []; //preload images
    for(var i = 0; i<imgs.length; i++) {
      preload[i] = new Image();
      preload[i].src = imgs[i];
    }*/

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
      console.log(imgs[i]);
      imgs[i].addEventListener("click", function () {
        console.log("clicked" + imgs[i]);
        document.getElementById("hawaiiAnswer").className = "show";
      })
    }*/

    /*for (var i = 0; i < answers.length; i++) {
      console.log(imgs[i]);
      console.log(answers[i]);
      imgs[i].addEventListener("click", function () {
        console.log(imgs[i]);
        console.log(answers[i]);
        document.answers[i].p.className = "show";
        document.answers[i].p.className = "answer";
      })
    }*/

    hawaii.addEventListener("click", function () {
      console.log("hawaii clicked");
      document.getElementById("hawaiiAnswer").className = "show";
      document.getElementById("hawaiiAnswer").className = "answer";
    })

    iceland.addEventListener("click", function () {
      console.log("iceland clicked");
      document.getElementById("icelandAnswer").className = "show";
      document.getElementById("icelandAnswer").className = "answer";
    })

    clog.addEventListener("click", function () {
      console.log("clog clicked");
      document.getElementById("clogAnswer").className = "show";
      document.getElementById("clogAnswer").className = "answer";
    })

    mickey.addEventListener("click", function () {
      console.log("mickey clicked");
      document.getElementById("mickeyAnswer").className = "show";
      document.getElementById("mickeyAnswer").className = "answer";
    })

    italy.addEventListener("click", function () {
      console.log("italy clicked");
      document.getElementById("italyAnswer").className = "show";
      document.getElementById("italyAnswer").className = "answer";
    })

    /*for (var i = 0; i < close.length; i++) {
      close[i].addEventListener("click", function () {
        console.log(close.length);
        console.log("close click" + close[i]);
        document.getElementsByClassName("close").className = "hidden";
        //close[i].style.cursor = "pointer";
      })
    }*/

    //close.addEventListener("click", function () {
    //  document.getElementById("hawaiiAnswer").className = "hidden";
    //})

    for (var i = 0; i < close.length; i++) {
      close[i].addEventListener("click", function () {
        this.parentElement.style.display = "none";
        //this.style.cursor = "pointer";
        //var attribute = getAttribute("id") + "Answer";
        //console.log("close");
        //document.getElementsByClassName("close").className = "hidden";
      });
    }

    /*close.addEventListener("click", function () {
      console.log("closeclicked");
      answerHawaii.style.display="none";
      close.style.cursor = "pointer";
    });*/

});
