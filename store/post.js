const posts = [
  {
    title: 'Post1',
    date: new Date(),
    views: 22,
    comments: [1, 2],
    id: 'id1',
  },
  {
    title: 'Post2',
    date: new Date(),
    views: 22,
    comments: [1, 2, 3, 4],
    id: 'id2',
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
      return await new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  async FETCH_ADMIN_BY_ID({}, id) {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts.find((p) => p.id === id))
      }, 1000)
    })
  },
}
