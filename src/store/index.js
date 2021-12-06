import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [
      { title: "HTML", level: "Basico"},
      { title: "CSS", level: "Basico"},
      { title: "JavaScript", level: "Basico"},
      { title: "Vue.js", level: "Básico" },
      { title: "C#", level: "Intermediario" },
    ],
    Estagio: [
      { title: "F5 Tecnologia", workload: "Estagiário", date: "Julho/2020 - Janeiro/2021", function: "Suporte tecnico" },
      { title: "Omie", workload: "Estagiário", date: "janeiro/2021 - Atualmente", function: "Suporte tecnico"},
    ],
    Cursando: [
      { title: "Udemy" },
      { title: "Youtube" },
    ],


    title: "Tecnologias"
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    bigTitle(state) {
      return state.title.toUpperCase()
    },
    getImgUrl(state) {
      var images = require.context('../assets/', false, /\.png$/)
      return images('./' + state.cards.image + ".png")
    }
  }
})
