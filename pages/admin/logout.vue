<template>
  <div class="logout">Logout</div>
</template>

<script>
export default {
  name: 'Logout',
  components: {},
  layout: 'empty',
  middleware: ['admin.auth'],
}
</script>

<style lang="scss" scoped></style>
