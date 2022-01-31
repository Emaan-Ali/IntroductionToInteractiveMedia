function setup() {
  createCanvas(600, 400);
  background(255,193,203)
  
  noStroke()
  
  //Neck
  fill(240,200,160)
  quad(274,260,326,260,345,340,255,340)
  
  //Face
  fill(245,214,175)
  ellipse(300,200,150,180)
  
  //Eyes
  fill(251,255,255)
  ellipse(270,170,37,25)
  ellipse(330,170,37,25)
  
  fill(106,76,66)
  ellipse(330,170,22,22)
  ellipse(270,170,22,22)
  
  fill(0,0,0)
  ellipse(330,170,12,12)
  ellipse(270,170,12,12)
  
  //Lips
  fill(159,31,25)
  arc(300,230,60,55,PI/5,4*PI/5, OPEN)
  arc(290,261,40,40,5*PI/4,7*PI/4, OPEN)
  arc(310,261,40,40,5*PI/4,7*PI/4, OPEN)
  
  //Nose
  fill(240,200,160)
  triangle(300,180,294,220,306,220)
  
  //Hair
  fill(78,67,63)
  ellipse(240,120,70,60)
  ellipse(220,145,60,60)
  ellipse(210,170,50,40)
  ellipse(210,190,60,50)
  ellipse(210,210,60,60)
  ellipse(220,240,50,50)
  ellipse(200,250,50,60)
  ellipse(190,225,30,30)
  ellipse(225,265,50,50)
  ellipse(200,260,60,70)
  ellipse(190,230,50,60)
  ellipse(200,200,50,60)
  ellipse(220,125,50,60)
  ellipse(200,170,50,60)
  ellipse(225,280,60,70)
  ellipse(200,285,70,70)
  
  ellipse(290,100,70,70)
  ellipse(330,100,65,60)
  ellipse(370,120,65,65)
  ellipse(400,170,65,70)
  ellipse(395,220,65,65)
  ellipse(400,250,70,70)
  ellipse(405,290,65,65)
  ellipse(380,270,65,60)
  ellipse(380,290,60,70)
  ellipse(400,140,45,40)
  ellipse(410,200,45,40)
  
  
  
}
