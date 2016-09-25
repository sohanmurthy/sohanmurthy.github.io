function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(220);
  strokeWeight(6);
  frameRate(8);
}

function draw() {
//bottom-to-top
  for (var x = 20; x < width-30; x += 60) {
    for (var y = 80; y < height-20; y += 80) {
      var r = random(0,50);
      var g = random(200,235);
      var b = random(100,200);
    stroke(r,g,b);
    line( x, y, x + 60, y - 60);
    }
  }
//top-to-bottom
  for (var x = 20; x < width-30; x += 60) {
    for (var y = 80; y < height-20; y += 80) {
      var r = random(0,50);
      var g = random(200,235);
      var b = random(100,200);
    stroke(r,g,b);
    line( x, y - 60, x + 60, y);
    }
  }

}

// function draw() {
//   background(204);
//   stroke(0,204,153);
//   for (var x = 50; x < width-30; x += 50) {
//     for (var y = 50; y < height-20; y += 50) {
//     line( x, y, width/2, height/2);
//     }
//   }
// }
