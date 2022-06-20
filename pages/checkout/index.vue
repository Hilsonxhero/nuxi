<template>
  <div>
    <template v-if="success">
      <section class="pb-5">
        <div class="container text-center">
          <div class="mb-3 mx-auto text-primary flex justify-center">
            <i class="bx bx-check-circle text-3xl"></i>
          </div>
          <h4 class="mb-3 font-bold text-xl">کیف پول شما با موفقیت شارژ شد</h4>
          <p class="text-gray-500 mb-5">
            کیف پول شما به مقدار {{ payment.amount }} تومان شارژ شد
          </p>
          <p>
            <nuxt-link :to="{ name: 'panel-purchases' }">
              سفارش خود را مشاهده یا مدیریت کنید
            </nuxt-link>
          </p>
        </div>
      </section>
    </template>

    <template v-else>
      <section class="pb-5">
        <div class="container text-center">
          <div class="mb-3 mx-auto text-primary flex justify-center">
            <i class="bx bx-check-circle text-3xl"></i>
          </div>
          <h4 class="mb-3 font-bold text-xl">خطا هنگام پرداخت</h4>
          <p class="text-gray-500 mb-5">شارژ کیف پول با شکست مواجعه شد</p>
          <p>
            <nuxt-link :to="{ name: 'panel-purchases' }">
              سفارش خود را مشاهده یا مدیریت کنید
            </nuxt-link>
          </p>
        </div>
      </section>
    </template>
  </div>
</template>
<script>
export default {
  middleware: "authenticated",
  data() {
    return {
      payment: null,
      success: false,
    };
  },

  methods: {
    checkPayment() {
      const payment_param = this.$route.query.payment;
      const success_param = this.$route.query.payment;
      if (payment_param && success_param) {
        const data = {
          // user_id : this.$auth.user.id,
          payment: payment_param,
        };
        const response = this.$dataApi
          .post(`/v1/application/user/payment/purchase/check`, data)
          .then(({ data }) => {
            this.payment = data.data;
            this.success = data.success;
          })
          .catch(() => {
            console.log("catch error");
          });
      }
    },
  },

  mounted() {
    this.checkPayment();
  },
};
</script>
<style></style>
