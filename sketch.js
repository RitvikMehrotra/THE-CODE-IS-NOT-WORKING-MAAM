
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1
var bob2
var bob3
var bob4
var rope1
var rope2
var rope3
var rope4

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1= new BOBS(200,30,40,50);
	bob2= new BOBS(180,30,40,50);
	bob3= new BOBS(160,30,40,50);
	bob4= new BOBS(140,30,40,50);
	
	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob4.display();
  bob3.display();
  bob2.display();
  bob1.display();
  drawSprites();
 
}



