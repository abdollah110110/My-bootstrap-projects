
var angle = 0;

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	angleMode(DEGREES);
}

function draw(){
	background(0);
	noStroke();
	
	push();
	rectMode(CENTER);
	translate(100, 100);
	rotate(angle);
	fill('yellow');
	rect(0, 0, 200, 100); 
	pop();
	
	push();
	fill('red');
	rectMode(CENTER);
	translate(700, 300);
	rotate(-angle * 2);
	rect(0, 0, 200, 100); 
	pop();

	stroke(255);
	strokeWeight(2);
	translate(500, 500);
	rotate(angle * 0.2);
	line(0, 0 , 200, 200);

	angle += 1;
}



