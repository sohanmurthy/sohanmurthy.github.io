var dustParticles = [];



function setup(){

  createCanvas(windowWidth, windowHeight);

  for(var i = 0; i <= 1000; i++){
    dustParticles.push(new DustParticle());
  }
}



function draw(){
background(36,25,55);
  for(var i = 0; i < dustParticles.length; i++){
    dustParticles[i].move();
    dustParticles[i].display();
  }
}



function windowResized(){
  createCanvas(windowWidth, windowHeight);
}


//a constructor that builds a dust particle class
function DustParticle(){

  this.dustOrbitalX = randomGaussian(width/random(1.75,2), width*random(0.05, 0.2));
  this.dustOrbitalY = randomGaussian(height/2, height*random(0.2,0.33));

  this.dustSize = random(2,5.5);


  this.diameter = 30;
  this.radiusAngle = 0;

  this.theta = 0;
  this.increment = random(-100,100);
  this.thetaVelocity = random(random(-0.01,-0.015), random(0.015,0.01));
  this.radAngleVel = random(0.005,0.0015);

    this.move = function(){
      this.x = this.increment + (sin(this.radiusAngle) * this.diameter/2) + this.diameter/2 * cos(this.theta);
      this.y = this.increment + (sin(this.radiusAngle) * this.diameter/2) + this.diameter/2 * sin(this.theta);
      this.theta += this.thetaVelocity;
      this.radiusAngle += this.radAngleVel;
    }

    this.display = function(){
      push();
      ellipseMode(CENTER);
      noStroke();
      translate(this.dustOrbitalX, this.dustOrbitalY);
      fill(248,207,179, 180);
      ellipse(this.x, this.y, this.dustSize, this.dustSize);
      pop();
    }
}
