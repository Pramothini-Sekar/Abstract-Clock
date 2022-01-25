function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  
} 

function draw() {
  background(0);

  strokeWeight(2);
  stroke(255);
  textSize(20);
  push();
  translate(windowWidth/2 * 0.5, windowHeight/2 * 0.4);
  rotate(radians(hour() * 36) - PI/2);
  text(hour() + " HOUR(s) ", 10, -10);
  line(0, 0, 150, 0);
  pop();

  push();
  translate(windowWidth/2, windowHeight/2 * 0.8);
  rotate(radians(minute() * 6) - PI/2);
  text(minute() + " MINUTE(s) ", 10, -10);
  line(0, 0, 150, 0);
  pop();
  
  push();
  translate(windowWidth/2 * 1.5, windowHeight/2 * 1.55);
  rotate(radians(second() * 6) - PI/2);
  text(second() + " SECOND(s) ", 10, -10);
  line(0, 0, 150, 0);
  pop();
  
  stroke(255, 0, 0);
  strokeWeight(5);
  point(windowWidth/2 * 0.5, windowHeight/2 * 0.4);
  point(windowWidth/2, windowHeight/2 * 0.8);
  point(windowWidth/2 * 1.5, windowHeight/2 * 1.55);

}
