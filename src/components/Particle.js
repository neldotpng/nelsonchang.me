export default class Particle {
  constructor(
    sx,
    sy,
    x,
    y,
    ctx,
    size
  ) {
    this.x = sx;
    this.y = sy;
    this.homeX = x;
    this.homeY = y;
    this.xVelocity = 0;
    this.yVelocity = 0;
    this.radius = size;
    this.color = {
      r: 249,
      g: 173,
      b: 38,
      a: 0.4
    };
    this.ctx = ctx;

    this.getX = () => {
      return this.homeX;
    }

    this.getY = () => {
      return this.homeY;
    }
  }

  draw = () => {
    this.ctx.fillStyle = `rgba(
      ${this.color.r},
      ${this.color.g},
      ${this.color.b},
      ${this.color.a}
    )`;
    this.ctx.fillRect(this.x, this.y, this.radius, this.radius);
  }

  move = (mx, my) => {
    let homeDX = this.homeX - this.x;
    let homeDY = this.homeY - this.y;
    let homeDistance = Math.sqrt(Math.pow(homeDX, 2) + Math.pow(homeDY, 2));
    let homeForce = homeDistance * 0.1;
    let homeAngle = Math.atan2(homeDY, homeDX);

    let cursorForce = 0;
    let cursorAngle = 0;

    if (mx >= 0) {
      let cursorDX = this.x - mx;
      let cursorDY = this.y - my;
      cursorForce = 6;
      cursorAngle = Math.atan2(cursorDY, cursorDX);
    }

    this.xVelocity += homeForce * Math.cos(homeAngle) + cursorForce * Math.cos(cursorAngle);
    this.yVelocity += homeForce * Math.sin(homeAngle) + cursorForce * Math.sin(cursorAngle);
    this.xVelocity *= 0.55;
    this.yVelocity *= 0.55;

    this.x += this.xVelocity;
    this.y += this.yVelocity;
  }
}
