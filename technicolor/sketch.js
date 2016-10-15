var theta = 0;
var amplitude;


function setup() {
  createCanvas(windowWidth, windowHeight);
  screenRatio = (width * height)/10000;
  screenUpper = 45;
  screenLower = 15;
}

function windowResized(){
  createCanvas(windowWidth, windowHeight);
  screenRatio = (width * height)/10000;
  screenUpper = 45;
  screenLower = 15;
}

function draw() {
  background(0);


  if(screenRatio > screenUpper){
    screenRatio = screenUpper;
  } else if(screenRatio <= screenLower){
    screenRatio = screenLower;
  } else {
    screenRatio = screenRatio
  }
  amplitude = screenRatio;


  for(x = -amplitude/4; x < width; x += amplitude*2){
    for(y = -amplitude/4; y < height; y += amplitude*2){

      //sets diameter of each ellipse
      var d1 = (amplitude-8) + (sin(theta + x) * amplitude/2) + amplitude/2;
      //sets color of each ellipse
      var r1 = sin(theta+x*y/2+90) * amplitude
      var r2 = sin(theta+(sin(x)*y)) * amplitude
      var r3 = sin(theta+x*y-90) * amplitude
      //maps to rgb scale
      var r = map(r1, 0, amplitude, 0, 255);
      var g = map(r2, 0, amplitude, 0, 255);
      var b = map(r3, 0, amplitude, 0, 255);
      //draws ellipse
      strokeWeight(floor(screenRatio/10));
      stroke(r+30,g+30,b+30);
      fill(r,g,b);
      ellipse(x, y, d1, d1);

      }
    }
//increments theta
theta += 0.01;

}
