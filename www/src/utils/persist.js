import { writable } from 'svelte/store';

const persist = (key, defaultValue) => {
  const currentEl = localStorage.getItem(key);
  const store = writable(JSON.parse(currentEl) || defaultValue);

  store.subscribe(newVal => {
    localStorage.setItem(key, JSON.stringify(newVal))
  })

  return store;
}

export default persist;
