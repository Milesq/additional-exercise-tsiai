<div class="navbar is-primary is-spaced">
  <div class="navbar-brand">
    <div class="navbar-item is-size-4 normal-cursor">
      <JumpingText text="ENGLISH" />
    </div>

    <div class="navbar-burger">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </div>
  </div>

  <div class="navbar-menu">
    <div class="navbar-end">
      <div class="navbar-item has-dropdown is-hoverable">
        <div class="navbar-link">Wyniki</div>

        <div class="navbar-dropdown">
          <div class="navbar-item">Poprawnych</div>
          <hr class="navbar-divider" />
          <div class="navbar-item">Rzędem: 5</div>
          <div class="navbar-item">Razem: 19</div>
        </div>
      </div>
    </div>
  </div>
</div>

<Quiz />

<script>
  import JumpingText from '../components/JumpingText.svelte';
  import Quiz from '../components/Quiz.svelte';
</script>
