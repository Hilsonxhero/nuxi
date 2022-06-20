<template>
  <input
    :type="type"
    class="base-input"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: "text",
    },
    value: {
      type: String,
      required: false,
    },
  },
};
</script>
<style>
.base-input {
  @apply block w-full h-12 py-2 px-3 text-base  leading-6 text-gray-800 bg-white bg-clip-padding border border-gray-400 rounded transition-all;
}
</style>
