
var pep, diet; //these are global variables

function preload() {
  pep = loadImage("./pep.png");
  diet = loadImage("./diet.png");
  crs = loadImage("./cherrealsug.png");
  zero = loadImage("./zerosug.png");
  caffree = loadImage("./caffree.png");
  real = loadImage("./realsug.png");
  van = loadImage("./vanrealsug.png");
}

function setup() {
  canvas_context=createCanvas(900,780);
  background(0,0,0,500); //this is a color in RGBA colorspace : red, green, blue and alpha (opacity)

  for(var counter=0;counter<20;counter=counter+1){
    if(counter%2==0){
      image(pep,10,(counter*30),30,70);
      image(pep,70,(counter+1.5)*30,30,70);
      image(real,130,(counter-1.5)*30,30,70);
      image(pep,190,(counter+1)*30,30,70);
      image(crs,300,counter*40,30,70)

      push();
      translate(500+2*counter,10+counter*30);
      rotate(radians(counter*4));
      numb = counter/2
      if(numb%2==0){
        image(crs,0,0,30,70);
      }
      else{
        image(diet,0,0,30,70);
      }
      translate();
      pop(); 
    }
    else{
      image(diet,counter*100,0,30,70);
      image(diet,40,(counter*30),30,70);
      image(diet,100,(counter+1.5)*30,30,70);
      image(diet,160,(counter-1.5)*30,30,70);
      image(diet,220,(counter+1)*30,30,70);
      image(caffree,465,570,90,210)
      image(zero,717-counter,20+10*(counter+1),counter*1.5,3.5*counter)

        push();
        translate(717,400);
        rotate(radians(counter*18));
          image(van,20,20,30,70);
          translate();
        pop();

    }

  }

  //save(canvas_context, "dragonImage.jpg")
  //https://p5js.org/reference/#/p5/save

}
