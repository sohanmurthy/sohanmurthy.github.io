var diameter;
var cutoff;

function setup(){
  createCanvas(windowWidth, windowHeight);

  diameter = (width*height)/10000;
  cutoff = 50;

  frameRate(1);
}

function windowResized(){
  createCanvas(windowWidth, windowHeight);
  diameter = (width*height)/10000;
  cutoff = 50;
}

function draw(){
  noStroke();
    background(0, 120, 120);

    if(diameter > cutoff){
      diameter = diameter;
    } else if(diameter <= cutoff){
      diameter = cutoff;
    }

  for (var x = -10; x < width; x += diameter-10) {
    for (var y = -10; y < height; y += diameter-10) {

    var r = random(0,20);
    var g = random(120,255);
    var b = random(100,255);

    var r2 = random(0,20);
    var g2 = random(50,190);
    var b2 = random(200,255);


    fill(r,g,b);
    ellipse(x, y, diameter, diameter);

    fill(r2,g2,b2);
    ellipse(x+(diameter/2), y+(diameter/2), diameter/1.5, diameter/1.5);

  }
}

}
