var font1, rand;
  const letters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var listLength;
  function preload(){
  font1 = loadFont('data/CourierStd-BoldOblique.otf');
}

function setup() {
createCanvas(windowWidth,windowHeight);
background(220);
textSize(44);
noStroke();
//textFont(font1);
textAlign(CENTER);
listLength=letters.length;
//frameRate();
}


function draw() {
  rand = int(random(1,listLength-1))
  textSize(random(12,300));
background(220,2); 
// add more alpha (second value) to make it fade quicker.
//Two values = 1st is grescale, second is alpha. 
//three values = rgb. four values = rgb, fourth is alpha.
text(letters[rand], random(width), random(height));
}

function mousePressed(){
  push();
  fill(220);
  noStroke();
  circle(mouseX, mouseY, 400);
  pop();
}

function mouseDragged(){
  push();
  fill(220);
  noStroke();
  circle(mouseX, mouseY, 400);
  pop();
}

function keyPressed(){
  if (key===' '){
    background(220);
  }
}
