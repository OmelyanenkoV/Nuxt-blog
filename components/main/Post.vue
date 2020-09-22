<template>
  <el-card class="post" shadow="hover" :body-style="{ padding: '0px' }">
    <header slot="header" class="post__header">
      <h3>Post title</h3>
      <small>
        <i class="el-icon-date"></i>
        {{ new Date().toLocaleString() }}
      </small>
    </header>
    <div class="post__body">
      <img
        src="https://img-a.udemycdn.com/course/750x422/982344_7cfa_2.jpg"
        alt="post image"
        class="post__body__img"
      />
    </div>
    <footer class="post__footer">
      <el-button round @click="openPost">Открыть пост</el-button>
      <span>
        <i class="el-icon-s-comment"></i>
        24
      </span>
    </footer>
  </el-card>
</template>

<script>
export default {
  name: 'Post',
  components: {},
  methods: {
    openPost() {
      const id = 'test-id'
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
