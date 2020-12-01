<div class="navbar is-primary is-spaced">
  <div class="navbar-brand">
    <div class="navbar-item is-size-4 is-clickable" on:click={() => push('/')}>
      <JumpingText text="CRUD" />
    </div>
  </div>
</div>

<Crud />

<script>
  import { push } from 'svelte-spa-router';
  import Crud from '../components/Crud.svelte';
  import JumpingText from '../components/JumpingText.svelte';
</script>
