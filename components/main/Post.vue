<template>
  <el-card class="post" shadow="hover" :body-style="{ padding: '0px' }">
    <header slot="header" class="post__header">
      <h3>{{ post.title }}</h3>
      <small>
        <i class="el-icon-date"></i>
        {{ new Date(post.date).toLocaleString() }}
      </small>
    </header>
    <div class="post__body">
      <img :src="post.imageUrl" alt="post image" class="post__body__img" />
    </div>
    <footer class="post__footer">
      <el-button round @click="openPost">Открыть пост</el-button>
      <span>
        <i class="el-icon-s-comment"></i>
        {{ post.comments.length }}
      </span>
    </footer>
  </el-card>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    openPost() {
      const id = this.post._id
      this.$router.push(`/post/${id}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.post {
  margin-bottom: 1.5rem;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__body {
    &__img {
      width: 100%;
    }
  }

  &__footer {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    i {
      margin-right: 5px;
    }
  }
}
</style>
