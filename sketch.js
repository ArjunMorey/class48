var player ,playerImg;
var road,roadImg;
var pin,pinImg;
var coin,coinImg;
var PLAY=1;
var END=0;
var gameState=PLAY;
var coinGroup;
var pinGroup;
var score=0;

function preload(){
 playerImg=loadAnimation("Runner-1.png","Runner-2.png");
 roadImg=loadImage("road.png");
 coinImg=loadImage("coin2.png");
 pinImg=loadImage("pin2-removebg-preview.png");
}

function setup() {
  createCanvas(600,660);
road=createSprite(300,300);
road.addImage(roadImg);
road.velocityY=3
road.scale=3;

  
  player=createSprite(200, 550, 50, 50);
  player.addAnimation("running",playerImg);
  player.scale=0.15;
  player.debug=false;
  player.setCollider("circle",0,0,500);
 pinGroup=new Group();
  coinGroup=new Group();
}

function draw() {
  background(255,255,255);
  
  if(gameState===PLAY){
  if(road.y>500){
    road.y=400;
  }
  if(keyDown("left"))
  {
    player.x=player.x-3;
  }
  if(keyDown("right"))
  {
    player.x=player.x+3;
  }
  spawnCoins();
  spawnPins();
  if(coinGroup.isTouching(player))
  {
    coinGroup.destroyEach();
     score=score+1;
  }

  if(pinGroup.isTouching(player))
  {
    player.destroy();
     gameState=END;
  }
 
  drawSprites();

  textSize(30);
  fill("yellow");
  text("score :"+score,200,40);
}
if(gameState===END){

  textSize(50);
  fill("black");
  text("GameOver",300,400);
  road.velocityY=0;

 pinGroup.setLifetimeEach(-1);
 coinGroup.setLifetimeEach(-1);
 pinGroup.setVelocityEach(0);
 coinGroup.setVelocityEach(0);


}
  
} 
function spawnCoins(){
if (frameCount % 200 === 0) {
var coin = createSprite(Math.round(random(100,500),60,10,25));
coin.addImage(coinImg);
coin.velocityY=3
coin.scale=0.1;
coin.debug=false;
coin.lifetime=300;
coinGroup.add(coin)

}

}
function spawnPins(){
  if (frameCount % 300 === 0) {
  var pin = createSprite(Math.round(random(100,500),60,10,25));
  pin.addImage(pinImg);
  pin.velocityY=3
  pin.scale=0.3;
  pin.lifetime=300;
  pin.debug=false;
  pin.setCollider("circle",0,0,230);
  pinGroup.add(pin)
  
  }
  
  }             

                                                                                    