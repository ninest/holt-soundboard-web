<template lang="pug">
  div
    Navbar(:mainPage="false" title="Suggest")
    main 
      section.text Would you like to suggest a sound or feature?
      section.button-group
        button(@click="form = 1") Sound
        button(@click="form = 2") Feature
      section(v-if="form == 1").form
        h2 Sound form
        form(action="https://docs.google.com/forms/d/e/1FAIpQLSdECibvCrZA6acaQC7-sThEpWfqBv_I_JnJnhOeDWRe8FIeQA/formResponse" method="POST")
          div
            label 
              span Which character made the sound?
              input(type="text" name="entry.1453596592")
          div
            label 
              span Do you have any sources? Please provide as many details as possible, and a YouTube video link if possible.
              textarea(placeholder="Optional" name="entry.1681407176")
          div
            label 
              span What is your reddit username?
              input(type="text" placeholder="optional" name="entry.112838211")
          div
            button(type="submit").submit Submit
      section(v-if="form == 2") 
        h2 Feature form
        section.text
          p This form is coming soon. 
          p 
            a(href="http://reddit.com/r/holt_soundboard") For now, please make a post on r/holt_soundboard.
</template>

<script>
import Navbar from '~/components/nav/Navbar.vue'

export default {
  layout: 'page',
  components: {
    Navbar
  },
  data: function() {
    return {
      form: 0
    }
  },
  head() {
    return {
      title: "Suggest - Holt Soundboard",
      meta: [
        { hid: 'description', name: 'description', content: 'Suggest a sound for the most popular Holt Soundboard for IOS, Android, and Web' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  div {
    label {
      span {
        display: block;
        margin-bottom: calc(var(--dense-padding) * 0.5);
        font-weight: 500;
      }
    }
    margin-bottom: var(--main-padding);
  }
}
</style>
