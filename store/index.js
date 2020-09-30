// root and base elements in my application

export const state = () => ({
  error: null,
})

export const mutations = {
  SET_ERROR(state, error) {
    state.error = String(error)
  },
  CLEAR_ERROR(state) {
    state.error = null
  },
}
export const getters = {
  ERROR: (state) => state.error,
}
export const actions = {}
