var video;
var aspectRatio = 35;

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

  background(0,1,2);

  video.loadPixels();
  loadPixels();

  for (var y = -2; y < video.height+2; y++) {
    for (var x = -2; x < video.width+2; x++) {
      var index = (-x + y * video.width)*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];
      var a = video.pixels[index+3];

      var bright = (r+g+b)/3;

      var jitter = new DrawEllipse(x,y,aspectRatio,bright);
      jitter.move();
      jitter.display();

    }
  }
}


// function DrawEllipse(_x, _y, _aspectRatio, _bright){
//
// this.randomMod = random(0,0.2);
// this.x = _x+this.randomMod;
// this.y = _y+this.randomMod-1;
// this.aspectRatio = _aspectRatio;
// this.bright = _bright;
//
// this.pixelMove = map(this.bright, 0,255, -this.randomMod, 1)
//
// noStroke();
// fill(255,255,255,100);
// ellipse((this.x+this.pixelMove)*this.aspectRatio, (this.y+this.pixelMove)*this.aspectRatio, this.aspectRatio-10, this.aspectRatio-10)
//
// }



function DrawEllipse(_x, _y, _aspectRatio, _bright){


this.randomMod = random(0,0.1);
this.x = _x+this.randomMod;
this.y = _y+this.randomMod-1;
this.aspectRatio = _aspectRatio;
this.bright = _bright;


  this.move = function(){
  this.pixelMove = map(this.bright, 0,255, -this.randomMod, 1)
  }

  this.display = function(){
  noStroke();
  fill(245,153,50);
  rectMode(CENTER);
  push();
  translate((this.x+this.pixelMove)*this.aspectRatio, (this.y+this.pixelMove)*this.aspectRatio);
  rotate(0.8);
  rect(0,0, this.aspectRatio-30, this.aspectRatio+15);
  pop();
  }

}
