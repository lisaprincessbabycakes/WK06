// TODO: visualize data from JSON
let dataObject;
let data;

let longitudeMin = Infinity;
let longitudeMax = -Infinity; 
let latitudeMin = Infinity;
let latitudeMax = -Infinity;

function preload(){
  dataObject = loadJSON("TREE.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  data = Object.values(dataObject);
  
  //smallest and largest values for longitude and latitude
  for (let idx = 0; idx < data.length; idx++) {
    let longitude = data[idx].longitude;
    let latitude = data[idx].latitude;

    longitudeMin = min(longitudeMin, longitude);
    longitudeMax = max(longitudeMax, longitude);
    latitudeMin = min(latitudeMin, latitude);
    latitudeMax = max(latitudeMax, latitude);
  }
}

function draw() {
  background(190,201,145);
  noFill();
  stroke(34,59,5);
  strokeWeight(2);

  
  for (let idx = 0; idx < data.length; idx++) {
    let longitude = data[idx].longitude;
    let latitude = data[idx].latitude;
    
    let x = map(longitude, longitudeMin, longitudeMax, 0, width);
    let treeHeight = map(latitude, latitudeMin, latitudeMax, 20, 100);
    
    // different colors based on longitude ranges
    if (longitude < -74) {
      fill(90,139,93); // light green longitudes less than -74
    } else if (longitude < -73.95) {
      fill(144,115,80); // brown longitudes between -74 and -73.95
    } else if (longitude < -73.9) {
      fill(95,137,113); // sage longitudes between -73.95 and -73.9
    } else {
      fill(54,86,62); // dark green longitudes greater than -73.9
    }

    // tree shape (triangle) for each tree
    let treeBaseWidth = treeHeight * 0.6; 
    let yBase = height/2  + treeHeight;
    
    triangle(x, height / 2 - treeHeight / 2, x - treeBaseWidth / 2, yBase, x + treeBaseWidth / 2, yBase);
  }
  noLoop(); 
}

