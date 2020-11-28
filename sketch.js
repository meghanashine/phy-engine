const  World  = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
var ball

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

var ground_options = {
  isStatic : true
}

ground = Bodies.rectangle(200,390,200,20,ground_options);
World.add(world,ground);

var ball1_options = {
  restitution : 1
}

ball1=Bodies.circle(200,100,20,ball1_options);
World.add(world,ball1);

var ball2_options = {
  restitution : 0.8
}

ball2=Bodies.circle(200,80,15,ball2_options);
World.add(world,ball2);

var ball3_options = {
  restitution : 0.7
}

ball3=Bodies.circle(200,120,10,ball3_options);
World.add(world,ball3);
//console.log(object);
}

function draw() {
background(0);  
Engine.update(engine);
rectMode(CENTER);
fill("brown");
rect (ground.position.x,ground.position.y,400,50);

ellipseMode(RADIUS)
fill ("red");
ellipse( ball1.position.x,ball1.position.y,20,20 )
fill ("yellow");
ellipse( ball2.position.x,ball2.position.y,15,15 )
fill ("green");
ellipse( ball3.position.x,ball3.position.y,10,10 )
}