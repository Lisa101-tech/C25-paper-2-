
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground, trashcan1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  background("black")

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,630,1200,20)
	
	trashcan1 = new Trashcan(500,570.5,15,100);
	trashcan2 = new Trashcan(580,613,170,15);
	trashcan3 = new Trashcan(670,570.5,15,100);

	paper = new CrumpledPaper(200,200,25)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();

  trashcan1.display();
  trashcan2.display();
  trashcan3.display();

  paper.display();
 keyPressed();
drawSprites();
 }

 function keyPressed(){
   if (keyCode===UP_ARROW){
     Matter.Body.applyForce(paper.body,paper.body.position,{x:85, y:85});
   }
 }
Matter



