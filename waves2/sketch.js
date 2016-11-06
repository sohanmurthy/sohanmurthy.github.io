var yValues;
var xSpacing;
var segments;

var period;
var amplitude;

function setup(){
  createCanvas(windowWidth,windowHeight);
  segments = 12
  xSpacing = width/segments;
  yValues = new Array(segments+2);
  period = 500.0;
  amplitude = 30.0;
  dx = (TWO_PI / period) * xSpacing;

}

function draw(){
  background(253,216,136);

  renderWave(0, 1.6, 255, 0, 0);
  renderWave(30,1.25, 125, 20, 200);

}


function renderWave(_offset, _Y, _R, _G, _B){

  this.speed = map(sin(frameCount/1000),-1,1, 50, 100 );

  this.offset = _offset;
  this.theta = this.offset + (frameCount/this.speed);
  this.dx = (TWO_PI / period) * xSpacing;

  this.r = _R;
  this.g = _G;
  this.b = _B;

  this.y = _Y;

  for (var i = 0; i < yValues.length; i++) {
    yValues[i] = sin(this.theta)*amplitude;
    this.theta+=this.dx;
  }

  noStroke();

  beginShape();
  for (var x = 0; x < yValues.length; x++) {
    fill(this.r,this.g,this.b);
    vertex(x*xSpacing, height/this.y+yValues[x]);
  }
  vertex(width,height);
  vertex(0, height);
  endShape(CLOSE);

}
