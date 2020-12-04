<div class="navbar-dropdown">
  <div class="navbar-item">Poprawnych</div>
  <hr class="navbar-divider" />
  <div class="navbar-item">Rzędem: {$correctInRow}</div>
  <div class="navbar-item">Razem: {$correctTotal}</div>
</div>

<script>
  import { getContext } from 'svelte';

  const { correctInRow, correctTotal } = getContext('persistentStores');
</script>
