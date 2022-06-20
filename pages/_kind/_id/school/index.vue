<template>
  <div class="container mx-auto max-w-6xl">
    <div class="flex flex-col lg:flex-row">
      <div class="w-full lg:w-4/6 p-6">
        <section>
          <div
            v-for="(question, index) in questions"
            :key="question.id"
            :ref="`question${question.id}`"
            :id="`question${question.id}`"
          >
            <template v-if="question.type === '1'">
              <multi-select
                :question="question"
                :index="++index"
                @answer="questionHandler"
              ></multi-select>
            </template>

            <template v-else-if="question.type === '2'">
              <single-select
                :question="question"
                :index="++index"
                @answer="questionHandler"
              ></single-select>
            </template>

            <template v-else-if="question.type === '3'">
              <div v-html="question.text" class="mb-3"></div>
              <drop-select
                :question="question"
                :index="++index"
                @answer="questionHandler"
              ></drop-select>
            </template>

            <template v-else-if="question.type === '4'">
              <div v-html="question.text" class="mb-3 mt-5"></div>

              <TFN
                :question="question"
                :index="++index"
                @answer="questionHandler"
              ></TFN>
            </template>

            <template v-else-if="question.type === '5'">
              <div v-html="question.text" class="mb-3 mt-5"></div>
              <YNN
                :question="question"
                :index="++index"
                @answer="questionHandler"
              ></YNN>
            </template>

            <template v-else-if="question.type === '6'">
              <Others
                :question="question"
                :index="++index"
                @answer="questionHandler"
              ></Others>
            </template>
          </div>
        </section>

        <div class="border-t-2 border-gray-300 py-4 flex flex-col items-center">
          <h4 class="font-bold text-xl mb-6">END OF THE TEST</h4>
          <div class="">
            <base-button
              custom="bg-gray-200 text-green-600"
              icon
              @click="sendAnswerHandler"
            >
              Submit
              <template slot="icon">
                <svg
                  class="text-green-600 w-5 h-5 order-first mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M2.002 9.63c-.023.411.207.794.581.966l7.504 3.442 3.442 7.503c.164.356.52.583.909.583l.057-.002a1 1 0 0 0 .894-.686l5.595-17.032c.117-.358.023-.753-.243-1.02s-.66-.358-1.02-.243L2.688 8.736a1 1 0 0 0-.686.894zm16.464-3.971-4.182 12.73-2.534-5.522a.998.998 0 0 0-.492-.492L5.734 9.841l12.732-4.182z"
                  ></path>
                </svg>
              </template>
            </base-button>
          </div>
        </div>
      </div>

      <div class="w-full hidden lg:block lg:w-2/6">
        <div
          class="h-screen bg-teal-600 sticky top-0 p-8 flex flex-col items-center"
        >
          <div class="flex items-center mb-6 ml-4 self-start">
            <div>
              <svg
                class="text-white w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z"
                ></path>
              </svg>
            </div>
            <h4 class="text-white font-semibold text-2xl ml-2">
              Question Palette
            </h4>
          </div>

          <div class="flex items-center justify-center flex-wrap">
            <span
              v-for="(question, index) in questions"
              :key="question.id"
              v-text="index + 1"
              class="w-7 h-7 text-white rounded-full flex items-center justify-center flex-none mr-2 mb-2 cursor-pointer"
              :class="[!question.answered ? 'bg-teal-400' : 'bg-teal-300']"
              @click="goto(`question${question.id}`)"
            ></span>
          </div>

          <div class="flex items-center mt-4">
            <div class="flex items-center">
              <span class="w-4 h-4 rounded-full bg-teal-300 flex-none"></span>
              <span class="ml-2 text-white">پاسخ داده شده</span>
            </div>

            <div class="flex items-center ml-4">
              <span class="w-4 h-4 rounded-full bg-teal-400 flex-none"></span>
              <span class="ml-2 text-white">بدون پاسخ</span>
            </div>
          </div>

          <div class="flex items-center mt-6">
            <div
              class="text-white font-bold text-2xl flex flex-col items-center space-x-2"
            >
              <div>
                <svg
                  class="text-white opacity-70 h-7 w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
                  ></path>
                  <path
                    d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"
                  ></path>
                </svg>
              </div>
              <template v-if="started">
                <no-ssr>
                  <vue-countdown-timer
                    v-once
                    @start_callback="startCallBack('event started')"
                    @end_callback="endCallBack('event ended')"
                    :start-time="new Date().getTime()"
                    :end-time="new Date().getTime() + time"
                    :interval="1000"
                    :start-label="''"
                    :end-label="''"
                    label-position="begin"
                    :end-text="'Event ended!'"
                    :hour-txt="':'"
                    :minutes-txt="':'"
                    :seconds-txt="''"
                    :showDay="false"
                  >
                    <template slot="countdown" slot-scope="scope">
                      <span class="hidden">{{ scope.props.days }}</span
                      ><span class="hidden">:</span>

                      <span class="-ml-2">{{ scope.props.hours }}</span
                      ><span class="mx-1">:</span>

                      <span class="-ml-2">{{ scope.props.minutes }}</span
                      ><span class="mx-1">:</span>

                      <span class="-ml-2">{{ scope.props.seconds }}</span
                      ><span></span>
                    </template>
                  </vue-countdown-timer>
                </no-ssr>
              </template>
            </div>

            <div class="flex flex-col items-center space-y-4 ml-5">
              <base-button custom="bg-white text-green-600" icon size="sm">
                Submit
                <template slot="icon">
                  <svg
                    class="text-green-600 w-5 h-5 order-first mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M2.002 9.63c-.023.411.207.794.581.966l7.504 3.442 3.442 7.503c.164.356.52.583.909.583l.057-.002a1 1 0 0 0 .894-.686l5.595-17.032c.117-.358.023-.753-.243-1.02s-.66-.358-1.02-.243L2.688 8.736a1 1 0 0 0-.686.894zm16.464-3.971-4.182 12.73-2.534-5.522a.998.998 0 0 0-.492-.492L5.734 9.841l12.732-4.182z"
                    ></path>
                  </svg>
                </template>
              </base-button>

              <base-button custom="bg-white text-green-600" icon size="sm">
                Submit
                <template slot="icon">
                  <svg
                    class="text-green-600 w-5 h-5 order-first mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="m21.447 6.105-6-3a1 1 0 0 0-.895 0L9 5.882 3.447 3.105A1 1 0 0 0 2 4v13c0 .379.214.725.553.895l6 3a1 1 0 0 0 .895 0L15 18.118l5.553 2.776a.992.992 0 0 0 .972-.043c.295-.183.475-.504.475-.851V7c0-.379-.214-.725-.553-.895zM10 7.618l4-2v10.764l-4 2V7.618zm-6-2 4 2v10.764l-4-2V5.618zm16 12.764-4-2V5.618l4 2v10.764z"
                    ></path>
                  </svg>
                </template>
              </base-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- finished exam modal -->
    <vs-dialog
      prevent-close
      scroll
      overflow-hidden
      not-close
      auto-width
      v-model="finished"
    >
      <template #header>
        <h3 class="text-2xl font-bold">اتمام آزمون</h3>
      </template>
      <div class="con-content">
        <p class="text-right">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
      </div>

      <template #footer>
        <div class="con-footer flex justify-end">
          <vs-button @click="sendAnswerHandler">ارسال</vs-button>
          <!-- <vs-button @click="active2 = false" dark transparent>
            Cancel
          </vs-button> -->
        </div>
      </template>
    </vs-dialog>

    <!-- started exam modal -->
    <vs-dialog
      blur
      prevent-close
      scroll
      overflow-hidden
      not-close
      auto-width
      v-model="showStartModal"
    >
      <template #header>
        <h3 class="text-2xl font-bold">شروع آزمون</h3>
      </template>
      <div class="con-content">
        <p class="text-right">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
      </div>

      <template #footer>
        <div class="con-footer flex justify-end">
          <vs-button @click="startExamHandler"> شروع آزمون</vs-button>
          <!-- <vs-button @click="active2 = false" dark transparent>
            Cancel
          </vs-button> -->
        </div>
      </template>
    </vs-dialog>
  </div>
