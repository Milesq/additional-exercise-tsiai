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
            placeholder={field.label}
          />
          <span class="icon is-small is-left">
            <i class={field.icon}></i>
          </span>
        </div>
      {/each}

      <button
        on:click={() => dispatch('create', data)}
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
  const data = {}

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
</script>
