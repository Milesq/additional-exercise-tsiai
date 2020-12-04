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
  import { delay } from '../../utils';

  let isBlured = true;

  async function next() {
    isBlured = false;

    await delay(800 + 3000);

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
