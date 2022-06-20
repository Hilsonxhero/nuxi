<template>
  <div v-if="course">
    <div class="container">
      <div class="grid grid-cols-12 gap-6 mt-16">
        <div
          class="col-span-12 mb-15 group"
          v-if="converted_src"
          :class="[videos.length > 1 ? 'xl:col-span-9' : 'xl:col-span-12']"
        >
          <div class="relative">
            <client-only>
              <video-player
                class="video-player-box overflow-hidden h-130 object-cover rounded-md shadow-2xl vjs-default-skin video-modal-box-ui"
                ref="videoPlayer"
                :options="playerOptions"
                :playsinline="true"
                customEventName="customstatechangedeventname"
                @play="onPlayerPlay($event)"
                @pause="onPlayerPause($event)"
                @ended="onPlayerEnded($event)"
              >
              </video-player>
            </client-only>
          </div>
        </div>

        <div
          class="col-span-12 xl:col-span-3 mb-15 group"
          v-if="videos.length > 1"
        >
          <div class="flex flex-col space-y-4 overflow-auto p-4 h-130 lecture-videos-box">
            <div class="relative" v-for="(video, index) in videos" :key="index">
              <div class="rounded-md shadow-lg w-full h-52 p-5 relative">
                <button
                  class="ply-video-btn"
                  type="button"
                  title="Play Video"
                  aria-disabled="false"
                  @click="playLectureVideo(video)"
                >
                  <span
                    aria-hidden="true"
                    class="ply-video-icon flex items-center justify-center"
                  >
                    <i class="bx bx-play-circle"></i>
                    <!-- <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="text-white w-12 h-12"
                      fill="currentColor"
                    >
                      <path
                        d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
                      ></path>
                      <path d="m9 17 8-5-8-5z"></path>
                    </svg> -->
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-12 gap-6 mt-16">
        <div class="xl:col-span-8 md:col-span-8 col-span-12 mb-15 group">
          <div class="bg-white rounded-3xl p-7">
            <h2 class="text-3xl font-bold">
              {{ course.name }}
            </h2>

            <div class="mt-6">
              <TabsWrapper>
                <Tab name="درس نامه" :selected="true">
                  <div v-html="description" class="my-6"></div>
                </Tab>
                <Tab name="فایل های دانلودی">
                  <div class="my-6">
                    <div
                      v-for="(file, index) in files"
                      :key="index"
                      class="flex items-center justify-between border border-gray-300 rounded-xl px-3 py-1 mb-3"
                    >
                      <div class="flex items-center">
                        <vs-button icon>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-6 h-6 text-white"
                              fill="currentColor"
                            >
                              <path
                                d="M19.903 8.586a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.952.952 0 0 0-.051-.259c-.01-.032-.019-.063-.033-.093zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z"
                              ></path>
                              <path
                                d="M8 12h8v2H8zm0 4h8v2H8zm0-8h2v2H8z"
                              ></path>
                            </svg>
                          </span>
                        </vs-button>

                        <span class="mr-2">{{ file.title }}</span>
                      </div>

                      <div>
                        <vs-button
                          color="rgb(59,222,200)"
                          gradient
                          icon
                          @click="DownloadHandler(file.media_id)"
                        >
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-6 h-6 text-white"
                              fill="currentColor"
                            >
                              <path d="m12 16 4-5h-3V4h-2v7H8z"></path>
                              <path
                                d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"
                              ></path>
                            </svg>
                          </span>
                        </vs-button>
                      </div>
                    </div>
                  </div>
                </Tab>
              </TabsWrapper>
            </div>
          </div>
        </div>

        <div
          class="xl:col-span-4 md:col-span-4 col-span-12 mb-15 group"
          v-if="course.seasons"
        >
          <div class="bg-white rounded-3xl p-7 mb-6">
            <div class="text-2xl font-bold mb-4">{{ course.price }} تومان</div>
            <div>
              <template v-if="exists_student">
                <vs-button size="large" border block ref="button">
                  این دوره خریداری شده
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
                  خرید دوره
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
                        d="M21 3h-7a2.98 2.98 0 0 0-2 .78A2.98 2.98 0 0 0 10 3H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h5.758c.526 0 1.042.214 1.414.586l1.121 1.121c.009.009.021.012.03.021.086.079.182.149.294.196h.002a.996.996 0 0 0 .762 0h.002c.112-.047.208-.117.294-.196.009-.009.021-.012.03-.021l1.121-1.121A2.015 2.015 0 0 1 15.242 20H21a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.758 18H4V5h6c.552 0 1 .449 1 1v12.689A4.032 4.032 0 0 0 8.758 18zM20 18h-4.758c-.799 0-1.584.246-2.242.689V6c0-.551.448-1 1-1h6v13z"
                      ></path>
                    </svg>
                  </span>
                  <span class="text-gray-700 mr-2">تعداد درس</span>
                </div>
                <div>{{ course.active_lectures }}</div>
              </div>
              <!-- <div class="flex items-center justify-between mb-3">
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
                  <span class="text-gray-700 mr-2">مدت زمان دوره</span>
                </div>
                <div>103:22:34</div>
              </div> -->
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="text-blue-800 w-6 h-6"
                      fill="currentColor"
                    >
                      <path
                        d="M22 7.999a1 1 0 0 0-.516-.874l-9.022-5a1.003 1.003 0 0 0-.968 0l-8.978 4.96a1 1 0 0 0-.003 1.748l9.022 5.04a.995.995 0 0 0 .973.001l8.978-5A1 1 0 0 0 22 7.999zm-9.977 3.855L5.06 7.965l6.917-3.822 6.964 3.859-6.918 3.852z"
                      ></path>
                      <path
                        d="M20.515 11.126 12 15.856l-8.515-4.73-.971 1.748 9 5a1 1 0 0 0 .971 0l9-5-.97-1.748z"
                      ></path>
                      <path
                        d="M20.515 15.126 12 19.856l-8.515-4.73-.971 1.748 9 5a1 1 0 0 0 .971 0l9-5-.97-1.748z"
                      ></path>
                    </svg>
                  </span>
                  <span class="text-gray-700 mr-2">سطح دوره</span>
                </div>
                <div>{{ course.level_title }}</div>
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
                  <span class="text-gray-700 mr-2">وضعیت دوره</span>
                </div>
                <div>{{ course.teaching_status }}</div>
              </div>
            </div>
          </div>

          <div>
            <Accordion>
              <AccordionItem
                v-for="(season, index) in course.seasons"
                :key="index"
              >
                <template slot="accordion-trigger">
                  <h3 class="font-bold">{{ season.name }}</h3>
                  <div class="text-gray-500 text-sm mt-1 block">
                    ({{ season.active_lectures_count }} درس)
                  </div>
                </template>

                <template slot="accordion-content">
                  <div class="space-y-5">
                    <div
                      class="flex items-center justify-between"
                      v-for="(lecture, index) in season.lectures"
                      :key="index"
                    >
                      <div class="relative flex items-center">
                        <template v-if="checkLecture(lecture)">
                          <vs-button
                            color="danger"
                            circle
                            icon
                            floating
                            @click="playLectureHandler(lecture)"
                          >
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-5 h-5 text-white"
                                fill="currentColor"
                              >
                                <path d="M7 6v12l10-6z"></path>
                              </svg>
                            </span>
                          </vs-button>
                        </template>
                        <template v-else>
                          <vs-button
                            color="warn"
                            circle
                            icon
                            floating
                            @click="purchaseHandler"
                          >
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-6 h-6 text-white"
                                fill="currentColor"
                              >
                                <path
                                  d="M12 2C9.243 2 7 4.243 7 7v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7zm4 10.723V20h-2v-2.277a1.993 1.993 0 0 1 .567-3.677A2.001 2.001 0 0 1 14 16a1.99 1.99 0 0 1-1 1.723z"
                                ></path>
                              </svg>
                            </span>
                          </vs-button>
                        </template>
                        <span class="mr-2">{{ lecture.name }}</span>
                      </div>
                      <!--                      <div class="text-gray-500">14 دقیقه</div>-->
                    </div>

                    <!-- <div
                      class="flex items-center justify-between lecture__playing"
                    >
                      <div class="relative flex items-center">
                        <vs-button color="success" circle icon floating>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-5 h-5 text-white"
                              fill="currentColor"
                            >
                              <path d="M7 6v12l10-6z"></path>
                            </svg>
                          </span>
                        </vs-button>
                        <span class="mr-2">شروع سر فصل دوره</span>
                      </div>
                      <div class="text-gray-500">در حال پخش</div>
                    </div> -->
                    <!-- <div class="flex items-center justify-between">
                      <div class="relative flex items-center">
                        <vs-button color="warn" circle icon floating>
                          <span>


                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-6 h-6 text-white"
                              fill="currentColor"
                            >
                              <path
                                d="M12 2C9.243 2 7 4.243 7 7v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7zm4 10.723V20h-2v-2.277a1.993 1.993 0 0 1 .567-3.677A2.001 2.001 0 0 1 14 16a1.99 1.99 0 0 1-1 1.723z"
                              ></path>
                            </svg>
                          </span>
                        </vs-button>
                        <span class="mr-2">شروع سر فصل دوره</span>
                      </div>
                      <div class="text-gray-500">در حال پخش</div>
                    </div> -->
                  </div>
                </template>
              </AccordionItem>
            </Accordion>
          </div>

          <div class="flex items-center flex-wrap mt-10">
            <span
              v-for="(tag, index) in course.tags"
              :key="index"
              class="border border-gray-300 py-1 px-4 ml-2 mb-2 rounded-md cursor-pointer"
              >{{ tag.title }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <!-- purchase confirmation -->
    <vs-dialog width="550px" not-center v-model="confirmation">
      <template #header>
        <h4 class="not-margin">آیا از خرید این دوره اطمینان دارید ؟</h4>
      </template>

      <div class="con-content">
        <p>
          Qui magna sint aliqua consectetur officia sunt reprehenderit eiusmod.
        </p>
      </div>

      <template #footer>
        <div class="con-footer flex items-center">
          <vs-button ref="button" @click="purchaseCourseHandler" transparent>
            تایید
          </vs-button>
          <vs-button @click="confirmation = false" dark transparent>
            لغو
          </vs-button>
        </div>
      </template>
    </vs-dialog>

    <!-- purchase modal -->
    <vs-dialog blur not-close width="550px" not-center v-model="purchase_modal">
      <template #header>
        <h4 class="not-margin">خرید آموزش برای ادامه یادگیری</h4>
      </template>

      <div class="con-content">
        <p>برای دسترسی کامل به این آموزش نیاز به خریداری این دوره می باشد</p>
      </div>

      <template #footer>
        <div class="con-footer flex items-center">
          <vs-button @click="purchase_modal = false" transparent>
            باشه
          </vs-button>
          <vs-button
            color="rgb(59,222,200)"
            gradient
            @click="confirmation = true"
          >
            خریداری این آموزش
          </vs-button>
        </div>
      </template>
    </vs-dialog>

    <!-- success payment modal -->
    <vs-dialog width="550px" not-center v-model="show_success_payment">
      <template #header>
        <h4 class="not-margin">پرداخت موفقیت آمیز</h4>
      </template>

      <div class="con-content">
        <p>
          Vuesax is a relatively new framework with a refreshing design and in
          the latest trends, vuesax based on vuejs which means that we go hand
          in hand with one of the most popular javascript frameworks in the
          world and with a huge community with which you will have all the help
          and documentation to create and make your project
        </p>
      </div>

      <template #footer>
        <div class="con-footer">
          <vs-button @click="show_success_payment = false" transparent>
            باشه
          </vs-button>
        </div>
      </template>
    </vs-dialog>

    <!-- failed payment modal -->
    <vs-dialog width="550px" not-center v-model="show_failed_payment">
      <template #header>
        <h4 class="not-margin">پرداخت موفقیت آمیز نبود</h4>
      </template>

      <div class="con-content">
        <p>
          Vuesax is a relatively new framework with a refreshing design and in
          the latest trends, vuesax based on vuejs which means that we go hand
          in hand with one of the most popular javascript frameworks in the
          world and with a huge community with which you will have all the help
          and documentation to create and make your project
        </p>
      </div>

      <template #footer>
        <div class="con-footer">
          <vs-button @click="show_failed_payment = false" transparent>
            باشه
          </vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>
<script>
import TabsWrapper from "~/components/Base/Tabs/TabsWrapper.vue";
import Tab from "~/components/Base/Tabs/Tab.vue";
import Accordion from "../../../../components/Base/accordion/accordion.vue";
import AccordionItem from "../../../../components/Base/accordion/accordion-item.vue";

export default {
  components: {
    TabsWrapper,
    Tab,
    Accordion,
    AccordionItem,
  },
  data() {
    return {
      confirmation: false,
      exists_student: false,
      course_id: null,
      purchase_loading: false,
      files: [],
      purchase_modal: false,
      show_success_payment: false,
      show_failed_payment: false,
      converted_src: null,
      videos: [],
      playerOptions: {
        muted: true,
        Preload: "auto",
        language: "en",
        // playbackRates: [0.7, 1, 1.5, 2],
        Fluid: true,
        sources: [
          {
            type: "application/x-mpegurl",
            src: this.converted_src,
          },
        ],
        // poster: "https://eduport.webestica.com/assets/images/videos/poster.jpg",
      },
      course: null,
      description: null,
    };
  },
  watch: {
    converted_src: function (val) {
      this.playerOptions.sources[0].src = val;
    },
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    },
  },
  methods: {
    checkLecture(lecture) {
      if (this.exists_student || lecture.is_free) {
        return true;
      } else {
        return false;
      }
    },

    playLectureVideo(video) {
      this.converted_src = video.converted_src;
    },

    async purchaseCourseHandler() {
      const data = {
        course_id: this.course.id,
        amount: this.course.price,
        callback: window.location.origin + window.location.pathname,
      };

      try {
        const loading = this.$vs.loading({
          target: this.$refs.button,
          scale: "0.6",
          background: "primary",
          opacity: 1,
          color: "#fff",
        });
        const response = await this.$dataApi.post(
          `/v1/application/course/payment/purchase`,
          data
        );
        loading.close();
        if (response.data.inventory) {
          this.confirmation = false;
          this.show_success_payment = true;
          this.purchase_modal = false;
          this.checkStudent();
        } else {
          window.location.replace(response.data.data);
        }
      } catch (e) {
        loading.close();
        console.log(e);
      }
    },
    playLectureHandler(lecture) {
      this.videos = lecture.videos;
      this.description = lecture.text;
      this.files = lecture.files;
      if (this.videos[0]) {
        this.converted_src = this.videos[0].converted_src;
      }
      // if (this.videos.length > 1) {
      //   if (this.videos[0]) {
      //     this.converted_src = this.videos[0].converted_src;
      //   }
      // }
    },

    async DownloadHandler(media) {
      try {
        const data = {
          id: media,
        };

        const response = await this.$dataApi.get(
          `/v1/application/media/${media}/download`
        );
        var strWindowFeatures =
          "location=yes,height=570,width=520,scrollbars=yes,status=yes";
        await window.open(response.data, "_blank", strWindowFeatures);
      } catch (e) {}
    },
    // listen event
    onPlayerPlay(player) {
      // console.log('player play!', player)
    },
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    // ...player event
    // or listen state event
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },
    // player is ready
    playerReadied(player) {
      console.log("the player is readied", player);
      // you can use it to do something...
      // player.[methods]
    },
    onPlayerLoadeddata(player) {},
    onPlayerTimeupdate(player) {},
    onPlayerCanplay(player) {},
    onPlayerCanplaythrough(player) {},
    onPlayerPlaying(player) {},
    onPlayerWaiting(player) {},
    onPlayerEnded(player) {},

    purchaseHandler() {
      this.purchase_modal = true;
    },
    checkStudent() {
      if (this.$auth.loggedIn) {
        const loading = this.$vs.loading({
          background: "#fff",
        });

        const data = {
          user_id: this.$auth.user.id,
          book_id: this.course_id,
        };
        const response = this.$dataApi
          .post(`/v1/application/course/exists/student`, data)
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

    checkPayment() {
      const payment_param = this.$route.query.payment;
      const success_param = this.$route.query.payment;
      if (payment_param && success_param) {
        const data = {
          // user_id : this.$auth.user.id,
          payment: payment_param,
        };
        const response = this.$dataApi
          .post(`/v1/application/course/payment/purchase/check`, data)
          .then(({ data }) => {
            if (!data.success === true) {
              this.show_failed_payment = true;
            } else if (data.success === true) {
              this.show_success_payment = true;
            }
          })
          .catch(() => {
            console.log("catch error");
          });
      }
    },

    // async fetchCourse(){
    //   const loading = this.$vs.loading({
    //     background: "#fff",
    //   })
    //   try {
    //     const response = await this.$dataApi.get(`/v1/application/courses/${this.$route.params.id}`);
    //     this.course = response.data;
    //     this.description = course.description;
    //     loading.close()
    //   } catch (e) {
    //     loading.close()
    //   }
    // },
  },

  // async fetch() {
  //   this.fetchCourse()
  // },
  async asyncData({ $dataApi, params }) {
    const response = await $dataApi.get(`/v1/application/courses/${params.id}`);
    const course = response.data;
    const description = course.description;
    return {
      course,
      description,
    };
  },

  mounted() {
    this.course_id = this.$route.params.id;
    this.playerOptions.sources[0].src = this.converted_src;

    this.checkStudent();
    this.checkPayment();
  },
};
</script>
<style>
.vjs_video_3-dimensions {
  width: 100% !important;
  height: 100% !important;
}

.lecture__playing {
}

.video-js {
  height: 100% !important;
  width: 100% !important;
}

.h-130 {
  height: 35rem;
}
.lecture-videos-box{

}
</style>
