export default {

  head: {
    title: 'mk-architects',
    htmlAttrs: {
      lang: 'en'
    },

    script: [
      {
        src: 'https://use.typekit.net/yxs6cwd.js',
        async: true,
      },
    ],

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.png',
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/style.css',
    '~/assets/css/transitions.css'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/image'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }

}

