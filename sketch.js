const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,680,800,20);
	
	paper = new Paper(50,670,15);

	binSide1 = new Bin(615,645,15,50);
	binSide2 = new Bin(741,645,15,50);
	binBase = new Bin(678,663,110,15);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  paper.display();
  binSide1.display();
  binSide2.display();
  binBase.display();

  keyPressed();
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:1.75,y:-1.75});
	}
}