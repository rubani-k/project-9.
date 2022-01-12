var box 

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,25,25);
  createEdgeSprites()
}

function draw() 
{
  background("yellow");

  if(keyIsDown(RIGHT_ARROW))
    {
     background("red");
     box.velocityX =+ 3;
    }
  if(keyIsDown(LEFT_ARROW))
  {
    background("green");
    box.velocityX =- 3;
  }
  if(keyIsDown(UP_ARROW))
  {
    background("blue");
    box.velocityY =- 3;
  }
  if(keyIsDown(DOWN_ARROW))
  {
    background("purple");
    box.velocityY =+ 3;
  }

  
  drawSprites();
}




