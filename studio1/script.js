//Nicki Padar, 2017

console.log("this is a js comment");

function setup() {
    var myCanvas = createCanvas(800, 250);
    myCanvas.parent('mySketch');
    background(255);
}

function draw() {
    // statements here
    noStroke();
    if (mouseIsPressed) {
        fill(255);
    } else {
        fill(201);
    }
    ellipse(mouseX, mouseY, 50, 50);

    /*color c = color(82, 111, 132); //yellow
    fill(c);
    noStroke();
    rect(250, 50, 300, 150); //body

    c = color(50, 55, 100); //dark blue
    fill(c);
    rect(250, 35, 50, 15); //button

    c = color(255); //pink
    fill(c);
    //noStroke();
    rect(490, 60, 50, 25); //flash

    c = color(89, 92, 96); //yellow
    fill(c);
    //stroke(2);
    ellipse(400, 130, 100, 100); //outer circle

    c = color(140, 142, 145); //dark blue
    fill(c);
    ellipse(400, 130, 80, 80); //inner circle*/

}