// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/KkyIDI6rQJI

// Purple Rain
// (138, 43, 226)
// (230, 230, 250) // background

var drops = []; // array of drop objects

function setup() {
  createCanvas(640, 360); // size of the window
  for (var i = 0; i < 500; i++) { // we create the drops 
    drops[i] = new Drop();
  }
}

function draw() {
  background(230, 230, 250); // background color in RGB color cordinates
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall(); // sets the shape and speed of drop
    drops[i].show(); // render drop
  }
}
