<template lang="pug">
  div.menu(v-bind:class="{open: this.menuOpen}")
    div.tile(@click="toggleTheme()")
      fa(:icon="['fas', 'moon']")
      span Dark theme
    hr
    a.tile(href="https://holt-soundboard.github.io/?update=forced")
      fa(:icon="['fas', 'cogs']")
      span Force update
    hr
    //- a.tile(target="_blank" href="https://play.google.com/store/apps/details?id=com.themindstorm.holt_soundboard&hl=en_US")
    //-   fa(:icon="['fas', 'mobile-alt']")
    //-   span Mobile app
    a.tile(target="_blank" href="https://www.buymeacoffee.com/themindstorm")
      fa(:icon="['fas', 'coffee']")
      span Buy me a coffee
</template>

<script>
export default {
  computed: {
    menuOpen() { return this.$store.state.navstore.menuOpen }
  },
  methods: {
    toggleTheme() {
      this.$store.commit('themestore/toggleTheme')
    }
  }
}
</script>

<style lang="scss">
@import '~/layouts/styles/globals.scss';

.menu {
  z-index: 100;
  position: absolute;
  width: 250px;
  top: 55px;
  right: 20px;
  border-radius: var(--border-radius);

  @include phone-screen {
    width: 200px;
  }

  background-color: black;
  opacity: 0.9;

  display: none;

  &.open {
    display: block;
  }

  hr {
    border-color: #444;
  }

  .tile {
    padding: var(--dense-padding);
    border-radius: 7px;
    transition: 0.1s all;

    display: grid;
    grid-template-columns: 40px 1fr;
    align-items: center;

    font-size: 0.8em;
    font-weight: 700;

    &:hover {
      background-color: #111;
    }
  }
}
</style>