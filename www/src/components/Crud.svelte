<div class="container">
  <div class="tile is-ancestor section">
    <div class="tile is-parent">
      <div class="tile is-child">
        <ShowAll
          {data}
          {fields}
          bind:selectedItem
          on:remove={remove}
        />
      </div>
    </div>

    <div class="tile is-vertical is-parent">
      <div class="tile is-child">
        <Edit data={data[selectedItem] || {}} {fields} on:save={update} />
      </div>
      <div class="tile is-child">
        <Create {fields} on:create={create} />
      </div>
    </div>
  </div>
</div>

<script>
  import ShowAll from "./crud/ShowAll.svelte";
  import Edit from "./crud/Edit.svelte";
  import Create from "./crud/Create.svelte";
  let selectedItem = -1;

  const fields = [
    { name: 'english', label: 'Angielski', icon: 'fas fa-globe-africa' },
    { name: 'original', label: 'Polski', icon: 'fas fa-language' },
  ];

  let data = [
    { id: 'dasddfghdg', original: 'robić', english: 'do' },
    { id: 'sddsadahas', original: 'jeść', english: 'eat' },
    { id: 'dsfgty46us', original: 'spotkać', english: 'met' },
    { id: 'fvgedhjvfj', original: 'zrobione', english: 'made' },
  ];

  function create({ detail }) {
    data = [...data, detail];
  }

  function update({ detail }) {
    data[selectedItem] = detail;
    selectedItem = -1;
  }

  function remove({ detail: i }) {
    data = [...data.slice(0, i), ...data.slice(i + 1)]
  }
</script>
