import { createStore } from 'vuex';
export default createStore({
  state: {
    gameRound:0,
    gameSetting:{
  }
  },
  mutations: {
    setGameSetting(state, payload) {
      state.gameSetting = payload;
    }
  },
  actions: {
    updateGameSetting(context, payload) {
      
      context.commit('setGameSetting', payload);
    }
  }
});
