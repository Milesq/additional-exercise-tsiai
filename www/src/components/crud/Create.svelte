<div class="card">
  <form class="card-content" on:submit|preventDefault>
    <div class="field">
      <h2 class="subtitle">Dodawanie</h2>

      {#each fields as field}
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">{field.label}</label>
        <div class="control has-icons-left">
          <input
            bind:value={data[field.name]}
            class="input is-primary"
            type="text"
            placeholder={field.label} />
          <span class="icon is-small is-left"> <i class={field.icon} /> </span>
        </div>
      {/each}

      <button
        on:click={create}
        class="
          my-4
          button
          is-primary
          is-outlined
          is-pulled-right
          is-transitioned
        ">
        Dodaj
      </button>
    </div>
  </form>
</div>

<script>
  export let fields = [];
  let data = {};

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function create() {
    dispatch('create', data);
    data = {};
  }
</script>
