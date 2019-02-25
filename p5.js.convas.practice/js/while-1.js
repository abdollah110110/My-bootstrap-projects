
var x = 20;

function setup() {

  createCanvas(windowWidth, windowHeight);

	  background(0);
	  noStroke();

}

function draw() {

	while(x <= width){
		fill(x,100,200);
		ellipse(x, height / 2, 90, 90);
		x = x + 55;
	}
  
}