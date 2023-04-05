export default {
  token: state => state.token ?? null,
  user: state => state.user ?? null,
  isAuthenticated: state => !!state.token
}
