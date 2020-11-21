class Bob{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x=x;
        this.y=y;

        this.r=40;

        this.body = Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body)
    }
    display(){
        var bobPos=this.body.position;
        push()
        translate (bobPos.x,bobPos.y)
        fill("purple")
        ellipseMode(RADIUS);
      ellipse(0,0,this.r,this.r);
       pop ()

    }
}
