<template>
  <el-card class="comment">
    <div class="comment__header">
      <span>{{ comment.name }}</span>
      <small>
        <i class="el-icon-date"></i>
        {{ comment.date | date }}
      </small>
    </div>
    <div class="comment__text">{{ comment.text }}</div>
  </el-card>
</template>

<script>
export default {
  name: 'Comment',
  components: {},
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
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
