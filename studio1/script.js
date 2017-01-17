//Nicki Padar, 2017
//interactive banner for studio1 portal
console.log("this is a js comment");

/*var img;

function preload() {
    img = loadImage("polar-bear.svg");
}*/

function setup() {
    var myCanvas = createCanvas(800, 250);
    myCanvas.parent('mySketch');
    //background(255);
    loadImage("polar-bear.svg", function (img) {
        image(img, 500, 200);
    });
}

var r1 = 153;
var r2 = 102;
var g1 = 250;
var g2 = 150;
var b1 = 255;
var b2 = 255;

function draw() {
    // statements here
    //image(img, 0, 0);
    //image(img, 0, 0, 10, 10);

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

    ellipse(mouseX, mouseY, 5, 5);

    //text(mouseY, 100, 130);

    /*fill(82, 111, 132); //turquoise
    rect(250, 50, 300, 150); //body

    fill(50, 55, 100); //dark blue
    rect(250, 35, 50, 15); //button

    fill(255); //white
    rect(490, 60, 50, 25); //flash

    fill(89, 92, 96); //dark gray
    ellipse(400, 130, 100, 100); //outer circle

    fill(140, 142, 145); //light gray
    ellipse(400, 130, 80, 80); //inner circle
    }

    var value = 0;

    function mouseClicked() {
        if (value == 0) {
            background(255);
        } else {
            value = 255;
        }
    }*/
}