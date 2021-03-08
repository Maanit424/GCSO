
var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

speed=random(55,150);
weight=random(500,1300)

 car=createSprite(50, 200, 50, 50);
car.velocityX = speed;

wall=createSprite(1000,200,60,height/2);
wall.shapeColor=(80,80,80);

}

function draw() {
  background(0);  

if(wall.x-car.x < (car.width+wall.width)/2)
{
  car.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22509;
  if(deformation>180)
  {
    car.shapeColor=color("red");
  }

  if(deformation<180 && deformation>100) {
  car.shapeColor=color("green"); 
}
  if(deformation<100)
  {
    car.shapeColor=color("yellow");
  }

  }
  drawSprites();
}