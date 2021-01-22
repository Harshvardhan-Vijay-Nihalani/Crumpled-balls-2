
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var paper;
var engine;
var world;
var basketPart1;
var basketPart2;
var basketPart3;
var downGround, rightGround, leftGround, topGround;
var trashCanPicture;
var trashCanOnPagePicture;

function preload(){
	trashCanPicture=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);

 
	engine = Engine.create();
	world = engine.world;
	

	//Create the Bodies Here.
	downGround = new Ground(400, 690, 800, 20);
	rightGround = new Ground(790, 350, 20, 9000);
	leftGround = new Ground(10, 350, 20, 9000);
	topGround = new Ground(400, 10, 800, 20);
	basketPart1= new Ground(650, 350, 10, 100);
	basketPart2= new Ground(680, 395, 80, 10);
	basketPart3= new Ground(710, 350, 10, 100);

	paper = new Paper(30,30);
	sling= new SlingShot(paper.body, {x:100, y:350});

	trashCanOnPagePicture=new Bin(680,350);

	Engine.run(engine);
  
}


function draw() {
 
  background("lightblue");

  if(keyCode===32){
	Matter.Body.setPosition(paper.body, { x: 100, y: 350 });
	sling.attach(paper.body);
	
  }
  paper.display();
  sling.display();
  downGround.display();
  rightGround.display();
  leftGround.display();
  topGround.display();
  basketPart1.display();
  basketPart2.display();
  basketPart3.display();
  drawSprites();
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:25,y:-20});
		sling.fly();
	}
}


function mouseDragged(){

    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}