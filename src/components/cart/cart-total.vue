<template>
  <article class="cart-total">
    <h3 class="cart-total__title h-3">Итого</h3>

    <div class="cart-total__wrapper">
      <div class="cart-total__items">
        <p class="cart-total__item">Сумма заказа</p>
        <p class="cart-total__total">{{ formatPrice(CART_TOTAL_PRICE) }} ₽</p>
      </div>

      <div class="cart-total__items">
        <p class="cart-total__item">Количество</p>
        <p class="cart-total__total">{{ CART_TOTAL_QUANTITY }} шт</p>
      </div>

      <div class="cart-total__items">
        <p class="cart-total__item">Установка</p>
        <p class="cart-total__total">
          {{ isSetting ? "Да" : "Нет" }}
        </p>
      </div>
    </div>

    <div class="cart-total__price">
      <v-divider />
      <div class="cart-total__items">
        <p class="cart-total__item">Стоимость товаров</p>
        <p class="cart-total__total cart-total__total--price">
          {{ formatPrice(CART_TOTAL_PRICE) }} ₽
        </p>
      </div>
    </div>

    <div class="cart-total__buttons">
      <v-button block dark @click="sendOrder">Оформить заказ</v-button>
      <v-button block outlined>Купить в 1 клик</v-button>
    </div>
  </article>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "CartTotal",
  computed: {
    ...mapState(["cartItems", "isSetting"]),
    ...mapGetters(["CART_TOTAL_PRICE", "CART_TOTAL_QUANTITY"]),
  },
  methods: {
    formatPrice(price) {
      if (!price) return;
      return price.toLocaleString("ru-RU");
    },
    sendOrder() {
      let data = {
        order: this.cartItems,
        install: this.isSetting,
      };
      console.log(data);
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-total {
  padding: 35px 30px;
  background-color: $grey-light;
  border-radius: 5px;
  height: 458px;
  display: grid;
  row-gap: 30px;

  &__wrapper {
    display: grid;
    row-gap: 18px;
  }

  &__items,
  &__price {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    column-gap: 40px;
    color: $black;
  }

  &__price,
  &__buttons {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 12px;
    margin-top: auto;
  }

  &__item {
    font-weight: 500;
    font-size: 16px;
    line-height: 145%;
  }

  &__total {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 16px;
    line-height: 145%;

    &--price {
      font-weight: 700;
      font-size: 26px;
      line-height: 130%;
      letter-spacing: 0.005em;
    }
  }
}
</style>
