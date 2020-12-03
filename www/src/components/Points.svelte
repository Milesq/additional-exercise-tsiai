<div class="navbar-dropdown">
  <div class="navbar-item">Poprawnych</div>
  <hr class="navbar-divider" />
  <div class="navbar-item">Rzędem: {$inARow}</div>
  <div class="navbar-item">Razem: {$total}</div>
</div>

<script>
import persist from '../utils/persist';

const inARow = persist('points-in-a-row', 0);
const total = persist('total-points', 0);
</script>
