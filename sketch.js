var img;
var bucket = [];
var beads = [];
var newColor = 0;

//sets image to sunflower
function preload() {
  img = loadImage("Sunflower.PNG");
}
function setup() {
  createCanvas(1000, 700);
  makeAPic();
  initBucket();
  createBead();
  colorButton();
}
//displays beads from createBead()
function draw() {
  background(255);
  image(img, 550, 0);
  for(var i = 0; i<beads.length; i++){
    beads[i].display();
  }
}
//sets img to coordinates and  dimensions
function makeAPic(){
  image(img, 40, 40 , 500, 500);
  img.resize(500,500);
}

//creates 11 color options for beads
function initBucket(){
  bucket[0] = color(255);
  bucket[1] = color(0);
  bucket[2] = color(255, 0, 0);
  bucket[3] = color(0,255, 0);
  bucket[4] = color(0, 0, 255);
  bucket[5] = color(255, 255, 0);
  bucket[6] = color(0, 255, 255);
  bucket[7] = color(255, 0, 255);
  bucket[8] = color(110, 40, 10);
  bucket[9] = color(255, 50, 5);
  bucket[10] = color(170);
}

//creates  beads with parameters from bead object constructor
function createBead(){
  img.loadPixels();
  for(var x=0; x<500; x+=40){
    for(var y=0; y<500; y+=40){
      var c = img.get(x,y);
      beads.push(new Bead(x, y, 40, getBucketColor(c))); /*sets color to bucket
      color closest to the picture color at the coordinate (x,y) */
    }
  }
}


//creates button
function colorButton(){
  button = createButton("Change Color");
  button.position(250, 600);
  button.mousePressed(changeColorPrompt);
}

function Bead(x, y, d, k) {
  this.x = x;
  this.y = y;
  this.d = d;
  this.col = k;
  this.display = function(){
    fill(this.col);
    ellipse(this.x, this.y, this.d);
  }
  //functionality that determines which bead is pressed for color change
  this.checkPressed = function() {
    var xDiff = mouseX - this.x;
    var yDiff = mouseY - this.y;
    var minimum = sqrt(xDiff*xDiff + yDiff*yDiff);
    if (minimum < this.d/2) {
      return true;
    }
    else {
      return false;
    }
  }
}
//when mouse is pressed color changes with new color from prompt response
function mousePressed() {
  for(var i = 0; i<beads.length; i++) {
    if(beads[i].checkPressed()) {
      console.log(i + " bead was clicked")
      beads[i].col = newColor;
      console.log(newColor);
    }
  }
}
//displays prompt for user to change bead color
function changeColorPrompt(){
  var response = prompt("Enter a color!");
  console.log(response);
  changeColor(response);
}
//
function changeColor(response) {
  if(response == "Black") {
    newColor=bucket[1];
  }
  else if(response == "Red"){
    newColor=bucket[2];
  }
  else if(response == "Green"){
    newColor=bucket[3];
  }
  else if(response == "Blue"){
    newColor=bucket[4];
  }
  else if(response == "Yellow"){
    newColor=bucket[5];
  }
  else if(response == "Cyan"){
    newColor=bucket[6];
  }
  else if(response == "Purple"){
    newColor=bucket[7];
  }
  else if(response == "Brown"){
    newColor=bucket[8];
  }
  else if(response == "Orange"){
    newColor=bucket[9];
  }
  else if(response == "Gray"){
    newColor=bucket[9];
  }
  else{
    newColor=bucket[0];
  }
}

//determines which bucket color is closest to that of the coordinate c
function getBucketColor(q){
  var colorToReturn;
  var rdiff = red(bucket[0]) - red(q);
  var gdiff = green(bucket[0]) - green(q);
  var bdiff = green(bucket[0]) - blue(q);
  var min = sqrt(rdiff*rdiff + gdiff*gdiff + bdiff*bdiff);
  for(i=0; i<bucket.length; i++) {
    var rdiff = red(q) - red(bucket[i]);
    var gdiff = green(q) - green(bucket[i]);
    var bdiff = blue(q) - blue(bucket[i]);
    var d = sqrt(rdiff*rdiff + gdiff*gdiff + bdiff*bdiff);
    if(d < min) {
      min = d;
      colorToReturn = bucket[i];
    }
    else if(min > d) {
      min = min;
      colorToReturn = min;
    }
  }
  return colorToReturn;
}
