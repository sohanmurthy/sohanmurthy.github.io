function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  strokeWeight(8);
}

function draw() {
  background(204);
  for (var i = 20; i < window.innerWidth; i += 60) {
    line( i, 80, i + 60, 20);
  }
  for (var i = 20; i < window.innerWidth; i += 60) {
    line( i, 160, i + 60, 100);
  }
  for (var i = 20; i < window.innerWidth; i += 60) {
    line( i, 240, i + 60, 180);
  }
}

// function draw() {
//   background(204);
//   for (var i = 20; i < window.innerWidth; i += 60) {
//     line( i, 160, i + 60, 100);
//   }
// }
