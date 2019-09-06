<template lang="pug">
  div
    //- navbar in page directly so we can set title
    //- TODO: change so this is not needed. Maybe use Vuex store
    nuxt.b
</template>

<script>

export default {
  beforeMount() {
    this.$store.commit('themestore/setThemeOnPageVisit')
  }
}
</script>

<style lang="scss">
@import './styles/globals.scss';
@import './styles/main.scss';

body {

  main {
    background-color: var(--background-color);
    padding: var(--main-padding) 20%;
    @include phone-screen {
      padding: var(--dense-padding);
    }

    color: var(--text-color-dark);

    .button-group {
      * + * {
        margin-left: var(--dense-padding);
      }
    }

    section + section {
      margin-top: var(--main-padding);
    }
    .text {
      * + *:not(li) {
        margin-top: var(--dense-padding);
      }

      * + ul {
        margin-top: calc(var(--dense-padding) * 0.5)
      }
    }
  }
}

.b {
  background-color: var(--white);
}
</style>
