var yValues;
var xSpacing;
var segments;

function setup(){

  createCanvas(windowWidth, windowHeight);
  background(36,83,213);


  segments = 8
  xSpacing = width/segments;
  yValues = new Array(segments+2);

}


function draw(){

for(var y = -100; y <= height+100; y+=random(60,70)){
    calcLinePerlin();
    renderLine(y,
            //stroke
            255,255, 255, 255,
            //fill
            36,83,213, 255);
          }
  noLoop();

}


//generates y-values using Perlin noise
function calcLinePerlin() {
  noiseSeed(random(0,10));
  for (var i = 0; i < yValues.length; i++) {
    this.noiseVal = noise(i);
    yValues[i] = map(this.noiseVal, 0, 1, 0,300);
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

  beginShape();
  strokeWeight(14.4);
  for (var x = -1; x < yValues.length; x++) {
    stroke(this.rStroke, this.gStroke, this.bStroke, this.aStroke);
    fill(this.rFill, this.gFill, this.bFill, this.aFill);
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
