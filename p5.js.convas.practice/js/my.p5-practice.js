
var ellipseX;
var ellipseY;
var step;

function setup() {

	createCanvas(windowWidth, windowHeight);

	background(0);

	ellipseX = width / 2;
	ellipseY = height / 2;

}

function draw() {

	fill(random(100, 150), 0, 255);
	ellipse(ellipseX, ellipseY, 30, 30);

	ellipseX += random(-10, 10);
	ellipseY += random(-10, 10);
	
  
}