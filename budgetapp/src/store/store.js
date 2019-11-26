import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: "vuex",
  storage: window.localStorage
});

export const store = new Vuex.Store({
  state: {
    incList: [],
    expList: []
  },
  mutations: {
    change(state, payload) {
      state[payload.property].push(payload.with);
    },
    deleteItem(state, payload) {
      console.log(payload.with);
      state[payload.property].splice(
        state[payload.property].indexOf(payload.with),
        1
      );
    }
  },
  getters: {
    getIncList: state => state.incList,
    getExpList: state => state.expList
  },
  plugins: [vuexLocalStorage.plugin]
});
