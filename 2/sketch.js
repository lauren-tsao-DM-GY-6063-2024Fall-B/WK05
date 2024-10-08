// TODO: mouse hover effect
function overlapRect(x, y, w, h, c) {
  let betweenX = mouseX > x && mouseX < x + w;
  let betweenY = mouseY > y && mouseY < y + h;

  push();
  if (betweenX && betweenY) {
    fill(c);
  }
  rect(x, y, w, h);
  pop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20);

  let rx = 100; //rect x position
  let ry = 50; //rect y position
  let rw = 400; //rect width
  let rh = 200; //rect height

  overlapRect(rx, ry, rw, rh, "deeppink");
  overlapRect(600, 50, 100, 100, "dodgerblue");

let cx = 200;
let cy = 500;
let cr = 150;

let distMouse = dist(mouseX, mouseY, cx, cy);

push();
if (distMouse < cr) {
  fill("deeppink");
} else {
  fill(255);
}
ellipse(cx, cy, cr);
pop();
}