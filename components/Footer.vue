<template lang="pug">
  .footer 
    .footer-items
      .item(@click="scrollToTop")
        fa(:icon="['fas', 'arrow-up']")
        span Back to top

      a(target="_blank" href='https://github.com/holt-soundboard/holt-soundboard-web').item
        fa(:icon="['fab', 'github']")
        span GitHub

      .item(@click="share")
        fa(:icon="['fas', 'share-alt']")
        span Share

    .share-screen(v-if='showShareScreen')
      a(v-for="link in shareLinks" :href="link.link" target="_blank").share-link
        fa(:icon="[link.type, link.icon]" v-bind:style="{ color: link.color}")
        span {{ link.name }}
</template>

<script>
export default {
  data: function() {
    return {
      showShareScreen: false,
      shareLinks: [
        {
          type: 'fab',
          icon: 'twitter',
          name: 'Twitter',
          link: 'https://twitter.com/home?status=https%3A//holt-soundboard.github.io/%0ACheck it out, it has sounds of Captain Holt, Terry Jeffords, Charles Boyle, and Jake Peralta!',
          color: '#38A1F3'
        },
        {
          type: 'fab',
          icon: 'reddit',
          name: 'Reddit',
          link: 'https://www.reddit.com/submit?url=https%3A%2F%2Fholt-soundboard.github.io',
          color: 'ff0700'
        },
        {
          type: 'fab',
          icon: 'whatsapp',
          name: 'WhatsApp',
          link: 'https://api.whatsapp.com/send?text=https%3A//holt-soundboard.github.io/',
          color: '#00de65'
        },
        {
          type: 'fab',
          icon: 'pinterest',
          name: 'Pinterest',
          link: 'https://in.pinterest.com/themindstorm/holt-soundboardgithubio/',
          color: '#fd0000'
        },
        {
          type: 'fas',
          icon: 'envelope',
          name: 'Mail',
          link: 'mailto:?body=https://holt-soundboard.github.io/%0ACheck it out, it has sounds of Captain Holt, Terry Jeffords, Charles Boyle, and Jake Peralta!&subject=Check out this Holt Soundboard',
          color: '#ffffff'
        },
        {
          type: 'fab',
          icon: 'facebook-square',
          name: 'Facebook',
          link: 'https://www.facebook.com/sharer/sharer.php?u=https%3A//holt-soundboard.github.io/',
          color: '#3b5998'
        },
      ]
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0,0)
    },
    share() {
      // check of browser can access share screen
      // otherwise show pre made links
      if (navigator.share) {
        navigator.share({
          title: 'Holt Soundboard',
          url: 'https://holt-soundboard.github.io'
        })
      } else {
        console.log('no nav.share')
        this.showShareScreen = !this.showShareScreen

        // scroll to bottom of page so buttons can be seen
        setTimeout(() => window.scrollTo(0,document.body.scrollHeight), 100)

      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/layouts/styles/globals.scss';
.footer {
  background-color: #111;
  padding: var(--dense-padding);
  color: var(--nav-text-color);
}
.footer-items {
  // for font, will override span later
  font-size: 2rem;
  @include phone-screen {
    font-size: 1.2rem;
  }


  display: flex;
  justify-content: space-between;

  .item {
    border-radius: var(--border-radius);
    transition: 0.2s all;

    display: grid;
    grid-template-columns: auto auto;
    grid-gap: var(--dense-padding);

    @include phone-screen {
      grid-gap: unset;
    }

    @include phone-screen {
      // include icon sizes
      font-size: 1.6rem;
    }

    & * {
      // vertical align
      align-self: center;
    }

    span {
      font-size: 1.2rem;
      font-weight: 600;

      @include phone-screen {
        display: none;
      }
    }

    &:hover {
      background-color: white;
      color: var(--nav-background-color);
      padding: 1px calc(var(--dense-padding) * 0.5);
    }
  }
}

.share-screen {
  padding-top: calc(var(--main-padding) * 0.5);
  font-size: 1.2rem;

  .share-link {
    display: grid;
    grid-template-columns: 35px auto;

    padding-bottom: calc(var(--main-padding) * 0.5);
    padding-top: calc(var(--main-padding) * 0.5);
    border-radius: var(--border-radius);
    padding-left: calc(var(--dense-padding) * 0.5);

    &:hover {
      background-color: white;
      background-color: #333;
      opacity: 0.9;
    }
  }

  // link fix
  a {
    color: unset;
    text-decoration: unset;
  }
}

</style>