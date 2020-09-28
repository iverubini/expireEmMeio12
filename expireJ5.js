/*   

EXPIRE

Expire é um código em JavaScript de comandos básicos que permite registrar
frases, reflexões, cantorias e movimentos respiratórios em formas geométricas
abstratas.

Feito por Ive Rubini durante os encontros de Programação Recreativa
em Processing organizados por Diego de los Campos.

http://iverubini.hotglue.me
https://www.openprocessing.org/user/46850/
tiago.rubini@gmail.com


*/

let micro;

let x=150;
let y=150;
let a = 0; 
let t; 
let ctx, ctxOn;


function setup()
  
   {
      ctx = getAudioContext();
    ctxOn = createButton('C̾L̾I̾C̾K̾ ̾o̾u̾ ̾T̾A̾P̾ ̾p̾a̾r̾a̾ ̾c̾o̾m̾e̾ç̾a̾r̾/̾e̾m̾p̾e̾z̾a̾r̾');
    ctxOn.position(windowWidth/4, windowHeight/2);
    ctxOn.size(windowWidth/8, windowHeight/14);
    ctxOn.mousePressed(() => {
    ctx.resume().then(() => {
    console.log('Audio Context is now ON');
        ctxOn.hide();
    });
    });
  
  createCanvas(w=windowWidth, h=windowHeight);
  background(255, 166, 158);
  frameRate(100);
  noStroke();  
  micro = new p5.AudioIn();
  micro.start();
}

function draw(){
  noStroke();
  
  y1= year();
  m1= month();
  day1= day();
  h11= hour();
  minu1= minute();
  sec=second();

    noStroke();
  
  let r=random(10, 60);
  let voz=micro.getLevel()*800;
  a=a+0.31; //qto menor, mais espaçada/suave fica a curva
  x=x+random(0,9); 
  let fala=micro.getLevel()*200;
  
  print(micro.getLevel(0));
 
  //fill(random(90, 255)+2*fala, 30+20*fala, random(50,100)+2.5*fala, 100);
  //fill(fala*10, fala*10, fala*10);
  fill((10*frameCount) % 360, 100, 100);
  
if(mouseIsPressed){ beginShape();
    vertex (mouseX+fala*8, mouseY+fala*10);
    vertex(mouseX, mouseY);
    vertex (mouseX+100*sin(fala), mouseY + 90*cos(fala));
    vertex (mouseX+fala*12, mouseY+10*sin(fala));
    endShape(); }
 
  //fill(255, 105, 192);
  fill(181, 245, 20);
  ellipse(x, y+r*sin(a), fala*4.2, fala*4.2);
  fill(255, 150);
  ellipse(x+r*cos(a), y+r*sin(a), fala*3, fala*3);
  fill(0, 180);
  ellipse(x+r*cos(a), y+r*cos(a), fala*2, fala*2);
 
  if(x > (w - 50)) { x=50; y=y+120;} //cria uma linha
  if(frameCount > random(250,400) ) { frameCount=0; x=x+150; } //espaçador
  if( y > 500) { x=100; y=-1000; frameCount=0;
  fill(255, 166, 158); rect(0,0, width, height);}
  if (y < 0) { x=100; y=y+120;}

  }
