<template>
  <div class="list">
    <el-table :data="posts" style="width: 100%">
      <el-table-column prop="title" label="Название" />

      <el-table-column label="Дата" width="180">
        <template slot-scope="{ row: { date } }">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">
            {{ date | date('date') }}
          </span>
        </template>
      </el-table-column>

      <el-table-column label="Просмотры">
        <template slot-scope="{ row: { views } }">
          <i class="el-icon-view"></i>
          <span style="margin-left: 10px">{{ views }}</span>
        </template>
      </el-table-column>

      <el-table-column label="Комментарии">
        <template slot-scope="{ row: { comments } }">
          <i class="el-icon-chat-dot-square"></i>
          <span style="margin-left: 10px">{{ comments.length }}</span>
        </template>
      </el-table-column>

      <el-table-column label="Действия">
        <template slot-scope="{ row }">
          <el-tooltip placement="top" effect="light">
            <div slot="content">Редактировать</div>
            <el-button
              type="primary"
              icon="el-icon-edit"
              circle
              @click="edit(row._id)"
            />
          </el-tooltip>
          <el-tooltip placement="top" effect="light">
            <div slot="content">Удалить</div>
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="remove(row._id)"
            />
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'List',
  components: {},
  layout: 'admin',
  middleware: ['admin.auth'],
  async asyncData({ store }) {
    const posts = await store.dispatch('post/FETCH_ADMIN')
    return { posts }
  },
  methods: {
    edit(id) {
      this.$router.push(`/admin/post/${id}`)
    },
    async remove(id) {
      try {
        await this.$confirm('Удалить пост?', 'Внимание!', {
          confirmButtonText: 'Да',
          cancelButtonText: 'Отменить',
          type: 'warning',
        })
        await this.$store.dispatch('post/REMOVE', id)
        this.posts = this.posts.filter((p) => p._id !== id)
        this.$message.success('Пост успешно удален')
      } catch (e) {}
    },
  },
  head: {
    title: `Посты | ${process.env.appName}`,
  },
}
</script>

<style lang="scss" scoped></style>
