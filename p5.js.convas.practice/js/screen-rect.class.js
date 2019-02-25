
class screenrectclass{

    show(){
        for(var i = 0; i < width; i += 20){
            for(var y = 0; y < width; y += 20){
                fill(random(255));
                rect(i, y, 20, 20);
            }
        }
    }

}