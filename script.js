//Nicki Padar, 2017
//interactive banner for studio1 portal
console.log("this is a js comment!!");

var x = 100;
var y = 130;
var leftX = 30;
var leftY = 80;
var middleX = leftX + 35;
var middleY = leftY - 30;
var rightX = leftX + 70;
var rightY = leftY + 10;
var starX = 100;
var starY = 100;
var img;
var img2;
var img3;
var img4;


function setup() {
    var myCanvas = createCanvas(800, 250);
    myCanvas.parent('mySketch');
    
    img = loadImage("background-img2.png"); //load image
    img2 = loadImage("polar-bear.png"); //load image
    img3 = loadImage("background-img.png"); //load image
    img4 = loadImage("polar-bear.png"); //load image
    
    myCanvas.mouseOver(nightBack);
    myCanvas.mouseOut(dayBack);
}

function draw() {
    // statements here

    noStroke();
    //background(255);
    fill(255);
    ellipse(starX, starY, 10, 10);
    starX++;
    starY -= .1;
}

function nightBack() {
    /*loadImage("background-img2.png", function (img1) {
        image(img1, 0, 0, img.width / 4, img.height / 4);
    });
    loadImage("polar-bear.png", function (img2) {
        image(img2, x + 300, y - 10, img.width / 3, img.height / 3);
    });*/
    image(img, 0, 0, img.width / 4, img.height / 4);
    image(img2, x + 300, y - 10, img2.width / 3, img2.height / 3);
}

function dayBack() {
    /*loadImage("background-img.png", function (img3) {
        image(img3, 0, 0, img.width / 4, img.height / 4);
    });
    loadImage("polar-bear.png", function (img4) {
        image(img4, x, y, img.width / 2, img.height / 2);
    });*/
    image(img3, 0, 0, img3.width / 4, img3.height / 4);
    image(img4, x, y, img4.width / 2, img4.height / 2);
}
