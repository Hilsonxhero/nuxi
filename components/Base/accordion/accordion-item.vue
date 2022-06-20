<template>
  <li class="accordion__item">
    <div
      class="accordion__trigger rounded-3xl"
      :class="{ accordion__trigger_active: visible }"
      @click="open"
    >
      <slot name="accordion-trigger"></slot>
    </div>

    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div class="accordion__content mt-3" v-show="visible">
        <ul>
          <slot name="accordion-content"></slot>
        </ul>
      </div>
    </transition>
    <!-- <div class="accordion__content mt-3" v-show="visible">
      <ul>
        <slot name="accordion-content"></slot>
      </ul>
    </div> -->
  </li>
</template>

<script>
export default {
  props: {},
  inject: ["Accordion"],
  data() {
    return {
      index: null,
    };
  },
  computed: {
    visible() {
      return this.index == this.Accordion.active;
    },
  },
  methods: {
    open() {
      if (this.visible) {
        this.Accordion.active = null;
      } else {
        this.Accordion.active = this.index;
      }
    },
    start(el) {
      el.style.height = el.scrollHeight + "px";
    },
    end(el) {
      el.style.height = "";
    },
  },
  created() {
    this.index = this.Accordion.count++;
  },
  mounted() {
    this.Accordion.active = 1;
  },
};
</script>

<style scoped>
.accordion__item {
  cursor: pointer;
  /* padding: 10px 20px 10px 40px; */
  /*margin: 1rem 0;*/
  margin-bottom: 1rem;
  border-bottom: 1px solid #ebebeb;
  position: relative;
}

.accordion__trigger {
  position: relative;
  /* display: -webkit-box;
  display: -ms-flexbox;
  display: flex; */
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  padding: 1rem 1.25rem;
  font-size: 0.9375rem;
  color: #212529;
  text-align: right;
  background-color: #fff;
  border: 0;
  border-radius: 0;
  overflow-anchor: none;

  /* -webkit-transition: color 0.15s ease-in-out,
    background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    border-radius 0.15s ease, -webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, border-radius 0.15s ease,
    -webkit-box-shadow 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    border-radius 0.15s ease;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    border-radius 0.15s ease, -webkit-box-shadow 0.15s ease-in-out; */

  background-color: rgba(116, 117, 121, 0.1) !important;
  color: #24292d !important;
}

.accordion-enter-active,
.accordion-leave-active {
  /* will-change: height, opacity;
  transition: height 0.2s ease-in-out; */
  transition: height 0.2s ease-out;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
.accordion__content .accordion .accordion__item {
  margin: 1rem 1rem;
}
</style>
