
var xspacing;
var w;

var theta = 0.0;
var theta2 = 20;
var theta3 = 40;
var theta4 = 60;
var theta5 = 80;

var amplitude = 30.0;
var period = 500.0;
var dx;
var yvalues;
var windowRatio;

function setup() {
  createCanvas(windowWidth, windowHeight);
  windowRatio = (width)/130;
  xspacing = width/windowRatio;
  w = width*(width/windowRatio);
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));
}

function draw() {
  background(253,216,136);

  calcWave();
  renderOrangeWave();

  calcWave2();
  renderOtherRedWave();

  calcWave3();
  renderRedWave();

  calcWave4();
  renderPurpleWave();

  calcWave5();
  renderBlueWave();

}

function windowResized(){
  createCanvas(windowWidth, windowHeight);
  windowRatio = (width)/130;
  xspacing = width/windowRatio;
  w = width*(width/windowRatio);
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));
}

function calcWave() {
  theta += 0.02;
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}


function calcWave2() {
  theta2 += 0.02;
  var x = theta2;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function calcWave3() {
  theta3 += 0.02;
  var x = theta3;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}


function calcWave4() {
  theta4 += 0.02;
  var x = theta4;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function calcWave5() {
  theta5 += 0.02;
  var x = theta5;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderBlueWave() {
  noStroke();

  beginShape();
  for (var x = 0; x < yvalues.length; x++) {
    fill(6,80,107);
    vertex(x*xspacing, height/1.25+yvalues[x]);
  }
  vertex(width,height);
  vertex(0, height);
  endShape(CLOSE);
}

function renderPurpleWave() {
  noStroke();

  beginShape();
  for (var x = 0; x < yvalues.length; x++) {
    fill(76,54,95);
    vertex(x*xspacing, height/1.6+yvalues[x]);
  }
  vertex(width,height);
  vertex(0, height);
  endShape(CLOSE);
}


function renderRedWave() {
  noStroke();

  beginShape();
  for (var x = 0; x < yvalues.length; x++) {
    fill(145,28,83);
    vertex(x*xspacing, height/2.2+yvalues[x]);
  }
  vertex(width,height);
  vertex(0, height);
  endShape(CLOSE);
}

function renderOtherRedWave() {
  noStroke();

  beginShape();
  for (var x = 0; x < yvalues.length; x++) {
    fill(200,64,77);
    vertex(x*xspacing, height/2.6+yvalues[x]);
  }
  vertex(width,height);
  vertex(0, height);
  endShape(CLOSE);
}

function renderOrangeWave() {
  noStroke();

  beginShape();
  for (var x = 0; x < yvalues.length; x++) {
    fill(255,99,71);
    vertex(x*xspacing, height/2.8+yvalues[x]);
  }
  vertex(width,height);
  vertex(0, height);
  endShape(CLOSE);
}
