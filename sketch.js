function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  strokeWeight(3);
}

function draw() {
  background(220);
  stroke(0,204,153);
  for (var x = 20; x < width-30; x += 60) {
    for (var y = 80; y < height-20; y += 80) {
    line( x, y, x + 60, y - 60);
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
