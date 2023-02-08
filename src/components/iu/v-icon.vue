<template>
  <svg class="v-icon" :width="size" :height="size" :color="color" :fill="color">
    <use
      :xlink:href="require('@/assets/img/svg/sprite.svg') + `#${name}`"
    ></use>
  </svg>
</template>

<script>
export default {
  name: "vIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
      default: "currentColor",
    },
  },
  computed: {
    size() {
      return "12px";
    },
  },
};
</script>
