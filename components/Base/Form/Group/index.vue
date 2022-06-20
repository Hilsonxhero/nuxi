<template>
  <div class="input-group">
    <label class="input-group__lable" v-text="label"></label>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: false,
    },
  },
};
</script>
<style scoped>
.input-group {
  @apply mb-4;
}
.input-group__lable {
  @apply mb-2 block text-gray-700;
}
</style>
