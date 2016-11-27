var video;
var aspectRatio = 55;

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
  for (var y = -1; y < video.height+1; y++) {
    for (var x = -2; x < video.width+2; x++) {
      var index = (-x + y * video.width)*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];
      var a = video.pixels[index+3];

      var bright = (r+g+b)/3;


      //DrawSquare(x,y,aspectRatio,bright);
      DrawLine(x,y,aspectRatio,bright);


    }
  }
}


function DrawSquare(_x, _y, _aspectRatio, _bright){

this.x = _x;
this.y = _y-1;
this.aspectRatio = _aspectRatio;
this.bright = _bright;

this.pixelRotate = map(this.bright, 50,255, 0.0,1.0)

  push();
  translate(this.x*this.aspectRatio, this.y*this.aspectRatio);
  rotate(this.pixelRotate);
  noStroke();
  fill(255,255,255,100);
  rectMode(CENTER);
  rect(0,0,this.aspectRatio-5, this.aspectRatio-5)
  //image(emojiFlower, -(aspectRatio/2)+8, -(aspectRatio/2)+8, aspectRatio, aspectRatio)
  pop();
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
  //image(emojiFlower, -(aspectRatio/2)+8, -(aspectRatio/2)+8, aspectRatio, aspectRatio)
  pop();
}
