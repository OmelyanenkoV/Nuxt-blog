<template>
  <el-card class="comment">
    <div class="comment__header">
      <span>Person name</span>
      <small>
        <i class="el-icon-date"></i>
        {{ new Date().toLocaleString() }}
      </small>
    </div>
    <div class="comment__text">Lorem ipsum dolor sit amet.</div>
  </el-card>
</template>

<script>
export default {
  name: 'Comment',
  components: {},
}
</script>

<style lang="scss" scoped>
.comment {
  margin-bottom: 1rem;
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    span {
      font-size: 0.9rem;
    }
  }
  &__text {
    white-space: pre-line;
  }
}
</style>
