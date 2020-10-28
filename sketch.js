const Engine = Matter.Engine;   
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var sling, polygon;

var ground1, ground2;

var box11, box12, box13, box14, box15;
var box21, box22, box23, box24;
var box31, box32, box33;
var box41, box42;
var box51;

var score;
var bg;

var backgroundImage;

var bgSprite;

function setup() {
  createCanvas(1365,620);
  engine = Engine.create();
  world = engine.world
  getTime();

  bgSprite = createSprite(0,0,3000, 1500);


  var options = {
    density: 2
  }
  polygon = Bodies.circle(200, 200, 30, options)
  World.add(world, this.polygon)

  ground1 = new Ground(800, 350, 200, 30)
 
  ground2 = new Ground(800, 600, 1365, 40) 
  
  box11 = new Box(780, 300, 30, 40);
  box12 = new Box(790, 300, 30, 40);
  box13 = new Box(800, 300, 30, 40);
  box14 = new Box(810, 300, 30, 40);
  box15 = new Box(820, 300, 30, 40);

  box21 = new Box(785, 285, 30, 40);
  box22 = new Box(795, 285, 30, 40);
  box23 = new Box(805, 285, 30, 40);
  box24 = new Box(815, 285, 30, 40);

  box31 = new Box(780, 270, 30, 40);
  box32 = new Box(790, 270, 30, 40);
  box33 = new Box(800, 270, 30, 40);

  box41 = new Box(780, 255, 30, 40);
  box42 = new Box(790, 255, 30, 40);

  box51 = new Box(800, 240, 30, 40);

  score = 0

  sling = new SlingShot(this.polygon, {x:250, y:150});
}

function draw() {  
  
  Engine.update(engine);
  background(0);
  drawSprites();
  
  ground1.display();
  ground2.display();
  sling.display();

  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();

  box21.display();
  box22.display();
  box23.display();
  box24.display();

  box31.display();
  box32.display();
  box33.display();

  box41.display();
  box42.display();

  box51.display();

  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();

  box21.score();
  box22.score();
  box23.score();
  box24.score();

  box31.score();
  box32.score();
  box33.score();

  box41.score();
  box42.score();

  box51.score();

  

  ellipse(this.polygon.position.x, this.polygon.position.y, 30)

  text("Score: " + score, 750, 40);
 

}

function mouseDragged (){
  Matter.Body.setPosition(this.polygon, { x: mouseX, y: mouseY });
}

function mouseReleased () {
  sling.fly();
}

function keyPressed(){
  if(keyCode == 32){
    sling.attach(this.polygon)
  }
}

async function getTime(){
   var response = await fetch("http://worldtimeapi.org/api/ip");
   var jsonResponse = await response.json();
   var datetime = jsonResponse.datetime;
   var hour = datetime.slice(11, 13);
   //var hour = 07
   console.log(hour);
   if(hour >= 06 && hour<= 19){
     bg ="#FFDB00"
   } else {
     bg = "#191970"
   }
   bgSprite.shapeColor = bg;

}

