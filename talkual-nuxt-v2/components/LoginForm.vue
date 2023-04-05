<template>
  <div class="columns is-centered">
    <div class="column is-half">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            {{ $t('formLogin.title') }}
          </p>
        </header>
        <div class="card-content">
          <form @submit.prevent="submitLogin">
            <b-field
              id="identifier"
              :label="$t('formLogin.identifier')"
              :type="{ 'is-danger': identifierErrors.length }"
              :message="identifierErrors">
              <b-input v-model="form.identifier"></b-input>
            </b-field>
            <b-field
              id="password"
              :label="$t('formLogin.password')"
              :type="{ 'is-danger': passwordErrors.length }"
              :message="passwordErrors">
              <b-input type="password" v-model="form.password" password-reveal></b-input>
            </b-field>
            <b-button id="submitLoginBtn" type="is-primary" native-type="submit">{{ $t('formLogin.login_btn') }}</b-button>
          </form>
          <p v-if="errorMessage.length" class="has-text-danger">{{ errorMessage }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
import {mapActions} from 'vuex'

export default {
  name: "LoginForm",
  data: () => ({
    form: {
      identifier: '',
      password: '',
    },
    errorMessage: ''
  }),
  validations: {
    form: {
      identifier: {
        required,
      },
      password: {
        required,
        minLength: minLength(6)
      }
    }
  },
  computed: {
    identifierErrors () {
      const errors = []
      if (!this.$v.form.identifier.$dirty) {
        return errors
      }
      !this.$v.form.identifier.required && errors.push({[this.$t('formLogin.errors.identifier_is_required')]: true})
      return errors
    },
    passwordErrors () {
      const errors = []
      if (!this.$v.form.password.$dirty) {
        return errors
      }
      !this.$v.form.password.required && errors.push({[this.$t('formLogin.errors.password_is_required')]: true})
      !this.$v.form.password.minLength && errors.push({[this.$t('formLogin.errors.password_min_length')]: true})
      return errors
    }
  },
  methods: {
    ...mapActions({
      login: 'auth/login'
    }),
    async submitLogin() {
      try {
        this.$v.$touch()
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR'
        } else {
          const dataJson = JSON.stringify({
            "identifier": this.form.identifier,
            "password": this.form.password
          });
          this.$axios.setHeader('Content-Type', 'application/json')
          const data = await this.$axios.$post('/auth/local', dataJson)
          localStorage.clear()
          await this.login({
            token: data.jwt,
            user: data.user,
          })
          this.$router.push('/products')
        }
      } catch (error) {
        this.errorMessage = error.message
      }
    }
  }
}
</script>
