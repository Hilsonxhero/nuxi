<template>
  <div>
    <h1>profile page</h1>
    <h2>{{ $auth.user.email }}</h2>
    <base-button class="bg-red-200" @click.native="logoutUser"
      >logout</base-button
    >
  </div>
</template>
<script>
export default {
  middleware: "authenticated",
  methods: {
    async logoutUser() {
      await this.$auth.logout();
    },
  },
};
</script>
<style lang=""></style>
