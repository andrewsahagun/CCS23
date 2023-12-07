var weather; 

// attempt at showing one api with the state; add two more apis that include different information about fossil fuels, etc.
var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
var city = 'Boise';
var apiKey = '4c2253b5bca42e13f4bab802e685591a';
var units = '&units=imperial';

function setup() {
createCanvas(windowWidth, windowHeight);
var url= api + city + apiKey + units
loadJSON (url, gotData)
}

function gotData (data) {
  weather = data
}

function draw() {
  background(250,250,250);   
//IDAHO
  if (mouseIsPressed && dist(mouseX, mouseY, 302, -429) < 25) { // checks that mouse is close to capital of state
  fill(200);
  stroke(0);
  rect(50, 50, 300, 100, 10);

  // population appears
  fill(0);
  textSize(18);
  textAlign(CENTER, CENTER);
  text("Idaho", 200, 100);
  text("Population: 1.9 million", 200, 200);
  text("")
   }
//WASHINGTON
if (mouseIsPressed && dist(mouseX, mouseY, 208, -524) < 25) {
  fill(200);
  stroke(0);
  rect(50, 50, 300, 100, 10);
  
  // population test
  fill(0);
  textSize(18);
  textAlign(CENTER, CENTER);
  text("Washington", 200, 100);
  text("Population: 7.7 million", 200, 200);
    }
//OREGON
if (mouseIsPressed && dist(mouseX, mouseY, 197, -486) < 25) {
  fill(200);
  stroke(0);
  rect(50, 50, 300, 100, 10);

  // population test
  fill(0);
  textSize(18);
  textAlign(CENTER, CENTER);
  text("Oregon", 200, 100);
  text("Population: 4.2 million", 200, 200);
   }
//CALIFORNIA
if (mouseIsPressed && dist(mouseX, mouseY, 176, -354) < 25) {
  fill(200);
  stroke(0);
  rect(50, 50, 300, 100, 10);

  // population test
  fill(0);
  textSize(18);
  textAlign(CENTER, CENTER);
  text("California", 200, 100);
  text("Population: 39.2 million", 200, 200);
   }
//NEVADA
if (mouseIsPressed && dist(mouseX, mouseY, 217, -360) < 25) {
  fill(200);
  stroke(0);
  rect(50, 50, 300, 100, 10);

  // population test
  fill(0);
  textSize(18);
  textAlign(CENTER, CENTER);
  text("Nevada", 200, 100);
  text("Population: 3.1 million", 200, 200);
   }
  }

//ME CHECKING COORDINATES
function mousePressed() {
    console.log(mouseX + "," + mouseY)
  }

