
function setup() {

  createCanvas(windowWidth, windowHeight);

	  background(0);

}

function draw() {

	for(var x = 0; x <= width; x = x + 50){
		fill(x, 100, 200);
		ellipse(x, height / 2, 30, 30);
	}
  
}