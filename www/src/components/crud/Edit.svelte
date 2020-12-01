<div class="card mt-6">
  <form class="card-content" on:submit|preventDefault>
    <div class="field">
      <h2 class="subtitle">Edycja</h2>

      {#each fields as field, i}
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <label class="label">{field.label}</label>
        <div class="control has-icons-left">
          <input
            bind:value={data[field.name]}
            class="input is-info"
            type="text"
            disabled={!data.id}
          />
          <span class="icon is-small is-left">
            <i class={field.icon}></i>
          </span>
        </div>
      {/each}

      <button
        on:click={() => dispatch('save', data)}
        class="
          my-4
          button
          is-info
          is-outlined
          is-pulled-right
          is-transitioned
        ">
        Zapisz
      </button>
    </div>
  </form>
</div>

<script>
  export let data = {};
  export let fields = [];

  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
</script>
