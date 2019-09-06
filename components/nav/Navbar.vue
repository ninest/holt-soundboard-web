<template lang="pug">
  nav
    div.left
      fa(v-if="mainPage" :icon="['fas', 'bars']" v-on:click="toggleDrawer()").drawer-icon
      nuxt-link(v-else to='/') 
        fa(:icon="['fas', 'arrow-left']" v-on:click="back()").drawer-icon
      h1(v-if="mainPage") Holt Soundboard
      h1(v-else) {{title}}
    div.right(v-on:click="toggleMenu()")
      fa(:icon="['fas', 'ellipsis-v']")
    
    Menu
    Drawer
</template>

<script>
import Menu from '~/components/nav/Menu.vue'
import Drawer from '~/components/nav/Drawer.vue'

export default {
  components: { Drawer, Menu },
  props: ["mainPage", "title"],
  methods: {
    toggleDrawer() { this.$store.commit('navstore/toggleDrawer') },
    toggleMenu() { this.$store.commit('navstore/toggleMenu') },
    back() {}
  }
}
</script>

<style lang="scss">
@import '~/layouts/styles/globals.scss';

nav {
  background-color: var(--nav-background-color);
  color: var(--nav-text-color);
  padding: var(--dense-padding);

  display: flex;
  justify-content: space-between;

  align-items: center;

  font-size: 1.1rem;
  letter-spacing: 1.1px;

  // fix for smaller screens
  // iPhone 5
  @include small-phone-screen {
    font-size: 1rem;
  }
  .left {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .drawer-icon {
      margin-right: var(--dense-padding);
    }

    h1 {
      font-weight: 900;
    }
  }

  .right {
    padding-left: 2rem;
  }

  // fix for back button
  a {color: unset }
}
</style>
