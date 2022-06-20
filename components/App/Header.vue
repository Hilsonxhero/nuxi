<template>
  <div>
    <header
      class="py-5 fixed top-0 left-0 right-0 z-50 bg-transparent"
      @scroll="handleSCroll"
      ref="header"
      :class="{ scrollto: handleClass }"
    >
      <div class="container flex justify-between items-center">
        <div class="block lg:hidden" @click="handleNav">
          <svg
            class="w-6 h-6 ml-2 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
          </svg>
        </div>
        <div
          class="header__overlay lg:hidden"
          @click="handleNav"
          :class="{ active: showNav }"
        ></div>
        <div class="flex items-center space-x-4">
          <div class="text-sm space-x-3 flex items-center ml-4">
            <template v-if="this.$auth.loggedIn">
              <div class="flex items-center">
                <nuxt-link :to="{ name: 'panel-dashboard' }">
                  <vs-avatar color="rgb(59,222,200)">
                    <i class="bx bx-user"></i>
                  </vs-avatar>
                </nuxt-link>

                <vs-tooltip bottom shadow interactivity>
                  <vs-avatar dark class="mr-4 cursor-pointer">
                    <i class="bx bx-wallet"></i>
                  </vs-avatar>
                  <template #tooltip>
                    <div class="content-tooltip">
                      <div class="body p-5">
                        <div class="text">
                          موجودی شما
                          <span> {{ $auth.user.balance }} تومان </span>
                          <!-- <span> 22 تومان </span> -->
                        </div>
                      </div>
                      <footer class="flex justify-center">
                        <vs-button circle @click="active = !active">
                          افزایش موجودی
                        </vs-button>
                      </footer>
                    </div>
                  </template>
                </vs-tooltip>
              </div>
            </template>
            <template v-else>
              <nuxt-link :to="{ name: 'panel-dashboard' }">
                <svg
                  class="w-6 h-6 ml-2 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z"
                  ></path>
                  <path
                    d="M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z"
                  ></path>
                </svg>
              </nuxt-link>

              <router-link
                class="self-end hidden lg:block"
                :to="{ name: 'users-auth' }"
                >ثبت نام / ورود
              </router-link>
            </template>
          </div>
        </div>

        <nav class="header__nav" :class="{ active: showNav }">
          <div class="p-4 flex justify-center lg:hidden">
            <app-logo></app-logo>
          </div>
          <ul class="flex flex-row items-center gap-x-4 space-y-8 lg:space-y-0">
            <li>
              <router-link
                class="text-gray-500 font-semibold text-xl"
                :to="{ name: 'exams' }"
                >آزمون ها
              </router-link>
            </li>
            <li>
              <router-link
                class="text-gray-500 font-semibold text-xl"
                :to="{ name: 'courses' }"
                >دوره های آموزشی
              </router-link>
            </li>
            <li>
              <router-link
                class="text-gray-500 font-semibold text-xl"
                :to="{ name: 'about' }"
                >درباره ما
              </router-link>
            </li>
            <li>
              <router-link
                class="text-gray-500 font-semibold text-xl"
                :to="{ name: 'contact' }"
                >تماس با ما
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="mt-3 hidden lg:block">
          <app-logo></app-logo>
        </div>
      </div>
    </header>

    <vs-dialog not-close v-model="active">
      <template #header>
        <h4 class="not-margin"></h4>
      </template>

      <div class="con-form">
        <ValidationObserver ref="form">
          <form @submit.prevent="purchaseHandler">
            <div class="center">
              <ValidationProvider
                vid="price"
                name="مبلغ"
                rules="required|min_value:5000"
                v-slot="{ errors }"
              >
                <div class="content-inputs">
                  <vs-input
                    size="large"
                    block
                    :loading="false"
                    v-model="amount"
                    placeholder="مبلغ را وارد کنید"
                  />
                  <div class="error-vd-message">{{ errors[0] }}</div>
                </div>
              </ValidationProvider>

              <div class="footer-dialog mt-6">
                <vs-button
                  type="submit"
                  size="large"
                  :loading="loading"
                  border
                  block
                >
                  ادامه
                </vs-button>
              </div>
            </div>
          </form>
        </ValidationObserver>
      </div>

      <!-- <template #footer>
        <div class="footer-dialog mt-6">
          <vs-button
            size="large"
            :loading="loading"
            border
            block
            @click="purchaseHandler"
          >
            ادامه
          </vs-button>
        </div>
      </template> -->
    </vs-dialog>
  </div>
</template>
<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  name: "Header",

  data() {
    return {
      handleClass: false,
      showNav: false,
      active: false,
      active2: false,
      amount: "",
      loading: false,
    };
  },

  methods: {
    handleSCroll(event) {
      if (window.scrollY > 20) {
        this.handleClass = true;
      } else {
        this.handleClass = false;
      }
    },
    handleNav() {
      this.showNav = !this.showNav;
      document.body.classList.toggle("overflow-y-hidden");
    },

    purchaseHandler() {
      this.$refs.form.validate().then(async (isValid) => {
        if (!isValid) {
          return;
        }

        try {
          this.loading = true;

          const data = {
            amount: this.amount,
            callback: window.location.origin + "/checkout",
          };
          const response = await this.$dataApi.post(
            `/v1/application/user/payment/purchase/wallet`,
            data
          );

          const action = response?.data.action;

          window.location.replace(action);

          // await this.$dataApi.get(action);

          this.loading = false;
        } catch (e) {
          this.loading = false;
        }
      });
    },
  },

  mounted() {
    window.addEventListener("scroll", this.handleSCroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleSCroll);
  },
};
</script>
<style>
header {
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  z-index: 700;
}

.scrollto {
  background: #fff !important;
  -webkit-box-shadow: rgb(0 0 0 / 4%) 0 7px 8px 0;
  box-shadow: 0 7px 8px 0 rgb(0 0 0 / 4%);
}

@media (max-width: 991px) {
  .header__nav {
    display: block !important;
    position: fixed;
    right: -75%;
    top: 0;
    height: 100%;
    background: #fff;
    width: 70%;
    transition: 0.3s;
    z-index: 999;
  }

  .header__nav.active {
    right: 0;
  }

  .header__nav ul {
    flex-direction: column !important;
    align-items: unset !important;
  }

  .header__nav ul li {
    padding: 0.4rem 1rem;
  }

  .header__overlay {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.47058823529411764);
    display: none;
    z-index: 500;
  }

  .header__overlay.active {
    display: block;
  }

  .overflow-y-hidden {
    overflow-y: hidden;
  }
}
</style>
