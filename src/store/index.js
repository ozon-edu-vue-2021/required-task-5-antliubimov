import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const PRODUCTS_URL = `https://random-data-api.com/api/food/random_food?size=30`;

export default new Vuex.Store({
  state: {
    products: null,
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const responseProducts = await fetch(PRODUCTS_URL);
        commit("setProducts", await responseProducts.json());
      } catch (error) {
        console.log(error);
      }
    },
  },
});
