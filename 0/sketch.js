// TODO: use mouseX and mouseY

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 20, 120);
}

function draw() {
  background(255, 20, 120);
  fill(random(255));
  rect(mouseX, mouseY, 100)
}
