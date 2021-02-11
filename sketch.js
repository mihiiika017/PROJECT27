
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	bobObject1 = createSprite(50,50,50,50);
	bobObject2 = createSprite(100,100,50,50);
	bobObject3 = createSprite(150,150,50,50);
	bobObject4 = createSprite(200,200,50,50);
	bobObject5 = createSprite(250,250,50,50);
	bobObject1.shapeColor, bobObject2.shapeColor, bobObject3.shapeColor, bobObject4.shapeColor, bobObject5.shapeColor = "pink";
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



