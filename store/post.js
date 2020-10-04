export const actions = {
  async FETCH({ commit }) {
    try {
      return await this.$axios.$get('http://localhost:3001/api/post')
    } catch (e) {
      commit('SET_ERROR', e, { root: true })
      throw e
    }
  },
  async FETCH_ADMIN({ commit }) {
    try {
      return await this.$axios.$get('http://localhost:3001/api/post/admin')
    } catch (e) {
      commit('SET_ERROR', e, { root: true })
      throw e
    }
  },
  async REMOVE({ commit }, id) {
    try {
      return await this.$axios.$delete(
        `http://localhost:3001/api/post/admin/${id}`
      )
    } catch (e) {
      commit('SET_ERROR', e, { root: true })
      throw e
    }
  },
  async UPDATE({ commit }, { id, text }) {
    try {
      return await this.$axios.$put(
        `http://localhost:3001/api/post/admin/${id}`,
        { text }
      )
    } catch (e) {
      commit('SET_ERROR', e, { root: true })
      throw e
    }
  },
  async CREATE({ commit }, { title, text, image }) {
    try {
      const fd = new FormData()
      fd.append('title', title)
      fd.append('text', text)
      fd.append('image', image, image.name)
      return await this.$axios.$post('http://localhost:3001/api/post/admin', fd)
    } catch (e) {
      commit('SET_ERROR', e, { root: true })
      throw e
    }
  },
  async FETCH_BY_ID({ commit }, id) {
    try {
      return await this.$axios.$get(`http://localhost:3001/api/post/${id}`)
    } catch (e) {
      commit('SET_ERROR', e, { root: true })
      throw e
    }
  },
  async FETCH_ADMIN_BY_ID({ commit }, id) {
    try {
      return await this.$axios.$get(
        `http://localhost:3001/api/post/admin/${id}`
      )
    } catch (e) {
      commit('SET_ERROR', e, { root: true })
      throw e
    }
  },
  async ADD_VIEW({ commit }, { views, _id }) {
    try {
      return await this.$axios.$put(
        `http://localhost:3001/api/post/add/view/${_id}`,
        { views }
      )
    } catch (e) {
      commit('SET_ERROR', e, { root: true })
      throw e
    }
  },
  async getAnalytics({ commit }) {
    try {
      return await this.$axios.$get(
        'http://localhost:3001/api/post/admin/get/analytics'
      )
    } catch (e) {
      commit('SET_ERROR', e, { root: true })
      throw e
    }
  },
}
