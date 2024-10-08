// TODO: time with map() and mod

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(20);

  let P = 3000; // P = period (higher the period, the slower the growth) (3000 = 3s)
let counter = millis() % P;
let md = map(counter, 0 , P, 20, 300); //md = my diameter
let mr = map(counter,0, P, 100, 255); //mr = my red

fill(mr, 50, 50)

  ellipse(width / 2, height / 2, md);
  
}
