<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/"
        >
          <img
            src="~assets/buefy.png"
            alt="Buefy"
            height="28"
          >
        </a>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
      <b-menu v-if="isAuthenticated" class="navbar-end">
        <b-menu-list>
          <b-menu-item>
            <template #label>
              {{ username }}
              <b-dropdown aria-role="list" class="is-pulled-right" position="is-bottom-left">
                <template #trigger>
                  <b-icon icon="dots-vertical"></b-icon>
                </template>
                <b-dropdown-item aria-role="listitem" @click="onLogout">Logout</b-dropdown-item>
              </b-dropdown>
            </template>
          </b-menu-item>
        </b-menu-list>
      </b-menu>
    </nav>

    <section class="main-content columns">
      <div class="container column is-10">
        <Nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'DefaultLayout',
  middleware: ['auth'],
  computed: {
    ...mapGetters({
      user: 'auth/user',
      isAuthenticated: 'auth/isAuthenticated',
    }),
    username () {
      return this.user?.username ?? ''
    }
  },
  methods: {
    ...mapActions({
      logout: 'auth/logout',
    }),
    async onLogout () {
      await this.logout()
      await this.$router.push('/')
    }
  }
}
</script>
