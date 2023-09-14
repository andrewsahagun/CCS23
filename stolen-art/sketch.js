function setup () {
  createCanvas (800,500)

  function mousePressed(){ 
    console.log(mouseX + "," + mouseY);
    console.log(mouseX, mouseY);
    
    }

//background color rect
fill(0,0,102)
  rect(0,0,800,320)



//tablcloth color
fill(255,255,51);
  rect(0,320, 800,180)

//lower, smaller tabletop portion; horizontal
  line(0,330,800,330)
  line(0,340,800,340)
  line(0,350,800,350)
  line(0,360,800,360)
  line(0,370,800,370)
  line(0,380,800,380)
  line(0,390,800,390)
  line(0,400,800,400)
  line(0,410,800,410)
  line(0,420,800,420)
  line(0,430,800,430)
  line(0,440,800,440)
  line(0,450,800,450)
  line(0,460,800,460)
  line(0,470,800,470)
  line(0,480,800,480)
  line(0,490,800,490)
  line(0,500,800,500)

//even smaller vertical table lines
  line(10,320,10,500)
  line(30,320,30,500)
  line(50,320,50,500)
  line(70,320,70,500)
  line(90,320,90,500)
  line(110,320,110,500)
  line(130,320,130,500)
  line(150,320,150,500)
  line(170,320,170,500)
  line(190,320,190,500)
  line(210,320,210,500)
  line(230,320,230,500)
  line(250,320,250,500)
  line(270,320,270,500)
  line(290,320,290,500)
  line(310,320,310,500)
  line(330,320,330,500)
  line(350,320,350,500)
  line(370,320,370,500)
  line(390,320,390,500)
  line(410,320,410,500)
  line(430,320,430,500)
  line(450,320,450,500)
  line(470,320,470,500)
  line(490,320,490,500)
  line(510,320,510,500)
  line(530,320,530,500)
  line(550,320,550,500)
  line(570,320,570,500)
  line(590,320,590,500)
  line(610,320,610,500)
  line(630,320,630,500)
  line(650,320,650,500)
  line(670,320,670,500)
  line(690,320,690,500)
  line(710,320,710,500)
  line(730,320,730,500)
  line(750,320,750,500)
  line(770,320,770,500)
  line(790,320,790,500)

//spoon
stroke(0,0,0)
strokeWeight(4)
  line(380,400,360,455)
ellipse(360,455,23,29)
  line(420,400,440,455)
ellipse(440,455,23,29)

//fork
  line(40,450,120,460)
  line(120,460,140,450)
  line(120,460,130,480)
  line(120,460,140,470)

//fork hand
  line(600,330,620,400)
  line(620,400,640,410)
  line(620,400,605,420)
  line(620,400,620,420)

//knife
  line(590,450,680,420)
  line(680,420,650,440)
  line(650,440,630,438)


//la sandia & rind
strokeWeight(1)
stroke(10,0,0)
fill(0,250,0)
  angleMode(DEGREES);
  arc(400,150,580,500,0,180);

//background (lines down, x-axis=20 apart)
stroke(178,102,255)
  line(0,0,0,500)
  line(20,0,20,500)
  line(40,0,40,500)
  line(60,0,60,500)
  line(80,0,80,500)
  line(100,0,100,500)
  line(120,0,120,500)
  line(140,0,140,500)
  line(160,0,160,500)
  line(180,0,180,500)
  line(200,0,200,500)
  line(220,0,220,500)
  line(240,0,240,500)
  line(260,0,260,500)
  line(280,0,280,500)
  line(300,0,300,500)
  line(320,0,320,500)
  line(340,0,340,500)
  line(360,0,360,500)
  line(380,0,380,500)
  line(400,0,400,500)
  line(420,0,420,500)
  line(440,0,440,500)
  line(460,0,460,500)
  line(480,0,480,500)
  line(500,0,500,500)
  line(520,0,520,500)
  line(540,0,540,500)
  line(560,0,560,500)
  line(580,0,580,500)
  line(600,0,600,500)
  line(620,0,620,500)
  line(640,0,640,500)
  line(660,0,660,500)
  line(680,0,680,500)
  line(700,0,700,500)
  line(720,0,720,500)
  line(740,0,740,500)
  line(760,0,760,500)
  line(780,0,780,500)
  line(800,0,800,500)

//horizontal, wider background
 line(0,0,800,0)
 line(0,20,800,20)
 line(0,40,800,40)
 line(0,60,800,60)
 line(0,80,800,80)
 line(0,100,800,100)
 line(0,120,800,120)
 line(0,140,800,140)
 line(0,160,800,160)
 line(0,180,800,180)
 line(0,200,800,200)
 line(0,220,800,220)
 line(0,240,800,240)
 line(0,260,800,260)
 line(0,280,800,280)
 line(0,300,800,300)
//red part of sandia
fill(250,0,0);
  arc(400,150,500,420,0,180)
  line(110,150,690,150)

  //lower different color of sandia... how to hide it?
//fill(250,0,0) 
//curve(250,180,550,180,145,145,655,145)
//arc(400,150,500,420,0,180)


//THE table line
stroke(0,0,0)
  line(0,320,800,320)


//face aka ojos
stroke(250,250,250)
strokeWeight(15)
point(350,250)
strokeWeight(25)
point(470,230)

stroke(0,0,0)
strokeWeight(9)
point(347,250)
strokeWeight(12)
point(473,239)

//semillas
fill(0,0,0)
strokeWeight(8)
point(400,200)
point(450,269)
point(520,254)
point(320,300)
point(280,210)
point(624,200)
point(569,180)
point(400,330)
point(480,325)
point(250,270)
point(210,180)
point(580,250)
point(490,200)


}





;

