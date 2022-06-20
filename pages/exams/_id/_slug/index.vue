<template>
  <div>
    <section class="section" v-if="exam">
      <div class="container">
        <div class="grid grid-cols-12 gap-6 mt-16">
          <div class="xl:col-span-8 md:col-span-8 col-span-12 mb-15 group">
            <div class="bg-white p-7 rounded-lg">
              <div class="overflow-hidden">
                <img
                  class="object-cover rounded-lg h-96"
                  :src="exam.banner_src"
                  alt=""
                />
              </div>
              <div class="my-7">
                <div>
                  <div
                    class="ml-6 flex items-center space-x-2 space-x-reverse sm:mb-0 mb-5"
                  >
                    <a
                      v-for="(tag, index) in exam.tags"
                      :key="index"
                      href=""
                      class="flex items-center rounded-lg text-blue-700 hover:text-white hover:bg-blue-700 transition duration-200 font-semibold px-5 py-2 bg-blue-50"
                    >
                      {{ tag.title }}
                    </a>
                  </div>
                </div>

                <h3 class="text-2xl font-bold my-4 text-gray-700">
                  {{ exam.name }}
                </h3>
                <!-- <p class="text-gray-500 leading-loose text-justify">

                </p> -->

                <div v-html="exam.description"></div>
              </div>
            </div>
          </div>

          <div class="xl:col-span-4 md:col-span-4 col-span-12 mb-15 group">
            <div class="bg-white rounded-3xl p-7 mb-6">
              <div class="text-2xl font-bold mb-4">{{ exam.price }} تومان</div>
              <div>
                <template v-if="exists_student">
                  <!-- <nuxt-link
                    :to="{
                      name: 'kind-id-school',
                      params: { kind: 'school', id: exam.id },
                    }"

                  >
                    <vs-button size="large" border block ref="button">
                      شرکت در آزمون
                    </vs-button>
                  </nuxt-link> -->

                  <vs-button
                    size="large"
                    border
                    block
                    ref="button"
                    @click="startExam"
                  >
                    شرکت در آزمون
                  </vs-button>
                </template>
                <template v-else>
                  <vs-button
                    size="large"
                    border
                    block
                    ref="button"
                    @click="confirmation = true"
                  >
                    خرید آزمون
                  </vs-button>
                </template>
              </div>
              <div class="mt-6">
                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="text-blue-800 w-6 h-6"
                        fill="currentColor"
                      >
                        <path
                          d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
                        ></path>
                        <path
                          d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"
                        ></path>
                      </svg>
                    </span>
                    <span class="text-gray-700 mr-2">مدت زمان </span>
                  </div>
                  <div>{{ time }} دقیقه</div>
                </div>

                <div class="flex items-center justify-between mb-3">
                  <div class="flex items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="text-blue-800 w-6 h-6"
                        fill="currentColor"
                      >
                        <path
                          d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
                        ></path>
                        <path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path>
                      </svg>
                    </span>
                    <span class="text-gray-700 mr-2">نوع آزمون</span>
                  </div>
                  <div>{{ exam.type_name }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- purchase confirmation -->

      <vs-dialog width="550px" not-center v-model="show_exam_information">
        <template #header>
          <h4 class="not-margin">
            آیا از شرکت مجدد در این آزمون اطمینان دارید ؟
          </h4>
        </template>

        <div class="con-content">
          <p>پاسخ های قبلی شما در این آزمون حذف خواهد شد !</p>
        </div>

        <template #footer>
          <div class="con-footer flex items-center">
            <vs-button
              ref="button"
              @click="
                $router.push({
                  name: 'kind-id-school',
                  params: { kind: 'school', id: exam.id },
                })
              "
              transparent
            >
              تایید
            </vs-button>
            <vs-button @click="show_exam_information = false" dark transparent>
              لغو
            </vs-button>
          </div>
        </template>
      </vs-dialog>
      <vs-dialog width="550px" not-center v-model="confirmation">
        <template #header>
          <h4 class="not-margin">آیا از خرید این آزمون اطمینان دارید ؟</h4>
        </template>

        <div class="con-content">
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و
          </p>
        </div>

        <template #footer>
          <div class="con-footer flex items-center">
            <vs-button ref="button" @click="purchaseExamHandler" transparent>
              تایید
            </vs-button>
            <vs-button @click="confirmation = false" dark transparent>
              لغو
            </vs-button>
          </div>
        </template>
      </vs-dialog>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      confirmation: false,
      exists_student: false,
      show_exam_information: false,
    };
  },

  methods: {
    async purchaseExamHandler() {
      const data = {
        exam_id: this.exam.id,
        amount: this.exam.price,
        callback: window.location.origin + window.location.pathname,
      };

      try {
        var loading = this.$vs.loading({
          target: this.$refs.button,
          scale: "0.6",
          background: "primary",
          opacity: 1,
          color: "#fff",
        });

        const response = await this.$dataApi.post(
          `/v1/application/exam/user/payment/purchase`,
          data
        );

        loading.close();
        this.confirmation = false;
        console.log("loading 2", loading);
        if (response.data.inventory) {
          this.checkStudent();
        } else {
          window.location.replace(response.data.data);
        }
      } catch (e) {
        console.log("loading 3", this.loading);
        loading.close();
        this.confirmation = false;
        console.log(e);
      }
    },

    startExam() {
      if (this.$auth.loggedIn) {
        var loading = this.$vs.loading({
          background: "#fff",
        });

        const data = {
          user_id: this.$auth.user.id,
          exam_id: this.exam.id,
        };

        const response = this.$dataApi
          .post(`/v1/application/exam/user/exams/exists/student`, data)
          .then(({ data }) => {
            if (data.success === true) {
              this.show_exam_information = true;
              loading.close();
            } else {
              loading.close();
              this.$router.push({
                name: "kind-id-school",
                params: { kind: "school", id: this.exam.id },
              });
            }
          })
          .catch(() => {
            console.log("catch error");
          });
      }
    },

    checkStudent() {
      if (this.$auth.loggedIn) {
        var loading = this.$vs.loading({
          background: "#fff",
        });

        const data = {
          user_id: this.$auth.user.id,
          exam_id: this.exam.id,
        };

        const response = this.$dataApi
          .post(`/v1/application/exam/user/exists/student`, data)
          .then(({ data }) => {
            if (data.success === true) {
              this.exists_student = true;
            }
            loading.close();
          })
          .catch(() => {
            console.log("catch error");
          });
      }
    },
  },

  mounted() {
    this.checkStudent();
  },

  async asyncData({ $dataApi, $axios, params }) {
    const response = await $dataApi.get(`/v1/application/exam/${params.id}`);
    const exam = response.data;
    const time = response.time;
    return {
      exam,
      time,
    };
  },
};
</script>
<style></style>
