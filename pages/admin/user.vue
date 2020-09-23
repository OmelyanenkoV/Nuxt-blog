<template>
  <div class="user">
    <el-form
      ref="form"
      :model="controls"
      :rules="rules"
      @submit.native.prevent="onSubmit"
    >
      <h2>Создать пользователя</h2>
      <el-form-item label="Логин" prop="login">
        <el-input v-model.trim="controls.login" />
      </el-form-item>
      <div class="mb-1">
        <el-form-item label="Пароль" prop="password">
          <el-input v-model.trim="controls.password" type="password" />
        </el-form-item>
      </div>
      <el-form-item>
        <el-button type="primary" :loading="loading" round native-type="submit"
          >Создать</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'User',
  components: {},
  layout: 'admin',
  middleware: ['admin.auth'],
  data() {
    return {
      loading: false,
      controls: {
        login: '',
        password: '',
      },
      rules: {
        login: [
          {
            required: true,
            message: 'Введите логин',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: 'Введите пароль',
            trigger: 'blur',
          },
          {
            min: 6,
            message: 'Пароль должен быть не менее 6 символов',
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
          try {
            const formData = {
              login: this.controls.login,
              password: this.controls.password,
            }
            await this.$store.dispatch('auth/CREATE_USER', formData)
            this.$message.success('Новый пользователь добавлен')
            this.controls.login = this.controls.password = ''
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
.user {
  padding-top: 3rem;
  margin: 0 auto;
  max-width: 600px;
}
</style>
