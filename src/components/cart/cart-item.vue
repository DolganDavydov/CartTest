<template>
  <div class="cartItem">
    <img
      class="cartItem__img"
      :src="require('@/assets/img/products/product-' + `${cartItem.img}`)"
      alt="alt"
    />

    <div class="cartItem__items">
      <h5 class="cartItem__title h-5">{{ cartItem.title }}</h5>
      <p class="cartItem__description">
        {{ cartItem.description }}
      </p>
      <p class="cartItem__article">Артикул: {{ cartItem.article }}</p>
    </div>

    <div class="cartItem__numeric">
      <v-button icon @click="$emit('decrement', cartItem)">-</v-button>
      <div class="btn__icon">{{ cartItem.count }}</div>
      <v-button icon @click="$emit('increment', cartItem)">+</v-button>
    </div>

    <p class="cartItem__price">{{ formatPrice(cartItem.totalSum) }} ₽</p>

    <v-button
      class="cartItem__close"
      icon
      @click="$emit('deleteCartItem', cartItem)"
    >
      <v-icon name="close" />
    </v-button>
  </div>
</template>

<script>
export default {
  name: "cartItem",

  props: {
    cartItem: {
      type: Object,
      default: {
        return: {},
      },
    },
  },

  methods: {
    formatPrice(price) {
      if (!price) return;
      return price.toLocaleString("ru-RU");
    },
    deleteItem() {
      this.$emit("deleteItem");
    },
  },
};
</script>

<style lang="scss" scoped>
.cartItem {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  height: 145px;
  background-color: $white;

  &__img {
    display: block;
    width: 100px;
    height: 100px;
  }

  &__title {
    margin-bottom: 6px;
  }

  &__description {
    margin-bottom: 7px;
  }

  &__numeric {
    font-weight: 400;
    font-size: 14px;
    color: $black;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    .btn__icon {
      width: 34px;
      height: 34px;
      background-color: $grey-light;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__article {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: $grey;
  }

  &__price {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 145%;
    color: $black;
  }

  &__close {
    position: absolute;
    top: 15px;
    right: 0;

    .v-icon {
      stroke: $black;
    }

    &:hover .v-icon {
      stroke: $red;
    }
  }
}
</style>