</template>
<script>
import SingleSelect from "~/components/Question/SingleSelect";
import MultiSelect from "~/components/Question/MultiSelect";
import DropSelect from "~/components/Question/DropSelect";
import TFN from "~/components/Question/TFN";
import YNN from "~/components/Question/YNN";
import Others from "~/components/Question/Others";

export default {
  components: { Others, YNN, TFN, DropSelect, MultiSelect, SingleSelect },
  data() {
    return {
      answers: [],
      finished: false,
      started: false,
      exam_id: null,
      showStartModal: false,
      start_time: null,
    };
  },
  layout: "exam",
  middleware: "authenticated",
  methods: {
    goto(refName) {
      // var element = this.$refs[refName];
      var element = document.getElementById(refName);
      console.log("element", element);
      var top = element.offsetTop;
      console.log("top", top);

      window.scrollTo(0, top);
    },
    async sendAnswerHandler() {
      console.log("this.questions", this.questions);
      try {
        const data = {
          questions: JSON.stringify(this.questions),
          exam_id: this.exam_id,
        };

        const response = await this.$dataApi.post(
          `/v1/application/exam/${this.exam.id}/school`,
          data
        );

        this.$router.push({
          name: "kind-id-result",
          params: { id: this.exam_id },
        });
      } catch (e) {}
    },

    questionHandler(question) {
      console.log("answer", question);

      let question_item = this.questions.find(
        (item) => item.id === question.id
      );
      console.log("question_item", question_item);

      question_item.answered = question.answered;

      if (
        question.type === "3" ||
        question.type === "4" ||
        question.type === "5" ||
        question.type === "6"
      ) {
        question_item.student_answers = {
          is_correct: question.is_correct,
          correct_answer: question.correct_answer,
          answer: question.answer,
        };
      } else {
        question_item.student_answers = question;
      }

      this.questions = [...this.questions];
    },

    startExamHandler() {
      this.started = true;
      this.showStartModal = false;
      // this.start_time =
    },

    startCallBack: function (x) {
      this.started = true;
    },
    endCallBack: function (x) {
      this.finished = true;
    },

    checkStudent() {
      if (this.$auth.loggedIn) {
        var loading = this.$vs.loading({
          background: "#fff",
        });

        const data = {
          user_id: this.$auth.user.id,
          exam_id: this.$route.params.id,
        };

        const response = this.$dataApi
          .post(`/v1/application/exam/user/exists/student`, data)
          .then(({ data }) => {
            if (data.success === true) {
            } else {
              this.$router.push("/");
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
    this.questions.map((question) => {
      question.answered = false;
      question.student_answers = {
        is_correct: 2,
        answer: null,
        correct_answer: null,
      };
    });

    this.exam_id = this.exam;
    this.showStartModal = true;
  },
  updated() {
    console.log("updated");
  },

  async asyncData({ $dataApi, params }) {
    const id = params.id;
    const response = await $dataApi.get(`/v1/application/exam/${id}/school`);
    const exam = response?.exam_id;
    const questions = response?.data;
    const time = response?.time;
    return {
      exam,
      questions,
      time,
    };
  },
};
</script>
<style>
.bg-teal-100 {
  background: #f9f871;
}

.bg-teal-200 {
  background: #c0ed81;
}

.bg-teal-300 {
  background: #90dd93;
}

.bg-teal-400 {
  background: #6dcaa1;
}

.bg-teal-500 {
  background: #5db5a6;
}

.bg-teal-600 {
  background: #5f9ea0;
}

.text-teal-100 {
  color: #f9f871;
}

.text-teal-200 {
  color: #c0ed81;
}

.text-teal-300 {
  color: #90dd93;
}

.text-teal-400 {
  color: #6dcaa1;
}

.text-teal-500 {
  color: #5db5a6;
}

.text-teal-600 {
  color: #5f9ea0;
}
</style>
