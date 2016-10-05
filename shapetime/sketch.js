var video;
var aspectRatio = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);

  video = createCapture(VIDEO);
  video.size(width/aspectRatio, height/aspectRatio);
  video.hide();
  frameRate(30);
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);

  video = createCapture(VIDEO);
  video.size(width/aspectRatio, height/aspectRatio);
  video.hide();
  frameRate(30);

}

function draw() {
  background(255,191,53);
  video.loadPixels();
  loadPixels();
  for (var y = 1; y < video.height; y++) {
    for (var x = 1; x < video.width; x++) {
      var index = (x + y * video.width)*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];
      var a = video.pixels[index+3];

      var bright = (r+g+b)/3;
      var pixelSize = map(bright, 50, 255, aspectRatio*1.15, 2);

      noStroke();


        if(bright > 125){
          fill(47,206,3, 255) //green
        }
          //begin gradient to smooth transisition
          else if(bright >= 125){
          fill(81, 181, 24, 243)
        }
          else if(bright >= 124.75){
            fill(116, 157, 46, 231)
        }
          else if(bright >= 124.5){
            fill(151, 133, 67, 219)
        }
          else if(bright >= 124.25){
            fill(185, 109, 89, 207)
        }
          else if(bright >= 123){
            fill(220, 85, 110, 195)
        }
        //final color
          else {
          fill(255,61,132, 170); //pink
        }


       ellipse(x*aspectRatio, y*aspectRatio, pixelSize, pixelSize);

    }
  }
}
