class BOB{
    constructor(x,y){
         var ops = {
            isStatic:true
        }

        this.bob = Bodies.rectangle(x,y,500,50,ops);
        this.w = 500;
        this.h = 50;
        World.add(world,this.bob); 
        
    }

    display(){
        var pos = this.bob.position
        push() 
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h); 
        pop() 
    }
}