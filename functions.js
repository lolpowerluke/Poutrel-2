window.onresize = drawHeader;
function drawHeader() {
  /** @type {CanvasRenderingContext2D} */
  let context;

  let canvas = document.getElementById("canvas1");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  context = canvas.getContext("2d");

  let width = context.canvas.width;
  let height = context.canvas.height;

  context.clearRect(0,0, width, height)
  context.fillStyle = "#F9F8F3";
  context.beginPath();
  context.arc(width/6-width/12, 100, width/10, 0, Math.PI);
  context.arc(width/3-width/12, 100, width/10, 0, Math.PI);
  context.arc(width/2-width/12, 100, width/10, 0, Math.PI);
  context.arc(width/6*4-width/12, 100, width/10, 0, Math.PI);
  context.arc(width/6*5-width/12, 100, width/10, 0, Math.PI);
  context.arc(width-width/12, 100, width/10, 0, Math.PI);
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
  context.strokeStyle = "white"
  context.arc(width-width/12, height/2, width/30, 0, Math.PI*2);

  context.fill();
}