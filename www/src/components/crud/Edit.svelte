<div class="card mt-6">
  <form class="card-content" on:click|preventDefault>
    <div class="field">
      <h2 class="subtitle">Edycja</h2>


      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label class="label">Login</label>
      <div class="control has-icons-left">
        <input
          class="input is-info"
          type="text"
          placeholder="Login"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </div>

      <button
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
