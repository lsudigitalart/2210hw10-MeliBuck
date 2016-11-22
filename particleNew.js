var pa = [];

function setup(){
  createCanvas(600,400);
  pa[0] = new Particle(width/2, height/2);
  noCursor();
  stroke(255);

}

function draw(){
  background(0);

  for(var i = 0; i < pa.length; i++){
    pa[i].display();
    pa[i].move();
  }

  for(var n = 1; n < pa.length; n++){
    strokeWeight();
    line(pa[n].posX, pa[n].posY, pa[n-1].posX, pa[n-1].posY);
  }
}

function mouseMoved(){
  pa[pa.length] = new Particle(mouseX, mouseY, 255, 255, 255);
}

function mouseReleased(){
  pa[pa.length] = new Particle(mouseX, mouseY);
}

function Particle(tempX, tempY, tempR, tempG, tempB){
  this.posX = tempX;
  this.posY = tempY;
  this.cR = tempR;
  this.cG = tempG;
  this.cB = tempB;
  var particleSize = 10

  this.vx = random(-10, 10);
  this.vy = random(-15, 15);
  var gravity = 1;

  this.move = function(){
    this.posX += this.vx
    this.posY += this.vy
    this.vy += gravity;

    if(this.posY + 5>height){
      this.vy *= -0.5;
      this.vx *= 0.75;
      this.posY = height - 4;
    }

    if(this.posX < 0 || this.posX > width){
      this.vx *= -1;
    }

  };

  this.display = function(){
    fill(this.cR, this.cG, this.cB);
    ellipse(this.posX, this.posY, particleSize);
  };


}
