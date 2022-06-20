<template>
  <div>
    <div class="bg-white rounded-xl p-7">

      <div class="mb-8">
        <h4>ایجاد تیکت جدید</h4>
      </div>


      <div class="row">
        <div class="w-full">
          <div class="content-inputs">
            <vs-input
              block
              class="vx-inp-rtl"
              label="عنوان"
              v-model="form.title"
            />
          </div>
        </div>
        <div class="w-full">
          <div class="content-inputs mt-3">
            <label class="label-ui">متن توضیحات</label>
            <!--            <vs-input-->
            <!--              block-->
            <!--              class="vx-inp-rtl"-->
            <!--              label="متن تیکت"-->
            <!--              v-model="form.body"-->
            <!--            />-->
            <textarea class="textarea-form h-44" v-model="form.body"></textarea>
          </div>
        </div>
        <div class="w-full">
          <vs-button
            color="rgb(59,222,200)"
            gradient
            @click="$refs.file.click()"
          >
            <input type="file" class="hidden" ref="file" @change="selectedFile">
            آپلود فایل <i class='bx bx-file mr-2'></i>
          </vs-button>

          <template v-if="filename">
            <div class="mt-3 text-sm text-gray-300 dir-rtl"> فایل انتخاب شده : {{ filename }}</div>
          </template>
        </div>
      </div>
    </div>

    <div class="my-7">
      <vs-button
        @click="create"
        :loading="loading"
        primary
        size="large"
      >
        ایجاد
      </vs-button>
    </div>

  </div>
</template>

<script>
export default {
  name: "courses",
  layout: "panel",
  data() {
    return {
      form: {
        title: null,
        body: null,
        attachment: null,
      },
      errors: {
        title: null,
        body: null,
        attachment: null,
      },
      file: null,
      filename: null,
      loading: false,
    }
  },
  methods: {


    selectedFile(event) {
      const file = event.target.files[0];
      const filename = event.target.files[0].name;
      this.form.attachment = file;
      this.filename = filename;
    },

    async create() {

      try {
        const data = new FormData();
        data.append('title', this.form.title)
        data.append('body', this.form.body)
        data.append('attachment', this.form.attachment)

        this.loading = true
        var response = await this.$dataApi.post(
          `/v1/application/user/tickets`,
          data
        );

        this.loading = false

        if (!response?.data.success) {

          // this.errors.cur_password = response?.data.cur_password[0]
          // this.errors.password = response?.data.password[0]
          // this.errors.password_confirmation = response?.data.password_confirmation[0]

        } else {
          this.loading = false

          this.$router.push({name: 'panel-tickets'})

          const noti = this.$vs.notification({
            duration: 5000,
            color: 'success',
            position: 'top-right',
            progress: 'auto',
            icon: '<i class=\'bx bx-select-multiple\' ></i>',
            title: 'عملیات موفقیت آمیز',
            text: `تیکت شما با موفقیت ثبت شد و در صف بررسی توسط پشتیبانی می باشد`
          })
        }


      } catch (e) {
        console.log("catchcatchcatchcatch")
        this.loading = false
      }


    },

  }
}
</script>

<style scoped>

</style>
