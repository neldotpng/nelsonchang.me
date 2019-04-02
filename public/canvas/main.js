let DAMPING = 0.99;

function Particle(x, y, c, s) {
  this.x = this.oldX = x;
  this.y = this.oldY = y;
  this.color = c;
  this.size = s;
}

Particle.prototype.integrate = function() {
  let velocityX = (this.x - this.oldX) * DAMPING;
  let velocityY = (this.y - this.oldY) * DAMPING;
  this.oldX = this.x;
  this.oldY = this.y;
  this.x += velocityX;
  this.y += velocityY;
};

Particle.prototype.explode = function(x, y) {
  let r = 20;
  let theta = Math.random() * 360;

  let initX = this.x;
  let initY = this.y;

  let dx = Math.cos(theta) * r;
  let dy = Math.sin(theta) * r;

  this.x = initX + dx;
  this.y = initY + dy;
}

Particle.prototype.attract = function(x, y) {
  let dx = x - this.x;
  let dy = y - this.y;
  let distance = Math.sqrt(dx * dx + dy * dy);
  this.x += dx / distance;
  this.y += dy / distance;
};

Particle.prototype.move = function() {
  ctx.beginPath();
  ctx.strokeStyle = this.color;
  ctx.lineWidth = this.size;
  ctx.moveTo(this.oldX, this.oldY);
  ctx.lineTo(this.x, this.y);
  ctx.stroke();
}

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let particles = [];
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let mouse = { x: width * 0.5, y: height * 0.5 };

for (let i = 0; i < 500; i++) {
  particles[i] = new Particle(
    Math.random() * width, 
    Math.random() * height,
    `rgba(
      ${Math.random() * 125 + 130},
      ${Math.random() * 60 + 190},
      ${Math.random() * 155 + 100},
      ${Math.random() * 0.8 + 0.2}
    )`,
    Math.random() * 5,
  );
}

function onMousemove(e) {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
}

function onClick(e) {
  particles.forEach(particle => {
    particle.explode(e.clientX, e.clientY);
  });
};

canvas.addEventListener('mousemove', onMousemove);
canvas.addEventListener('click', onClick);

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, width, height);
  particles.forEach((particle) => {
    particle.attract(mouse.x, mouse.y);
    particle.integrate();
    particle.move();
  });
}

requestAnimationFrame(animate);