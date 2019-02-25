
var bubbles = [];
var count;

function setup() {

	createCanvas(windowWidth, windowHeight);

	count = 10;

	for(var i = 0; i < count; i++)
		bubbles[i] = new severalbubblesclass();

}

function mouseDragged(){
	if(!(mouseX > width - 100 || mouseX < 100 || mouseY > height - 100 || mouseY < 100)){
		bubbles.push(new severalbubblesclass(mouseX, mouseY));
		count++;
	}
}

function draw() {

	background(0);
	for(var i = 0; i < count; i++){
		if(bubbles[i].contains(mouseX, mouseY)){
			bubbles[i].changeColor('#fff');
		}
		else{
			bubbles[i].changeColor('#f5d');
		}
		if(mouseIsPressed){
			
		}
		bubbles[i].move();
		bubbles[i].show();
	}
	
}

function mousePressed(){
	count1 = bubbles.length;
	for(var i = 0; i < count1; i++){
		if(bubbles[i].contains(mouseX, mouseY)){
			bubbles.splice(i, 1);
			count--;
		}
	}
}
