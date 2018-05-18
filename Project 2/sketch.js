var img;
var img1;
var img2;
var img3;
var mySound;
var isBeakerGrabbed = false;
var isMusic = false;
//Loads sounds
function preload() {
  soundFormats('mp3');
  mySound = loadSound('disco.mp3');
}
//Loads images
function setup(){
  createCanvas(1000, 1000);
  colorMode(RGB);
  img = loadImage("mrjonespic1.jpeg");
  img1 = loadImage("beaker0.jpeg");
  img2 = loadImage("beaker1.jpg");
  img3 = loadImage("mrjonespic3.jpg");
}

//calls the functions for normal Mr. Jones and then Disco Amigo Jones
function draw(){
  background(255);
  newmanDoodle(0, 255, 0);
  mrJ();
  beakers();
  if(isMusic){
    discoAmigo();
  }
}
//When mouse is clicked, this makes Mr. Jones Party
function mouseClicked() {
  grabBeaker();
  discoAmigo();
  musicPrep();
  discoAmigoPage();

}
//This makes normal Mr. Jones
function mrJ(){
  strokeWeight(10);
  line(50+width/2, 200, 50+width/2, 400);
  image(img, width/2, 150, 100, 100);
  line(50+width/2, 400, 150+width/2, 600);
  line(50+width/2, 400, width/2 - 50, 600);
  line(50+width/2, 250, mouseX, mouseY);
  line(50+width/2, 250, width/2 - 20, 380);
}
//This allows for movement of the green beaker
function beakers(){
  image(img1, width/2 +250, 350, 50, 50);
  if(isBeakerGrabbed == false){
    image(img2, width/2 - 250, 350, 50, 50);
  }
  else{
    image(img2, mouseX, mouseY, 50, 50);
  }
}


function grabBeaker(){
  if(mouseX<width/2 - 200 && mouseX>width/2 -250 && mouseY<400 && mouseY>350){
    isBeakerGrabbed = true;
  }
}

//This makes Mr. Jones Party
function discoAmigo(){
  if(isBeakerGrabbed == true && mouseX<width/2 + 300 && mouseX>width/2 +250 && mouseY<400 && mouseY>350){
    image(img3, width/2, 150, 100, 100);
    newmanDoodle(random(255), random(255), random(255));
  }
}

//This makes the music play when the experiment occurs
function musicPrep(){
  if(mouseX<width/2 + 300 && mouseX>width/2 +250 && mouseY<400 && mouseY>350){
    isMusic = !isMusic;
    //console.log("clicked");
    if(isMusic == false){
      mySound.pause();
    }
    else{
      mySound.setVolume(0.5);
      mySound.play();
    }
  }
}

//Doodle text
function newmanDoodle(x, y, z){
  textSize(72);
  fill(x, y, z);
  text("Newman Biology Doodle", 150, 100);
  fill(255);
}

function discoAmigoPage(){
  if(mouseX< 100 + width/2 && mouseX>width/2 && mouseY<250 && mouseY>150){
    document.location.href = "https://www.youtube.com/watch?v=9UfDcqnJrns";
  }
}
