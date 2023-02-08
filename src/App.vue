<template>
  <div id="app" class="cart">
    <div class="container">
      <cart-main />

      <catalog-slide :catalogItems="catalogItems" />
    </div>
  </div>
</template>

<script>
import catalogSlide from "@/components/cart/catalog-slide.vue";
import cartMain from "@/components/cart/cart-main.vue";

export default {
  name: "App",
  components: { catalogSlide, cartMain },
  data() {
    return {
      catalogItems: [
        {
          id: "1",
          img: "1",
          title: "BXC",
          description:
            "Вытяжное устройство для механической системы вентиляции",
          price: "6 848 ₽ – 56 584 ₽ ",
          currency: "77.60 € – 643.86 €",
        },
        {
          id: "2",
          img: "2",
          title: "G2H",
          description:
            "Многофункциональное вытяжное устройство для естественной и гибридной вентиляции",
          price: "6 848 ₽ – 56 584 ₽ ",
          currency: "77.60 € – 643.86 €",
        },
        {
          id: "3",
          img: "3",
          title: "GHN",
          description: "Вытяжное устройство с датчиком присутствия",
          price: "6 848 ₽ – 56 584 ₽ ",
          currency: "77.60 € – 643.86 €",
        },
        {
          id: "4",
          img: "4",
          title: "TDA",
          description: "Вытяжное устройство с датчиком присутствия",
          price: "6 848 ₽ – 56 584 ₽ ",
          currency: "77.60 € – 643.86 €",
        },
        {
          id: "5",
          img: "1",
          title: "TDA",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odit quas error repellendus quisquam earum eligendi alias obcaecati! Nihil repellat quia et ullam vitae incidunt eaque praesentium omnis vel quis.",
          price: "6 848 ₽ – 56 584 ₽ ",
          currency: "77.60 € – 643.86 €",
        },
        {
          id: "6",
          img: "2",
          title: "G2H",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odit quas error repellendus quisquam earum eligendi alias obcaecati! Nihil repellat quia et ullam vitae incidunt eaque praesentium omnis vel quis.",
          price: "6 848 ₽ – 56 584 ₽ ",
          currency: "77.60 € – 643.86 €",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#app {
  box-sizing: inherit;
}
</style>
