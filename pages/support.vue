<template lang="pug">
  div
    Navbar(:mainPage="false" title="Support")
    main 
      section(v-html="supportHtml").text
      section.button-group
        //- fix this 
        //- a.button.red(href="http://reddit.com/r/holt_soundboard") Reddit
        //- nuxt-link.button(to="/suggest") Suggest
</template>

<script>
import Navbar from '~/components/nav/Navbar.vue'
import supportContent from '~/contents/support.md'


export default {
  layout: 'page',
  components: {
    Navbar
  },
  computed: {
    supportHtml() {
      return supportContent.html
    },
  },
  head() {
    return {
      title: "Support - Holt Soundboard",
      meta: [
        { hid: 'description', name: 'description', content: 'You can help support the most popular Holt Soundboard for IOS, Android, and Web' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
