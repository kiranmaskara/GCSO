var car,wall;
var speed,weight,rating;
var deformation;
function setup() {
  createCanvas(1200,600);
  
  car=createSprite(50,200,50,50);
  wall=createSprite(1100,100,50,250);
  wall.shapecolor=color(80,80,80);
  speed=random(55,90);
weight=random(400,1500);
}

function draw() {
  background("black");  
  
    
    car.velocityX = speed;
    if(wall.x-car.x<wall.width/2+car.width/2){
      car.velocityX=0;
      deformation = Math.round(0.5*weight*speed*speed/22500);
      if(deformation>=180){
        car.shapeColor=random(230,230,0);
        

      }
    if(deformation<80){
      car.shapeColor=rgb(0,255,0);
      
    }
    
    
      if(deformation>=180){
        car.shapeColor=rgb(230,230,0);

      }
      if(deformation<80){
      car.shapeColor=rgb(0,255,0);
    
    }
   
    }
  drawSprites();
}