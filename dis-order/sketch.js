var video;
var aspectRatio = 25;

function setup() {

  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);

  video = createCapture(VIDEO);
  video.size(width/aspectRatio, height/aspectRatio);
  video.hide();
  frameRate(30);
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

  background(15);

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


      //DrawSquare(x,y,aspectRatio,bright);
      DrawEllipse(x,y,aspectRatio,bright);


    }
  }
}


function DrawEllipse(_x, _y, _aspectRatio, _bright){

this.x = _x-1;
this.y = _y-1;
this.aspectRatio = _aspectRatio;
this.bright = _bright;

this.pixelMove = map(this.bright, 50,255, 1, 0)

noStroke();
fill(255,255,255,100);
ellipse((this.x+this.pixelMove)*this.aspectRatio, (this.y+this.pixelMove)*this.aspectRatio, this.aspectRatio-10, this.aspectRatio-10)

}


function DrawLine(_x, _y, _aspectRatio, _bright){

this.x = _x;
this.y = _y;
this.aspectRatio = _aspectRatio;
this.bright = _bright;

this.pixelRotate = map(this.bright, 0,100, 0.0,0.8)

  push();
  translate(this.x*this.aspectRatio, this.y*this.aspectRatio);
  rotate(this.pixelRotate);
  strokeWeight(4);
  stroke(255, 255, 255, 200);
  line(this.x, this.y, this.x-(this.aspectRatio+20), this.y-(this.aspectRatio-20))
  pop();
}
