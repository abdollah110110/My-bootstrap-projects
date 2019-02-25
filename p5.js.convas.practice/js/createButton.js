
var canvas;
var h1;
var p;
var textbox;
var slider;
var button;

function setup() {

	canvas = createCanvas(windowWidth, windowHeight - 200);
	canvas.position(0, 0);

	background(0);
	noStroke();
	fill(200);

	h1 = createElement('h1', 'ایجاد المنتهای html با دستورات p5js');
	h1.position(windowWidth / 2, windowHeight / 10);

	p = createElement('p', 'با کلیک کردن روی بوتون رنگ زمینه کنوس تغییر میکند.');
	p.position(windowWidth / 2, windowHeight / 5 + 15);
	
	textbox = createInput('نام خود را وارد کنید...');
	textbox.position(windowWidth / 2, windowHeight - 150);
	
	slider = createSlider(10, 24, 64);
	slider.position(windowWidth / 2, windowHeight - 120);
	
	button = createButton('click me');
	button.position(windowWidth / 2, windowHeight / 3);
	
	button.mousePressed(changeColor);
	canvas.mouseClicked(rectChangeColor);
	p.mouseOver(mouseOverText);
	p.mouseOut(mouseOutText);
	textbox.input(changeTextP);
	h1.mouseOver(changeStyle);
	h1.mouseOut(reverStyle);
	slider.mousePressed(changeSize);

}

function changeSize(){
	p.style('font-size', slider.value() + 'px');
}

function changeStyle(){
	h1.style('padding','15px');
	h1.style('color','red');
	h1.style('background-color','yellow');
}

function reverStyle(){
	h1.style('padding','10px');
	h1.style('color','white');
	h1.style('background-color','blue');
}

function changeTextP(){
	p.html(textbox.value());
}

function mouseOverText(){
	p.html('MouseOver');
	p.style('padding','15px');
	p.style('color','red');
	p.style('background-color','yellow');
}

function mouseOutText(){
	p.html('MouseOut');
	p.style('padding','10px');
	p.style('color','red');
	p.style('background-color','pink');
}

function rectChangeColor(){
	fill(random(255),random(255),random(255));
}

function changeColor(){
	background(random(255),random(255),random(255));
}

function draw() {
	rect(50, 50, width / 2 - 100, height - 100);
	if(textbox.value() != null || textbox.value() != 'نام خود را وارد کنید...'){
		text(textbox.value(), 300, 40);
	}
}

