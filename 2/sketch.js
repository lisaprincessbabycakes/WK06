// TODO: add more properties using objects
// TODO: create/draw using functions

let NUM_OBJS = 400;
let circles = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  for (let cnt= 0; cnt < NUM_OBJS; cnt++) {
    let aCircle = {
      x: random(width),
      y: random(height),
      d: random(50,100),
      a: 0,
      da: random(1,10),
      dx: random (-5, 5),
      dy: random (-5,5),
    };
    circles.push(aCircle);
  }
}

function draw() {
  background(220, 20, 220);  

  for(let idx = 0; idx < circles.length; idx ++){ // a counter from 0 to 9 
   let mCircle = circles[idx]; //temporary variable 
   fill(255, mCircle.a);
   ellipse(mCircle.x, mCircle.y, mCircle.d);

   mCircle.a = (mCircle.a + mCircle.da) % 255;

   mCircle.x = mCircle.x + mCircle.dx;
   mCircle.y = mCircle.y + mCircle.dy;

    if(mCircle.x < 0 || mCircle.x > width){
      mCircle.x = random(width);
    }
    if (mCircle.y < 0 || mCircle.y > height){
      mCircle.y = random(height);

    }
  }
}
