<div class="text-animation">
  {#each letters as letter}
    <div class="text-animation__item">{letter}</div>
  {/each}
</div>

<script>
  /**
   * @type {string}
   */
  export let text = '';
  $: letters = text.split('');
</script>

<style lang="scss">
  @use 'sass:list';

  $textItemCount: 4;

  .text-animation {
    &__item {
      display: inline-block;
      animation: jump 0.65s ease;
      margin: auto 2px;

      @for $i from 1 through $textItemCount {
        &:nth-child(#{$i}) {
          animation-delay: 0.15s * $i;
        }
      }
    }
  }

  @keyframes jump {
    from {
      transform: translateY(0) scale(1.25, 0.7);
    }
    50% {
      transform: translateY(-50%) scale(1, 1);
    }
    80% {
      transform: translateY(30%) scale(1.25, 0.7);
    }
    to {
      transform: translateY(0) scale(1, 1);
    }
  }
</style>
