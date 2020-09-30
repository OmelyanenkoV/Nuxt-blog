export const state = () => ({
  token: null,
})

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },
  CLEAR_TOKEN(state) {
    state.token = null
  },
}

export const actions = {
  async LOGIN({ commit, dispatch }, formData) {
    try {
      const { token } = await this.$axios.$post(
        'http://localhost:3001/api/auth/admin/login',
        formData
      )
      dispatch('SET_TOKEN', token)
    } catch (e) {
      commit('SET_ERROR', e, { root: true })
      throw e
    }
  },
  async CREATE_USER({ commit }, formData) {
    try {
      await console.log('created user', formData)
    } catch (e) {}
  },
  SET_TOKEN({ commit }, token) {
    commit('SET_TOKEN', token)
  },
  LOGOUT({ commit }) {
    commit('CLEAR_TOKEN')
  },
}

export const getters = {
  isAuthenticated: (state) => {
    return Boolean(state.token)
  },
}
