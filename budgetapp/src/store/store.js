import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    change(state, payload) {
      state[payload.property].push(payload.with);
    },
    // deleteItem(state,payload){
    //   state[payload.property].
    // }
  },
  getters:{
      getList:state =>state.list
  }
});
