var numSegments = 15,
  x = [],
  y = [],

  x2 = [],
  y2 = [],

  x3 = [],
  y3 = [],

  angle = [],
  segLength = 26;



for (var i = 0; i < numSegments; i++) {
  x[i] = 0;
  y[i] = 0;
  angle[i] = 0;
}

for (var i = 0; i < numSegments; i++) {
  x2[i] = 0;
  y2[i] = 0;
  angle[i] = 0;
}

for (var i = 0; i < numSegments; i++) {
  x3[i] = 0;
  y3[i] = 0;
  angle[i] = 0;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(20);
  strokeCap(SQUARE);
  stroke(255, 120);
  noFill();

  x[x.length-1] = width/2; // Set base x-coordinate
  y[x.length-1] = height;  // Set base y-coordinate


  x2[x2.length-1] = width/3; // Set base x-coordinate
  y2[x2.length-1] = height;  // Set base y-coordinate


  x3[x3.length-1] = width/1.5; // Set base x-coordinate
  y3[x3.length-1] = height;  // Set base y-coordinate

}

function draw() {
  background(0,204,190);

  strokeWeight(20);



  reachSegment(0, mouseX, mouseY);
  reachSegment2(0, mouseX, mouseY);
  reachSegment3(0, mouseX, mouseY);

  for(var i=1; i<numSegments; i++) {
    reachSegment(i, targetX, targetY);
  }
  for(var j=x.length-1; j>=1; j--) {
    positionSegment(j, j-1);
  }
  for(var k=0; k<x.length; k++) {
    segment(x[k], y[k], angle[k], (k+1)*1.2);
  }

  for(var i=1; i<numSegments; i++) {
    reachSegment2(i, targetX2, targetY2);
  }
  for(var j=x2.length-1; j>=1; j--) {
    positionSegment2(j, j-1);
  }
  for(var k=0; k<x2.length; k++) {
    segment(x2[k], y2[k], angle[k], (k+1)*1.2);
  }

  for(var i=1; i<numSegments; i++) {
    reachSegment3(i, targetX3, targetY3);
  }
  for(var j=x3.length-1; j>=1; j--) {
    positionSegment3(j, j-1);
  }
  for(var k=0; k<x3.length; k++) {
    segment(x3[k], y3[k], angle[k], (k+1)*1.2);
  }

}

function positionSegment(a, b) {
  x[b] = x[a] + cos(angle[a]) * segLength;
  y[b] = y[a] + sin(angle[a]) * segLength;
}

function positionSegment2(a, b) {
  x2[b] = x2[a] + cos(angle[a]) * segLength;
  y2[b] = y2[a] + sin(angle[a]) * segLength;
}

function positionSegment3(a, b) {
  x3[b] = x3[a] + cos(angle[a]) * segLength;
  y3[b] = y3[a] + sin(angle[a]) * segLength;
}


function reachSegment(i, xin, yin) {
  var dx = xin - x[i];
  var dy = yin - y[i];
  angle[i] = atan2(dy-.01, dx);
  targetX = xin - cos(angle[i]) * segLength;
  targetY = yin - sin(angle[i]) * segLength;
}

function reachSegment2(i, xin, yin) {
  var dx = xin - x2[i];
  var dy = yin - y2[i];
  angle[i] = atan2(dy-.01, dx);
  targetX2 = xin - cos(angle[i]) * segLength;
  targetY2 = yin - sin(angle[i]) * segLength;
}

function reachSegment3(i, xin, yin) {
  var dx = xin - x3[i];
  var dy = yin - y3[i];
  angle[i] = atan2(dy-.01, dx);
  targetX3 = xin - cos(angle[i]) * segLength;
  targetY3 = yin - sin(angle[i]) * segLength;
}

function segment(x, y, a, sw) {
  strokeWeight(sw);
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}
