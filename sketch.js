const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var bgImg;
var engine,world;
var snow=[];

function preload(){
  bgImg=loadImage('snow2.jpg')
}
function setup() {
  engine=Engine.create();
  world=engine.world;
  createCanvas(800,400);
  
}
function draw() {
  Engine.update(engine);
  background(bgImg);
  if(frameCount%5===0)  {
    snow.push(new Snow(random(0,800),0,20));
  }
   for(var i = 0; i<snow.length;i++){
     snow[i].display()
   }
  drawSprites();
}
