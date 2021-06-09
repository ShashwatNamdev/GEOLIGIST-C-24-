
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var ground;
var stone;
var rubber;
var iron;
var sandP1;
var sandP2;
var sandP3;
var sandP4;
var sandP5;
var sandP6;
var sandP7;
var sandP8;
var sandP9;
var sandP10;
function preload(){	
}

function setup() {
	createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;
    
    
	//Create the Bodies Here.
    hammer = new Hammer(10,100);
    ground = new Ground(600,600,1200,20);
    stone = new Stone(700,320,100,100);
    rubber = new Rubber(900,450,70);
    iron = new Iron(300,350);
    sandP1 = new SandParticles(505,450,10);
    sandP2 = new SandParticles(510,450,10);
    sandP3 = new SandParticles(515,450,10);
    sandP4 = new SandParticles(520,450,10);
    sandP5 = new SandParticles(525,450,10);
    sandP6 = new SandParticles(515,445,10);
    sandP7 = new SandParticles(520,445,10);
    sandP8 = new SandParticles(525,445,10);
    sandP9 = new SandParticles(530,445,10);
    sandP10 = new SandParticles(535,445,10);
	  Engine.run(engine);
    
}

function draw() {
//   rectMode(CENTER);
  background("lightBlue");
  Engine.update(engine);

  hammer.display();
  ground.display();
  stone.display();
  rubber.display();
  iron.display();
  sandP1.display();
  sandP2.display();
  sandP3.display();
  sandP4.display();
  sandP5.display();
  sandP6.display();
  sandP7.display();
  sandP8.display();
  sandP9.display();
  sandP10.display();
}



