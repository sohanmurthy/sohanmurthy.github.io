var emojiCoffee;
var emojiSleepy;

var coffeeCutoff;
var sleepyCutoff;

var coffees = [];
var sleepys = [];

function setup(){
  createCanvas(windowWidth, windowHeight);

  emojiCoffee = loadImage("img/coffee.png");
  emojiSleepy = loadImage("img/sleepy.png");

  coffeeCutoff = 0-(height*0.1);
  sleepyCutoff = height*1.1;

  for(var i = 0; i <= 60; i++){
    sleepys.push(new Sleepy());
  }

  for(var i = 0; i <= 40; i++){
    coffees.push(new Coffee());
  }

}

function windowResized(){
  createCanvas(windowWidth, windowHeight);
  coffeeCutoff = 0-(height*0.1);
  sleepyCutoff = height*1.1;
}


function draw(){
  background(114,188,165);
  line(0,sleepyCutoff,width,sleepyCutoff);
  for(var i = 0; i < sleepys.length; i++){
    sleepys[i].move();
    sleepys[i].display();
  }

  for(var i = 0; i < coffees.length; i++){
    coffees[i].move();
    coffees[i].display();
  }

}

function Sleepy(){

  this.x = random(width);
  this.y = random(0-(sleepyCutoff), 0);
  this.sleepySize = 38;
  this.ySpeed = random(1.8,2.2);
  this.rotateFactor = random(50,120);


    this.move = function(){

      if(this.y < sleepyCutoff){
        this.y += this.ySpeed;
      } else{
        this.x = random(width);
        this.y = random(0-(sleepyCutoff), 0);
        this.sleepySize = 38;
        this.ySpeed = random(1.8,2.2);
        this.rotateFactor = random(50,120);
      }

    };

    this.display = function(){
      push();
      translate(this.x, this.y);
      rotate(frameCount/this.rotateFactor);
      image(emojiSleepy, -25, -25, this.sleepySize, this.sleepySize);
      pop();

    };

}


function Coffee(){

  this.x = random(width);
  this.y = random(height, height*2);
  this.coffeeSize = 60;
  this.ySpeed = random(1.8,2.2);
  this.rotateFactor = random(50,120);


    this.move = function(){

      if(this.y > coffeeCutoff){
        this.y -= this.ySpeed;
      } else{
        this.x = random(width);
        this.y = random(height, height*2);
        this.coffeeSize = 60;
        this.ySpeed = random(1.8,2.2);
        this.rotateFactor = random(50,120);
      }

    };

    this.display = function(){
      push();
      translate(this.x, this.y);
      rotate(-(frameCount/this.rotateFactor));
      image(emojiCoffee, -30, -30, this.coffeeSize, this.coffeeSize);
      pop();

    };

}
