import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apitest: {
      url: '',
      params: {

      }
    }
  },
  mutations: {
    changeApitest(state, url, params) {
      state.apitest = url && params ? { url, params } : url ? url : params
    }
  },
  actions: {
  },
  modules: {
  }
})
