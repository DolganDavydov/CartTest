import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartItems: [],
    isSetting: false,
  },

  getters: {
    CART_TOTAL_QUANTITY(state) {
      return state.cartItems.reduce((acc, curr) => acc + curr.count, 0);
    },
    CART_TOTAL_PRICE(state) {
      return state.cartItems.reduce((acc, curr) => acc + curr.totalSum, 0);
    },
  },

  mutations: {
    UPDATE_IS_SETTING(state, value) {
      state.isSetting = value;
    },
    SET_CARTITEMS: (state, cartItems) => {
      state.cartItems = cartItems;
    },
    DELETE_CART_ITEM: (state, cartItem) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== cartItem.id
      );
    },
    REMOVE_CART_ITEMS(state) {
      state.cartItems = [];
    },
    INCREMENT: (state, cartItem) => {
      const foundItem = state.cartItems.find((item) => item.id === cartItem.id);

      if (foundItem) {
        if (foundItem.count < 100) {
          foundItem.count += 1;
          foundItem.totalSum = foundItem.count * foundItem.price;
        }
      }
    },
    DECREMENT: (state, cartItem) => {
      const foundItem = state.cartItems.find((item) => item.id === cartItem.id);

      if (foundItem) {
        if (foundItem.count > 1) {
          foundItem.count -= 1;
          foundItem.totalSum = foundItem.count * foundItem.price;
        }
      }
    },
  },

  actions: {
    GET_CARTITEMS({ commit }) {
      axios
        .get("http://localhost:3000/cartItems")
        .then((res) => {
          commit(
            "SET_CARTITEMS",
            res.data.map((el) => {
              return {
                ...el,
                totalSum: el.price,
              };
            })
          );
        })
        .catch((error) => console.log(error));
    },
  },
});
