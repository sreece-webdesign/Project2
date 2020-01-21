function setup() {
 var canvas = createCanvas(340, 580);
  noStroke();
  canvas.parent('sketch');strokeWeight(4);
  stroke(0);
  fill(0);
  textSize(20);
}

canvas.parent('sketch-holder');

function draw() {
  background(255);
    //Vertical
    //  ( x   y   x    y)
    line(50, 50, 50, 505);
    line(50+115, 50, 50+115, 505);
    line(50+230, 50, 50+230, 505);
    //Horizontal
    line(50, 50, 280, 50);
    line(50, 50+115, 280, 50+115);
    line(50, 50+230, 280, 50+230);
    line(50, 50+340, 280, 50+340);
    line(50, 50+455, 280, 50+455);

//Living Lines
line(25+75*0, 25, mouseX, mouseY);
line(25+75*1, 25, mouseX, mouseY);
line(25+75*2, 25, mouseX, mouseY);
line(25+75*3, 25, mouseX, mouseY);
line(25+75*4, 25, mouseX, mouseY);

line(25+75*0, 25+75, mouseX, mouseY);
line(25+75*1, 25+75, mouseX, mouseY);
line(25+75*2, 25+75, mouseX, mouseY);
line(25+75*3, 25+75, mouseX, mouseY);
line(25+75*4, 25+75, mouseX, mouseY);

line(25+75*0, 25+75*2, mouseX, mouseY);
line(25+75*1, 25+75*2, mouseX, mouseY);
line(25+75*2, 25+75*2, mouseX, mouseY);
line(25+75*3, 25+75*2, mouseX, mouseY);
line(25+75*4, 25+75*2, mouseX, mouseY);

line(25+75*0, 25+75*3, mouseX, mouseY);
line(25+75*1, 25+75*3, mouseX, mouseY);
line(25+75*2, 25+75*3, mouseX, mouseY);
line(25+75*3, 25+75*3, mouseX, mouseY);
line(25+75*4, 25+75*3, mouseX, mouseY);

line(25+75*0, 25+75*4, mouseX, mouseY);
line(25+75*1, 25+75*4, mouseX, mouseY);
line(25+75*2, 25+75*4, mouseX, mouseY);
line(25+75*3, 25+75*4, mouseX, mouseY);
line(25+75*4, 25+75*4, mouseX, mouseY);

line(25+75*0, 25+75*5, mouseX, mouseY);
line(25+75*1, 25+75*5, mouseX, mouseY);
line(25+75*2, 25+75*5, mouseX, mouseY);
line(25+75*3, 25+75*5, mouseX, mouseY);
line(25+75*4, 25+75*5, mouseX, mouseY);

line(25+75*0, 25+75*6, mouseX, mouseY);
line(25+75*1, 25+75*6, mouseX, mouseY);
line(25+75*2, 25+75*6, mouseX, mouseY);
line(25+75*3, 25+75*6, mouseX, mouseY);
line(25+75*4, 25+75*6, mouseX, mouseY);

line(25+75*0, 25+75*7, mouseX, mouseY);
line(25+75*1, 25+75*7, mouseX, mouseY);
line(25+75*2, 25+75*7, mouseX, mouseY);
line(25+75*3, 25+75*7, mouseX, mouseY);
line(25+75*4, 25+75*7, mouseX, mouseY);




  //line 1

    if ((keyIsPressed == true) && (key == 'r')) {
      text('R', 45, 40, 25, 75);}
    else {}

    if ((keyIsPressed == true) && (key == 'o')) {
      text('O', 45+115, 40, 25, 75);}
    else {}

    if ((keyIsPressed == true) && (key == 'o')) {
      text('O', 45+230, 40, 25, 75);}
    else {}

  //Line 2

  if ((keyIsPressed == true) && (key == 'm')) {
    text('M', 45, 40+115, 25, 75);}
  else {}

  if ((keyIsPressed == true) && (key == 'o')) {
    text('O', 45+115, 40+115, 25, 75);}
  else {}

  if ((keyIsPressed == true) && (key == 'f')) {
    text('F', 45+230, 40+115, 25, 75);}
  else {}

  if ((keyIsPressed == true) && (key == 'g')) {
    text('G', 45, 40+230, 25, 75);}
  else {}

  if ((keyIsPressed == true) && (key == 'h')) {
    text('H', 45+115, 40+230, 25, 75);}
  else {}

  if ((keyIsPressed == true) && (key == 'o')) {
    text('O', 45+230, 40+230, 25, 75);}
  else {}


    if ((keyIsPressed == true) && (key == 's')) {
      text('S', 45, 40+340, 25, 75);}
    else {}

    if ((keyIsPressed == true) && (key == 't')) {
      text('T', 45+115, 40+340, 25, 75);}
    else {}

    if ((keyIsPressed == true) && (key == 's')) {
      text('S', 45+230, 40+340, 25, 75);}
    else {}



      if ((keyIsPressed == true) && (key == ' ')) {
        text('BY', 45, 40+455, 25, 75);}
      else {}

      if ((keyIsPressed == true) && (key == ' ')) {
        text('SEAN', 145, 40+455, 25, 75);}
      else {}

      if ((keyIsPressed == true) && (key == ' ')) {
        text('REECE', 195, 40+455, 25, 75);}
      else {}
    //Line
  }
