var video;
var aspectRatio = 10;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);
  
  video = createCapture(VIDEO);
  video.size(width/aspectRatio, height/aspectRatio);
  video.hide();
  frameRate(30);
}

function draw() {
  background(125);
  video.loadPixels();
  loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (x + y * video.width)*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];
      var a = video.pixels[index+3];  
      
      var bright = (r+g+b)/3;
      var pixelSize = map(bright, 50, 255, 10, 1);
      
      noStroke();
      
      //stroke(random(r),0,0);
      //fill(bright);
      //fill(r,g,b,a);
      
      if(bright >= 150){
        fill(255,0,0)
      } else{
        fill(0);
      }
      
      fill(0);
      //rect(x*aspectRatio,y*aspectRatio,aspectRatio, aspectRatio);
       ellipse(x*aspectRatio, y*aspectRatio, pixelSize, pixelSize);
      //rect(x*aspectRatio, y*aspectRatio, aspectRatio, aspectRatio);
    
      
    }
  }
 
}