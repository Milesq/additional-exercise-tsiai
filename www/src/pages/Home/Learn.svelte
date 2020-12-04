<div class="column is-10 is-offset-1">
  {#if !currentWord.id}
    <progress class="progress is-small is-primary" max="100">15%</progress>
  {/if}

  <div
    class="notification is-flex is-align-items-center is-flex-direction-column">
    <div class="box tag is-info is-large"> { currentWord.english || '' } </div>
    <div
      class="box tag is-success is-large mt-2 response"
      class:is-blured={isBlured}>
      {currentWord.original}
    </div>
    <button class="button mt-6" disabled={!isBlured} on:click={next}>Następny</button>
  </div>
</div>

<script>
  import { onMount } from 'svelte';
  import merge from 'lodash.merge';
  import clone from 'lodash.clonedeep';
  import { delay, p, randomColor, rand } from '../../utils';
  import query, { gql } from '../../utils/graphqlClient';

  let isBlured = true;
  let words = [];
  let currentWord = {};

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
    isBlured = false;

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

    await delay(800 + 1500); // 800ms = time for unblur,

    isBlured = true;
    chooseWord();
  }
</script>

<style>
  .response:not(.is-blured) {
    transition: filter 0.8s ease-in;
  }

  .is-blured {
    filter: blur(7px);
    user-select: none;
  }
</style>
