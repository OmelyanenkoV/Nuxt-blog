<template>
  <div class="empty-layout">
    <Nuxt />
    <el-tooltip placement="top" effect="light">
      <div slot="content">На главную страницу</div>
      <nuxt-link class="home" to="/"><i class="el-icon-house"></i></nuxt-link>
    </el-tooltip>
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
      this.$message.error(value.response.data.message)
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
.home {
  position: fixed;
  right: 36px;
  top: 10px;
  font-size: 30px;
}
</style>
