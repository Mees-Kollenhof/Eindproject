function setup() 
{
  canvas = createCanvas(1200,1000);
  canvas.parent('processing');
  textFont("Eras Medium ITC");
  textSize(12);
  textAlign(CENTER,CENTER);
  fill('black');
}

teken() {
      push();
      noStroke();
      fill(50);
      rect(0,0,2,5);
      fill(60);
      pop();
  }