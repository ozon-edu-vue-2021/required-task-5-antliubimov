import Vue from "vue";
import Vuex from "vuex";
import { utils } from "@/utils";

Vue.use(Vuex);

const PRODUCTS_URL = `https://random-data-api.com/api/food/random_food?size=30`;
const images = [
  6123150777, 6126039472, 6126040354, 6128597660, 6134992334, 6136170572,
  6136172483, 6140906765, 6142673815, 6142681673, 6142683276, 6148226736,
];

export default new Vuex.Store({
  state: {
    products: [],
    order: [],
  },
  getters: {
    productsList: (state) => {
      return state.products;
    },
    cartList: (state) => {
      return state.order;
    },
    totalPrice: (state) => {
      return state.order.reduce(
        (acc, item) => acc + item.price * item.count,
        0
      );
    },
    totalAmount: (state) => {
      return state.order.reduce((acc, item) => acc + item.count, 0);
    },
    favoritesList: (state) => {
      return state.products.filter((elem) => elem.favorite);
    },
  },
  mutations: {
    addProps: (state, args) => {
      let { index, imgURL, price } = args;

      Vue.set(state.products[index], "src", imgURL);
      Vue.set(state.products[index], "price", price);
      Vue.set(state.products[index], "count", 1);
      Vue.set(state.products[index], "favorite", false);
    },
    setProducts: (state, payload) => {
      state.products = payload;
    },
    addToCart: (state, payload) => {
      state.order.push(payload);
    },
    deleteProduct: (state, payload) => {
      state.order.forEach((elem, index) => {
        if (elem.id === payload.id) {
          state.order.splice(index, 1);
        }
      });
    },
    changeCount: (state, payload) => {
      state.order.forEach((elem) => {
        if (elem.id === payload.id) {
          elem.count = payload.count;
        }
      });
    },
    favoriteToggle: (state, payload) => {
      state.products.forEach((elem) => {
        if (elem.id === payload.id) {
          elem.favorite = !elem.favorite;
        }
      });
    },
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const responseProducts = await fetch(PRODUCTS_URL);
        commit("setProducts", await responseProducts.json());

        let arrProducts = this.state.products;
        arrProducts.forEach((element, index) => {
          commit("addProps", {
            index: index,
            imgURL: utils.fullPath(images),
            price: utils.randomNumber(utils.MIN_PRICE, utils.MAX_PRICE),
          });
        });
      } catch (error) {
        console.log(error);
      }
    },
    addToCartBy({ commit }, product) {
      commit("addToCart", product);
    },
    favoriteToggleBy({ commit }, product) {
      commit("favoriteToggle", product);
    },
    deleteProductBy({ commit }, product) {
      commit("deleteProduct", product);
    },
    changeCountBy({ commit }, product) {
      commit("changeCount", product);
    },
  },
});
