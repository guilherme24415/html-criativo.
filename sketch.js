function setup() {
    createCanvas(600, 600);
    background("blue");
  }
  
  function draw() {
    stroke("black");
    strokeWeight(5);
    fill("rgb(o,255,233)");
    if(mouseIsPressed){
      rect(mouseX, mouseY, 40, 40);
    }
  }