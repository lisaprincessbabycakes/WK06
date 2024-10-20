let dataObject;
let data;

let longitudeMin = Infinity;
let longitudeMax = -Infinity; 
let latitudeMin = Infinity;
let latitudeMax = -Infinity;

let speciesColors = {};

function preload(){
  dataObject = loadJSON("TREE.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  
  data = Object.values(dataObject);
  
  for (let idx = 0; idx < data.length; idx++) {
    let longitude = data[idx].longitude;
    let latitude = data[idx].latitude;

    longitudeMin = min(longitudeMin, longitude);
    longitudeMax = max(longitudeMax, longitude);
    latitudeMin = min(latitudeMin, latitude);
    latitudeMax = max(latitudeMax, latitude);
    
    // each different tree species is a different shade of green
    let species = data[idx].spc_common;
    if (!speciesColors[species]) {
      // random shade of green 
      speciesColors[species] = color(0, random(25, 255), 0); 
    }
  }
  
  noLoop();  
}

function draw() {
  background(190,201,145);
  
  translate(0, height / 4);
  TreeData();
  
}

function TreeData() {
  noFill();
  strokeWeight(1.5);
  
  for (let idx = 0; idx < data.length; idx++) {
    let longitude = data[idx].longitude;
    let latitude = data[idx].latitude;
    let species = data[idx].spc_common;
    
    let x = map(longitude, longitudeMin, longitudeMax, 0, width);
    let d = map(latitude, latitudeMin, latitudeMax, 40, width / 10);
    
    stroke(34,59,5);
    strokeWeight(2);
    fill (speciesColors[species])
    // triangle for each tree
    let h = d;  
    let Base = d / 2; 
    
    triangle(
      x, height/5  - h / 3,         
      x - Base, height / 4 + h / 2,  
      x + Base, height / 4 + h / 2   
    )
  }
}