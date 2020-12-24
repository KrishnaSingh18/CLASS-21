function bounceoff(object1,object2) {
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2){
         movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red";
     
   object1.velocityX= - object1.velocityX;
  }
  if ( object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2)  {
      movingRect.shapeColor = "greeen";
      fixedRect.shapeColor = "green";
   object1.velocityY= - object1.velocityY;
  }
  
  
  }