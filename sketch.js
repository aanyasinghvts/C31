const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var divisionHeight= 300;
var particles= [];
var plinkos= [];
var divisions= [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);
  
}

function draw() {
  background("black"); 
  Engine.update(engine);

  drawSprites();
}