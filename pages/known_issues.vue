<template lang="pug">
  div
    Navbar(:mainPage="false" title="Known issues")
    main 
      section(v-html="knownIssuesHtml").text
      section.button-group
        a.button(target="_blank" href="https://github.com/holt-soundboard/holt-soundboard-web/issues/new") New GitHub Issue
        a.button(target="_blank" href="https://reddit.com/r/holt_soundboard").red Post on Reddit
</template>

<script>
import Navbar from '~/components/nav/Navbar.vue'
import knownIssuesContent from '~/contents/known_issues.md'

export default {
  layout: 'page',
  components: {
    Navbar
  },
  computed: {
    knownIssuesHtml() {
      return knownIssuesContent.html
    }
  },
  head() {
    return {
      title: "Issues - Holt Soundboard",
      meta: [
        { hid: 'description', name: 'description', content: 'Known issues for Holt Soundboard on IOS, Android, and web' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  display: inline-block
}
</style>
