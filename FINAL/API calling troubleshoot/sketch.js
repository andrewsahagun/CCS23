let californiaPopulation = "39, 512, 223";
let backgroundImage;

function preload (){
  backgroundImage = loadImage ('us_map.jpeg');
}

function setup() {
 createCanvas(windowWidth, windowHeight);
}

function draw() {

 // california square
  fill(200, 200, 255);
  stroke(0);
  rect(100, 100, 200, 200);

// verify if mouse is in bounds of cali square
  if (
  mouseX > 100 &&
  mouseX < 300 &&
  mouseY > 100 &&
  mouseY < 300) {

displayPopulation();
} else {
hidePopulation();
}
  }

  image(backgroundImage, 0, 0, width / 2, height / 2);

function displayPopulation() {
  let populationBox = document.getElementById("populationBox");
  populationBox.style.display = "block";
  populationBox.style.left = mouseX + "px";
  populationBox.style.top = mouseY + "px";

// display pop info
  populationBox.innerHTML = `<strong>California Population:</strong> ${californiaPopulation}`;
}

function hidePopulation() {
  let populationBox = document.getElementById("populationBox");
  populationBox.style.display = "none";
}
