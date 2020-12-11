var fixedRect, movingRect,o1,o2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  newRect =createSprite(300,300,80,30);
  newRect.shapeColor = "red";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  // function call
  console.log(isTouching(newRect,movingRect));
  
  drawSprites();
}
function isTouching(o1,o2) {
  if (o1.x - o2.x < o2.width/2 + o1.width/2
    && o2.x - o1.x < o2.width/2 + o1.width/2
    && o1.y - o2.y < o2.height/2 + o1.height/2
    && o2.y - o1.y < o2.height/2 + o1.height/2) {
  //movingRect.shapeColor = "red";
  //fixedRect.shapeColor = "red";
  return true;
}
else {
  //movingRect.shapeColor = "green";
  //fixedRect.shapeColor = "green";
  return false;
}
}