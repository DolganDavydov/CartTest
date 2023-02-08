<template>
  <section class="cart">
    <div id="cart" v-if="cartItems.length" class="cart__notification">
      <v-icon name="cart" width="32px" height="32px" fill="#0069B4" />

      <div>
        <P>Ваша корзина</P>
        <P class="cart__notification__quantity">
          {{ CART_TOTAL_QUANTITY }} товара</P
        >
        <P class="cart__notification__price"
          >{{ formatPrice(CART_TOTAL_PRICE) }} ₽</P
        >
      </div>
    </div>

    <div class="cart__header header">
      <div class="cart__left">
        <h1 class="cart__title h-1">Ваша корзина</h1>

        <span v-if="cartItems.length" class="cart__totalProducts">
          {{ CART_TOTAL_QUANTITY }} товара
        </span>
        <span v-else class="cart__totalProducts">пуста</span>
      </div>

      <v-button
        v-if="cartItems.length"
        class="cart__remove"
        link
        @click="REMOVE_CART_ITEMS"
      >
        Очистить корзину
      </v-button>
    </div>

    <div v-if="cartItems.length" class="section">
      <TransitionGroup name="list">
        <div v-for="cartItem in cartItems" :key="cartItem.id">
          <cart-item
            :cartItem="cartItem"
            @increment="increment"
            @decrement="decrement"
            @deleteCartItem="deleteCartItem"
          />
          <v-divider />
        </div>
      </TransitionGroup>

      <div class="cart__options">
        <v-checkbox v-model="install" />

        <v-icon name="setting" width="50px" height="50px" fill="#0069B4" />

        <div>
          <h5 class="cart__optionsTitle h-5">Установка</h5>

          <p>
            Отметьте, если Вам необходима консультация профессионала по монтажу
            выбранных товаров.
          </p>
        </div>
      </div>
    </div>

    <cart-total v-if="cartItems.length" class="total" />
  </section>
</template>

<script>
import cartItem from "@/components/cart/cart-item.vue";
import cartTotal from "@/components/cart/cart-total.vue";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  name: "cartMain",

  components: { cartItem, cartTotal },

  data() {
    return {
      install: false,
    };
  },

  computed: {
    ...mapState(["cartItems"]),
    ...mapGetters(["CART_TOTAL_QUANTITY", "CART_TOTAL_PRICE"]),
  },

  mounted() {
    this.GET_CARTITEMS();
  },

  watch: {
    install(newValue) {
      this.UPDATE_IS_SETTING(newValue);
    },
  },

  methods: {
    ...mapActions(["GET_CARTITEMS"]),
    ...mapMutations([
      "UPDATE_IS_SETTING",
      "DECREMENT",
      "INCREMENT",
      "REMOVE_CART_ITEMS",
      "DELETE_CART_ITEM",
    ]),
    increment(cartItem) {
      this.INCREMENT(cartItem);
    },
    decrement(cartItem) {
      this.DECREMENT(cartItem);
    },
    deleteCartItem(cartItem) {
      this.DELETE_CART_ITEM(cartItem);
    },
    formatPrice(price) {
      if (!price) return;
      return price.toLocaleString("ru-RU");
    },
    saveCart(cartItems) {
      this.SAVE_CART(cartItems);
    },
    isSetting(value) {
      this.UPDATE_IS_SETTING(value);
    },
  },
};
</script>

<style lang="scss" scoped>
.cart {
  padding-top: 150px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 55px;
  margin-bottom: 96px;
  grid-template-areas:
    "header header ..."
    "section section total";
  .header {
    grid-area: header;
  }
  .section {
    grid-area: section;
  }
  .total {
    grid-area: total;
  }

  &__notification {
    position: absolute;
    color: $black;
    top: 80px;
    right: 80px;
    display: flex;
    align-items: center;
    column-gap: 12px;
    &__quantity,
    &__price {
      font-size: 12px;
      line-height: 145%;
    }
    &__quantity {
      color: $grey-light1;
    }
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 25px;
  }

  &__left {
    display: flex;
    align-items: baseline;
    gap: 22px;
  }

  &__totalProducts {
    font-size: 18px;
    line-height: 145%;
    color: $grey;
  }

  &__remove:hover {
    color: $red;
  }

  &__options {
    padding: 28px 25px;
    background-color: $grey-light;
    border-radius: 5px;
    display: flex;
    align-items: center;
    column-gap: 20px;
    margin-top: 25px;
    font-size: 14px;
    color: $grey;
  }

  &__optionsTitle {
    margin-bottom: 2px;
  }
}
</style>
