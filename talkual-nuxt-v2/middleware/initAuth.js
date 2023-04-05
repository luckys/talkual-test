export default function ({ store }) {
  const localStorageToken = localStorage.getItem('token') !== 'undefined' ? localStorage.getItem('token') : null
  const localStorageUser = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null

  if (localStorageToken && !store.getters['auth/token'] && !store.getters['auth/user']) {
    store.dispatch('auth/setToken', localStorageToken)
    store.dispatch('auth/setUser', localStorageUser)
  }
}
