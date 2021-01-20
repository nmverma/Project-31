
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var ground;
var engine, world;
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=200;
var score =0;
var col = {
  r: 0,
  g: 0,
  b: 0,
}
function setup() {
  var canvas = createCanvas(480,600);
  col.r= random(0,255);
    col.g= random(0,255);
    col.b= random(0,255);
 
  engine = Engine.create();
    world = engine.world;

    ground=new Ground(200,590,600,20);
    for(k=0;k<=width;k=k+80){
      divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  
    }

    for (var j = 20; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 30; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,150));
    }

     for (var j = 10; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,225));
    }

     for (var j = 40; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,300));
    }

 
}

  function draw() {
   
    background(col.r,col.g,col.b);
    
  //background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();
  r = random(255); // r is a random number between 0 - 255
  g = random(100,200); // g is a random number betwen 100 - 200
  b = random(100); // b is a random number between 0 - 100
  a = random(200,255); // a is a random number between 200 - 255
  
 // noStroke();
 var d = random(0, 255);
 var e = random(0, 255);
 var f = random(0, 255);
 
  
 for (var i = 0; i < plinkos.length; i++) {
  fill(d,e,f);
  plinkos[i].display();
  
}
  
   if(frameCount%60===0){
    particles.push(new Particle(random(100, 500), 10,10));
    score++;
  }

 for (var j = 0; j < particles.length; j++) {
 
    particles[j].display();
  }
 
  for (var k = 0; k < divisions.length; k++) {
    fill(r, g, b, a);
    divisions[k].display();
  }
}