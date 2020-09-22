<template>
  <div class="empty-layout">
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'EmptyLayout',
  components: {},
}
</script>

<style lang="scss" scoped>
.empty-layout {
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 4rem;
}
</style>
