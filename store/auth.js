export const state = () => ({
  token: null,
})

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },
}

export const actions = {
  async LOGIN({ commit, dispatch }, formData) {
    const token = await new Promise((resolve) => {
      setTimeout(() => resolve('mock-token'), 2000)
    })
    dispatch('SET_TOKEN', token)
  },
  SET_TOKEN({ commit }, token) {
    commit('SET_TOKEN', token)
  },
}

export const getters = {
  isAuthenticated: (state) => {
    return Boolean(state.token)
  },
}
