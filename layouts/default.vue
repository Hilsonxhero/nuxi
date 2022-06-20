<template>
  <div class="mt-28">
    <app-header></app-header>
    <main>
      <nuxt />
    </main>
    <app-footer></app-footer>
  </div>
</template>
<script>
export default {
  head: {
    link: [
      {
        href: "https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css",
        rel: "stylesheet",
        crossOrigin: "anonymous"
      },
    ],
  },
  components: {},

};
</script>
<style scoped>
/*body{*/
/*  direction: rtl;*/
/*}*/
</style>
