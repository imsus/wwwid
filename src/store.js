import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rss: ''
  },
  getters: {
    allFeeds: state => {
      return state.rss.items
    },
    itemsByCategory: (state, getters) => (slug) => {
      return getters.allFeeds.filter(elem => elem.categories.includes(slug))
    },
    itemsByGuid: (state, getters) => (guid) => {
      return getters.allFeeds.find(elem => elem.guid === `https://medium.com/p/${guid}`) || 'No Feed'
    }
  },
  mutations: {
    replace(state, payload) {
      state.rss = payload
    }
  },
  actions: {
    async fetchInitialRSS({ commit }) {
      let { data } = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid')
      commit('replace', data)
    }
  }
})
