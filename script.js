let pathPoints = [
  { start: { x: 499.5, y: 318.5 }, cp1: { x: 507.579, y: 316.016 }, cp2: { x: 521.347, y: 310.587 }, end: { x: 534.5, y: 298.5 } },
  // Add the rest of your extracted SVG points here
];

function setup() {
  createCanvas(1000, 1000);
  background(240);
  noLoop();
  drawPath();
  drawPoints();
}

function drawPath() {
  noFill();
  stroke(0);
  strokeWeight(3);
  beginShape();
  vertex(pathPoints[0].start.x, pathPoints[0].start.y);
  for (let i = 0; i < pathPoints.length; i++) {
    let segment = pathPoints[i];
    bezierVertex(segment.cp1.x, segment.cp1.y, segment.cp2.x, segment.cp2.y, segment.end.x, segment.end.y);
  }
  endShape();
}

function drawPoints() {
  fill(255, 0, 0);
  noStroke();
  for (let i = 0; i < pathPoints.length; i++) {
    let segment = pathPoints[i];
    ellipse(segment.end.x, segment.end.y, 10, 10);
  }
}

function addProject() {
  let lastPoint = pathPoints[pathPoints.length - 1].end;
  let newSegment = {
    start: { x: lastPoint.x, y: lastPoint.y },
    cp1: { x: lastPoint.x + random(50, 100), y: lastPoint.y + random(-50, 50) },
    cp2: { x: lastPoint.x + random(100, 150), y: lastPoint.y + random(-50, 50) },
    end: { x: lastPoint.x + random(150, 200), y: lastPoint.y + random(-50, 50) },
  };
  pathPoints.push(newSegment);
  redraw();
}

function mousePressed() {
  for (let i = 0; i < pathPoints.length; i++) {
    let d = dist(mouseX, mouseY, pathPoints[i].end.x, pathPoints[i].end.y);
    if (d < 10) {
      console.log("Project clicked at:", pathPoints[i].end);
    }
  }
}
