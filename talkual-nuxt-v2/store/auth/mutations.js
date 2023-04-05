import { SET_TOKEN, SET_USER } from './constants'

export default {
  [SET_TOKEN] (state, data) {
    state.token = data
  },

  [SET_USER] (state, data) {
    state.user = data
  }
}
