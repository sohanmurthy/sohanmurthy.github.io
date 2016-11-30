var video;
var aspectRatio = 45;

function setup() {

  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);

  video = createCapture(VIDEO);
  video.size(width/aspectRatio, height/aspectRatio);
  video.hide();
  frameRate(15);

}

function windowResized() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);

  video = createCapture(VIDEO);
  video.size(width/aspectRatio, height/aspectRatio);
  video.hide();
  frameRate(30);

}

function draw() {

  background(0,26,23);

  video.loadPixels();
  loadPixels();

  for (var y = 1; y < video.height; y++) {
    for (var x = 1; x < video.width; x++) {
      var index = (-x + y * video.width)*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];
      var a = video.pixels[index+3];

      var bright = (r+g+b)/3;

      var jitter = new DrawEllipse(x,y,aspectRatio,bright, x/8);
      jitter.grow();
      jitter.display();

    }
  }
}




function DrawEllipse(_x, _y, _aspectRatio, _bright, _inc){


this.x = _x;
this.y = _y;
this.aspectRatio = _aspectRatio;
this.bright = _bright;
this.increment = _inc;


  this.grow = function(){
  this.pixelGrow = map(this.bright, 0,255, 27, 0)
  }

  this.display = function(){
  noStroke();
  fill(0,255,229);
  //rectMode(CENTER);
  push();
  translate(this.x*this.aspectRatio, this.y*this.aspectRatio);
  rotate(frameCount/100 + this.increment);
  triangle(
       //0,0,
       9, 3,
      //100,100,
      -this.pixelGrow*2, -this.pixelGrow*2,
       3, 9);
  pop();

  }

}
