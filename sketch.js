
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1;
var roop1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create(); //World
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new BOB(400,200);
	roop1 = new ROOP(200,400,60,60,60);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  //Engine.update(myengine);
  bob1.display();
  roop1.display();
  
 // drawSprites();
 
}



