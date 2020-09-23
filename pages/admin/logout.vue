<template>
  <div class="logout">Идет очистка данных</div>
</template>

<script>
export default {
  name: 'Logout',
  components: {},
  layout: 'empty',
  middleware: ['admin.auth'],
  beforeCreate() {
    this.$store.dispatch('auth/LOGOUT')
    this.$router.push('/admin/login?message=logout')
  },
}
</script>

<style lang="scss" scoped></style>
