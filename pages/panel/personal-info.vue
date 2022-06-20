<template>
  <div>
    <div class="bg-white rounded-xl p-7">

      <div class="mb-8">
        <h4>اطلاعات کاربری</h4>
      </div>


      <div class="row">
        <div class="w-full md:w-6/12 lg:w-4/12">
          <div class="content-inputs">
            <vs-input
              block
              class="vx-inp-rtl"
              label="نام کاربری"
              v-model="user.name"
            />
          </div>
        </div>
        <div class="w-full md:w-6/12 lg:w-4/12">
          <div class="content-inputs">
            <vs-input
              block
              class="vx-inp-rtl"
              label="ایمیل"
              v-model="user.email"
            />
          </div>
        </div>
        <div class="w-full md:w-6/12 lg:w-4/12">
          <div class="content-inputs">
            <vs-input
              block
              class="vx-inp-rtl"
              label="شماره تلفن"
              v-model="user.phone"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="my-7">
      <vs-button
        @click="updatePersonalInfo"
        :loading="personal_loading"
        primary
        size="large"
      >
        ثبت تغییرات
      </vs-button>
    </div>

    <div class="bg-white rounded-xl p-7 mt-12">

      <div class="mb-8">
        <h4>تغییر رمز عبور</h4>
      </div>
      <div class="row">
        <div class="w-full md:w-6/12 lg:w-4/12">
          <div class="content-inputs">
            <vs-input

              type="password"
              block
              class="vx-inp-rtl"
              label="رمز عبور فعلی"
              v-model="cur_password"
            >
              <template #message-danger v-if="errors.cur_password">
                {{ errors.cur_password }}
              </template>
            </vs-input>
          </div>
        </div>
        <div class="w-full md:w-6/12 lg:w-4/12">
          <div class="content-inputs">
            <vs-input
              type="password"
              block
              class="vx-inp-rtl"
              label="رمز عبور جدید"
              v-model="password"
            >

              <template #message-danger v-if="errors.password">
                {{ errors.password }}
              </template>
            </vs-input>
          </div>
        </div>
        <div class="w-full md:w-6/12 lg:w-4/12">
          <div class="content-inputs">
            <vs-input
              type="password"
              block
              class="vx-inp-rtl"
              label="تکرار رمز عبور جدید"
              v-model="password_confirmation"
            >

              <template #message-danger v-if="errors.password_confirmation">
                {{ errors.password_confirmation }}
              </template>
            </vs-input>
          </div>
        </div>
      </div>
    </div>

    <div class="my-7">

      <vs-button
        @click="updatePassword"
        :loading="password_loading"
        primary
        size="large"
      >
        ثبت تغییرات
      </vs-button>
    </div>

    <!--    <div class="bg-white rounded-xl p-7 mt-12">-->
    <!--      <div class="mb-4">-->
    <!--        <h4>نحوه اطلاع رسانی</h4>-->
    <!--      </div>-->
    <!--      <div class="flex">-->
    <!--        <vs-radio v-model="notification" val="sms">-->
    <!--          پیام-->
    <!--        </vs-radio>-->
    <!--        <vs-radio success v-model="notification" val="email">-->
    <!--          ایمیل-->
    <!--        </vs-radio>-->
    <!--      </div>-->
    <!--    </div>-->


  </div>
</template>

<script>
export default {
  name: "courses",
  layout: "panel",
  data() {
    return {
      user: {
        name: this.$auth.user.name,
        email: this.$auth.user.email,
        phone: this.$auth.user.phone,
      },
      errors: {
        cur_password: null,
        password: null,
        password_confirmation: null,
      },
      cur_password: null,
      password: null,
      password_confirmation: null,
      notification: "email",
      personal_loading: false,
      password_loading: false
    }
  },
  methods: {
    async updatePersonalInfo() {

      const data = {
        'name': this.user.name,
        'email': this.user.email,
        'phone': this.user.phone,
      }

      try {
        this.personal_loading = true
        const response = await this.$dataApi.post(
          `/v1/application/user/personal-info/update`,
          data
        );

        console.log("www", response)

        this.personal_loading = false

        const noti = this.$vs.notification({
          duration: 5000,
          color: 'success',
          position: 'top-right',
          progress: 'auto',
          icon: '<i class=\'bx bx-select-multiple\' ></i>',
          title: 'عملیات موفقیت آمیز',
          text: `ویرایش اطلاعات کاربری با موفقیت انجام شد`
        })

        console.log("response", response?.data)
      } catch (e) {
        this.personal_loading = false
      }


    },
    async updatePassword() {


      try {

        const data = {
          'cur_password': this.cur_password,
          'password': this.password,
          'password_confirmation': this.password_confirmation,
          'email': this.user.email,
        }

        this.password_loading = true
        var response = await this.$dataApi.post(
          `/v1/application/user/personal-info/password/update`,
          data
        );

        this.password_loading = false

        if (!response?.data.success) {

          // this.errors.cur_password = response?.data.cur_password[0]
          // this.errors.password = response?.data.password[0]
          // this.errors.password_confirmation = response?.data.password_confirmation[0]

        } else {
          this.password_loading = false
          this.cur_password = null
          this.password = null
          this.password_confirmation = null
          this.errors = null
          const noti = this.$vs.notification({
            duration: 5000,
            color: 'success',
            position: 'top-right',
            progress: 'auto',
            icon: '<i class=\'bx bx-select-multiple\' ></i>',
            title: 'عملیات موفقیت آمیز',
            text: `ویرایش  رمز عبور با موفقیت انجام شد`
          })
        }


      } catch (e) {
        console.log("catchcatchcatchcatch")
        this.errors.cur_password = response?.data.cur_password[0]
        this.errors.password = response?.data.password[0]
        this.errors.password_confirmation = response?.data.password_confirmation[0]

        this.password_loading = false
      }


    },

  }
}
</script>

<style scoped>

</style>
