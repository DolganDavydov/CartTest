<template>
  <div class="catalog-item">
    <img
      class="catalog-item__img"
      :src="
        require('@/assets/img/products/product-' + `${catalogItem.img}.png`)
      "
      alt=""
    />

    <h4 class="catalog-item__title h-4">{{ catalogItem.title }}</h4>

    <p class="catalog-item__description">
      {{ catalogItem.description }}
    </p>

    <div class="catalog-item__footer">
      <p class="catalog-item__price">{{ catalogItem.price }}</p>

      <p class="catalog-item__price-uero">{{ catalogItem.currency }}</p>

      <v-button block dark>Подробнее</v-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogItem",
  props: {
    catalogItem: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.catalog-item {
  padding: 25px;
  width: 305px;
  height: 584px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background-color: $grey-light;

  &__img {
    display: block;
    width: 245px;
    height: 245px;
    object-fit: cover;
    object-position: center;
    margin-bottom: 5px;
  }

  &__title {
    margin-bottom: 10px;
  }

  &__description {
    font-weight: 400;
    font-size: 14px;
    line-height: 145%;
    color: $black;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__footer {
    margin-top: auto;
  }

  &__price {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    letter-spacing: 0.005em;
    color: $black;
    margin-bottom: 3px;
  }

  &__price-uero {
    font-size: 16px;
    line-height: 145%;
    margin-bottom: 20px;
    color: $grey;
  }
}
</style>
