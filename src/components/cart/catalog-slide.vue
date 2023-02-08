<template>
  <section class="slide-catalog">
    <div class="slide-catalog__header">
      <h2 class="h-2">Просмотренные товары</h2>

      <div class="slide-catalog__buttons">
        <v-button class="slide-catalog__prev" fab @click="swiperPrev">
          <i class="arrow-left"></i>
        </v-button>

        <div
          class="slide-catalog__pagination swiper-pagination"
          slot="pagination"
        ></div>

        <v-button class="slide-catalog__next" fab @click="swiperNext">
          <i class="arrow-right"></i>
        </v-button>
      </div>
    </div>

    <swiper ref="swiperAwesome" class="swiper" :options="swiperOption">
      <template v-if="catalogItems.length">
        <swiper-slide v-for="catalogItem in catalogItems" :key="catalogItem.id">
          <catalog-item :catalogItem="catalogItem" />
        </swiper-slide>
      </template>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import catalogItem from "@/components/cart/catalog-item.vue";
export default {
  name: "SlideCatalog",
  components: { Swiper, SwiperSlide, catalogItem },
  props: {
    catalogItems: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      swiperOption: {
        specbetween: 20,
        slidesPerView: "auto",
        freeMode: true,
        watchOverflow: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        breakpoints: {},
      },
    };
  },

  methods: {
    swiperPrev() {
      this.$refs.swiperAwesome.$swiper.slidePrev();
    },
    swiperNext() {
      this.$refs.swiperAwesome.$swiper.slideNext();
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 0;
}

::v-deep .swiper-pagination-current {
  font-size: 24px;
  font-weight: 500;
}
.swiper-slide {
  width: 305px;
  margin-right: 20px;
}
.slide-catalog {
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
  }

  &__buttons {
    display: flex;
    align-items: center;
    gap: 20px;
    i {
      border: solid $white;
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 6px;
    }
    .arrow-left {
      transform: rotate(135deg);
      -webkit-transform: rotate(135deg);
    }
    .arrow-right {
      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
    }
  }

  &__pagination {
    position: relative;
  }
}
</style>
