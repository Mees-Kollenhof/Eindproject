function setup()  {
  bg = loadImage('Wall.jpg');
  createCanvas(1200, 1000);
  noLoop();
  //textFont("Eras Medium ITC");
}

function draw() {
  background(bg);
  fill('red');

  let grid = [
    1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
  ];

  rect(0, 0, 100, 1000);
  rect(100, 0, 100, 400);
  rect(100, 500, 100, 400);
  rect(1100, 0, 100, 1000);
  rect(1000, 200, 100, 1000);
  rect(0, 0, 1200, 100);
  rect(0, 900, 1200, 100);
  

} /*counterX = 0;
  counterY = 0;

  for(let i = 0; i < 120; i++) {
    counterY = Math.floor(i / 10);
    console.log(counterY);

    if(grid[i] == 1) {
      rect(i * 100, counterY * 100, 100, 100);
    }
  }