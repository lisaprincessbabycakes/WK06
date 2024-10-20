// TODO: add more circles using lists



let numCircles;
let xpos=[];
let ypos =[];
let diam =[];



function setup() {
  createCanvas(windowWidth, windowHeight);

  //noStroke();
 

 numCircles = 1000; 

  for (let idx =0; idx < numCircles; idx += 1){
    xpos.push (random(width));
    ypos.push(random(height));
    diam.push (random(30, 100));
  }
}
  


function draw() {
  background(220, 20, 220);
  

  for (let idx = 0; idx < ypos.length; idx += 1){
    ellipse (xpos[idx], ypos[idx], diam[idx]);
    
 }
}

function mousePressed(){
  xpos.push(random(width));
  ypos.push(random(height));

}