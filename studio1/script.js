//Nicki Padar, 2017

console.log("this is a js comment");

function setup() {
    var myCanvas = createCanvas(800, 250);
    myCanvas.parent('mySketch');
    background(255);
}

var r1 = 153;
var r2 = 102;
var g1 = 250;
var g2 = 150;
var b1 = 255;
var b2 = 255;

function draw() {
    // statements here

    noStroke();
    if (mouseIsPressed) {
        fill(r1, g1, b1);
        r1++;
        g1--;
        b1--;
    } else {
        fill(r2, g2, b2);
        r2++;
        g2++;
        b2--;
    }

    if ((r2 == 255) || (r1 == 255)) {
        r1 = 153;
        r2 = 102;
        g1 = 250;
        g2 = 150;
        b1 = 255;
        b2 = 255;

    }
    ellipse(mouseX, mouseY, 50, 50);

    /*color c = color(82, 111, 132); //yellow
    fill(c);
    rect(250, 50, 300, 150); //body

    c = color(50, 55, 100); //dark blue
    fill(c);
    rect(250, 35, 50, 15); //button

    c = color(255); //pink
    fill(c);
    rect(490, 60, 50, 25); //flash

    c = color(89, 92, 96); //yellow
    fill(c);
    //stroke(2);
    ellipse(400, 130, 100, 100); //outer circle

    c = color(140, 142, 145); //dark blue
    fill(c);
    ellipse(400, 130, 80, 80); //inner circle*/

}