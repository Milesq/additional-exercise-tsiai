<div class="column is-10 is-offset-1">
  <div
    class="notification is-flex is-align-items-center is-flex-direction-column">
    <div class="box tag is-info is-large">Eat</div>
    <div
      class="box tag is-success is-large mt-2 response"
      class:is-blured={isBlured}>
      Jeść
    </div>
    <button class="button mt-6" on:click={next}>Następny</button>
  </div>
</div>

<script>
  import { delay, p } from '../../utils';

  const particles = [
    {
      color: 'red',
      nextBombDelay: 10,
      disappearance_speed: 0.2,
      particlesPerPoint: 20,
      seriesCount: 30,
      startPoint: {
        x: 150,
        y: 150,
        step: {
          x: -2,
          y: -0.8,
        },
      },
    },
    {
      color: 'yellow',
      nextBombDelay: 30,
      disappearance_speed: 0.075,
      particlesPerPoint: 20,
      seriesCount: 30,
      startPoint: {
        x: 950,
        y: 450,
        step: {
          x: 2,
          y: 0.8,
        },
      },
    },
    {
      color: 'green',
      nextBombDelay: 50,
      disappearance_speed: 0.05,
      particlesPerPoint: 5,
      seriesCount: 30,
      startPoint: {
        x: 250,
        y: 500,
        step: {
          x: 1,
          y: 0.4,
        },
      },
    },
  ];

  let isBlured = true;

  async function next() {
    isBlured = false;

    await delay(800 + 400); // 800ms = time for unblur,

    await p(particles)

    isBlured = true;
  }
</script>

<style>
  .response:not(.is-blured) {
    transition: filter 0.8s ease-in;
  }

  .is-blured {
    filter: blur(7px);
    user-select: none;
  }
</style>
