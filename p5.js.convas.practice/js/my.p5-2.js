
var canvas = function(p) {
	
	p.setup = function(){
		
		var width = $('#parent-canvas').innerWidth(); 
		var height = width / 2;	
		
		p.createCanvas(width, height);
		p.background('red');
		p.fill('yellow');
		
	}
	
	p.windowResized = function() {
		
		var width = $('#parent-canvas').innerWidth(); 
		var height = width / 2;
		
		p.resizeCanvas(width, height);
		p.background('#00a');
		
	}	
	
	p.draw = function() {
				
		if(p.mouseIsPressed){
			p.fill('green');
			p.background('orange');
			p.rect(100, 100, p.mouseX, p.mouseY);
		}
		else{
			p.fill('orange');
			p.background('green');
			p.rect(100,100, p.mouseX, p.mouseY);
		}
		
	}

	
};
new p5(canvas, window.document.getElementById('canvas'));

