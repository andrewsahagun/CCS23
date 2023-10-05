// mta train cart am and pm traffic

let boxX, boxY;
let dots = [];
let minDots = 1
let maxDots = 250
let frameCount = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  boxX = width / 4;
  boxY = height / 4;

  // create initial dots
  for (let i = 0; i < minDots; i++) {
    let x = random(boxX, boxX * 3);
    let y = random(boxY, boxY * 3);
    let dot = new Dot(x, y);
    dots.push(dot);
  }
}

function draw() {
  background(220);
  
  // draw "train cart"
  stroke(0);
  noFill();
  rect(boxX, boxY, boxX * 2, boxY * 2);
  
  // move and display dots
  for (let dot of dots) {
    dot.move();
    dot.display();
  }

  // change dot intensity
  frameCount++;
  if (frameCount % 200 === 0) {
    for (let i = 0; i < 20; i++) {
      let x = random(boxX, boxX * 3);
      let y = random(boxY, boxY * 3);
      let dot = new Dot(x, y);
      dots.push(dot);
    }

// how to make them go down????
  if (maxDots) {
    for (let i = 0; i < -20; i ++) {
      let x = random(boxX, boxX * 3);
      let y = random(boxY, boxY * 3);
      let dot = new Dot(x, y);
      dots.push(dot);
    }
  }
  }
}

class Dot {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = random(-15, 1);
    this.speedY = random(-20, 1);
    this.radius = 5;
  }

  move() {
    // change dot position
    this.x += this.speedX;
    this.y += this.speedY;
    
    // bounce off walls
    if (this.x < boxX || this.x > boxX * 3) {
      this.speedX *= -1;
    }
    if (this.y < boxY || this.y > boxY * 3) {
      this.speedY *= -1;
    }
  }
  // display dots 
  display() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.radius * 2);
  }
}
