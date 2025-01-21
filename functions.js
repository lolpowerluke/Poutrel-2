/** @type {CanvasRenderingContext2D} */
let context;

let canvas = document.getElementById("canvas1");

window.onresize = drawMainPage;

function drawMainPage() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  context = canvas.getContext("2d");
  context.shadowOffsetX = 4;
  context.shadowOffsetY = 2;
  context.shadowBlur = 5;
  context.shadowColor = "rgba(0,0,0,0.5)";

  let width = context.canvas.width;
  let height = context.canvas.height;

  context.clearRect(0,0, width, height)
  context.fillStyle = "#F9F8F3";
  context.beginPath();
  context.arc(width/6-width/12, 100, width/10, 0, Math.PI*2);
  context.arc(width/3-width/12, 100, width/10, 0, Math.PI*2);
  context.arc(width/2-width/12, 100, width/10, 0, Math.PI*2);
  context.arc(width/6*4-width/12, 100, width/10, 0, Math.PI*2);
  context.arc(width/6*5-width/12, 100, width/10, 0, Math.PI*2);
  context.arc(width-width/12, 100, width/10, 0, Math.PI*2);
  context.fill();
  context.beginPath();
  context.fillStyle = "#DC1F26";
  context.arc(width/6*5, width/18+100, width/24, 0, Math.PI*2);
  context.fill();
  context.beginPath();
  context.fillStyle = "#053447";
  context.arc(width/6-width/14, width/10+100, width/24, 0, Math.PI*2);
  context.fill();
  context.beginPath();
  context.fillStyle = "#2C463F";
  context.arc(width/6+width/12, height-width/10, width/40, 0, Math.PI*2);
  context.fill();
  context.beginPath();
  context.fillStyle = "#F0A71E";
  context.arc(width/6-width/24, height, width/24, 0, Math.PI*2);
  context.fill();
  context.beginPath();
  context.fillStyle = "#F0A71E";
  context.arc(width-width/9, height/3*2, width/50, 0, Math.PI*2);
  context.fill();
  context.beginPath();
  context.fillStyle = "#053447";
  context.arc(width-width/12, height/2, width/30, 0, Math.PI*2);
  context.fill();
  drawLines(width-width/12, height/2, width/30, "white");
  context.beginPath();
  context.fillStyle = "#F9F8F3";
  context.strokeStyle = "black"
  context.arc(width/6*5-width/7, height-height/5, width/30, 0, Math.PI*2);
  context.fill();
  drawLines(width/6*5-width/7, height-height/5, width/30, "black");
}
function drawLines(center_x, center_y, radius, color) {
  drawLine(center_x, center_y, radius, 0, color);
  drawLine(center_x, center_y, radius, 15, color);
  drawLine(center_x, center_y, radius, 30, color);
  drawLine(center_x, center_y, radius, 47, color);
  drawLine(center_x, center_y, radius, 68, color);
  drawLine(center_x, center_y, radius, -15, color);
  drawLine(center_x, center_y, radius, -30, color);
  drawLine(center_x, center_y, radius, -47, color);
  drawLine(center_x, center_y, radius, -68, color);
}
function drawLine(center_x, center_y, radius, angle, color) {
  var x = center_x + radius * Math.cos(-(35-angle)*Math.PI/180);
  var y = center_y + radius * Math.sin(-(35-angle)*Math.PI/180);
  var x2 = center_x + radius * Math.cos(-(angle-145)*Math.PI/180);
  var y2 = center_y + radius * Math.sin(-(angle-145)*Math.PI/180);

  context.beginPath();
  context.strokeStyle = color;
  context.moveTo(x, y);
  context.lineTo(x2, y2);
  context.stroke();
}

document.addEventListener('DOMContentLoaded', () => {
  // Functie om decoratieve cirkels toe te voegen
  function createCircle(className, parentSelector, styles) {
    const circle = document.createElement('div');
    circle.className = circle ${className};
    Object.assign(circle.style, styles);
    document.querySelector(parentSelector).appendChild(circle);
  }

  // Voeg cirkels toe aan de juiste secties
  createCircle('yellow', '.section.what-is-poutrel', { top: '-50px', left: '10%' });
  createCircle('red', '.section.what-is-poutrel', { bottom: '-30px', right: '10%' });

  createCircle('red', '.section.mission', { top: '-50px', right: '10%' });
  createCircle('yellow', '.section.mission', { bottom: '-30px', left: '10%' });

  createCircle('yellow-large', '.section.join-us', { bottom: '-50px', left: '50%' });
});