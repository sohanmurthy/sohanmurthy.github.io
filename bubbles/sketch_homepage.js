var bubbles = [];
var cutoff;

function setup(){

  var canvasDiv = document.getElementById("backgroundCanvas");
  var divWidth = canvasDiv.offsetWidth;
  var divHeight = canvasDiv.offsetHeight;
  var sketchCanvas = createCanvas(divWidth+20,divHeight+20);
  sketchCanvas.parent("backgroundCanvas");

  cutoff = -80;
  for(var i = 0; i <= 75; i++){
    bubbles.push(new Bubble());
  }
}

function draw(){
  background(0,204,190);
  line(0,cutoff,width,cutoff);
  for(var i = 0; i < bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].display();
  }
}

function windowResized(){
  var canvasDiv = document.getElementById("backgroundCanvas");
  var divWidth = canvasDiv.offsetWidth;
  var divHeight = canvasDiv.offsetHeight;
  var sketchCanvas = createCanvas(divWidth+20,divHeight+20);
  sketchCanvas.parent("backgroundCanvas");
}

function Bubble() {

  this.x = random(width, (width/2)-width);
  this.y = random(height, height*2);
  this.diameter = random(10,100);
  this.ySpeedLower = random(1.2,2);
  this.ySpeedUpper = random(2.2,3.2);
  this.xSpeed = 1;

  this.move = function() {

    if(this.y > cutoff){
      this.x +=  this.xSpeed;
      //map diameter to speed so larger bubbles always ascend faster than smaller bubbles
      this.y -= map(this.diameter,10,100,this.ySpeedLower, this.ySpeedUpper);
    } else{
      //reset values
      this.x = random(width, (width/2)-width);
      this.y = random(height, height*2);
      this.diameter = random(10,100);
      this.ySpeedLower = random(1.2,2);
      this.ySpeedUpper = random(2.2,3.2);
      this.xSpeed = 1;
    }
  };

  this.display = function() {
    strokeWeight(2);
    stroke(0,0,0,70);
    fill(255, 255, 255, 40);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };


}
