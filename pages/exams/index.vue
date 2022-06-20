<template>
  <div class="container">


    <div class="md:grid lg:grid-cols-12 gap-3 mb-20">
      <div class="xl:col-span-8 lg:col-span-8">
        <div class="">
          <div class="row space-y-6">
            <div class="w-full" v-for="(exam, index) in exams" :key="index">
              <div class="bg-white rounded-lg overflow-hidden p-7">
                <div class="row g-0">
                  <div class="md:w-5/12 overflow-hidden relative">
                    <img
                      :src="exam.banner_src"
                      class="rounded-lg h-52 object-cover"
                      alt="Card image"
                    />
                    <div class="card-img-overlay">
                      <!--                      <div class="ribbon"><span>Free</span></div>-->
                    </div>
                  </div>
                  <div class="w-7/12">
                    <div class="card-body">
                      <!-- Badge and rating -->
                      <div class="flex items-center mb-2" v-if="exam.tags">
                        <div v-for="(tag, index) in exam.tags" :key="index">
                          <vs-button size="small">
                            {{ tag.title }}
                          </vs-button>
                        </div>
                      </div>

                      <h5 class="text-xl font-bold">
                        <a href="#">
                          {{ exam.name }}
                        </a>
                      </h5>

                      <p class="text-truncate-2 d-none d-lg-block">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                        بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                        برای شرایط
                      </p>

                      <!--                      <ul class="flex">-->
                      <!--                        <li class="ml-3 mb-1 mb-sm-0">-->
                      <!--                          <i class="far fa-clock text-danger me-2"></i>-->
                      <!--                          21h 56m-->
                      <!--                        </li>-->
                      <!--                        <li class="ml-3 mb-1 mb-sm-0"><i class="fas fa-table text-orange me-2"></i>-->
                      <!--                          52 درس-->
                      <!--                        </li>-->
                      <!--                        <li class="ml-3"><i class="fas fa-signal text-success me-2"></i>-->
                      <!--                          متوسط-->
                      <!--                        </li>-->
                      <!--                      </ul>-->

                      <div class="sm:flex sm:justify-between items-center">
                        <div></div>

                        <!--                        <div class="flex items-center">-->
                        <!--                          <div class="avatar">-->
                        <!--                            <img class="avatar-img rounded-circle" src="https://eduport.webestica.com/assets/images/avatar/06.jpg" alt="avatar">-->
                        <!--                          </div>-->
                        <!--                          <p class="mb-0 ms-2"><a href="#" class="h6 fw-light">Jacqueline Miller</a></p>-->
                        <!--                        </div>-->

                        <div class="mt-10">
                          <!-- <nuxt-link
                            class="py-2 px-4 border border-gray-500 text-black rounded-xl"
                            :to="{
                              name: 'kind-id-school',
                              params: { id: exam.id, kind: 'school' },
                            }"
                          >
                            مشاهده بیشتر
                          </nuxt-link> -->

                          <nuxt-link
                            :to="{
                              name: 'exams-id-slug',
                              params: { id: exam.id, slug: exam.slug },
                            }"
                            class="py-2 px-4 border border-gray-500 text-black rounded-xl"
                            >
                            مشاهده بیشتر
                            </nuxt-link
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="center bg-white rounded-lg p-7 my-8">
            <vs-pagination class="dir-ltr" v-model="page" :length="last_page" />
          </div>
        </div>
      </div>
      <div class="xl:col-span-4 lg:col-span-4 lg:order-last order-first">
        <div class="bg-white rounded-lg p-7">
          <div class="flex flex-wrap items-center">
            <div class="ml-2">
              <vs-button

                border
              >
                رایگان
              </vs-button>


            </div>

            <div class="ml-2">
              <vs-button
                class="ml-6"

                border
              >
                نقدی
              </vs-button>
            </div>


            <div class="ml-2">
              <vs-button
                class="ml-6"

                border
              >
                همه
              </vs-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      value: "",
      page: 1,
    };
  },

  watch: {
    page: async function (val) {
      const response = await this.$dataApi.get(
        `/v1/application/exams?page=${val}`
      );
      this.exams = response?.data?.data;
    },
  },

  async asyncData({ $dataApi }) {
    const response = await $dataApi.get("/v1/application/exams");
    const exams = response?.data?.data;
    const last_page = response?.data?.last_page;
    return {
      exams,
      last_page,
    };
  },
};
</script>

<style scoped>
.ribbon {
  position: absolute;
  top: 15px;
  left: 0;
  background: #fff;
  padding: 0 10px;
  color: #24292d;
  -webkit-box-shadow: 0 0 40px rgb(0 0 0 / 15%);
  box-shadow: 0 0 40px rgb(0 0 0 / 15%);
}

.ribbon::before {
  content: "";
  position: absolute;
  top: 0px;
  right: -20px;
  border-top: 0.746em solid #fff;
  border-bottom: 0.746em solid #fff;
  border-right: 20px solid transparent;
  border-left: 0px solid transparent;
}
</style>
