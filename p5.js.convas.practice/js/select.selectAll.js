
var paragraph;
var anotherParagraph;
var paragraphs;
var allP;
var fruits = ['apple','blueberry','banana','lemon','cherry'];
var canvas;

function setup() {
	canvas = createCanvas(windowWidth / 3, windowHeight / 5);
	background(0);
	fill('yellow');
	text('This is canvas', 50, 50);
	canvas.parent('#p1');

	paragraph = select('#p1');
	paragraph.style('font-size','30px');

	paragraphs = selectAll('.allClass');
	for(var i=0; i < paragraphs.length; i++){
		paragraphs[i].style('color','red');
	}

	allP = selectAll('p');
	for(var i = 0; i < allP.length; i++){
		allP[i].mouseOver(hilightIn);
		allP[i].mouseOut(hilightOut);
	}

	anotherParagraph = select('.another');
	anotherParagraph.mouseOver(hilightIn);
	anotherParagraph.mouseOut(hilightOut);

	var button = select('#add');
	button.mousePressed(addFrouits);

	var button2 = select('#addInCanvas');
	button2.mousePressed(addToCanvas);

}

function addToCanvas(){
	var fruitIndex = floor(random(0, fruits.length));
	background(0);
	text(fruits[fruitIndex], random(30,width-30), random(30,height-30));
}

function addFrouits(){
	var fruitIndex = floor(random(0, fruits.length));
	var li = createElement('li', fruits[fruitIndex]);
	li.parent('#list');
}

function hilightIn(){
	this.style('background','orange');
	this.style('color','black');
}

function hilightOut(){
	this.style('background','white');
	this.style('color','red');
}

