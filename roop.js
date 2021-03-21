class ROOP{
    constructor(x,y,r,w,h){
        var ops = {
            isStatic:true
        }

        this.roop = Bodies.circle(x,y,r,w,h,ops);
        this.width = w;
        this.hight = h;
        this.radius = r; 
        World.add(world,this.roop);
    }

    display(){
        push()
        translate(this.roop.position.x,this.roop.position.y)
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.width,this.hight); 
        pop()
     }
} 