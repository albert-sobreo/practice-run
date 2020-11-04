import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Username:'',
    Posts:[
      {id:0, username:'User1', post:'Hellow', upvote:0, downvote:0 },
      {id:0, username:'User2', post:'Hello', upvote:0, downvote:0 }
    ]

  },
  mutations: {},
  actions: {
    start(state, payload){
      state.Username = payload;
    }
  },
  modules: {}
});
