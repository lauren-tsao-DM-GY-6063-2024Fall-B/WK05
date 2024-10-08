// TODO: animation across the screen
//       wrap around
//       bounce

let x;

function setup() {
  createCanvas(windowWidth, windowHeight);
x = 0;

}

function draw() {
  background(20); //so that the background is drawn every refresh, masks out the frames
  
//draw stuff
let xpos = 10 * frameCount;
ellipse(xpos % width, height / 2, 100);

//update some parameter
x = x + 10;

// //check if need to reset x
// if (x > width) {
//   x = 0;
// }
}
