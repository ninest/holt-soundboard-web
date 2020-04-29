<template lang="pug">
  .soundboard
    CharacterNav
    .character(v-for="char in this.characters" v-bind:key="char")
      h2(:id="char") {{ char }}
      .sounds
        SoundButton(v-for="sound in sounds[char]" :fileName="sound" :char="char" v-bind:key="sound")
</template>

<script>
import { characters, sounds } from '~/contents/sounds.js'
import CharacterNav from '~/components/soundboard/CharacterNav.vue'
import SoundButton from '~/components/soundboard/SoundButton.vue'

export default {
  components: { CharacterNav, SoundButton },
  data: function() {
    return {
      characters: characters,
      sounds: sounds,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/layouts/styles/globals.scss';

.soundboard {
  .character {
    padding: var(--dense-padding);
    background-color: var(--background-color);

    h2 {
      color: var(--text-color-dark);
      font-size: 1.5rem;
      @include phone-screen {
        font-size: 1.3rem;
      }
      margin-bottom: calc(var(--dense-padding) * 0.5);
    }
    .sounds { 
      display: grid;
      // 170px
      grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));

      @include phone-screen {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      }
      @include small-phone-screen {
        grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
      }
      grid-gap: calc(var(--dense-padding) * 0.9);
    }
    // padding-bottom: var(--main-padding);
  }
}
</style>