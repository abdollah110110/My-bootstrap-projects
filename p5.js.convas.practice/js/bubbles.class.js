
class bubble{

	constructor(x, y, r){
		this.x = x;
		this.y = y;
		this.r = r;
	}

	move(){
		this.x = this.x + random(-5, 5);
		this.y = this.y + random(-5, 5);
	}

	randomFill(){
		fill(random(255), random(255), random(255));
	}
	
	show(){
		stroke(255);
		strokeWeight(2);
		this.randomFill();
		ellipse(this.x, this.y, this.r, this.r);
	}

}