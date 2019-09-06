const path = require('path')

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The Holt soundboard, with sounds for Captain Raymond Holt, Terry Jeffords, Jake Peralta, and Charles Boyle from the show Brooklyn 99. Available sounds: 100+. IOS, Android, Windows 10, Online, web, app. Completely ad-free, install as a web APK on Android or add to homescreen on IOS for iphone' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      // Rubik font
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Rubik:400,500,700&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  pwa: {
    meta: {
      mobileApp: true,
      mobileAppIOS: true,
      appleStatusBarStyle: "black-translucent",
      favicon: true,

      author: "themindstorm",

      theme_color: "#10213c",

      ogSiteName: "Holt Soundboard",
      ogTitle: "Holt Soundboard",
      ogDescription: "The Holt soundboard, with sounds for Captain Raymond Holt, Terry Jeffords, Jake Peralta, and Charles Boyle from the show Brooklyn 99. Available sounds: 100+. IOS, Android, Windows 10, Online, web, app. Completely ad-free, install as a web APK on Android or add to homescreen on IOS for iphone",
    },
    manifest: {
      name: "Holt Soundboard",
      lang: "en",
    },
    icon: {
      iconSrc: 'static/icon.png',
      iconFileSize: 'icon.png',
      sizes: [64, 120, 144, 152, 192, 384, 512],
      targetDir: 'icons'
    }
  },
  modules: [
    '@nuxtjs/pwa',
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        //import whole set
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['faBars', 'faTimes', 'faEllipsisV', 'faMoon', 'faCogs', 'faChevronLeft', 'faArrowLeft', 'faArrowUp', 'faShareAlt', 'faEnvelope']
          // , 'faRedditAlien', 'faPintereset', 'faWhatsapp'
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faTwitter', 'faWhatsapp', 'faReddit', 'faPinterest', 'faFacebookSquare']
          // , 'faRedditAlien', 'faPintereset', 'faWhatsapp'
        },
      ]
    }]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'contents'),
        options: {
          vue: {
            root: "dynamicMarkdown"
          }
        }
      },)
    }
  },

  generate: {
    routes: [
      '/',
      '/about',
      '/known_issues'
    ]
  }
}
