var cloudNum; // max number of drops to be drawn on the screen
var clouds = []; // the array holding the CloudFloat objects
var maxSpeed = -8; // max speed of the clouds
var horizon;

var amplitude;
var angle = 0;

var cloud;
var jet;

var yJet = 0;
var yJetSpeed=2;

function setup() {

  createCanvas(windowWidth, windowHeight);
  cloud = loadImage("img/cloud2.png");
  jet = loadImage("img/jet.png");

  amplitude = height/3;
  horizon = -120;

  // Populate the clouds array with CloudFloat objects
  cloudNum = 12;


  for(var i = 0; i < cloudNum; i++){
    clouds.push(new CloudFloat(3));
  }

}

function draw() {

  background(150, 214, 255);

  for(var i = 0; i < clouds.length; i++){
    clouds[i].update();
    clouds[i].draw();
  }

  var d2 = 10 + (sin(angle + PI/2) * (amplitude/3) + amplitude);
  image(jet, (width/2)-80, d2);
  angle += 0.01;

}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
  amplitude = height/3;
  horizon = -120;
}


class CloudFloat{
  // the only input the object takes is size
  constructor(_size){
    this.size = _size;
    this.end = random(horizon, -80);
    this.x = random(width);
    this.y = random(-80, height + 80);
    // Z position, defined as a value from 0 to 1 mapped from the distance between horizon and canvas height
    this.z = map(this.end, horizon, width, 1, 10)
    // speed, if the distance to travel is less then the speed is lower
    this.speed = map(this.end, 0, width, 1, maxSpeed);
  }
  // function to update the CloudFloat values
  update(){
    // if the Y position is less that the END position, then the drop keeps falling
    if(this.x > -200){
      this.x -= this.speed;
    } else{

      // values are reset
      this.end = random(horizon, -80);
      this.x = width;
      this.y = random(-80, height + 80);
      this.z = map(this.end, horizon, width, 1, 10);
      this.speed = map(this.end, 0, width, 1, maxSpeed);
    }
  }
  // function to draw the object
  draw(){
    image(cloud, this.x, this.y, cloud.width/this.z, cloud.height/this.z);
  }


}
