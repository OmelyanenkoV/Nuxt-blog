export default {
  mode: 'universal',

  target: 'server',

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap',
      },
    ],
  },
  loading: { color: '#409EFF' },

  css: ['element-ui/lib/theme-chalk/index.css', '@/assets/styles/main.scss'],

  plugins: ['@/plugins/globals'],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/style-resources'],

  modules: ['@nuxtjs/axios'],

  axios: {},

  styleResources: {
    scss: ['@/assets/styles/main.scss'],
  },

  build: {
    transpile: [/^element-ui/],
  },
}
