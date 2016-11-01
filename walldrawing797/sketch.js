//Wall Drawing 797
//Sol Lewitt, October 1995
//First Installation: Mead Art Museum, Amherst College, Amherst

//drawn in p5.js by Sohan Murthy

//The first drafter has a black marker and makes an irregular horizontal line near the top of the wall.
//Then the second drafter tries to copy it (without touching it) using a red marker.
//The third drafter does the same, using a yellow marker.
//The fourth drafter does the same using a blue marker.
//Then the second drafter followed by the third and fourth copies the last line drawn until the bottom of the wall is reached.

var yValues;
var xSpacing;
var segments;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(240);

  segments = 30
  xSpacing = width/segments;
  yValues = new Array(segments+1);

  calcLine();

}

function draw(){

  DrawLine();
  noLoop();

}

//The first drafter has a black marker and makes an irregular horizontal line near the top of the wall.
// (In this case, the line is set by a function that generates a series of random y values, stored in an array)
function calcLine() {
  for (var i = 0; i < yValues.length; i++) {
    yValues[i] = map(random(0,1), 0, 1, 5,43);
  }
}

function DrawLine(){

  for(var y = -30; y <= height; y+=63){
//Then the second drafter tries to copy it (without touching it) using a red marker.
    renderLine(y, 222, 33, 56);
//The third drafter does the same, using a yellow marker.
    renderLine(y+20, 255, 240, 20);
//The fourth drafter does the same using a blue marker.
    renderLine(y+42, 17, 100, 215);
  }
//Then the second drafter followed by the third and fourth copies the last line drawn until the bottom of the wall is reached.
}


// (a function to render the lines)
function renderLine(_Y, _R, _G, _B){

  beginShape();
  noFill();

  strokeWeight(16);

  this.r = _R;
  this.g = _G;
  this.b = _B;

  this.yStart = _Y;

  for (var x = 0; x < yValues.length; x++) {
    stroke(this.r,this.g,this.b, 240);
    vertex(x*xSpacing, yValues[x] + this.yStart);

  }

  endShape();

}
