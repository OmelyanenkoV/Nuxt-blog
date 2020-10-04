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
        <el-input v-model="controls.title" />
      </el-form-item>
      <el-form-item
        label="Текст в формате .md или .html"
        prop="text"
        class="mb-2"
      >
        <el-input
          v-model="controls.text"
          type="textarea"
          resize="none"
          :rows="10"
        />
      </el-form-item>

      <el-upload
        ref="upload"
        class="mb-2"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-change="handleImageChange"
        :auto-upload="false"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text mb-1">
          Перетащите картинку или <em>нажмите для загрузки</em>
        </div>
        <div class="el-upload__tip">Файлы с расширением jpg/png</div>
      </el-upload>

      <el-button class="mb-2" type="info" round @click="peviewDialog = true"
        >Предпросмотр</el-button
      >
      <el-dialog title="Предпросмотр" :visible.sync="peviewDialog">
        <div :key="controls.text">
          <vue-markdown> {{ controls.text }}</vue-markdown>
        </div>
      </el-dialog>
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
      peviewDialog: false,
      loading: false,
      image: null,
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
        if (valid && this.image) {
          this.loading = true
          const formData = {
            title: (this.controls.title = this.controls.title.trim()),
            text: (this.controls.text = this.controls.text.trim()),
            image: this.image,
          }
          try {
            await this.$store.dispatch('post/CREATE', formData)
            this.controls.title = this.controls.text = ''
            this.image = null
            this.$refs.upload.clearFiles()
            this.$message.success('Пост успешно создан')
            this.loading = false
          } catch (e) {
            this.loading = false
          }
        } else {
          this.$message.warning('Заполните поля и загрузите картинку')
        }
      })
    },
    handleImageChange(file, fileList) {
      this.image = file.raw
    },
  },
  head: {
    title: `Создать | ${process.env.appName}`,
  },
}
</script>

<style lang="scss" scoped>
.create {
  width: 600px;
}
</style>
