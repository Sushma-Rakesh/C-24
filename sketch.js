
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;

var angle = 60
var wedge ;

var engine,world


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  ground = Bodies.rectangle(200,400,500,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

   wedge = Bodies.rectangle(100,200,100,20,ground_options)
   World.add(world,wedge);
   wedge2 = Bodies.rectangle(300,200,100,20,ground_options)
   World.add(world,wedge2);
  
  ground1 = Bodies.rectangle(400,200,20,500,ground_options);
  World.add(world,ground1);
  ground2 = Bodies.rectangle(0,200,20,500,ground_options);
  World.add(world,ground2);
  ground3 = Bodies.rectangle(200,0,500,20,ground_options);
  World.add(world,ground3);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
 
  Matter.Body.rotate(wedge,angle)
  push()

  translate(wedge.position.x,wedge.position.y)
  rotate(angle)
  rect(0,0,100,20)

  pop()

  push()

  translate(wedge2.position.x,wedge2.position.y)
  rotate(angle)
  rect(0,0,100,20)

  pop()

  angle+=0.1
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,500,20);
  rect(ground1.position.x,ground1.position.y,20,390);
  rect(ground2.position.x,ground2.position.y,20,390);
  rect(ground3.position.x,ground3.position.y,390,20);
 
console.log(ground.position.y);

  
  
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05}); 
}
  