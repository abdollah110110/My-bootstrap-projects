
var link;

function setup() {
	noCanvas();
	for(var i = 0; i < 10; i++){
		link = createA('#', 'Link ' + i);
		link.position(random(100, 900), random(100, 300));
		link.mouseClicked(addBgRed);
	}
}

function addBgRed(){
	this.addClass('bg-red');
	this.mouseClicked(removeBgRed);
}

function removeBgRed(){
	this.removeClass('bg-red');
}


