export const actions = {
  async CREATED({ commit }, data) {
    try {
      return await this.$axios.post('http://localhost:3001/api/comment', data)
    } catch (e) {
      commit('SET_ERROR', e, { root: true })
      throw e
    }
  },
}
