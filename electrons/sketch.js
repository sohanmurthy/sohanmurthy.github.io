var electrons = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  for(var i = 0; i <= 12; i++){
    electrons.push(new Electron());
  }

}

function draw() {
fill(0, 30);
rect(0,0,width,height)

  for(var i = 0; i < electrons.length; i++){
    electrons[i].move();
    electrons[i].display();
  }


}

function windowResized(){
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function Electron (){

  this.electronOrbitalX = random(width);
  this.electronOrbitalY = random(height);

  this.r1 = 100 * random(1.0,1.5);
  this.r2 = 100 * random(0.9,1.8);
  this.r3 = 100 * random(0.5,1);
  this.r4 = 100 * random(1.1,1.8);

  this.theta1 = 0;
  this.theta2 = 0;
  this.theta3 = 0;
  this.theta4 = 0;

  this.theta_vel1 = random(random(-0.1,-0.09), random(0.08,0.1));
  this.theta_vel2 = random(random(-0.1,-0.09), random(0.08,0.1));
  this.theta_vel3 = random(random(-0.1,-0.09), random(0.08,0.1));
  this.theta_vel4 = random(random(-0.1,-0.09), random(0.08,0.1));


  this.move = function (){

    this.x1 = this.r1 * cos(this.theta1);
    this.y1 = this.r1 * sin(this.theta1);
    this.theta1 += this.theta_vel1;

    this.x2 = this.r2 * cos(this.theta2);
    this.y2 = this.r2 * sin(this.theta2);
    this.theta2 += this.theta_vel2;

    this.x3 = this.r3 * cos(this.theta3);
    this.y3 = this.r3 * sin(this.theta3);
    this.theta3 += this.theta_vel3;

    this.x4 = this.r4 * cos(this.theta4);
    this.y4 = this.r4 * sin(this.theta4);
    this.theta4 += this.theta_vel4;

    if(this.electronOrbitalX < width+(width*.20)){
    this.electronOrbitalX = this.electronOrbitalX+1;
  } else{

    this.electronOrbitalX = random(-50, 0-width);

    this.r1 = 100 * random(1.0,1.5);
    this.r2 = 100 * random(0.9,1.8);
    this.r3 = 100 * random(0.5,1);
    this.r4 = 100 * random(1.1,1.8);

    this.theta1 = 0;
    this.theta2 = 0;
    this.theta3 = 0;
    this.theta4 = 0;

    this.theta_vel1 = random(random(-0.1,-0.09), random(0.08,0.1));
    this.theta_vel2 = random(random(-0.1,-0.09), random(0.08,0.1));
    this.theta_vel3 = random(random(-0.1,-0.09), random(0.08,0.1));
    this.theta_vel4 = random(random(-0.1,-0.09), random(0.08,0.1));


  }

  };

  this.display = function(){

    push();
    ellipseMode(CENTER);
    noStroke();
    translate(this.electronOrbitalX, this.electronOrbitalY);
    fill(255,0,0);
    ellipse(this.x1, this.y1, 32, 32);
    fill(255,203,0);
    ellipse(this.x2, this.y2, 32, 32);
    fill(0,252,252);
    ellipse(this.x3, this.y3, 32, 32);
    fill(10,12,156);
    ellipse(this.x4, this.y4, 32, 32);
    pop();
  };

}
