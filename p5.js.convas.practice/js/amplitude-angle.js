
var amplitude = 100;
var angle = 0.0;

function setup() {

  createCanvas(windowWidth, windowHeight);

}

function draw() {

  background(0);
  translate(width / 2, height / 2);
  stroke(255);
  fill(150);

  x = amplitude * sin(angle);

  line(0,0,x,0);
  ellipse(x,0,36,36);

  angle += 0.15;
}