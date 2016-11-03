var bubbles = [];
var cutoff;

var emojiAmino;
var emojiFlag;
var emojiBallotBox;

function setup(){
  createCanvas(windowWidth, windowHeight);

  emojiAmino = loadImage("img/AminoEmoji.png");
  emojiFlag = loadImage("img/usflag.png");
  emojiBallotBox = loadImage("img/ballotbox.png");

  cutoff = -80;
  for(var i = 0; i <= 25; i++){
    bubbles.push(new Bubble());
  }
}

function draw(){
  background(255);
  //line(0,cutoff,width,cutoff);
  for(var i = 0; i < bubbles.length; i++){
    bubbles[i].move();
    bubbles[i].display();
  }
}

function windowResized(){
  createCanvas(windowWidth, windowHeight);
}

function Bubble() {

  this.emojiRandomizer = random([emojiAmino, emojiAmino, emojiFlag, emojiBallotBox]);
  this.x = random(width, (width/2)-width);
  this.y = random(height, height*2);
  this.diameter = random(35,100);
  this.ySpeedLower = random(1.2,2);
  this.ySpeedUpper = random(2.2,3.2);
  this.xSpeed = 1;

  this.move = function() {

    if(this.y > cutoff){
      this.x +=  this.xSpeed;
      //map diameter to speed so larger bubbles always ascend faster than smaller bubbles
      this.y -= map(this.diameter,10,100,this.ySpeedLower, this.ySpeedUpper);
    } else{
      //reset values
      this.emojiRandomizer = random([emojiAmino, emojiAmino, emojiFlag, emojiBallotBox]);
      this.x = random(width, (width/2)-width);
      this.y = random(height, height*2);
      this.diameter = random(35,100);
      this.ySpeedLower = random(1.2,2);
      this.ySpeedUpper = random(2.2,3.2);
      this.xSpeed = 1;

    }
  };

  this.display = function() {
    strokeWeight(2);
    stroke(0,0,0,70);
    fill(255, 255, 255, 40);
    image(this.emojiRandomizer, this.x, this.y, this.diameter, this.diameter);
  };


}
