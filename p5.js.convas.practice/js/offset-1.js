
var offset = 0;

function setup() {

  createCanvas(windowWidth, windowHeight);

	  background(0);

}

function draw() {

	background(0);

	for(var x = 0; x <= width; x = x + 50){
		fill(random(255), 0, 255);
		ellipse(x + offset, height / 2, 30, 30);
	}

	offset++;
  
}