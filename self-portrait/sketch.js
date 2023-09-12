function setup() {
  createCanvas(400, 400);

//face//
fill(205, 133, 63)
  ellipse(200, 200, 280, 330)
  
//white eyes//
fill(250, 250, 250)
  ellipse(150, 150, 50, 30)
  ellipse(250, 150, 50, 30)
  
//iris//
fill (139, 69, 19)
  ellipse(150, 150, 30, 30)
  ellipse(250, 150, 30, 30)

//pupil//
fill (10, 0, 0)
  ellipse(150, 150, 15, 15)
  ellipse(250, 150, 15, 15)
  
//nose//
noFill();
  line(200, 150, 200, 200)
  arc(200, 215, 30, 27, PI + QUARTER_PI, 8)
  
//mouth// 
  fill(250,250,250)
  arc(195, 280, 70, 70, 50, PI + QUARTER_PI, CHORD)
  line(160, 279, 225, 295)

//hair//
  fill(10, 0, 0)
  triangle (95, 90, 120, 20, 150, 80)
  triangle (150, 80, 175, 15, 200, 80)
  triangle (200, 80, 220, 20, 250, 80)
  triangle (250, 80, 270, 15, 305, 90)

  triangle (120, 80, 158, 15, 175, 80)
  triangle (160, 80, 200, 10, 230, 80)
  triangle (210, 80, 245, 9, 280, 80)

}
