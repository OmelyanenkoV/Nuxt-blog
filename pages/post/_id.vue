<template>
  <div class="post-id">
    <header class="post-id__header">
      <div class="post-id__header__title">
        <h1>Post title</h1>
        <nuxt-link to="/">
          <i class="el-icon-back"></i>
        </nuxt-link>
      </div>
      <div class="post-id__header__info">
        <small>
          <i class="el-icon-date"></i>
          {{ new Date().toLocaleString() }}
        </small>
        <small>
          <i class="el-icon-view"></i>
          42
        </small>
      </div>
      <div class="post-id__header__img">
        <img
          src="https://img-a.udemycdn.com/course/750x422/982344_7cfa_2.jpg"
          alt="post img"
        />
      </div>
    </header>
    <main class="post-id__main">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ut cum vel
        quisquam obcaecati assumenda accusamus laudantium pariatur amet corrupti
        neque dolore quasi reiciendis dolorem molestias commodi id, placeat
        voluptatem soluta? Aliquid dolorum et tempora.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ut cum vel
        quisquam obcaecati assumenda accusamus laudantium pariatur amet corrupti
        neque dolore quasi reiciendis dolorem molestias commodi id, placeat
        voluptatem soluta? Aliquid dolorum et tempora.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ut cum vel
        quisquam obcaecati assumenda accusamus laudantium pariatur amet corrupti
        neque dolore quasi reiciendis dolorem molestias commodi id, placeat
        voluptatem soluta? Aliquid dolorum et tempora.
      </p>
    </main>
    <footer></footer>
  </div>
</template>

<script>
export default {
  name: 'PostId',
  components: {},
  validate({ params }) {
    return Boolean(params.id)
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
}
</style>
