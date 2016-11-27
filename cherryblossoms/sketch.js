var video;
var aspectRatio = 45;

var emojiBright;
var emojiDark;

function setup() {


  emojiFlower = loadImage("img/cherryblossom.png");

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

  background(41,5,0);

  video.loadPixels();
  loadPixels();
  for (var y = -1; y < video.height+1; y++) {
    for (var x = -1; x < video.width+1; x++) {
      var index = (-x + y * video.width)*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];
      var a = video.pixels[index+3];

      var bright = (r+g+b)/3;
      //var pixelSize = map(bright, 50, 255, aspectRatio*1.15, 2);
      var pixelRotate = map(bright, 0,255, 0.0,1.0)


      push();
      translate(x*aspectRatio, y*aspectRatio);
      rotate(pixelRotate);
      image(emojiFlower, -(aspectRatio/2)+8, -(aspectRatio/2)+8, aspectRatio, aspectRatio)
      pop();

    }
  }
}
