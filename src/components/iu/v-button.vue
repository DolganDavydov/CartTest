<template>
  <button @click="click" type="button" class="btn" :class="className">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "vButton",
  props: {
    block: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
    fab: {
      type: Boolean,
      default: false,
    },
    link: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    className() {
      return {
        btn__block: this.block,
        btn__outlined: this.outlined,
        btn__icon: this.icon,
        btn__dark: this.dark,
        btn__fab: this.fab,
        btn__link: this.link,
      };
    },
  },

  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  padding: 10px 16px;
  font-family: "Lato", sans-serif;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  background-color: $primary;
  color: $black;
  line-height: 145%;
  border: none;
  border-radius: 4px;
  transition: transform 0.1s, box-shadow 0.3s;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  &__block {
    display: block;
    width: 100%;
  }

  &__outlined {
    border: 1px solid $primary;
    background-color: $white;
    color: $primary;
  }

  &__icon {
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 400;
    background-color: initial;
  }

  &__dark {
    color: $white;
  }

  &__fab {
    min-width: 50px;
    min-height: 50px;
    border-radius: 50%;
    padding: 0;
    background-color: $grey-dark2;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  &__link {
    padding: 0;
    font-size: 14px;
    font-weight: 400;
    color: $grey;
    background-color: inherit;
    border-bottom: 1px solid;
  }
}
</style>
