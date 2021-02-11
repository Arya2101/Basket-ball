const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const World = Matter.World;
var engine;
var world;
var b;
var g1;
var g2;
var g3;
var g4;
var gameState = "ONSLING";
var bg;
var chain1;
var basket1;
var basket2;
var basket3;
var basket4;
var basketImage;
var score = 0;
var invisibleBall;
var gameState2 = "PLAY";
var i1, i2, i3, i4, i5, i6, i7, i8;

function preload(){
  bg = loadImage("bg.PNG");
  basketImage = loadImage("basket-removebg-preview.png");
}

function setup() {
createCanvas(1300,600);

engine = Engine.create();
world = engine.world;

b = new ball(1100,300);

chain1 = new chain(b.body,{x:1100,y:300});

basket1 = createSprite(60,75,50,50);
basket1.addImage(basketImage);
basket1.scale = 0.35;
basket1.velocityX = 5;

basket2 = createSprite(60,180,50,50);
basket2.addImage(basketImage);
basket2.scale = 0.35;
basket2.velocityY = 3;

basket3 = createSprite(200,415,50,50);
basket3.addImage(basketImage);
basket3.scale = 0.35;
basket3.velocityX = 4;

basket4 = createSprite(650,585,50,50);
basket4.addImage(basketImage);
basket4.scale = 0.35;
basket4.velocityY = 4.5;

i1 = createSprite(720,100,10,200); 
i1.visible = false;
i2 = createSprite(10,100,10,200);
i2.visible = false;
i3 = createSprite(100,120,200,10);
i3.visible = false;
i4 = createSprite(100,500,200,10);
i4.visible = false;
i5 = createSprite(540,400,10,200);
i5.visible = false;
i6 = createSprite(150,400,10,200);
i6.visible = false;
i7 = createSprite(650,230,200,10);
i7.visible = false;
i8 = createSprite(650,600,200,10);
i8.visible = false;

invisibleBall = createSprite(10,10,15,15);
invisibleBall.visible = false;

g1 = new ground(650,597,1300,5);
g2 = new ground(650,3,1300,5);
g3 = new ground(3,300,5,600);
g4 = new ground(1297,300,5,600);


}
function draw() {
  
  background(bg);

  textSize(25);
  fill("black");
  stroke(3);
  text("SCORE: "+score,1100,30);

  Engine.update(engine);
  
  text("Drag your mouse to put the ball into the basket",770,580);
  text("Press space to get more chances",10,580);

  invisibleBall.x = b.body.position.x;
  invisibleBall.y = b.body.position.y;

  b.display();
  g1.display();
  g2.display();
  g3.display();
  g4.display();
  chain1.display();
  
  drawSprites();
if(gameState2 == "PLAY"){
    basket1.bounceOff(i1);
    basket1.bounceOff(i2);
    basket2.bounceOff(i3);
    basket2.bounceOff(i4);
    basket3.bounceOff(i5);
    basket3.bounceOff(i6);
    basket4.bounceOff(i7);
    basket4.bounceOff(i8);
  
  if(basket1.isTouching(invisibleBall)){
    score = score+10;
    gameState2 = "END";
  }
  if(basket2.isTouching(invisibleBall)){
    score = score+40;
    
    gameState2 = "END";
    }
  if(basket3.isTouching(invisibleBall)){
    score = score+30;
    
    gameState2 = "END";
    }
  if(basket4.isTouching(invisibleBall)){
    score = score+20; 
     gameState2 = "END";
    }
    if(gameState2 !== "PLAY"){
      basket1.velocityX = 0;
      basket2.velocityY = 0;
      basket3.velocityX = 0;
      basket4.velocityY = 0;
      
    }

}
}
function mouseDragged(){
  if(gameState == "ONSLING")
      Matter.Body.setPosition(b.body,{x:mouseX,y:mouseY});
  
  
  }
function mouseReleased(){
   chain1.fly();
   gameState = "LAUNCHED"; 
}
function keyPressed(){
  if(keyCode === 32){
     chain1.attach(b.body);
     Matter.Body.setPosition(b.body,{x:1100,y:300});
      b.body.speed = 0;
      gameState = "ONSLING";
      
  basket1.velocityX = 5;
  basket2.velocityY = 3;
  basket3.velocityX = 4;
  basket4.velocityY = 4.5;
  gameState2 = "PLAY";
    }
}
