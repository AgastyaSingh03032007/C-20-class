var agastya,mam;


function setup() {
  createCanvas(800,400);
  agastya=createSprite(400, 200, 50, 50);
  mam=createSprite(300,300,50,50);
  agastya.shapeColor="Blue";
  mam.shapeColor="Orange";
}

function draw() {
  background(255,255,255);  
  agastya.x=World.mouseX;
  agastya.y=World.mouseY;
  console.log(agastya.x-mam.x);
  if(agastya.x-mam.x<agastya.width/2+mam.width/2 &&
     mam.x-agastya.x<agastya.width/2+mam.width/2 &&
      agastya.y-mam.y<agastya.height/2+mam.height/2 &&
      mam.y-agastya.y<agastya.height/2+mam.height/2){
    
    agastya.shapeColor="red";
  mam.shapeColor="red";
  }
  else{
    agastya.shapeColor="Blue";
  mam.shapeColor="Orange";
  }
  drawSprites();
}