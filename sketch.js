var tower,towerimg,door,doorimg,doorgp,gamestate="play";
var climber,climberimg,climbergp,ghost,ghostimg;
function preload (){
towerimg=loadImage("tower.png");
doorimg=loadImage("door.png");
climberimg=loadImage("climber.png");
ghostimg=loadImage("ghost-standing.png");
}

function setup(){
createCanvas(600,600);
tower=createSprite(300,300) ;
tower.addImage("tower",towerimg);
tower.velocityY=1;
 
ghost=createSprite(200,200,50,50);
ghost.addImage(ghostimg);
ghost.scale=0.3;
  
doorgp= new Group();
climbergp=new Group();
}

function draw(){
background(0);  
if(gamestate==="play") {
  
    
if(tower.y>400){
  tower.y=300
}

if(keyDown("left_Arrow")){
  ghost.x=ghost.x-3;
}
if(keyDown("right_Arrow")){
  ghost.x=ghost.x+3;
} 
if(keyDown("space")){
  ghost.velocityY=-5;
}
ghost.velocityY=ghost.velocityY+0.8;
  
  spawndoors();
}  
  
if(doorgp.isTouching(ghost)||climbergp.isTouching(ghost)){
 gamestate="end";
  ghost.destroy();
  tower.destroy();
  climbergp.destroyEach();
  doorgp.destroyEach();
 
}
if(gamestate==="end"){
  textSize(30);
  text("Gameover",300,300); 

} 
  
drawSprites();
}

function spawndoors(){
if(frameCount%240===0){
door=createSprite(200,-50);
climber=createSprite(200,10);
door.addImage("door",doorimg);
climber.addImage("climber",climberimg);
door.velocityY=1;
climber.velocityY=1;
door.x=Math.round(random(120,400));
climber.x=door.x;
door.lifetime=800;
climber.lifetime=800;
doorgp.add(door);
climbergp.add(climber);
ghost.depth=door.depth;
ghost.depth=ghost.depth+1;
   }
}