import { SET_TOKEN, SET_USER } from './constants'

export default {
  setToken (context, data) {
    context.commit(SET_TOKEN, data)
    localStorage.setItem('token', data)
  },

  setUser (context, data) {
    context.commit(SET_USER, data)
    localStorage.setItem('user', JSON.stringify(data))
  },

  login (context, data) {
    context.dispatch('setToken', data.token)
    context.dispatch('setUser', data.user)
  },

  logout (context) {
    context.dispatch('setToken', null)
    context.dispatch('setUser', null)
    localStorage.clear()
  },
}
