
export default defineNuxtRouteMiddleware(async (to) => {
  if (to.path !== '/login') {
    if (process.client) {
      const resp = JSON.parse(localStorage.getItem("authPersonalAreaTest777") || '{value:false}')
      if (!resp.value) {
        return await navigateTo('/login')
      }
    }
  }
})