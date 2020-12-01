<div class="container">
  <div class="tile is-ancestor section">
    <div class="tile is-parent">
      <div class="tile is-child">
        <ShowAll
          {data}
          {fields}
        />
      </div>
    </div>

    <div class="tile is-vertical is-parent">
      <div class="tile is-child">
        <Edit {data} {fields} on:update={update} />
      </div>
      <div class="tile is-child">
        <Create />
      </div>
    </div>
  </div>
</div>

<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import ShowAll from "./crud/ShowAll.svelte";
  import Edit from "./crud/Edit.svelte";
  import Create from "./crud/Create.svelte";

  setContext('selectedItem', writable(-1));
  const fields = [
    { name: 'english', label: 'Angielski' },
    { name: 'original', label: 'Polski' },
  ];

  const data = [
    { id: 'dasddfghdg', original: 'robić', english: 'do' },
    { id: 'sddsadahas', original: 'jeść', english: 'eat' },
    { id: 'dsfgty46us', original: 'spotkać', english: 'met' },
    { id: 'fvgedhjvfj', original: 'zrobione', english: 'made' },
  ];

  function update(updated) {}
</script>
