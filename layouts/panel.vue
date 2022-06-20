<template>
  <div>
    <vs-navbar shadow square center-collapsed v-model="active" class="block md:hidden">
      <template #right>
        <vs-button @click="activeSidebar = !activeSidebar" flat icon>
          <i class="bx bx-menu"></i>
        </vs-button>
      </template>
    </vs-navbar>
    <vs-sidebar
      right
      absolute
      :reduce="reduce"
      :hover-expand="expand"
      v-model="active"
      :open="activeSidebar"
      :notLineActive="false"
    >
      <template #logo> ... </template>
      <template #header> </template>
      <vs-sidebar-item id="panel-dashboard" :to="{ name: 'panel-dashboard' }">
        <template #icon>
          <i class="bx bx-grid-alt"></i>
        </template>
        داشبورد
      </vs-sidebar-item>
      <vs-sidebar-item id="panel-courses" :to="{ name: 'panel-courses' }">
        <template #icon>
          <i class="bx bxs-videos"></i>
        </template>
        دوره ها
      </vs-sidebar-item>
      <vs-sidebar-item id="panel-exams" :to="{ name: 'panel-exams' }">
        <template #icon>
          <i class="bx bx-book-content"></i>
        </template>
        آزمون ها
      </vs-sidebar-item>
      <vs-sidebar-item id="panel-purchases" :to="{ name: 'panel-purchases' }">
        <template #icon>
          <i class="bx bx-credit-card"></i>
        </template>
        گزارش مالی
      </vs-sidebar-item>
      <vs-sidebar-item
        id="panel-personal-info"
        :to="{ name: 'panel-personal-info' }"
      >
        <template #icon>
          <i class="bx bxs-user"></i>
        </template>
        اطلاعات کاربری
      </vs-sidebar-item>
      <vs-sidebar-item id="panel-tickets" :to="{ name: 'panel-tickets' }">
        <template #icon>
          <i class="bx bx-message-square-dots"></i>
        </template>
        پشتیبانی
      </vs-sidebar-item>

      <template #footer>
        <vs-row justify="space-between">
          <vs-avatar @click="logoutUser">
            <i class="bx bx-log-in"></i>
          </vs-avatar>

          <!-- <vs-avatar badge-color="danger" badge-position="top-right">
            <i class="bx bx-bell"></i>

            <template #badge> 28 </template>
          </vs-avatar> -->
        </vs-row>
      </template>
    </vs-sidebar>
    <div class="wrapper main-wrapper flex flex-col flex-row-fluid">
      <div class="content mb-7 flex flex-col flex-column-fluid">
        <div class="post d-flex flex-column-fluid">
          <div class="container">
            <nuxt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  middleware: "authenticated",
  head: {
    link: [
      {
        href: "https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css",
        rel: "stylesheet",
        crossOrigin: "anonymous",
      },
    ],
  },
  data() {
    return {
      active: this.$route.name,
      activeSidebar: true,
      reduce: false,
      expand: false,
    };
  },
  computed: {
    // activeSidebar(){
    //   return true
    // }
  },
  methods: {
    async logoutUser() {
      await this.$auth.logout();
    },
    activeSideBarHandler(x) {
      this.activeSidebar = true
      // this.activeSidebar = true;
      if (!x.matches) {
        this.reduce = true;
        this.expand = true;
      } else {
        this.reduce = false;
        this.expand = false;
      }
    },
    reduceHadnler(x) {
      // this.activeSidebar = x.matches;
      if(x.matches){
        this.reduce = false
        this.expand = false
      }else{
        // this.reduce = true
        // this.expand = true
      }
    },
  },
  mounted() {
    const x = window.matchMedia("(min-width: 992px)");
    this.activeSideBarHandler(x);

    const g = window.matchMedia("(max-width: 526px)");
    this.reduceHadnler(x);

    window.addEventListener("resize", () => {
      const x = window.matchMedia("(min-width: 992px)");
      this.activeSideBarHandler(x);
    });

    window.addEventListener("resize", () => {
      const x = window.matchMedia("(max-width: 526px)");
      this.reduceHadnler(x);
    });
  },
};
</script>
<style>
.hidden-ui {
  /*overflow: hidden;*/
  /*position: relative;*/
  /*min-height: 600px;*/
}

@media (max-width: 526px) {
  .wrapper {
    transition: padding-right 0.3s ease !important;
    padding-top: 55px;
    padding-right: unset;
  }
}

@media (min-width: 526px) {
  .wrapper {
    transition: padding-right 0.3s ease !important;
    padding-top: 55px;
    padding-right: 55px;
  }
}

@media (min-width: 992px) {
  .wrapper {
    transition: padding-right 0.3s ease !important;
    padding-top: 120px;
    padding-right: 285px;
  }

  .menu-toggle {
    display: none !important;
  }
}

.flex-row-fluid {
  flex: 1 auto;
  min-width: 0;
}

.flex-column-fluid {
  flex: 1 0 auto;
}
</style>
