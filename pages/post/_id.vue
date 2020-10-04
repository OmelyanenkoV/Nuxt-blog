<template>
  <div class="post-id">
    <header class="post-id__header">
      <div class="post-id__header__title">
        <h1>{{ post.title }}</h1>
        <nuxt-link to="/">
          <i class="el-icon-back"></i>
        </nuxt-link>
      </div>
      <div class="post-id__header__info">
        <small>
          <i class="el-icon-date"></i>
          {{ post.date | date }}
        </small>
        <small>
          <i class="el-icon-view"></i>
          {{ post.views }}
        </small>
      </div>
      <div class="post-id__header__img">
        <img :src="post.imageUrl" alt="post img" />
      </div>
    </header>
    <main class="post-id__main">
      <vue-markdown> {{ post.text }}</vue-markdown>
    </main>
    <footer class="post-id__footer">
      <div class="post_id__footer__form">
        <app-comment-form
          v-if="canAddComment"
          :post-id="post._id"
          @created="createCommentHandler"
        />
      </div>
      <div v-if="post.comments.length" class="post-id__footer__comments">
        <app-comment
          v-for="comment in post.comments"
          :key="comment._id"
          :comment="comment"
        />
      </div>
      <div v-else class="tc">Комментариев нет</div>
    </footer>
  </div>
</template>

<script>
import AppComment from '@/components/main/Comment'
import AppCommentForm from '@/components/main/CommentForm'
export default {
  name: 'PostId',
  components: {
    AppComment,
    AppCommentForm,
  },
  validate({ params }) {
    return Boolean(params.id)
  },
  async asyncData({ store, params }) {
    const post = await store.dispatch('post/FETCH_BY_ID', params.id)
    await store.dispatch('post/ADD_VIEW', post)
    return {
      post: { ...post, views: post.views++ },
    }
  },
  data() {
    return {
      canAddComment: true,
    }
  },
  methods: {
    createCommentHandler(comment) {
      this.post.comments.unshift(comment)
      this.canAddComment = false
    },
  },
}
</script>

<style lang="scss" scoped>
.post-id {
  max-width: 600px;
  margin: 0 auto;
  &__header {
    margin-bottom: 1.5rem;
    &__title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }
    &__info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
    }
    &__img {
      img {
        width: 100%;
      }
    }
  }
  &__main {
    margin-bottom: 2rem;
  }
}
</style>
