<div class="px-3">
  <table class="table is-fullwidth is-hoverable is-striped">
    <thead>
      <tr>
        <th>ID</th>
        {#each fields as field}
          <th>{field.label}</th>
        {/each}
        <th />
      </tr>
    </thead>
    <tbody>
      {#each data as word, i}
        <tr
          class="is-clickable"
          class:is-selected={i == selectedItem}
          on:click={() => (selectedItem = i)}>
          <th>{i + 1}</th>
          {#each fields as field}
            <td>{word[field.name]}</td>
          {/each}
          <td>
            <button on:click={() => dispatch('remove', i)} class="delete" />
          </td>
        </tr>
      {/each}
    </tbody>
  </table>

  <div class="has-text-weight-bold has-text-centered">
    {#if !data.length}Brak danych{/if}
  </div>
</div>

<script>
  export let data = [];
  export let fields = [];
  export let selectedItem = -1;

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
</script>
