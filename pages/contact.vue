<template>
  <div>
    <section class="my-5">
      <div class="container">
        <div class="w-full rounded-xl p-5">
          <div class="mb-7">
            <h1 class="text-xl">تماس با ما</h1>
          </div>
          <div>
            <ValidationObserver ref="form">
              <form @submit.prevent="sendHandler" class="row">
                <div class="w-full md:w-6/12">
                  <ValidationProvider
                    vid="title"
                    name="عنوان"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <vs-input
                      dark
                      state="dark"
                      block
                      primary
                      placeholder="موضوع"
                      v-model="form.title"
                    />
                    <div class="error-vd-message">{{ errors[0] }}</div>
                  </ValidationProvider>
                </div>
                <div class="w-full md:w-6/12">
                  <ValidationProvider
                    name="نام و نام خانوادگی"
                    vid="name"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <div class="content-inputs">
                      <vs-input
                        dark
                        state="dark"
                        block
                        primary
                        placeholder="نام و نام خانوادگی"
                        v-model="form.name"
                      />
                      <div class="error-vd-message">{{ errors[0] }}</div>
                    </div>
                  </ValidationProvider>
                </div>

                <div class="w-full md:w-6/12">
                  <ValidationProvider
                    vid="email"
                    name="ایمیل"
                    rules="required|email"
                    v-slot="{ errors }"
                  >
                    <div class="content-inputs">
                      <vs-input
                        dark
                        state="dark"
                        block
                        primary
                        placeholder="ایمیل"
                        v-model="form.email"
                      />
                      <div class="error-vd-message">{{ errors[0] }}</div>
                    </div>
                  </ValidationProvider>
                </div>

                <div class="w-full md:w-6/12">
                  <div class="content-inputs">
                    <vs-input
                      dark
                      state="dark"
                      block
                      primary
                      placeholder="شماره تماس"
                      class="bg-gray-100"
                      v-model="form.phone"
                    />
                  </div>
                </div>

                <div class="w-full">
                  <ValidationProvider
                    name="متن پیام"
                    vid="body"
                    rules="required"
                    v-slot="{ errors }"
                  >
                    <div class="content-inputs">
                      <textarea
                        v-model="form.body"
                        class="textarea-form bg-gray-200 h-44"
                        placeholder="متن پیام"
                      ></textarea>
                      <div class="error-vd-message">{{ errors[0] }}</div>
                    </div>
                  </ValidationProvider>
                </div>

                <div class="w-full">
                  <vs-button
                    color="rgb(59,222,200)"
                    gradient
                    @click="$refs.file.click()"
                  >
                    <input
                      type="file"
                      class="hidden"
                      ref="file"
                      @change="selectedFile"
                    />
                    آپلود فایل <i class="bx bx-file mr-2"></i>
                  </vs-button>

                  <template v-if="filename">
                    <div class="mt-3 text-sm text-gray-300 dir-rtl">
                      فایل انتخاب شده : {{ filename }}
                    </div>
                  </template>
                </div>

                <div class="my-7 w-full">
                  <vs-button
                    primary
                    size="large"
                    type="submit"
                    :loading="loading"
                  >
                    ثبت و ارسال
                  </vs-button>
                </div>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        title: "",
        body: "",
        file: "",
      },
      filename: "",
      loading: false,
      valid: false,
    };
  },

  methods: {
    selectedFile(event) {
      const file = event.target.files[0];
      const filename = event.target.files[0].name;
      this.form.file = file;
      this.filename = filename;
    },

    sendHandler() {
      this.$refs.form.validate().then(async (isValid) => {
        if (!isValid) {
          return;
        }

        try {
          let data = new FormData();
          data.append("title", this.form.title ?? "");
          data.append("name", this.form.name ?? "");
          data.append("email", this.form.email ?? "");
          data.append("phone", this.form.phone ?? "");
          data.append("body", this.form.body ?? "");
          if (this.form.file) {
            data.append("file", this.form.file);
          }

          this.loading = true;

          var response = await this.$dataApi.post(
            `/v1/application/contacts`,
            data
          );

          this.loading = false;

          if (!response?.data.success) {
          } else {
            this.$refs.form.reset();
            this.loading = false;
            this.form.title = "";
            this.form.name = "";
            this.form.email = "";
            this.form.phone = "";
            this.form.body = "";
            this.form.file = "";

            const noti = this.$vs.notification({
              duration: 5000,
              color: "success",
              position: "top-right",
              progress: "auto",
              icon: "<i class='bx bx-select-multiple' ></i>",
              title: "عملیات موفقیت آمیز",
              text: `تیکت شما با موفقیت ثبت شد و در صف بررسی توسط پشتیبانی می باشد`,
            });
          }
        } catch (e) {
          console.log("catchcatchcatchcatch");
          this.loading = false;
        }
        console.log("succcess");
      });
    },
  },

  mounted() {},
};
</script>
<style>
.shadow-md-ui {
  -webkit-box-shadow: 0px 0px 40px rgb(29 58 83 / 15%) !important;
  box-shadow: 0px 0px 40px rgb(29 58 83 / 15%) !important;
}

.vs-input-parent--state-dark .vs-input {
  background: rgba(229, 231, 235, 1) !important;
}
.vs-input {
  padding: 12px 13px !important;
}
</style>
