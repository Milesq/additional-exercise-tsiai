import { delay, floor, rand } from '.';

/**
 * @author Milesq
 * @description This code was recovered from one of my old canvas experiments
 * @example
 *p([
 *  {
 *    color: 'red',
 *    nextBombDelay: 10,
 *    disappearance_speed: 0.2,
 *    particlesPerPoint: 20,
 *    seriesCount: 30,
 *    startPoint: {
 *      x: 150,
 *      y: 150,
 *      step: {
 *        x: -2,
 *        y: -0.8,
 *      },
 *    },
 *  },
 *  {
 *    color: 'yellow',
 *    nextBombDelay: 30,
 *    disappearance_speed: 0.075,
 *    particlesPerPoint: 20,
 *    seriesCount: 30,
 *    startPoint: {
 *      x: 950,
 *      y: 450,
 *      step: {
 *        x: 2,
 *        y: 0.8,
 *      },
 *    },
 *  },
 *  {
 *    color: 'green',
 *    nextBombDelay: 50,
 *    disappearance_speed: 0.05,
 *    particlesPerPoint: 5,
 *    seriesCount: 30,
 *    startPoint: {
 *      x: 250,
 *      y: 500,
 *      step: {
 *        x: 1,
 *        y: 0.4,
 *      },
 *    },
 *  },
 *]).then(console.log);
 */
export default function (bombs) {
  return new Promise(resolve => {
    let particles = [];

    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.zIndex = '1000';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';

    const ctx = canvas.getContext('2d');

    function setDimensions() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    class Particle {
      constructor(_x, _y, size, _color, disappearance_speed) {
        this.x = _x;
        this.y = _y;
        this.color = _color;
        this.speed = {
          x: rand(-5, 5),
          y: rand(-5, 5),
        };

        this.radius = size;
        this.disappearance_speed = disappearance_speed;
      }

      draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();

        this.x += this.speed.x;
        this.y += this.speed.y;
        this.radius = floor(
          this.radius - this.disappearance_speed,
          this.radius
        );
      }
    }

    window.addEventListener('resize', setDimensions);

    setDimensions();

    document.body.appendChild(canvas);

    async function particlesBombSeries(
      x,
      y,
      step,
      maxIteration = 100,
      color,
      particlesPerPoint,
      nextBombDelay,
      disappearance_speed
    ) {
      for (let i = 0; i < maxIteration; ++i) {
        particlesBomb(x, y, color, particlesPerPoint, disappearance_speed);
        x -= step.x * 10;
        y -= step.y * 10;

        await delay(nextBombDelay);
      }
    }

    function particlesBomb(
      x,
      y,
      color,
      particlesPerPoint,
      disappearance_speed
    ) {
      for (let i = 0; i < particlesPerPoint; ++i) {
        particles.push(
          new Particle(
            rand(x - 5, x + 5),
            rand(y - 5, y + 5),
            rand(5, 15),
            color,
            disappearance_speed
          )
        );
      }
    }

    function paint() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles = particles.filter(particle => {
        if (particle.radius > 0) {
          particle.draw();
          return true;
        }
        return false;
      });

      if (particles.length === 0) resolve();
      else window.requestAnimationFrame(paint);
    }

    bombs.forEach(bomb => {
      particlesBombSeries(
        bomb.startPoint.x,
        bomb.startPoint.y,
        {
          x: bomb.startPoint.step.x,
          y: bomb.startPoint.step.y,
        },
        bomb.seriesCount,
        bomb.color,
        bomb.particlesPerPoint,
        bomb.nextBombDelay,
        bomb.disappearance_speed
      );
    });
    paint();
  });
}
