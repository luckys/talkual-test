<template>
  <section class="section">
    <LoginForm />
  </section>
</template>

<script>

export default {
  name: 'IndexPage',
  middleware: ['guest']
}
</script>
