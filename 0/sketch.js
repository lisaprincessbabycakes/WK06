// TODO: add more circles using lists



// keep listing global variables 

// let ypos0;
// let ypos1;
// let ypos2;

// if i wanted a 100 of these objects, it might not be managable - there's a way to organize things into lists 
//you can manually put your objects in a list if know the values 

let numCircles;
let ypos = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
  // frameRate(30);
  noStroke();
 

 numCircles = 10; 

  for (let idx =0; idx < numCircles; idx += 1){
    ypos.push(random(height)); //random(height);
  }
}
  // ypos0 = -50;
  // ypos1 = -50;
  // ypos2 = -50;


function draw() {
  background(220, 20, 220);
  // ellipse(width / 2 -100, ypos[0], 50);
  // ellipse(width / 2, ypos[1], 50);
  // ellipse(width / 2 +100, ypos[2], 50);
  
  //give them different speeds
  
  // ypos[0] += 8;
  // ypos[1] += 11;
  // ypos[2] += 17;

  // if (ypos[0] > height) {
  //   ypos[0] = -50;
  // }

  // if (ypos[1] > height) {
  //   ypos[1] = -50;
  // }
  // if (ypos[2] > height) {
  //   ypos[2] = -50;
  // }

  for (let idx = 0; idx < ypos.length; idx += 1){
    let xpos = map(idx, 0, ypos.length-1, 0, width);
    ellipse (xpos + 25, ypos[idx], 50);
    
    
    ypos[idx] += 8;
    if (ypos[idx] > height) {
      ypos[idx] = -50;

  }
 }
}

function mousePressed(){
  yxpos.push(random(width));
  ypos.push(random(height));
  diam.push(random());


}