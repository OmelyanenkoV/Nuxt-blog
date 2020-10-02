const posts = [
  {
    title: 'Post1',
    date: new Date(),
    views: 22,
    comments: [1, 2],
    _id: 'id1',
  },
  {
    title: 'Post2',
    date: new Date(),
    views: 22,
    comments: [1, 2, 3, 4],
    _id: 'id2',
  },
]

export const actions = {
  async FETCH_ADMIN() {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts)
      }, 500)
    })
  },
  async REMOVE({}, id) {},
  async UPDATE({}, { id, text }) {},
  async CREATE({ commit }, { title, text, image }) {
    try {
      const fd = new FormData()
      fd.append('title', title)
      fd.append('text', text)
      fd.append('image', image, image.name)
      return await this.$axios.$post('http://localhost:3001/api/post/admin', fd)
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async FETCH_ADMIN_BY_ID({}, id) {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts.find((p) => p._id === id))
      }, 1000)
    })
  },
}
