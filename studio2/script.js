// JavaScript Document
console.log("reading");
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    document.f.onsubmit = processForm; //capture the submit event
    document.f.onreset = clearForm;

    function processForm() {
      var adj1 = document.f.adj1.value; //doge adj
      var noun1 = document.f.noun1.value; //doge noun
      var adj2 = document.f.adj2.value; //doge adj
      var num1 = document.f.num1.value; //kermit num
      var num2 = document.f.num2.value; //kermit num
      var obj1 = document.f.obj1.value; //teach obj
      var noun2 = document.f.noun2.value; //teach noun
      var noun3 = document.f.noun3.value; //teach noun
      var noun4 = document.f.noun4.value; //teach noun

    if (adj1 == "" || noun1 == "" || adj2 == "" || num1 == "" || num2 == "" || obj1 == "" ||
    noun2 == "" || noun3 == "" || noun4 == "") {
      alert("You left a field blank!!"); //form alert
    }
    else {
        var doge1 = document.getElementById("doge1");
        var doge2 = document.getElementById("doge2");
        var doge3 = document.getElementById("doge3");
        var kermit1 = document.getElementById("kermit1");
        var kermit2 = document.getElementById("kermit2");
        var teachMsg = document.getElementById("teachMsg");

        doge1.innerHTML = "so " + adj1;
        doge2.innerHTML = "many " + noun1;
        doge3.innerHTML = "very " + adj2;
        kermit1.innerHTML = "Me: just sleep " + num1 + " more minutes";
        kermit2.innerHTML = "Me: how about " + num2 + " more minutes";
        teachMsg.innerHTML = "Test: Calculate the " + obj1 + "\'s " + "mass using the " + noun2 +
        "\'s centrifugal force, and the gravitational force between the " + noun3 + " and the "
        + noun4;

        /*kermit.className = "show";*/
    }
    return false; //prevent page from reloading
  }

  function clearForm() {
    doge1.innerHTML = " ";
    doge2.innerHTML = " ";
    doge3.innerHTML = " ";
    kermit1.innerHTML = " ";
    kermit2.innerHTML = " ";
    teachMsg.innerHTML = " ";
  }
});
