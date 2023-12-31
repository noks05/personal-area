import { getData, setData } from 'nuxt-storage/local-storage'

export const useAuthStore = defineStore('authData', {
  state: () => (
    {
      login: 'admin',
      password: 'admin',
      auth: (() => getData('authPersonalAreaTest777')?.value || false)(),
    }
  ),
  actions: {
    async checkAuth(login, password, setError) {
      this.auth = this.login === login && this.password === password
      this.setAuthState(this.auth)
      try {
        if (this.auth) {
          await navigateTo('/')
        } else {
          setError()
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