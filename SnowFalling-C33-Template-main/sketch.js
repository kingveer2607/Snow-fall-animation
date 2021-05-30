function preload(){
  backgroundImg = loadImage("snow1.jpg");

}

function setup() {
  createCanvas(800,400);

}

function draw() {
  background(backgroundImg); 
  snow = new Snow((round(random(50,750))),50); 
  drawSprites();
}
function potentiallyBuggyCode() {
  debugger;
}