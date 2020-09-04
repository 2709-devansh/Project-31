var g1,g2,g3,g4;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 200;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
  createCanvas(480,670);
  engine = Engine.create();
  world = engine.world;

  g1 = new ground(240,670,480,20);
  g2 = new ground(0,335,5,670);
  g3 = new ground(240,0,480,5);
  g4 = new ground(480,335,5,670);

  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new division(k, height-divisionHeight/2, 5, divisionHeight));
  }

  for(var j = 15; j <= width-10; j = j + 50){
    plinkos.push(new plinko(j, 175,7));
  }
  for(var j = 40; j <= width; j = j + 50){
    plinkos.push(new plinko(j, 75,7));
  } 
  for(var j = 40; j <= width-20; j = j + 50){
    plinkos.push(new plinko(j, 275,7));
  } 
  for(var j = 15; j <= width; j = j + 50){
    plinkos.push(new plinko(j, 375,7));
  } 

  Engine.run(engine);  
}

function draw() {
  background(0);
  g1.display(); 
  g2.display();
  g3.display(); 
  g4.display();
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  
  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  if(frameCount%60===0){
    particles.push(new particle(random(width/2-10,width/2+10),7,7))
  }
  for(var l = 0; l < particles.length; l++){
    particles[l].display();
  }
   
  drawSprites();
}