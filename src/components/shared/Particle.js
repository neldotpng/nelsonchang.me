// import { TweenLite, Power2 } from 'gsap';

export default class Particle {
  constructor(x, y, ctx) {
    this.homeX = x;
    this.homeY = y;
    this.x = x;
    this.y = y;
    this.xVelocity = 0;
    this.yVelocity = 0;
    this.rx = 7;
    this.ry = 7;
    this.homeForce = 0;
    this.homeAngle = 0;
    this.cursorForce = 0;
    this.cursorAngle = 0;
    this.ctx = ctx;
    this.color = 'rgba(255, 255, 255, 0.5)';
  }

  draw = () => {
    this.ctx.save();
    // this.ctx.beginPath();
    // this.ctx.arc(this.ogX, this.ogY, this.radius, Math.PI / 3 * 2, Math.PI * 1.75);
    // this.ctx.strokeStyle = this.color;
    // this.ctx.stroke();
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.rx, this.ry);
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
      // let cursorDistanceSquared = Math.pow(cursorDX, 2) + Math.pow(cursorDY, 2);
      // cursorForce = Math.min(100 / cursorDistanceSquared, 100);
      cursorForce = 5;
      cursorAngle = Math.atan2(cursorDY, cursorDX);
    } else {
      cursorForce = 0;
      cursorAngle = 0;
    }

    this.xVelocity += homeForce * Math.cos(homeAngle) + cursorForce * Math.cos(cursorAngle);
    this.yVelocity += homeForce * Math.sin(homeAngle) + cursorForce * Math.sin(cursorAngle);

    this.xVelocity *= 0.905;
    this.yVelocity *= 0.905;

    this.x = this.homeX - this.xVelocity;
    this.y = this.homeY - this.yVelocity;

    this.homeForce = homeForce;
    this.homeAngle = homeAngle;
    this.cursorForce = cursorForce;
    this.cursorAngle = cursorAngle;
  }
}
