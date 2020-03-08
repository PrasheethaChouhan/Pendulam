const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var rect1, rect2;


function setup() 
{
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  rect1 = new Bird(100,100);
  rect2 = new Log(200,180,80,PI/2);

  chain = new Chain(rect1.body,rect2.body);
}

function draw() 
{
  background("black");
  Engine.update(engine);
  rect1.display();
  rect2.display();
  chain.display();  
  drawSprites();
}