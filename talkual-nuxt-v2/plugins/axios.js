export default function ({ $axios, store, error: nuxtError }) {
  $axios.onRequest(config => {
    if (store.getters['auth/isAuthenticated']) {
      $axios.setToken(store.getters['auth/token'], 'Bearer')
    }
  })

  $axios.onError(error => {
    return Promise.reject(error);
  })
}
