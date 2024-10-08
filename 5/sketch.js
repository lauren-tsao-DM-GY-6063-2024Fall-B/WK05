// TODO: global state variables

let cc; //cc = click count
let md;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cc = 0;
  md = 200;
}

function draw() {
  background(20);
  // if (cc > 50) {
  //   fill(200, 0, 200);
  // }
  let md = map(cc, 0, 10, 100, 150)
  // print(md) //it will keep printing 30x per second
  ellipse(width / 2, height / 2, md);
}

function mouseReleased() { //only get called when you release the mouse button
  cc += 1;
  md = map(cc, 0, 10, 200, 10);
  print(cc, md);
}
