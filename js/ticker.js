var canvasDiv = document.getElementById('ticker');
var width = canvasDiv.clientWidth;

function setup() {
    var canvasDiv = document.getElementById('ticker');
    var width = canvasDiv.offsetWidth;
    var sketchCanvas = createCanvas(width, 48);
    // console.log(sketchCanvas);
    sketchCanvas.parent("ticker");
    ellipseMode(CENTER);
    fill(255);
}
function draw() {
    background(0);
    textAlign(LEFT, CENTER);
    textSize(16);
    noStroke();
    fill(255);
    text('This shape and text is generated in a p5.js sketch', 48, 24);
    noFill();
    stroke(255);
    strokeWeight(3);
    ellipse(24, 24, 24);

}

function windowResized() {
    resizeCanvas(width, 48);
    
}