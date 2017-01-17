//Nicki Padar, 2017
//interactive banner for studio1 portal
console.log("this is a js comment");

function setup() {
    var myCanvas = createCanvas(800, 250);
    myCanvas.parent('mySketch');
    myCanvas.mouseOver(nightBack);
    myCanvas.mouseOut(dayBack);
}

var x = 100;
var y = 130;

var leftX = 30;
var leftY = 80;
var middleX = leftX + 35;
var middleY = leftY - 30;
var rightX = leftX + 70;
var rightY = leftY + 10;

function draw() {
    // statements here

    noStroke();
    background(255);
    fill(219, 212, 212);

    ellipse(leftX, leftY, 80, 60);
    ellipse(middleX, middleY, 80, 60);
    ellipse(rightX, rightY, 100, 60);
    leftX++;
    middleX++;
    rightX++;
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