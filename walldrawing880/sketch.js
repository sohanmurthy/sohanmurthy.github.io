var yValues;
var xSpacing;
var segments;

function setup(){

  createCanvas(windowWidth, windowHeight);
  background(0,187,45);

  segments = 8;
  xSpacing = width/segments;
  yValues = new Array(segments+2);

}


function draw(){

for(var y = -500; y <= height+500; y+=random(20,40)){
    calcLinePerlin();
    renderLine(y,
            //stroke
            246,3,0, 255,
            //fill
            0,187,45, 255);
          }

    noLoop();

}




//generates y-values using Perlin noise
function calcLinePerlin() {
  //after some trial and error, I found a few seeds that looked nice and purty
  noiseSeed(random([2,2,2,2,12,12,22]));
  for (var i = 0; i < yValues.length; i++) {
    this.noiseVal = noise(i);
    yValues[i] = map(this.noiseVal, 0, 1, 0,-700);
  }
}

function renderLine(_Y, _Rstroke, _Gstroke, _Bstroke, _strokeAlpha, _Rfill, _Gfill, _Bfill, _fillAlpha){

  this.yStart = _Y;

  this.rStroke = _Rstroke;
  this.gStroke = _Gstroke;
  this.bStroke = _Bstroke;
  this.aStroke = _strokeAlpha;

  this.rFill = _Rfill;
  this.gFill = _Gfill;
  this.bFill = _Bfill;
  this.aFill = _fillAlpha;

  this.jitter = random(10,60);

  beginShape();
  strokeWeight(16);
  for (var x = -1; x < yValues.length; x++) {
    stroke(this.rStroke, this.gStroke, this.bStroke, this.aStroke);
    fill(this.rFill, this.gFill, this.bFill, this.aFill);
    curveVertex(x*(xSpacing+this.jitter), yValues[x] + this.yStart);
  }

  curveTightness(-0.1)
  vertex(width+xSpacing,height*2);
  vertex(0, height*2);
  vertex(0-(width/2), height/2);
  endShape(CLOSE);

}
