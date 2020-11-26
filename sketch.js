const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,800,480,25);
}

function draw() {
  background(0,0,0);
  for(var k = 0; k <= width; k = k + 80)  {
    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
  }
  for(var d = 40; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j,75));
  }
  for(var b = 30; b <= width-10; b = b + 50) {
    plinkos.push(new Plinko(b,75));
  }
  for(var c = 20; c <= width-20; c = c + 50) {
    plinkos.push(new Plinko(c,75));
  }
  for(var a = 10; a <= width-30; a = a + 50) {
    plinkos.push(new Plinko(a,75));
  }
  for(var e = 0; e < particles.length; e++) {
    particles[e].display();
  }
  for(var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
  for(var j = 0; j < divisions.length; j++) {
    divisions[j].display();
  }
  if(frameCount % 90 === 0) {
    particles.push(new Particle(random(width/2 - 10, width/2 + 10),10,10));
  }
  ground.display();
  drawSprites();
}