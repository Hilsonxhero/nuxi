<template>
  <button
    type="button"
    class="btn"
    @click="$emit('click', $event)"
    :class="[btnBlock, btnClass, btnRounded, btnSize]"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    variant: {
      type: String,
      required: false,
      default: "secondary",
    },

    block: {
      type: Boolean,
      required: false,
    },

    pill: {
      type: Boolean,
      required: false,
    },
    size: {
      type: String,
      required: false,
    },
  },

  computed: {
    btnClass() {
      return "btn-" + this.variant;
    },

    btnBlock: function () {
      if (this.block) {
        return "btn-block";
      }
    },

    btnRounded: function () {
      if (this.pill) {
        return "rounded-pill";
      }
    },

    btnSize: function () {
      if (this.size) {
        return "btn-" + this.size;
      }
    },
  },

  mounted() {},
};
</script>
<style>
.btn {
  @apply inline-block  text-center align-middle select-none bg-transparent border border-transparent py-1.5 px-3 text-base left-6 rounded transition-all;
}

.btn-text {
  color: #fff;
  background-color: transparent;
  border: unset;
  border-color: unset;
}

.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-secondary {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

.btn-teal {
  color: #fff;
  background-color: #00bda6;
  border-color: #00bda6;
}
.btn-success {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}

.btn-outline-primary {
  color: #007bff;
  border-color: #007bff;
}

.btn-outline-teal {
  color: #00bda6;
  border-color: #00bda6;
}

.btn-light {
  color: #fff;

  border-color: #fff;
}

.btn-block {
  @apply w-full block;
}

.rounded-pill {
  @apply rounded-full;
}

.btn-group-sm > .btn,
.btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
}

.btn-group-lg > .btn,
.btn-lg {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}

.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}
</style>
