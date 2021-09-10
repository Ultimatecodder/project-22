
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload{
	var ball_options={
	inStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2	
}




function setup() {
	createCanvas(850, 750);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
Matter.Bodies.circle
}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



