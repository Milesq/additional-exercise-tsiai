<Router {routes} />

<script>
  import Router from 'svelte-spa-router';
  import Admin from './pages/Admin.svelte';
  import Home from './pages/Home.svelte';

  const routes = {
    '/': Home,
    '/admin': Admin,
  };
</script>
