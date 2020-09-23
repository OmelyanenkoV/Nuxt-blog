<template>
  <div class="empty-layout">
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'EmptyLayout',
  components: {},
  computed: {
    error() {
      return this.$store.getters.ERROR
    },
  },
  watch: {
    error(value) {
      this.$message.error(value)
    },
  },
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
