//Declaring an array
let objects = [];

//Declaring a triangle class
class Triangle {
  constructor() {
    this.x1 = random(15, 385);
    this.x2 = random(15, 385);
    this.x3 = random(15, 385);
    this.y1 = random(15, 385);
    this.y2 = random(15, 385);
    this.y3 = random(15, 385);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }

  //Displaying Triangles
  display() {
    noStroke();
    fill(this.r, this.g, this.b, 40);
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
  }
}

function setup() {
  //Decreasing framerate
  frameRate(20);
  createCanvas(400, 400);

  //Creating a for() loop and pushing the traingles into the objects array
  for (var i = 0; i < 50; i++) {
    objects.push(new Triangle());
  }
}
let x = 0;
function draw() {
  objects[x].display();
  if (x < objects.length) {
    x += 1;
  }
}
