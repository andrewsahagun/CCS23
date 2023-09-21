let diameter = 5; 
let expanding = true;
let hue = 0;

let start;
let end;
let dot;
let t = 0;

function setup() {
  createCanvas(400, 300);
  start = createVector(135, 150);
  end = createVector(135, 290);
  dot = createVector(start.x, start.y);
  frameRate(10); //speed of frames per second
  noStroke();
  fill(200);
}

function draw() {
  background(220);

  hue = (frameCount % 100); 
  fill (hue, 100, 100); 
  //ellipse expansion
 if (expanding) {
  diameter += 1; 
  if (diameter >= 50){
    expanding = false; 
  }
 } else {
  diameter -= 1;
  if (diameter <= 40){
    expanding = true; 
  }
 }

 //moon
 push();
 fill(90, 90, 90, 70)
 ellipse(350, 40, 50, 50)
 pop();

 push();
   //rain dots
   dot.x = lerp(start.x, end.x, t);
   dot.y = lerp(start.y, end.y, t);
 
   //dot
   fill(10, 25, 245);
   ellipse(dot.x, dot.y, 10, 15);
 
   //dot movement 
   t += .05;
 
   //reset t to make rain dots go back
   if (t > 1) {
     t = 0;
   }
  pop ();

  //cloud points
  ellipse(100, 150, diameter, diameter);
  ellipse(130, 150, diameter, diameter);
  ellipse(160, 150, diameter, diameter);
  ellipse(140, 130, diameter, diameter);
  ellipse(170, 130, diameter, diameter);
}