<template>
  <div class="error">
    <div class="error__header">
      <h1>&#128549; 404 Not Found</h1>
    </div>
    <nuxt-link to="/">Go to home</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Error',
  components: {},
}
</script>

<style lang="scss" scoped>
.error {
  margin-top: 12rem;
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
