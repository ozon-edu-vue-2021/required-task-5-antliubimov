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
  getters: {},
  mutations: {
    set_url(state, args) {
      let index = args.index;
      let imgURL = args.imgURL;
      let price = args.price;
      Vue.set(state.products[index], "src", imgURL);
      Vue.set(state.products[index], "price", price);
    },
    setProducts(state, payload) {
      state.products = payload;
    },
    addToCart(state, payload) {
      state.order.push(payload);
    },
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const responseProducts = await fetch(PRODUCTS_URL);
        commit("setProducts", await responseProducts.json());

        let arrProducts = this.state.products;
        arrProducts.forEach((element, index) => {
          commit("set_url", {
            index: index,
            imgURL: utils.fullPath(images),
            price: utils.randomNumber(utils.MIN_PRICE, utils.MAX_PRICE),
          });
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
