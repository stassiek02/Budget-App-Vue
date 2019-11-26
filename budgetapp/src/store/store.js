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
    getTotalInc({ incList }) {
      return incList.reduce(function(acc, item) {
        return acc + parseFloat(item.value);
      }, 0);
    },
    getTotalExp({ expList }) {
      return expList.reduce(function(acc, item) {
        return acc + parseFloat(item.value);
      }, 0);
    }
  },
  plugins: [vuexLocalStorage.plugin]
});
