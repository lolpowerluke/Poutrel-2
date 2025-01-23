/** @type {CanvasRenderingContext2D} */
let context;
let context2;

let canvas;
let canvas2;

function drawMainPage() {
  canvas = document.getElementById("canvas1");
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
  drawPerson((width/36)/5*6, 3, width/36, "#2C463F");
  drawPerson((width/36)/5*6, 2, width/36, "white");
  drawPerson((width/36)/5*6, 1, width/36, "black");
  drawPerson((width/36)/5*6*3, 2.2, width/36, "orange");
  drawPerson((width/36)/5*6*3, 1.2, width/36, "#053447");
  drawPerson((width/36)/5*6*5, 1.4, width/36, "red");
  context.beginPath();
  context.fillStyle =  "white";
  context.arc(width/10*9 + width/35, height/6*4-height/100, width/75, 0, Math.PI*2)
  context.fill();
  drawLines(width/10*9 + width/35, height/6*4-height/100, width/75, "black")
}

/**
 * 
 * @param {Number} x middle of top circle
 * @param {Number} y middle of top circle
 * @param {String} color color of the person
 */
function drawPerson(x, y, size, color) {
  let width = context.canvas.width;
  let height = context.canvas.height;

  y = height - size*2*y

  context.fillStyle = color;
  context.shadowOffsetX = 0;
  context.shadowOffsetY = 0;
  context.shadowBlur = 0;
  context.beginPath();
  context.arc(x, y, size, -1.5*Math.PI,0.5*Math.PI);
  context.fill();
  context.beginPath();
  context.arc(x, y+size*2, size/5*6, Math.PI, 0);
  context.lineTo(x+size/5*6, y+size*4);
  context.lineTo(x-size/5*6, y+size*4);
  context.fill();
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

function drawAbout() {
  // Voeg cirkels toe aan de juiste secties
  createCircle('yellow', '.section.what-is-poutrel', { top: '-50px', left: '10%' });
  createCircle('red', '.section.what-is-poutrel', { bottom: '-30px', right: '10%' });

  createCircle('red', '.section.mission', { top: '-50px', right: '10%' });
  createCircle('yellow', '.section.mission', { bottom: '-30px', left: '10%' });

  createCircle('yellow-large', '.section.join-us', { bottom: '-50px', left: '50%' });
}

function createCircle(className, parentSelector, styles) {
  const circle = document.createElement('div');
  circle.className = `circle ${className}`;
  Object.assign(circle.style, styles);
  console.log(parentSelector)
  document.querySelector(parentSelector).appendChild(circle);
}

let lastShownInfoName;

function mapShowInfo(name) {
  document.getElementById(name).style.display = "grid";
  if (lastShownInfoName != undefined) {
    document.getElementById(lastShownInfoName).style.display = "none";
  }
  lastShownInfoName = name;
}

function drawJobs() {
  drawJobsCanvas1();
  // drawJobsCanvas2();
}

// function drawJobsCanvas1() {
//   canvas = document.getElementById("canvas1");
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   context = canvas.getContext("2d");

//   let width = context.canvas.width;
//   let height = context.canvas.height;

//   let pointsArray = [
//     {
//       p1: {
//         x: 0,
//         y: height/6*3
//       },
//       center: {
//         x: width/12,
//         y: height/6*4-height/12
//       },
//       p2: {
//         x: width/6,
//         y: height/6*4-height/12
//       }
//     },
//     {
//       p1: {
//         x: 0,
//         y: 0
//       },
//       center: {
//         x: width/6*2-width/18,
//         y: height/6*5
//       },
//       p2: {
//         x: width/6,
//         y: height/6*5
//       }
//     },
//     {
//       p1: {
//         x: 0,
//         y: 0
//       },
//       center: {
//         x: width/6*3+width/12,
//         y: height/6*7
//       },
//       p2: {
//         x: width/6,
//         y: height/6*4.8
//       }
//     },
//     {
//       p1: {
//         x: 0,
//         y: 0
//       },
//       center: {
//         x: width/6*5+width/12,
//         y: height/6*5
//       },
//       p2: {
//         x: width,
//         y: height/6*4.8
//       }
//     },
//     {
//       p1: {
//         x: 0,
//         y: 0
//       },
//       center: {
//         x: 0,
//         y: 0
//       },
//       p2: {
//         x: 0,
//         y: 0
//       }
//     },
//   ]

//   for (let i = 0; i < pointsArray.length-1; i++) {
//     let diffX = pointsArray[i].p1.x - pointsArray[i].center.x;
//     let diffY = pointsArray[i].p1.y - pointsArray[i].center.y;
//     let radius = Math.abs(Math.sqrt(diffX*diffX + diffY*diffY));
//     let startAngle = Math.atan2(diffY, diffX);
//     let endAngle   = Math.atan2(pointsArray[i].p2.y - pointsArray[i].center.y, pointsArray[i].p2.x - pointsArray[i].center.x);
//     var x = pointsArray[i].center.x + radius * Math.cos(-((endAngle/Math.PI)*360)*Math.PI/180);
//     var y = pointsArray[i].center.y + radius * Math.sin(-((endAngle/Math.PI)*360)*Math.PI/180);
//     endAngle   = Math.atan2(y - pointsArray[i].center.y, x - pointsArray[i].center.x);
//     context = document.querySelector("canvas").getContext("2d");

//     pointsArray[i].p2.x = x;
//     pointsArray[i].p2.y = y;
//     pointsArray[i+1].p1.x = x;
//     pointsArray[i+1].p1.y = y;
//   }

//   context.fillStyle = "#F9F8F3";
//   for (let j = 0; j < pointsArray.length-1; j++) {
//     let diffX = pointsArray[j].p1.x - pointsArray[j].center.x;
//     let diffY = pointsArray[j].p1.y - pointsArray[j].center.y;
//     let radius = Math.abs(Math.sqrt(diffX*diffX + diffY*diffY));

//     context.beginPath();
//     context.arc(pointsArray[j].center.x, pointsArray[j].center.y, radius, 0, Math.PI*2, false);
//     context.rect(pointsArray[j].center.x-radius, pointsArray[j].center.y, radius*2, height)
//     context.fill();
//   }

//   for (let i = 0; i < pointsArray.length-1; i++) {
//     let diffX = pointsArray[i].p1.x - pointsArray[i].center.x;
//     let diffY = pointsArray[i].p1.y - pointsArray[i].center.y;
//     let radius = Math.abs(Math.sqrt(diffX*diffX + diffY*diffY));
//     let startAngle = Math.atan2(diffY, diffX);
//     let endAngle   = Math.atan2(pointsArray[i].p2.y - pointsArray[i].center.y, pointsArray[i].p2.x - pointsArray[i].center.x);

//     context.shadowOffsetX = 4;
//     context.shadowOffsetY = 2;
//     context.shadowBlur = 5;
//     context.shadowColor = "rgba(0,0,0,1)";
//     context.globalCompositeOperation = "source-atop";

//     context.beginPath();
//     context.strokeStyle = "rgb(220, 220, 220)";
//     context.arc(pointsArray[i].center.x, pointsArray[i].center.y, radius, startAngle, endAngle, false);
//     context.stroke();

//     context.shadowOffsetX = 0;
//     context.shadowOffsetY = 0;
//     context.shadowBlur = 0;
//   }
// }