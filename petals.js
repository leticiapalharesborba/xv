const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

canvas.style.position = "fixed";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.pointerEvents = "none";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const petals = [];

for (let i = 0; i < 22; i++) {
  petals.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 1 + 0.5,
    tilt: Math.random() * Math.PI
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255,200,220,0.6)";

  petals.forEach(p => {
    ctx.beginPath();
    ctx.ellipse(p.x, p.y, p.r, p.r / 2, p.tilt, 0, Math.PI * 2);
    ctx.fill();
  });

  update();
}

function update() {
  petals.forEach(p => {
    p.y += p.d;
    p.x += Math.sin(p.y * 0.01);

    if (p.y > canvas.height) {
      p.y = -10;
      p.x = Math.random() * canvas.width;
    }
  });
}

setInterval(draw, 33);
