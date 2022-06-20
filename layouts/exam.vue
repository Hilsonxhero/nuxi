<template>
  <div>
    <main>
      <nuxt />
    </main>
  </div>
</template>
<script>
export default {

  head () {
    return {
      bodyAttrs: {
        class: 'exam-body'
      }
    }
  }
  // middleware: "guest",
};
</script>
