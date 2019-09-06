<template lang="pug">
  .character-nav
    a.character-link(:href="'#' + char" v-for="char in characters" v-bind:key="char") {{ char }}
</template>

<script>
import { characters, sounds } from '~/contents/sounds.js'

export default {
  data: function() {
    return {
      characters: characters,
      sounds: sounds,
    }
  },
}
</script>

<style lang="scss" scoped>
.character-nav {
  z-index: 1;
  color: var(--nav-text-color);
  background-color: var(--nav-background-color);

  // sticky to top
  position: -webkit-sticky;
  position: sticky;
  top: 0;

  margin-top: calc(-1 * var(--dense-padding));
  padding: var(--dense-padding);

  box-shadow: 0 4px 8px 0 rgba(0,0,0,.12),0 2px 4px 0 rgba(0,0,0,.08);

  overflow: scroll;
  a {color: unset; text-decoration: unset }
  & > .character-link {
    display: inline;
    white-space: nowrap;
    font-size: 1.1rem;
    font-weight: 700;

    transition: 0.2s all;

    border-radius: var(--border-radius);

    // TODO: Need to make a class for this type of button
    // this button can also be seen in the Footer
    &:hover {
      background-color: var(--nav-text-color);
      color: var(--nav-background-color);

      padding: 0 calc(var(--dense-padding) * 0.5);
    }
  }

  & > .character-link + .character-link {
    margin-left: var(--dense-padding);
  }

}
</style>