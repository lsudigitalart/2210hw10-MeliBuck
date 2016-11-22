var x = [];

function setup() {
  createCanvas(320,240);

  for(var i =0; i < 3000; i++){
    x[i] = random(-1000, 1000);
  }

  println(x[0], x[1]);
}

function draw(){
  background (0);

  for(var i=0; i<x.length;i++){
    x[i]++;
    var y = i*.33;
    ellipse(x[i], y, 10);
  }

}
