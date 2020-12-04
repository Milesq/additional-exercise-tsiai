<div class="column is-8 is-offset-2">
  {#if !currentWord.id}
    <progress class="progress is-small is-primary" max="100">15%</progress>
  {/if}

  <div
    class="notification is-flex is-align-items-center is-flex-direction-column">
    <div class="box tag is-info is-large">{currentWord.english || ''}</div>

    <div class="columns">
      <div class="column">
        <input
          bind:value={userWord}
          width=""
          class="input is-success is-rounded mt-2"
          type="text"
          placeholder="Tłumaczenie" />
      </div>
    </div>
    correctInRow:
    {$correctInRow}
    correctTotal:
    {$correctTotal}

    <button class="button mt-6" {disabled} on:click={check}>Sprawdź</button>
  </div>
</div>

<script>
  import { onMount, getContext } from 'svelte';
  import { delay, p, rand, randomParticle } from '../../utils';
  import query, { gql } from '../../utils/graphqlClient';

  let words = [];
  let currentWord = {};
  let userWord = '';
  let disabled = false;

  const { correctInRow, correctTotal } = getContext('persistentStores');

  function chooseWord() {
    currentWord = words[rand(0, words.length)];
    userWord = '';
  }

  onMount(async () => {
    const { words: wordsFromApi } = await query(gql`
      query {
        words {
          id
          english
          original
        }
      }
    `);

    words = wordsFromApi;
    chooseWord();
  });

  async function correct() {
    correctInRow.update(x => x + 1);
    correctTotal.update(x => x + 1);
    const particles = [
      [null, null],
      [null, null, null],
    ].map(arr => arr.map(() => randomParticle()));

    for (const particle of particles) {
      p(particle);
      await delay(300);
    }
  }

  function incorrect() {
    alert('poprawne tłumaczenie to: ' + currentWord.original);
    correctInRow.set(0);
  }

  async function check() {
    disabled = true;
    if (
      currentWord.original.toLocaleLowerCase() === userWord.toLocaleLowerCase()
    ) {
      await correct();
    } else {
      incorrect();
    }

    chooseWord();
    disabled = false;
  }
</script>
