import { writable } from 'svelte/store';

const persist = (key, defaultValue) => {
  const store = writable(defaultValue);

  return store;
};

export default persist;
