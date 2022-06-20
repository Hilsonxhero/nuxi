<template>
  <div>
    <div
      class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div class="max-w-md w-full space-y-8 z-30">
        <div
          class="rounded bg-white max-w-md overflow-hidden shadow-xl py-5 px-10"
        >
          <div class="flex items-center justify-between mb-5">
            <template v-if="authorization">
              <h4 class="font-bold text-2xl">کد تایید را وارد کنید</h4>
            </template>
            <template v-else>
              <h4 class="font-bold text-2xl">وورد | ثبت نام</h4>
            </template>
          </div>
          <template v-if="authorization">
            <div class="mb-1 text-gray-500 text-md">
              کد تایید برای شماره {{ form.username }} پیامک شد
            </div>
          </template>

          <template v-else>
            <div class="mb-1 text-green-400 font-bold text-xl">سلام!</div>
          </template>

          <h4 class="font-semibold text-gray-600" v-if="!authorization">
            لطفا شماره موبایل را وارد کنید
          </h4>

          <form class="space-y-4" action="#" method="POST">
            <div class="rounded-md shadow-sm -space-y-px mt-7">
              <div class="grid gap-6">
                <div class="col-span-12">
                  <template v-if="!authorization">
                    <input
                      type="text"
                      id="first_name"
                      placeholder=""
                      autocomplete="given-email"
                      autofocus="true"
                      v-model="form.username"
                      class="mt-1 block text-center w-full shadow-sm sm:text-sm bg-gray-100 rounded-md py-3 px-2"
                    />
                  </template>
                  <template v-else>
                    <input
                      type="text"
                      placeholder=""
                      autofocus="true"
                      v-model="code"
                      class="mt-1 block text-center w-full shadow-sm sm:text-sm bg-gray-100 rounded-md py-3 px-2"
                    />
                  </template>
                </div>
              </div>
            </div>

            <div class="text-gray-600 text-sm my-6" v-if="!authorization">
              ورود شما به معنای پذیرششرایط دیجی‌کالاوقوانین حریم‌خصوصی است
            </div>

            <template v-if="!authorization">
              <div class="mt-8">
                <base-button
                  @click="authHandler"
                  class="bg-teal-500 text-white block w-full"
                  size="md"
                >
                  ورود
                </base-button>
              </div>
            </template>
            <template v-else>
              <div class="mt-8">
                <base-button
                  @click="loginHandler"
                  class="bg-teal-500 text-white block w-full"
                  size="md"
                >
                  تایید
                </base-button>
              </div>
            </template>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "auth",
  data() {
    return {
      form: {
        username: "",
        remember: true,
      },
      code: null,
      authorization: false,
    };
  },
  methods: {
    async authHandler() {
      try {
        const response = await this.$dataApi.post(
          `/v1/application/auth/otp`,
          this.form
        );
        const data = response.data;
        if (data.success) {
          this.authorization = true;
        }

        // this.$router.push({ name: "users-login" });
      } catch (e) {}
    },
    loginHandler() {
      this.$auth
        .loginWith("local", {
          data: {
            username: this.form.username,
            code: this.code,
            remember: true,
          },
        })
        .then(({ data }) => {
          console.log("response", data);

          this.$auth
            .setUserToken(data.access_token, data.refresh_token)
            .then(() => {
              console.log("user set");
            });
          // const response = this.$dataApi
          //   .post(`/v1/application/auth/otp`, this.form)
          //   .then(() => {

          //   });
        });
    },
  },
};
</script>
