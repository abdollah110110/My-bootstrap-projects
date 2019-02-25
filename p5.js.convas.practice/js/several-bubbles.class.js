
class severalbubblesclass{

    constructor(mx, my){
        if(mx == null && my == null){
            this.x = random(100, width - 100);
            this.y = random(100, height - 100);
            this.r = random(40, 100);
        }
        else{
            this.x = mx;
            this.y = my;
            this.r = 75;
        }
        this.stepX = 2;
        this.stepY = 1;
        this.brightness = '#f5d';
    }

    move(){
        if(this.x > (width - 100) || this.x < 100){
            this.stepX *= (-1);
        }
        if(this.y > (height - 100) || this.y < 100){
            this.stepY *= (-1);
        }
        this.x += this.stepX;
        this.y += this.stepY;
    }

    show(){
        stroke(2);
        fill('#f5d');
        fill(this.brightness);
        ellipse(this.x, this.y, this.r, this.r);
    }

    changeColor(clr){
        this.brightness = clr;
    }

    contains(mx, my){
        let d = dist(mx, my, this.x, this.y);
        if(d < this.r){
            return true;
        }
        else{
            return false;
        }
    }

}