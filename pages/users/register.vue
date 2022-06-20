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
            <h4 class="font-bold text-2xl">وورد | ثبت نام</h4>

          </div>
          <div class="mb-1 text-green-400 font-bold text-xl">سلام!</div>
          <h4 class="font-semibold text-gray-600">
            لطفا شماره موبایل را وارد کنید
          </h4>
          <form class="space-y-4" action="#" method="POST">
            <div class="rounded-md shadow-sm -space-y-px mt-7">
              <div class="grid gap-6">
                <div class="col-span-12">
                  <input
                    type="text"
                    id="first_name"
                    placeholder=""
                    autocomplete="given-email"
                    v-model="form.username"
                    class="mt-1 focus:ring-green-500 focus:border-green-500 block text-center w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>

            <div class="text-gray-600 text-sm">
              ورود شما به معنای پذیرششرایط دیجی‌کالاوقوانین حریم‌خصوصی است
            </div>

            <div>
              <base-button
                @click.native="register"
                class="bg-teal-500 text-white block w-full"
                size="md"
              >
                ثبت نام
              </base-button>
            </div>
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
        email: "",
        name: "",
        password: "",
      },
    };
  },
  methods: {
    register() {
      this.$axios
        .$post("/register", this.form)
        .then((data) => {
          this.$router.push({ name: "auth-login" });
        })
        .catch((errors) => {
          console.dir(errors);
        });
    },
  },
};
</script>
