import cookie from 'cookie'
import JsCookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

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
      await this.$axios.$post(
        'http://localhost:3001/api/auth/admin/create',
        formData
      )
    } catch (e) {
      commit('SET_ERROR', e, { root: true })
      throw e
    }
  },
  AUTO_LOGIN({ dispatch }) {
    const coocieStr = process.browser
      ? document.cookie
      : this.app.context.req.headers.cookie

    const cookies = cookie.parse(coocieStr || '') || {}
    const token = cookies['jwt-token']

    if (isJWTValid(token)) {
      dispatch('SET_TOKEN', token)
    } else {
      dispatch('LOGOUT')
    }
  },
  SET_TOKEN({ commit }, token) {
    // this.$axios.SET_TOKEN(token, 'Bearer')
    commit('SET_TOKEN', token)
    JsCookies.set('jwt-token', token)
  },
  LOGOUT({ commit }) {
    // this.$axios.SET_TOKEN(false)
    commit('CLEAR_TOKEN')
    JsCookies.remove('jwt-token')
  },
}

export const getters = {
  isAuthenticated: (state) => {
    return Boolean(state.token)
  },
  token: (state) => state.token,
}

function isJWTValid(token) {
  if (!token) {
    return false
  }
  const jwtData = jwtDecode(token) || {}
  const expires = jwtData.exp || 0

  return new Date().getTime() / 1000 < expires
}
