const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

//declaring variable
var engine;
var world;
var leftWall;
var rightWall;
var ground;
var bridge;
var jointPoint;
var jointLink;
var stones = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  //creating ground , leftWall , rightWall
  ground = new Base(0,height-10,width * 2, 20, "#795548",true);
  leftWall = new Base(400,height/2+50, 50,100,"#8d6e63",true);
  rightWall = new Base(width-400,height/2+50, 50,100,"#8d6e63",true);

  //creating bridge
  bridge = new Bridge(15,{x:width/2-400,y:height/2});
jointPoint = new Base(width-400,height/2+10,40,20,"#8t6e63",true);

Matter.Composite.add(bridge.body,jointPoint);
jointPoint = new Link(bridge,jointPoint);

for (var i =0 ; i <=8; i++){
var x= random(width/2-200,width /2+300);
var y= random(-10,140);
 var stone = new Stone(x, y ,80,80);
 stones.push(stone);
}
}


function draw() {
  background(51);
  Engine.update(engine);
  ground.show();
  leftWall.show();
  rightWall.show();
  bridge.show();

  for(var stone of stones){
    stone.show();
  }
}

