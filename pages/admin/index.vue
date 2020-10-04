<template>
  <div class="admin">
    <h1>Аналитика по постам</h1>
    <app-analytics-chart
      class="mb-2"
      title="Количество просмотров"
      :labels="views.labels"
      :data="views.data"
    />
    <app-analytics-chart
      title="Количество комментариев"
      :labels="comments.labels"
      :data="comments.data"
    />
  </div>
</template>

<script>
import AppAnalyticsChart from '@/components/admin/AnalyticsChart'
export default {
  name: 'AdminPage',
  components: { AppAnalyticsChart },
  layout: 'admin',
  async asyncData({ store }) {
    const { views, comments } = await store.dispatch('post/getAnalytics')
    return { views, comments }
  },
  middleware: ['admin.auth'],
}
</script>

<style lang="scss" scoped></style>
