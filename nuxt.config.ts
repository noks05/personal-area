// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ['@vuepic/vue-datepicker']
  },
  modules: ['@nuxt/ui']
})
