
function setup() {

  createCanvas(windowWidth, windowHeight);

	  background(0);

}

function draw() {

	background(0);

	for(var x = 0; x <= width; x += 50){
		for(var y = 0; y <= height; y += 50){
			stroke(random(50, 150), 0, 255);
			line(mouseX, mouseY, x, y);
		}
	}
  
}