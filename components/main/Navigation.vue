<template>
  <div class="navigation">
    <h1>Nuxt Blog</h1>

    <el-tooltip placement="top" effect="light">
      <div slot="content">Личный кабинет</div>
      <nuxt-link class="navigation__admin" to="/admin"
        ><i class="el-icon-user"></i
      ></nuxt-link>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  components: {},
}
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-bottom: 1px solid #e5e5e5;
  font-family: Roboto;
  &__admin {
    position: fixed;
    right: 20px;
    font-size: 30px;
    color: black;
  }
}
</style>
