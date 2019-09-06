<template lang="pug">
  button(:class="buttonColor" @click="playSound") {{ soundName }}
</template>

<script>
export default {
  props: ["char", "fileName"],
  data: function() {
    return {
      soundName: this.fileName.split(".mp3")[0]
    }
  },
  computed: {
    buttonColor() {
      let firstLetter = this.fileName[0].toLowerCase()
      let color;
      switch (firstLetter) {
      case 'a':
      case 'b':
      case 'c':
      case 'd':
      case 'e':
        {
          color = 'blue';
          break;
        }

      case 'f':
      case 'g':
      case 'h':
      case 'i':
      case 'j':
        {
          color = 'green';
          break;
        }

      case 'k':
      case 'l':
      case 'm':
      case 'n':
      case 'o':
        {
          color = 'yellow';
          break;
        }

      case 'p':
      case 'q':
      case 'r':
      case 's':
      case 't':
        {
          color = 'red';
          break;
        }

      case 'u':
      case 'v':
      case 'w':
      case 'x':
      case 'y':
      case 'z':
        {
          color = 'dark';
          break;
        }
    }
    return color;
    }
  },
  methods: {
    playSound() {
      let file = `/sounds/${this.char}/${this.fileName}`
      // fileName has .mp3 at the end
      console.log(file)
      let sound = new Audio(file)
      sound.play()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/layouts/styles/globals.scss';

button {
  padding: var(--main-padding);
  font-size: 1rem;
  letter-spacing: 0.1rem;
  font-weight: 500;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,.12),0 2px 4px 0 rgba(0,0,0,.08);

  @include phone-screen {
    // font-size: 0.8rem;
    padding: var(--dense-padding);
  }
  @include small-phone-screen {
    // font-size: 0.8rem;
    padding: calc(var(--dense-padding) * 0.7);
  }

  &:hover { opacity: 0.9; }
  &:focus { 
    // TODO: improce and clean up
    animation: buttonshake 0.2s, buttonshake 0.2s, buttonshake 0.2s, buttonshake 0.2s;
    box-shadow: 0 4px 8px 5px rgba(0,0,0,.12),0 2px 4px 0 rgba(0,0,0,.08);
  }
  &:active {
    opacity: 0.8;
    animation: buttonshake 0.2s infinite;
    box-shadow: 0 4px 8px 5px rgba(0,0,0,.12),0 2px 4px 0 rgba(0,0,0,.08);
  }
}
@keyframes buttonshake {
  from { transform: rotate(0deg); }
  33% { transform: rotate(1deg); }
  66% { transform: rotate(-1deg); }
  to { transform: rotate(0deg); }
}
</style>