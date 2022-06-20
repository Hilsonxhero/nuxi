<template>
  <div>
    <div class="tabs">
      <ul class="flex items-center nav-pills nav-pills-bg-soft">
        <li
          v-for="tab in tabs"
          class="nav-link ml-3"
          :class="{ active: tab.isActive }"
          @click="selectTab(tab)"
        >
          {{ tab.name }}
        </li>
      </ul>
    </div>

    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    // tabs: {
    //   type: Array,
    //   required: true,
    // },
    // selected: {
    //   type: String,
    //   required: true,
    // },
  },

  data() {
    return { tabs: [] };
  },

  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name == selectedTab.name;
      });
    },
  },
  created() {
    this.tabs = this.$children;
  },
  mounted() {
    this.selected = this.tabs[0];
  },
};
</script>
<style>
.nav-pills-bg-soft {
  background-color: rgba(6, 106, 201, 0.1);
  padding: 0.625rem;
  border-radius: 0.625rem;
}

.nav-pills-bg-soft .nav-link {
  color: #066ac9;
}
.nav-pills .nav-link {
  cursor: pointer;
  /* margin-bottom: 15px; */
  padding: 0.5rem 1rem;
}
.nav-pills .nav-link {
  background: none;
  border: 0;
  border-radius: 0.325rem;
}

.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fff;
  background-color: #066ac9;
}

.nav-link {
  display: block;
  padding: 0.25rem 0.75rem;
  color: #747579;
  -webkit-transition: color 0.15s ease-in-out,
    background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
}
</style>
