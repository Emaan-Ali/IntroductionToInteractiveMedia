function setup() {
  //Reducing the framerate to give a better effect

  frameRate(20);

  createCanvas(400, 400);

  noStroke();

  //Genrating the background branches

  let redvalue = random(135, 160);

  fill(redvalue, 60, 10, 100);

  for (var x = 10; x <= 400; x = x + random(50, 80)) {
    for (var y = 10; y <= 400; y = y + random(0, 50)) {
      rect(x, y, 30, 40);
    }
  }
}

function draw() {
  noStroke();

  // Generating the leaves

  redValue = random(0, 100);
  blueValue = random(0, 80);

  if (mouseIsPressed == true) {
    redVal = random(200, 255);
    greenVal = random(100, 150);
    blueVal = random(0, 30);

    fill(redVal, greenVal, blueVal, 150);
  } else {
    fill(redValue, 160, blueValue, 150);
  }

  ellipseX = random(0, 400);
  ellipseY = random(0, 400);

  ellipse(ellipseX, ellipseY, 25, 25);
}
