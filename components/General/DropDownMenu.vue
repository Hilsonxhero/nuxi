<template>
  <div class="relative" @mouseover="showMenu" @mouseleave="hideMenu">
  <slot name="title"></slot>

    <div class="absolute w-full">&nbsp;</div>

      <transition name="mega-menu-fade">
        <div v-show="isVisable">
              <slot name="content"></slot>
        </div>
      </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isVisable : false
    }
  },
  methods: {
    showMenu() {
      this.isVisable = true
    },

   hideMenu() {
      this.isVisable = false
    }


  },
};
</script>
</script>

<style scoped>
  .mega-menu-fade-enter-active, .mega-menu-fade-leave-active {
    transition: all 150ms linear 0s, box-shadow 0ms linear 0s;
  }
  .mega-menu-fade-enter, .mega-menu-fade-leave-to {
    opacity: 0;
    transform: translateY(-12px);
  }
</style>
