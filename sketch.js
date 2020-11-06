
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var dustbin1,dusbin2,dustbin3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(100,780,3)
    dustbin1 = new Dustbin(400,640,20,100)
	dustbin2 = new Dustbin(415,640,200,20)
	dustbin3 = new Dustbin(430,640,20,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display()
dustbin1.display()
dustbin2.display()
dustbin3.display()
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
	}
}


