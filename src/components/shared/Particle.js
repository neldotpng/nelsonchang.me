export default class Particle {
  constructor(sx, sy, x, y, ctx, size) {
    this.x = sx;
    this.y = sy;
    this.homeX = x;
    this.homeY = y;
    this.xVelocity = 0;
    this.yVelocity = 0;
    this.radius = size;
    // this.color = {
    //   r: 0,
    //   g: 188,
    //   b: 232,
    //   a: 0.75,
    // };
    this.color = {
      r: 249,
      g: 173,
      b: 38,
      a: 0.75,
    };
    this.ctx = ctx;

    this.getX = () => {
      return this.homeX;
    };

    this.getY = () => {
      return this.homeY;
    };
  }

  draw = () => {
    this.ctx.save();
    this.ctx.fillStyle = `rgba(
      ${this.color.r},
      ${this.color.g},
      ${this.color.b},
      ${this.color.a}
    )`;
    this.ctx.fillRect(this.x, this.y, this.radius, this.radius);
    this.ctx.restore();
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
      let cursorDistanceSquared = Math.pow(cursorDX, 2) + Math.pow(cursorDY, 2);
      cursorForce = Math.min(50000 / cursorDistanceSquared, 50);
      cursorAngle = Math.atan2(cursorDY, cursorDX);
    } else {
      cursorForce = 0;
      cursorAngle = 0;
    }

    this.xVelocity += homeForce * Math.cos(homeAngle) + cursorForce * Math.cos(cursorAngle);
    this.yVelocity += homeForce * Math.sin(homeAngle) + cursorForce * Math.sin(cursorAngle);

    this.xVelocity *= 0.6;
    this.yVelocity *= 0.6;

    this.x += this.xVelocity;
    this.y += this.yVelocity;

    this.homeForce = homeForce;
    this.homeAngle = homeAngle;
    this.cursorForce = cursorForce;
    this.cursorAngle = cursorAngle;
  }
}
