
var amplitude = 100;
var period = 100;
var x;

function setup() {

  createCanvas(windowWidth, windowHeight);

}

function draw() {

  background(0);
  translate(width / 2, height / 2);
  stroke(255);
  fill(150);

  x = amplitude * sin((frameCount / period) * TWO_PI);

  line(0,0,x,0);
  ellipse(x,0,36,36);


}