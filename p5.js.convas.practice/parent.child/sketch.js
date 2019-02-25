
var array = [];
var p;
var button;

function setup() {
	noCanvas();
	p = createP('This is a paragraph contain several link:');
	for(var i = 0; i < 10; i++){
		array[i] = createA('#', ' link'+i);
		array[i].parent(p);
	}
	button = createElement('button', 'clear links');
	button.mouseClicked(clearAllLinks);
}

function clearAllLinks(){
	for(var i = 0; i < array.length; i++){
		array[i].remove();
	}	
	array = [];
}


