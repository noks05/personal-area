
import { getData } from 'nuxt-storage/local-storage'

export default defineNuxtRouteMiddleware(async (to) => {
  if (to.path !== '/login') {
    const resp = getData("authPersonalAreaTest777")
    if (!resp) {
      return await navigateTo('/login')
    }
  }
})