<template lang="pug">
  div
    Navbar(:mainPage="false" title="About")
    main 
      section(v-html="aboutHtml").text
      section.button-group
        a.button.red(href="http://reddit.com/r/holt_soundboard") Reddit
        nuxt-link.button(to="/suggest") Suggest
      section(v-html="creditsHtml").text
</template>

<script>
import Navbar from '~/components/nav/Navbar.vue'
import aboutContent from '~/contents/about.md'
import creditsContent from '~/contents/credits.md'

export default {
  layout: 'page',
  components: {
    Navbar
  },
  computed: {
    aboutHtml() {
      return aboutContent.html
    },
    creditsHtml() {
      return creditsContent.html
    }
  },
  head() {
    return {
      title: "About - Holt Soundboard",
      meta: [
        { hid: 'description', name: 'description', content: 'Learn more about the most popular Holt Soundboard for IOS, Android, and Web, and support us too' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
