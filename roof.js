class Roof{
constructor(x,y){
   var options={
       isStatic:true
   }
this.body=Bodies.rectangle(x,y,650,50,options)
this.width=650;
this.height=40;
World .add(world,this.body)
}
display(){
    var pos=this.body.position;
    //rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
}
}