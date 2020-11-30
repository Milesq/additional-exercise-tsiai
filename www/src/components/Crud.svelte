<div class="container">
  <div class="tile is-ancestor section">
    <div class="tile is-parent">
      <div class="tile is-child">
        <ShowAll />
      </div>
    </div>

    <div class="tile is-vertical is-parent">
      <div class="tile is-child">
        <Edit />
      </div>
      <div class="tile is-child">
        <Create />
      </div>
    </div>
  </div>
</div>

<script>
  import ShowAll from "./crud/ShowAll.svelte";
  import Edit from "./crud/Edit.svelte";
  import Create from "./crud/Create.svelte";
</script>
