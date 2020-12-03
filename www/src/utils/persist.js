import { writable } from 'svelte/store';

const persist = key => {
  const currentEl = localStorage.getItem(key);
  const store = writable(JSON.parse(currentEl));

  store.subscribe(newVal => {
    localStorage.setItem(key, JSON.stringify(newVal))
  })

  return store;
}

export default persist;
