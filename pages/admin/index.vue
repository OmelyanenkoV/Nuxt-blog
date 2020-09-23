<template>
  <div class="admin">
    <h1>admin</h1>
  </div>
</template>

<script>
export default {
  name: 'AdminPage',
  components: {},
  layout: 'admin',
  middleware: ['admin.auth'],
}
</script>

<style lang="scss" scoped></style>
