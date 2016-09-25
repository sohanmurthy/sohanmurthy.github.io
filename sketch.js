function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  strokeWeight(8);
}

function draw() {
  background(204);
  for (var x = 20; x < width-30; x += 60) {
    for (var y = 80; y < height-20; y += 80) {
    line( x, y, x + 60, y - 60);
    }
  }
}
