var yValues;
var xSpacing;
var segments;

function setup(){

  createCanvas(windowWidth, windowHeight);
  background(31,72,206);


  segments = 8
  xSpacing = width/segments;
  yValues = new Array(segments+8);



}


function draw(){

for(var y = -100; y <= height+100; y+=85){
  calcLine();
  renderLine(y, 255,255, 255);
  calcLine();
  renderLine(y+24, 255,255, 255);
  calcLine();
  renderLine(y+43, 255,255, 255);
  // calcLineNoFill();
  // renderLineNoFill(y, 255,255, 255);
}
  // calcLine();
  // renderLine(height/2, 0,0,255);
  // calcLine();
  // renderLine(height/1.5, 0,0,255);
  // calcLine();
  // renderLine(height/1.2, 0,0,255);
  noLoop();

}


function calcLine() {
  for (var i = 0; i < yValues.length; i++) {
    yValues[i] = map(random(0,1), 0, 1, 5,120);
  }
}

function calcLineNoFill() {
  for (var i = 0; i < yValues.length; i++) {
    yValues[i] = map(random(0,1), 0, 1, 0,300);
  }
}

function renderLine(_Y, _R, _G, _B){

  this.yStart = _Y;
  this.r = _R;
  this.g = _G;
  this.b = _B;

  beginShape();
  strokeWeight(14.4);
  for (var x = -1; x < yValues.length; x++) {
    stroke(this.r,this.g,this.b, 255);
    //stroke(0);
    fill(31,72,206);
    curveVertex(x*xSpacing, yValues[x] + this.yStart);
  }

  // vertex(width,height);
  // vertex(0,height);
  curveTightness(-0.7)
  vertex(width+xSpacing,height*2);
  vertex(0, height*2);
  vertex(0-(width/2), height/2);
  endShape(CLOSE);

}

function renderLineNoFill(_Y, _R, _G, _B){

  this.yStart = _Y;
  this.r = _R;
  this.g = _G;
  this.b = _B;

  beginShape();
  noFill();
  strokeWeight(14.4);
  for (var x = -1; x < yValues.length; x++) {
    stroke(this.r,this.g,this.b, 255);
    curveVertex(x*xSpacing, yValues[x] + this.yStart);
  }

  // vertex(width,height);
  // vertex(0,height);
  curveTightness(-0.7)
  endShape();

}
