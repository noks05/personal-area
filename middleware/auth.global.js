
export default defineNuxtRouteMiddleware(async (to) => {
  if (to.path !== '/login') {
    if (process.client) {
      const localData = localStorage.getItem("authPersonalAreaTest777")

      if (!localData) return

      const resp = JSON.parse(localData)
      if (!resp || !resp.value) {
        return await navigateTo('/login')
      }
    }
  }
})