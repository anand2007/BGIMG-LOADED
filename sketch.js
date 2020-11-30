var bg;

function preload(){
  bg = loadImage("bg.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(bg);  
  drawSprites();
}