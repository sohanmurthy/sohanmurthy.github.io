var emojiBurger;
var emojiFries;
var emojiChicken;

var screenRatio;
var squareSize;

var system;

function setup() {
  createCanvas(windowWidth, windowHeight);
  screenRatio = (width*height)/2000;

  squareSize = 60;

  if(screenRatio <= 250){
    screenRatio = 250
  } else {
    screenRatio = screenRatio
  };


  emojiBurger = loadImage("img/hamburger.png");
  emojiFries = loadImage("img/frenchfries.png");
  emojiChicken = loadImage("img/poultryleg.png");

  system = new ParticleSystem(createVector(width/2, height/2));
}

function draw() {
  background(8,154,203);

  for(var x = -squareSize; x < width+squareSize; x += (squareSize+(squareSize/2))){
    for(var y = -squareSize; y < height+squareSize; y += (squareSize+(squareSize/2))){
      Squares(x, y, x+(y/12.67));
    }
  }

  system.addParticle();
  system.run();
}

function windowResized(){
  createCanvas(windowWidth, windowHeight);
  screenRatio = (width*height)/1500;

  if(screenRatio <= 250){
    screenRatio = 250
  } else {
    screenRatio = screenRatio
  };

  system = new ParticleSystem(createVector(width/2, height/2));
}

// A simple Particle class from Daniel Shiffman's Nature of Code except with emojis
var Particle = function(position) {
  //select a random food emoji, half-weighted on chicken
  this.foodRandomizer = random([emojiBurger, emojiBurger, emojiFries, emojiFries, emojiChicken])
  this.foodSize = 60;
  //randomization for rotation - lower numbers are faster
  this.rotateFactor = random(20,100)*random([-1,1]);
  this.velocity = createVector(random(-4, 4), random(-4, 4));
  this.position = position.copy();
  this.lifespan = screenRatio;
};

Particle.prototype.run = function() {

  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.position.add(this.velocity);
  this.lifespan -= 1;
};

// Method to display
Particle.prototype.display = function() {

  push();
  translate(this.position.x, this.position.y);
  rotate(frameCount/this.rotateFactor);
  image(this.foodRandomizer, -30, -30, this.foodSize, this.foodSize);
  pop();
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};

//function that draws an animated background of cascading squares

function Squares(_x, _y, _i) {
  this.x =  _x;
  this.y = _y;
  this.increment = _i;

  this.theta = (frameCount/20);
  this.squareFade = (sin(this.theta + this.increment));
  this.squareFadeMap = map(this.squareFade, 0,1, 0,130);
  noStroke();
  fill(255,255,255,this.squareFadeMap);
  rectMode(CENTER);
  rect(this.x, this.y, squareSize, squareSize);

}
