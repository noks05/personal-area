import { setData } from 'nuxt-storage/local-storage'

export const useAuthStore = defineStore('authData', {
  state: () => (
    {
      login: 'admin',
      password: 'admin',
    }
  ),
  actions: {
    async checkAuth(login, password) {
      const checkLogin = this.login === login
      const checkPassword = this.password === password
      try {
        if (checkLogin && checkPassword) {
          this.setAuthState(true)

          await navigateTo('/')
        } else {
          throw new Error('Ошибка авторизации: Неверный логин или пароль')
        }
      } catch (error) {
        console.log(error)
      }
    },
    setAuthState(value) {
      setData('authPersonalAreaTest777', value)
    },
  },
})