

function setup() {
  createCanvas(window.innerWidth, 100);
}

function draw() {

  if (mouseIsPressed) {
    fill(0,0,0);
  } else {
    fill(255,255,255);
  }
  ellipse(mouseX, mouseY, 1, 1);
  //background(220, 180, 200);
}