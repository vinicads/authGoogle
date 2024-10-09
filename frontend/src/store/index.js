import { createStore } from 'vuex'
import axios from "axios";
export default createStore({
  state: {
    apiUrl: 'http://localhost:3000',
    isAuthenticated: false,
    autenticacao: null,
  },
  mutations: {
    setAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    setAutenticacao(state, autenticacao) {
      state.autenticacao = autenticacao;
    },
  },
  actions: {
    async checkAuthentication(context) {
      try {
        const response = await axios.get(`${this.state.apiUrl}/login`, {
          withCredentials: true,
        });
        if (response.status === 200) {
          context.commit('setAuthenticated', true);
          context.commit('setAutenticacao', response.data.autenticacao);
        }
      } catch (error) {
        context.commit('setAuthenticated', false);
        context.commit('setAutenticacao', null);
      }
    },
  }
})
