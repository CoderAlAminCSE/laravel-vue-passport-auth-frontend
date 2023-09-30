import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('accessToken') || null
  },
  getters: {
    loggedIn(state) {
      return state.token !== null
    }
  },
  mutations: {
    setToken(state, token) {
      state.token = token
    },

    removeToken(state) {
      state.token = null
    },
  },
  actions: {
    login(context, credential) {
      return new Promise((resolve, reject) => {
        axios.post('http://127.0.0.1:8000/api/login', {
          email: credential.email,
          password: credential.password,
        }).then(res => {
          localStorage.setItem('accessToken', res.data.data.access_token)
          context.commit('setToken', res.data.data.access_token)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    logout(context) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
      return new Promise((resolve, reject) => {
        axios.post('http://127.0.0.1:8000/api/logout').then(res => {
          localStorage.removeItem('accessToken')
          context.commit('removeToken')
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
  },
  modules: {
  }
})
