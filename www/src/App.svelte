<Router {routes} />

<script>
  import { setContext } from 'svelte';
  import Router from 'svelte-spa-router';
  import { writable as persist } from 'svelte-persistent-store/dist/local';
  import Admin from './pages/Admin.svelte';
  import Home from './pages/Home.svelte';

  setContext('persistentStores', {
    correctInRow: persist('points-in-a-row', 0),
    correctTotal: persist('total-points', 0),
  });

  const routes = {
    '/admin': Admin,
    '/*': Home,
  };
</script>
