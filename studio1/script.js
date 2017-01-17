//Nicki Padar, 2017
//interactive banner for studio1 portal
console.log("this is a js comment");

function setup() {
    var myCanvas = createCanvas(800, 250);
    myCanvas.parent('mySketch');
    myCanvas.mouseOver(nightBack);
    myCanvas.mouseOut(dayBack);
}

var r1 = 153;
var r2 = 102;
var g1 = 250;
var g2 = 150;
var b1 = 255;
var b2 = 255;

x = 100;
y = 130;

function draw() {
    // statements here
    //loadImage("polar-bear.png", function (img) {
    //    image(img, x, y, img.width / 2, img.height / 2);
    //});

    /*noStroke();
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

    ellipse(mouseX, mouseY, 5, 5);*/
}

function nightBack() {
    loadImage("background-img2.png", function (img) {
        image(img, 0, 0, img.width / 4, img.height / 4);
    });
    loadImage("polar-bear.png", function (img) {
        image(img, x + 300, y - 10, img.width / 3, img.height / 3);
    });
}

function dayBack() {
    loadImage("background-img.png", function (img) {
        image(img, 0, 0, img.width / 4, img.height / 4);
    });
    loadImage("polar-bear.png", function (img) {
        image(img, x, y, img.width / 2, img.height / 2);
    });
}