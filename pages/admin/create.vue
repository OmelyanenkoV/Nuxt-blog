<template>
  <div class="create">
    <el-form
      ref="form"
      :model="controls"
      :rules="rules"
      @submit.native.prevent="onSubmit"
    >
      <h1 class="mb-1">Создать новый пост</h1>
      <el-form-item label="Название" prop="title" class="mb-1">
        <el-input v-model.trim="controls.title" />
      </el-form-item>
      <el-form-item
        label="Текст в формате .md или .html"
        prop="text"
        class="mb-2"
      >
        <el-input
          v-model.trim="controls.text"
          type="textarea"
          resize="none"
          :rows="10"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="loading" round native-type="submit"
          >Создать пост</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Create',
  components: {},
  layout: 'admin',
  middleware: ['admin.auth'],
  data() {
    return {
      loading: false,
      controls: {
        title: '',
        text: '',
      },
      rules: {
        title: [
          {
            required: true,
            message: 'Название поста не может быть пустым',
            trigger: 'blur',
          },
        ],
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
  methods: {
    onSubmit() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true
          const formData = {
            title: this.controls.title,
            text: this.controls.text,
          }
          try {
            await this.$store.dispatch('post/CREATE', formData)
            this.controls.title = this.controls.text = ''
            this.$message.success('Пост успешно создан')
            this.loading = false
          } catch (e) {
            this.loading = false
          }
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.create {
  width: 600px;
}
</style>
