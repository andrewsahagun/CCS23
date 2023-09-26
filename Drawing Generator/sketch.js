//rules
//click and drag mouse to draw
//'e' draws a line of ellipses
//'a' changes background to random color
//'p' changes the color to perrywinkle
//'t' draws a random color ellipse
//'c' key resets drawing
//'b' makes it black line
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250,250,250);
}

function draw() {
var randomColor = color(random(255), random(255), random(255))
  //ellipse is drawn
if ((keyIsPressed == true) && (key == 'e')){
  ellipse(mouseX, mouseY, 50)
  stroke(0)
}  
  //color is perrywinkle
if ((keyIsPressed == true) && (key == 'p')){
  stroke(204,204,255);
  strokeWeight(10);
}
  // black color
if ((keyIsPressed == true) && (key == 'b')){
  stroke(0,0,0)
  strokeWeight(10);
}
  //random color background
if ((keyIsPressed == true) && (key == 'a')){
  background(randomColor)
}
  //random color ellipse
if ((keyIsPressed == true) && (key == 't')){
  ellipse(mouseX, mouseY, 50, 50)
  fill(randomColor)
  noStroke
}
  //blank canvas again
if ((keyIsPressed == true) && (key == 'c')){
  background(250,250,250); 
}
}
  //mouse as drawing tool
function mouseDragged() {
  line(pmouseX, pmouseY, mouseX, mouseY);
}