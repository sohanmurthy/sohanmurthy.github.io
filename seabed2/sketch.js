var diameter;
var cutoff;
var amplitude;
var theta = 0;

function setup(){
  createCanvas(windowWidth, windowHeight);

  amplitude = 1;
  diameter = (width*height)/10000;
  cutoff = 50;

}

function windowResized(){
  createCanvas(windowWidth, windowHeight);

  amplitude = 1;
  diameter = (width*height)/10000;
  cutoff = 50;

}

function draw(){
  noStroke();
    background(0, 150, 100);

    if(diameter > cutoff){
      diameter = diameter;
    } else if(diameter <= cutoff){
      diameter = cutoff;
    }

  for (var x = -10; x < width; x += diameter-10) {
    for (var y = -10; y < height; y += diameter-10) {

      //var r1 = sin(theta+x*y/2+90) * amplitude
      var g1 = sin(theta+(sin(x)*y)) * amplitude
      var b1 = sin(theta+x*y-90) * amplitude

      //var r2 = sin(theta+x*y/2+90) * amplitude
      var g2 = sin(theta+(sin(x)*y)) * amplitude
      var b2 = sin(theta+x*y-90) * amplitude

      //maps to rgb scale
      //var rBig = map(r1, 0, amplitude, 0, 20);
      var gBig = map(g1, 0, amplitude, 120, 220);
      var bBig = map(b1, 0, amplitude, 80, 100);

      //var rSmall = map(r1, 0, amplitude, 0, 20);
      var gSmall = map(g1, 0, amplitude, 90, 190);
      var bSmall = map(b1, 0, amplitude, 200, 255);



    fill(20,gBig,bBig);
    ellipse(x, y, diameter, diameter);

    fill(20,gSmall,bSmall);
    ellipse(x+(diameter/2), y+(diameter/2), diameter/1.5, diameter/1.5);

  }
}

theta += 0.01;

}
