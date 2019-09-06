<template lang="pug">
  //- close drawer if it is clicked anywhere actually
  div.drawer(v-bind:class="{open: this.drawerOpen}" v-on:click="toggleDrawer()")
    fa(:icon="['fas', 'times']").close-drawer

    //- TODO: make list for this
    nuxt-link(to='/about').link 
      span About
    nuxt-link(to='/suggest').link 
      span Suggest
    a(target="_blank" href='https://play.google.com/store/apps/details?id=com.themindstorm.holt_soundboard&hl=en_US').link
      span App
    a(target="_blank" href='https://github.com/holt-soundboard').link
      span GitHub
    nuxt-link(to='/known_issues').link 
      span Issues
</template>

<script>
export default {
  computed: {
    drawerOpen() { return this.$store.state.navstore.drawerOpen }
  },
  methods: {
    toggleDrawer() { this.$store.commit('navstore/toggleDrawer') }
  }
}
</script>

<style lang="scss">
@import '~/layouts/styles/globals.scss';

.drawer {
  z-index: 100;
  position: absolute;
  height: 100vh;
  width: 250px;
  background-color: #000;
  opacity: 0.9;
  top: 0;
  left: -300px;

  transition: all 0.2s;


  &.open {
    left: 0;
  }

  .close-drawer {
    // hard coding fixes because of grid in nav
    // need to position in same palce as hamburger menu
    margin-top: 27px;
    margin-left: 19px;
    font-size: 26px;
    @include phone-screen {
      font-size: 24px;
      margin-top: 25px;
    }
    margin-bottom: var(--main-padding);
  }

  .link {
    font-weight: 700;
    margin-bottom: var(--main-padding);

    letter-spacing: 1px;
    font-size: 1.2em;

    span { text-transform: uppercase;}

    display: grid;
    grid-template-columns: 40px 1fr;
    align-items: center;
    margin: calc(var(--dense-padding) * 0.5);
    padding: calc(var(--dense-padding) * 0.5);
    transition: 0.1s all;
    border-radius: var(--border-radius);

    &:hover {
      background-color: #111;
    }
  }

  // link fix
  a {
    text-decoration: unset;
  }
}

</style>