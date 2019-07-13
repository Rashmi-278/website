// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/KkyIDI6rQJI
//Map function documentation : https://p5js.org/examples/math-map.html

//we create an object drop first and the create an array of those objects
function Drop() {
  this.x = random(width); // random x position ie width because anywhere along the width of screen
  this.y = random(-500, -50); // random y position, negative values because drop first begins off screen to give a realistic effect
  this.z = random(0, 20); // z value is to give a perspective view , farther and nearer drops effect
  this.len = map(this.z, 0, 20, 10, 20); // if z is near then  drop is longer
  this.yspeed = map(this.z, 0, 20, 1, 20); // speed of te drop

  //near means closer to the screen , ie the higher the z value ,closer the drop is to the screen.
  this.fall = function () { // function  to determine the speed and shape of the drop 
    this.y = this.y + this.yspeed; // increment y position to give the effect of falling 
    var grav = map(this.z, 0, 20, 0, 0.2); // if z is near then gravity on drop is more
    this.yspeed = this.yspeed + grav; // speed increases as gravity acts on the drop

    if (this.y > height) { // repositions the drop after it has 'disappeared' from screen
      this.y = random(-200, -100);
      this.yspeed = map(this.z, 0, 20, 4, 10);
    }
  }

  this.show = function () {// function to render the drop onto the screen
    var thick = map(this.z, 0, 20, 1, 3); //if z is near , drop is more thicker 
    strokeWeight(thick);  // weight of the drop
    stroke(138, 43, 226); // purple color
    line(this.x, this.y, this.x, this.y + this.len); // draws the line with two points 
  }
}
