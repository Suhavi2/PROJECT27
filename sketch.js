
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
bobDiameter=40;

	//Create the Bodies Here.
 roofObject=new Roof(430,30,650,40)

 bobObject1=new Bob(220,50,34)
 bobObject2=new Bob(298,50,34)
 bobObject3=new Bob(379,50,34)
 bobObject4=new Bob(460,50,34)
 bobObject5=new Bob(541,50,34)
 rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,bobDiameter)
 rope2=new Rope(bobObject2.body,roofObject.body,-bobDiameter*2,0,bobDiameter)
 rope3=new Rope(bobObject3.body,roofObject.body,-bobDiameter*2,0,bobDiameter)
 rope4=new Rope(bobObject4.body,roofObject.body,-bobDiameter*2,0,bobDiameter)
 rope5=new Rope(bobObject5.body,roofObject.body,-bobDiameter*2,0,bobDiameter)




 



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  drawSprites();
 
}



