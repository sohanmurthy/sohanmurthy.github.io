var emojiShortcake;
var cakeAmplitude;


function setup(){
  createCanvas(windowWidth, windowHeight);
  emojiShortcake = loadImage("img/shortcake.png");
  cakeAmplitude = 50;
}

function draw(){
  background(103,204,222);

  for(var x = -20; x < width+20; x += (cakeAmplitude + 20)){
    for(var y = -20; y < height+20; y += (cakeAmplitude + 20)){
      Cake(x, y, x+(y/2.1904));
    }
  }

}

function windowResized(){
  createCanvas(windowWidth, windowHeight);
}

function Cake(_x, _y, _i){
  this.x =  _x;
  this.y = _y;
  this.increment = _i;

  this.cakeSize = cakeAmplitude;
  this.theta = (frameCount/50);

  this.cakeGrowth = (this.cakeSize - 10) + (sin(this.theta + this.increment) * this.cakeSize/2) + this.cakeSize/1.5;

  push();
  translate(this.x, this.y);
  rotate(frameCount/100 + this.increment);
  image(emojiShortcake, -cakeAmplitude, -cakeAmplitude, this.cakeGrowth, this.cakeGrowth);
  pop();

}
