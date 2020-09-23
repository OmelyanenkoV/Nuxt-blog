<template>
  <div class="user">user</div>
</template>

<script>
export default {
  name: 'User',
  components: {},
  layout: 'admin',
  middleware: ['admin.auth'],
}
</script>

<style lang="scss" scoped></style>
