<div class="navbar is-primary is-spaced">
  <div class="navbar-brand">
    <div class="navbar-item is-size-4 normal-cursor">
      <JumpingText text="ENGLISH" />
    </div>

    <div class="navbar-burger">
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </div>
  </div>

  <div class="navbar-menu">
    <div class="navbar-end">
      <div on:click={() => (isPointsDropdownActive = !isPointsDropdownActive)} class="navbar-item has-dropdown is-hoverable" class:is-active={isPointsDropdownActive}>
        <div class="navbar-link">Wyniki</div>

        <Points />
      </div>
    </div>
  </div>
</div>

<div class="container">
  <div class="section">
    <div class="columns">
      <Router {routes} />
    </div>
  </div>
</div>

<script>
  import Router from 'svelte-spa-router';
  import JumpingText from '../components/JumpingText.svelte';
  import Points from '../components/Points.svelte';
  import QuizHome from './Home/QuizHome.svelte';
  import Test from './Home/Test.svelte';
  import Learn from './Home/Learn.svelte';

  let isPointsDropdownActive = false;

  const routes = {
    '/': QuizHome,
    '/test': Test,
    '/learn': Learn,
  };
</script>
