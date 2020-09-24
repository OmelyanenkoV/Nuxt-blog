<template>
  <div class="admin-layout">
    <el-container :style="{ height: '100%' }">
      <el-aside width="250px"><app-aside /></el-aside>
      <el-main :style="{ padding: '20px' }"><Nuxt /></el-main>
    </el-container>
  </div>
</template>

<script>
import AppAside from '@/components/admin/aside'
export default {
  name: 'AdminLayout',
  components: {
    AppAside,
  },
}
</script>

<style lang="scss" scoped>
.admin-layout {
  width: 100%;
  height: 100vh;
}
</style>
