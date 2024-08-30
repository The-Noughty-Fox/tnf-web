import gsap from 'gsap';
import { Particle } from './particle';

export interface EffectType {
  width: number;
  height: number;
  ctx: CanvasRenderingContext2D;
  particles: Particle[];
  mouse: { x: number; y: number };
  effectRadius: number;
  init: () => void;
  update: () => void;
  rect: { left: number; top: number };
  gridSpacing: number;
  particleSize: number;
  gridFreeSpaceX: number;
  gridFreeSpaceY: number;
  gridRotationAngle: number;
}

export class Effect implements EffectType {
  particles: Particle[] = [];
  effectRadius: number;
  mouse = { x: -300, y: -300 };
  rect: { left: number; top: number } = { left: 0, top: 0 };
  gridSpacing: number;
  particleSize: number;
  gridFreeSpaceX = 0;
  gridFreeSpaceY = 0;
  gridRotationAngle = 5;

  constructor(
    public width: number,
    public height: number,
    public ctx: CanvasRenderingContext2D
  ) {
    this.effectRadius = 300;
    this.rect = ctx.canvas.getBoundingClientRect();
    this.gridSpacing = 35;
    this.particleSize = 17 + (this.width - this.width * 0.99);

    window.addEventListener('mousemove', (e) => {
      const { y, x } = this.getTransformedCoords(
        e.clientX,
        e.clientY,
        this.gridRotationAngle
      );
      this.mouse.x = x;
      this.mouse.y = y;
    });
    window.addEventListener('resize', () => {
      this.setCanvasSize();
      this.particles = [];
      this.init();
    });
    window.addEventListener('scroll', () => {
      this.rect = ctx.canvas.getBoundingClientRect();
    });

    this.setCanvasSize();
    this.init();
  }

  getTransformedCoords(x: number, y: number, angleValue: number) {
    const angle = (angleValue * -1 * Math.PI) / 180;
    const x2 = x - this.rect.left;
    const y2 = y - this.rect.top;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);

    return {
      x: Math.floor(x2 * cos + y2 * sin),
      y: Math.floor(x2 * sin + y2 * cos),
    };
  }

  setCanvasSize() {
    const scrollWidth =
      document.documentElement.style.getPropertyValue('--scrollbar-width');
    this.width = gsap.utils.clamp(
      0,
      1920,
      window.innerWidth - parseInt(scrollWidth) ?? 0
    );
    this.height = gsap.utils.clamp(
      450,
      850,
      document.documentElement.clientWidth * 0.5
    );
    this.ctx.canvas.width = this.width;
    this.ctx.canvas.height = this.height;
    this.rect = this.ctx.canvas.getBoundingClientRect();
    this.particleSize = 15 + (this.width - this.width * 0.995);
  }

  init() {
    this.ctx.canvas.style.transform = `rotate(${this.gridRotationAngle}deg)`;
    const effectiveDiameter = this.particleSize + this.gridSpacing;
    const numCirclesX = Math.floor(this.width / effectiveDiameter);
    const numCirclesY = Math.floor(this.height / effectiveDiameter);
    this.gridFreeSpaceY =
      this.height -
      (numCirclesY * this.particleSize + (numCirclesY - 1) * this.gridSpacing);
    this.gridFreeSpaceX =
      this.width -
      (numCirclesX * this.particleSize + (numCirclesX - 1) * this.gridSpacing);

    for (let i = 0; i < numCirclesX; i += 1) {
      for (let j = 0; j < numCirclesY; j += 1) {
        this.particles.push(new Particle(i, j, this));
      }
    }
  }

  update() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].update();
    }
  }
}
