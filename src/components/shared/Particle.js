// import { TweenLite, Power2 } from 'gsap';

export default class Particle {
  constructor(x, y, ctx) {
    this.homeX = x;
    this.homeY = y;
    this.x = x;
    this.y = y;
    this.xVelocity = 0;
    this.yVelocity = 0;
    this.radius = 7;
    this.homeForce = 0;
    this.homeAngle = 0;
    this.cursorForce = 0;
    this.cursorAngle = 0;
    this.color = 'rgba(255, 255, 255, 0.4)';
    this.ctx = ctx;
  }

  draw = () => {
    this.ctx.save();
    this.ctx.fillStyle = this.color;
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
      cursorForce = Math.min(100000 / cursorDistanceSquared, 50);
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
