<template>
  <div>
    <main>
      <div
        class="absolute bg-gray-200 w-1/2 h-full flex justify-start rounded-r-3xl"
      ></div>
      <nuxt />
    </main>
  </div>
</template>
<script>
export default {
  middleware: "guest",
};
</script>
