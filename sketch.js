var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(100,100,50,60);
  rect1.shapeColor = "green";
rect2= createSprite(200,100,50,60);
rect2.shapeColor = "green";
rect3 = createSprite(300,100,50,60);
rect3.shapeColor = "green";
rect4 = createSprite(400,100,50,60);
rect4.shapeColor = "green";
movingRect.velocityX=10;
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  
  //if(bounceoff(movingRect,rect1)){
   // movingRect.shapeColor = "red";
    //fixedRect.shapeColor = "red";

 // }
 // else{
   // movingRect.shapeColor = "green";
    //fixedRect.shapeColor = "green";
  //}

 bounceoff(movingRect,fixedRect); 
  drawSprites();
}

