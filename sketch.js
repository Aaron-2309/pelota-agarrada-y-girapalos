
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;
var paredizq
var paredder
var girapalo1
var girapalo2
var girapalo3
var angle=60;

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
  
   var pared_options ={
    isStatic: true
   };

  btn2 = createImg('up.png');
  btn2.position(325,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);

  girapalo1 = new Ground(145,300,100,20)
 
  girapalo2 = new Ground(250,300,100,20)

  girapalo3 = new Ground(355,300,100,20)

  paredizq = Bodies.rectangle(10,0,10,3000,pared_options)
  World.add(world,paredizq)

  paredder = Bodies.rectangle(400,390,10,3000,pared_options)
  World.add(world,paredder)

  ground1 = Bodies.rectangle(40,300,100,20,ground_options);
  World.add(world,ground1);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
 
  ground = Bodies.rectangle(100,400,650,20,ground_options);
  World.add(world,ground); 

  con = Matter.Constraint.create({
    pointA:{
      x:200,y:20},
      bodyB:ball,
      pointB: {
      x:0,y:0
      },
      length: 100,
      stiffness: 0.1
  })

  rectMode(CENTER);
  ellipseMode(RADIUS);
  World.add (world,con);
}



function draw() 
{
  background(51);
  Engine.update(engine);
  
  
  Matter.Body.rotate(ground1,angle)
 push();
  translate(ground1.position.x,ground1.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();
  
  angle +=0.1;  

 girapalo1.show();
 girapalo2.show();
 girapalo3.show();


  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,650,20);
  stroke ("white")
  line (con.pointA.x,con.pointB.y,ball.position.x,ball.position.y)
//console.log(ground.position.y);

  
  
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  