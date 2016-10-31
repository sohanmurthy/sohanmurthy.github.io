// Sol Lewitt's Wall Drawing 289 in p5.js by Sohan Murthy

// A 6-inch (15 cm) grid covering each of the four black walls.
// White lines to points on the grids.
// Twenty-four lines from the center,
// twelve lines from the midpoint of each of the sides,
// twelve lines from each corner.
// (The length of the lines and their placement are determined by the drafter.)
//
// Original: January 1976

// Whitney Museum of American Art, New York, Purchase with funds from the Gilman Foundation, Inc. 78.1.1-4
// http://massmoca.org/event/walldrawing289/


var drawLinesEdgesTopLeft = [];
var drawLinesEdgesTopRight = [];
var drawLinesEdgesBottomRight = [];
var drawLinesEdgesBottomLeft = [];

var drawLinesTopCenter = [];
var drawLinesBottomCenter = [];
var drawLinesLeftCenter = [];
var drawLinesRightCenter = [];

var drawLinesCenter = [];

var screenRatio;
var interval;
var boundary;

function setup(){

  createCanvas(windowWidth, windowHeight);
  background(0,0,0);

  screenRatio = floor((width*height)/10000);

  if(screenRatio <= 25){
    screenRatio = 15;
  } else if(screenRatio >= 35) {
    screenRatio = 35;
  } else{
    screenRatio = screenRatio;
  }

  interval = screenRatio;
  boundary = screenRatio*1.5;

  // twelve lines from the midpoint of each of the sides,
  // twelve lines from each corner.
  for(var i = 0; i <= 12; i++){
    drawLinesEdgesTopLeft.push(new DrawLine());
    drawLinesEdgesTopRight.push(new DrawLine());
    drawLinesEdgesBottomRight.push(new DrawLine());
    drawLinesEdgesBottomLeft.push(new DrawLine());

    drawLinesTopCenter.push(new DrawLine());
    drawLinesBottomCenter.push(new DrawLine());
    drawLinesLeftCenter.push(new DrawLine());
    drawLinesRightCenter.push(new DrawLine());

  }


  for(var i = 0; i <= 24; i++){
    drawLinesCenter.push(new DrawLine());
  }

  noLoop();

}


function draw(){

// twelve lines from each corner.

  for(var i = 0; i < drawLinesEdgesTopLeft.length; i++){
    drawLinesEdgesTopLeft[i].display(0,0);
  }

  for(var i = 0; i < drawLinesEdgesTopRight.length; i++){
    drawLinesEdgesTopRight[i].display(width,0);
  }

  for(var i = 0; i < drawLinesEdgesBottomRight.length; i++){
    drawLinesEdgesBottomRight[i].display(width,height);
  }

  for(var i = 0; i < drawLinesEdgesBottomLeft.length; i++){
    drawLinesEdgesBottomLeft[i].display(0,height);
  }

  // twelve lines from the midpoint of each of the sides,

  for(var i = 0; i < drawLinesTopCenter.length; i++){
    drawLinesTopCenter[i].display(width/2,0);
  }

  for(var i = 0; i < drawLinesBottomCenter.length; i++){
    drawLinesBottomCenter[i].display(width/2,height);
  }

  for(var i = 0; i < drawLinesLeftCenter.length; i++){
    drawLinesLeftCenter[i].display(0,height/2);
  }

  for(var i = 0; i < drawLinesRightCenter.length; i++){
    drawLinesRightCenter[i].display(width,height/2);
  }

// Twenty-four lines from the center,

  for(var i = 0; i < drawLinesCenter.length; i++){
    drawLinesCenter[i].display(width/2,height/2);
  }

}





function DrawLine (){

  this.xDest = Math.ceil(random(boundary, width-boundary)/interval)*interval;
  this.yDest = Math.ceil(random(boundary, height-boundary)/interval)*interval;

  this.display = function(xOrigin, yOrigin){
    this.x = xOrigin;
    this.y = yOrigin;

    //diagnostic that end points are in a grid
    // noStroke();
    // fill(255,0,0);
    // ellipse(this.xDest, this.yDest, 10, 10);

    stroke(255, 255, 255, 200);
    strokeWeight(2);
    line(this.x, this.y, this.xDest, this.yDest);



  }
}
