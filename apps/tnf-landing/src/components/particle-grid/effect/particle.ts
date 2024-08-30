import { colors } from '@tnf-workspace/ts-lib';
import gsap from 'gsap';
import { EffectType } from './effect';

interface ParticleType {
  x: number;
  y: number;
  effect: EffectType;
  draw: () => void;
  update: () => void;
}

export class Particle implements ParticleType {
  currentX: number = this.originalX;
  currentY: number = this.originalY;
  currentRadius: number = this.originalRadius;
  dynamicX: number = this.originalX;
  dynamicY: number = this.originalY;
  dynamicRadius: number = this.originalRadius;
  baseSpeed = 0.05;
  maxSpeed = 0.5;

  constructor(public x: number, public y: number, public effect: EffectType) {
    this.x = Math.floor(x);
    this.y = Math.floor(y);

    this.draw();
  }

  transformMousePosition() {
    // Convert mouse coordinates to the rotated coordinate system
    const centerX = this.effect.width / 2;
    const centerY = this.effect.height / 2;
    const rotationAngle = (5 * Math.PI) / 180;

    // Translate mouse coordinates to canvas center
    const translatedMouseX = this.effect.mouse.x - centerX;
    const translatedMouseY = this.effect.mouse.y - centerY;

    // Apply the inverse rotation to the mouse coordinates
    const rotatedMouseX =
      translatedMouseX * Math.cos(-rotationAngle) -
      translatedMouseY * Math.sin(-rotationAngle);
    const rotatedMouseY =
      translatedMouseX * Math.sin(-rotationAngle) +
      translatedMouseY * Math.cos(-rotationAngle);

    return {
      x: rotatedMouseX + centerX,
      y: rotatedMouseY + centerY,
    };
  }

  normalize() {
    return gsap.utils.normalize(0, this.effect.effectRadius);
  }

  get originalX() {
    return (
      this.x * (this.effect.particleSize + this.effect.gridSpacing) +
      this.effect.gridFreeSpaceX / 2
    );
  }

  get originalY() {
    return (
      this.y * (this.effect.particleSize + this.effect.gridSpacing) +
      this.effect.gridFreeSpaceY / 2
    );
  }

  get originalRadius() {
    return this.effect.particleSize / 2;
  }

  draw() {
    const maxRadius = this.originalRadius * 1.25;

    const dx = this.effect.mouse.x - this.originalX;
    const dy = this.effect.mouse.y - this.originalY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < this.effect.effectRadius) {
      const displacementFactor = 1 - distance / this.effect.effectRadius;
      const scaleFactor = 1 + (1 - distance / this.effect.effectRadius);

      this.dynamicRadius = Math.min(
        maxRadius,
        this.originalRadius * scaleFactor
      );
      this.dynamicX = this.originalX + dx * displacementFactor * 0.3;
      this.dynamicY = this.originalY + dy * displacementFactor * 0.3;
    } else {
      this.dynamicRadius = this.originalRadius;
      this.dynamicX = this.originalX;
      this.dynamicY = this.originalY;
    }
    const normalizedDistance = gsap.utils.clamp(
      0,
      1,
      this.normalize()(distance)
    );

    this.effect.ctx.beginPath();
    this.effect.ctx.fillStyle = gsap.utils.interpolate(
      colors.orange['500'],
      colors.orange['800'],
      normalizedDistance
    );

    const animationSpeed =
      this.baseSpeed +
      (1 - normalizedDistance) * (this.maxSpeed - this.baseSpeed);
    this.currentX = this.lerp(this.currentX, this.dynamicX, animationSpeed);
    this.currentY = this.lerp(this.currentY, this.dynamicY, animationSpeed);
    this.currentRadius = this.lerp(
      this.currentRadius,
      this.dynamicRadius,
      animationSpeed
    );

    this.effect.ctx.arc(
      gsap.utils.clamp(
        this.dynamicRadius,
        this.effect.width - this.dynamicRadius,
        this.currentX
      ),
      gsap.utils.clamp(
        this.dynamicRadius,
        this.effect.height - this.dynamicRadius,
        this.currentY
      ),
      this.currentRadius,
      0,
      2 * Math.PI
    );
    // this.effect.ctx.arc(dynamicX, dynamicY, dynamicRadius, 0, 2 * Math.PI);
    this.effect.ctx.fill();
  }

  lerp(start: number, end: number, t: number) {
    return start + t * (end - start);
  }

  update() {
    this.draw();
  }
}
