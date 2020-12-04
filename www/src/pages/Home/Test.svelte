<div class="column is-8 is-offset-2">
  {#if !currentWord.id}
    <progress class="progress is-small is-primary" max="100">15%</progress>
  {/if}

  <div
    class="notification is-flex is-align-items-center is-flex-direction-column">
    <div class="box tag is-info is-large"> { currentWord.english || '' } </div>

    <div class="columns">
      <div class="column">
        <input
          bind:value={userWord}
          width=""
          class="input is-success is-rounded mt-2"
          type="text"
          placeholder="Tłumaczenie"
        />
      </div>
    </div>


    <button class="button mt-6" on:click={next}>Sprawdź</button>
  </div>
</div>

<script>
  import { onMount } from 'svelte';
  import merge from 'lodash.merge';
  import clone from 'lodash.clonedeep';
  import { delay, p, randomColor, rand } from '../../utils';
  import query, { gql } from '../../utils/graphqlClient';

  let words = [];
  let currentWord = {};
  let userWord = '';

  function chooseWord() {
    currentWord = words[rand(0, words.length)];
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

  async function next() {
    const defualtParticle = {
      nextBombDelay: 5,
      disappearance_speed: 0.25,
      particlesPerPoint: 30,
      seriesCount: 40,
      startPoint: {
        x: 150,
        y: window.innerHeight - 10,
        step: {
          x: 0,
          y: 2,
        },
      },
    };

    p([
      merge(clone(defualtParticle), {
        color: randomColor(),
        startPoint: {
          x: window.innerWidth - 150
        }
      }),
      merge(clone(defualtParticle), {
        color: randomColor(),
      }),
    ]);

    await delay(2300);

    chooseWord();
  }
</script>
