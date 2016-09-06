//Introduction more "atomic" programming with functions
//We will use a function or collection of reusable commands to
//draw a geometric pattern resembling a face


function FunnyFace(x,y){
  stroke(255,187,0,300);
  fill(222,0,93,300);
  ellipse(x, y, 60, 60);

  line(x-30,y+5,x+29,y+5)
  line(x-30,y-5,x+29,y-5)
  line(x-5,y-30,x-5,y+29)
  line(x+5,y-30,x+5,y+29)

  stroke(0,0,0,300);
  ellipse(x+25,y+35, 30, 30);
}

function setup() {
  createCanvas(872,729);
  background(1,136,163,300); //this is a color in RGBA colorspace : red, green, blue and alpha (opacity)

  for(var counter=0;counter<9;counter++){

    if(((counter%3)==1)||((counter%3)==2)){           //play with modulo operator
      FunnyFace(10+counter*100, counter*30);
      FunnyFace(35+counter*100, 150+counter*30);
      FunnyFace(15+counter*100, 275+counter*30);
      FunnyFace(counter*100, 350+counter*30);
      FunnyFace(63+counter*100, 440+counter*30);

    }
    else{
      FunnyFace(65+counter*100, 100+counter*30);
      FunnyFace(32+counter*100, 200+counter*30);
      FunnyFace(40+counter*100, 300+counter*30);
      FunnyFace(25+counter*100, 400+counter*30);
      FunnyFace(38+counter*100, 500+counter*30);
    }
}
}
