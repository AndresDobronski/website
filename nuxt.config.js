const pkg = require('./package')
const join = require('path').join

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'ASU Esports Association',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'application-name', content: '&nbsp;'},
      { name: 'msapplication-TileColor', content: '#FFFFFF' },
      { name: 'msapplication-TileImage', content: '/mstile-144x144.png' },
      { name: 'msapplication-square70x70logo', content: '/mstile-70x70.png' },
      { name: 'msapplication-square150x150logo', content: '/mstile-150x150.png' },
      { name: 'msapplication-wide310x150logo', content: '/mstile-310x150.png' },
      { name: 'msapplication-square310x310logo', content: '/mstile-310x310.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,700,400italic|Material+Icons' },
      { rel: 'apple-touch-icon-precomposed', sizes: '57x57', href: '/apple-touch-icon-57x57.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: '/apple-touch-icon-114x114.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '72x72', href: '/apple-touch-icon-72x72.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '144x144', href: '/apple-touch-icon-144x144.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '60x60', href: '/apple-touch-icon-60x60.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '120x120', href: '/apple-touch-icon-120x120.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '76x76', href: '/apple-touch-icon-76x76.png' },
      { rel: 'apple-touch-icon-precomposed', sizes: '152x152', href: '/apple-touch-icon-152x152.png' },
      { rel: 'icon', type: 'image/png', href: '/favicon-196x196.png', sizes: '196x196' },
      { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
      { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
      { rel: 'icon', type: 'image/png', href: '/favicon-128.png', sizes: '128x128' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [ '~/plugins/vuetify.js' ],

  /*
  ** Global CSS
  */

  css: [ '~/css/main.css' ],

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    vendor: ['~/plugins/vuetify.js'],
    extractCSS: true,
    extend(config, ctx) {
    }
  }
}
