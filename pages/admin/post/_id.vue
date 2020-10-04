<template>
  <div class="admin-post-id">
    <el-breadcrumb separator="/" class="mb-1">
      <el-breadcrumb-item to="/admin/list">Посты</el-breadcrumb-item>
      <el-breadcrumb-item>{{ post.title }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form
      ref="form"
      :model="controls"
      :rules="rules"
      @submit.native.prevent="onSubmit"
    >
      <!-- <h2>Войти в панель администратора</h2> -->
      <el-form-item
        label="Текст в формате .md или .html"
        prop="text"
        class="mb-1"
      >
        <el-input
          v-model="controls.text"
          type="textarea"
          resize="none"
          :rows="10"
        />
      </el-form-item>
      <div class="mb-1">
        <small class="mr-2">
          <i class="el-icon-date"></i>
          <span>
            {{ post.date | date }}
          </span>
        </small>
        <small>
          <i class="el-icon-view"></i>
          <span>{{ post.views }}</span>
        </small>
      </div>
      <el-form-item>
        <el-button type="primary" :loading="loading" round native-type="submit"
          >Обновить</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'AdminPostId',
  validate({ params }) {
    return Boolean(params.id)
  },
  layout: 'admin',
  middleware: ['admin.auth'],
  async asyncData({ store, params }) {
    const post = await store.dispatch('post/FETCH_ADMIN_BY_ID', params.id)
    return { post }
  },
  data() {
    return {
      loading: false,
      controls: {
        text: '',
      },
      rules: {
        text: [
          {
            required: true,
            message: 'Поле не должено быть пустым',
            trigger: 'blur',
          },
        ],
      },
    }
  },
  mounted() {
    this.controls.text = this.post.text
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true
          const formData = {
            text: this.controls.text,
            id: this.post._id,
          }
          try {
            await this.$store.dispatch('post/UPDATE', formData)
            this.$message.success('Пост успешно обновлен')
            this.loading = false
            this.$router.push('/admin/list')
          } catch (e) {
            this.loading = false
          }
        }
      })
    },
  },
  head() {
    return {
      title: `Пост | ${this.post.title}`,
    }
  },
}
</script>
D
<style lang="scss" scoped>
.admin-post-id {
  width: 600px;
}
</style>
