<template>
  <div class="v-chexkbox">
    <input
      type="checkbox"
      :value="checked"
      @change="$emit('input', $event.target.checked)"
    />
  </div>
</template>

<script>
export default {
  name: "vCheckbox",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    checked() {
      return this.value;
    },
  },
};
</script>
