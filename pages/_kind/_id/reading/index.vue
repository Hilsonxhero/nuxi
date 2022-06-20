<template>
  <div>
    <section>
      <div class="container relative h-screen overflow-hidden">
        <div class="h-93">
          <div
            class="flex h-full flex-col lg:flex-row overflow-hidden relative"
          >
            <div class="w-full lg:w-1/2 h-full overflow-y-auto">
              <div class="p-7 overflow-y-auto bg-green-100">
                <h1 class="text-3xl font-bold">Reading Passage 2</h1>
                <p class="text-md mt-2">
                  Read the passage below and write the answers to the questions
                  which follow in boxes 16-28 on your answer sheet.
                </p>
                <img class="my-4" src="~/assets/images/24.jpg" />
                <h2 class="text-xl font-semibold text-center">
                  HOW TO USE THE LANGUAGE RESOURCE CENTRE (LRC)
                </h2>

                <div class="mt-6 space-y-6">
                  <div v-for="(item, index) in 10" :key="index">
                    <h3 class="text-black font-semibold mb-4">ART GALLERY</h3>
                    <p class="text-black">
                      The Art Gallery’s mission is to bring diverse forms of art
                      and craft to the people of this city.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/2 h-full overflow-y-auto">
              <div class="flex flex-col">
                <div class="overflow-y-auto p-7 pb-6">
                  <h4 class="text-green-700 font-semibold mb-4">
                    SECTION 1: QUESTIONS 1-15
                  </h4>
                  <div>
                    <h2 class="text-xl font-semibold mb-4">Questions 1-6</h2>

                    <h4>
                      Using
                      <strong class="text-red-500"
                        >NO MORE THAN THREE WORDS OR NUMBERS</strong
                      >
                      answer the questions below.
                    </h4>

                    <div class="text-gray-500 text-md mt-4 mb-6">
                      Write your answers in boxes 1-6 on your answer sheet.
                    </div>

                    <div class="flex flex-col space-y-6">
                      <div v-for="(question, index) in 10" :key="index">
                        <h2 class="text-gray-500 text-md font-semibold mb-4">
                          Which exhibition can you visit in late August ?
                        </h2>
                        <div class="flex items-center">
                          <span
                            class="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white"
                            v-text="index + 1"
                          ></span>
                          <input
                            class="outline-none border-0 ring-0 border-b-2 border-gray-300 ml-3 py-1 px-2 focus:border-black"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="h-16 p-5 bg-gray-300 w-full lg:sticky bottom-0">
                  <div class="flex items-center justify-between">
                    <span class="text-green-700 font-semibold">SECTION 1</span>
                    <div class="flex items-center space-x-2">
                      <base-button
                        custom="bg-green-600 text-white"
                        icon
                        size="sm"
                      >
                        <template slot="icon">
                          <svg
                            class="text-white w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path
                              d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"
                            ></path>
                          </svg>
                          Previous
                        </template>
                      </base-button>

                      <base-button
                        custom="bg-green-600 text-white"
                        icon
                        size="sm"
                      >
                        Next
                        <template slot="icon">
                          <svg
                            class="text-white w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path
                              d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"
                            ></path>
                          </svg>
                        </template>
                      </base-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="w-full text-white fixed left-0 right-0 bottom-0 p-3"
          style="background: #5f9ea0"
        >
          <div class="flex flex-row items-center justify-between">
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="text-white w-6 h-6"
              >
                <path
                  d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z"
                ></path>
              </svg>
              <span class="ml-1 text-2xl font-semibold ">Question Palette</span>
            </div>
            <div
              class="text-white font-bold text-2xl flex items-center space-x-2"
            >
              <div class="mr-2">
                <svg
                  class="text-white h-7 w-7 opacity-70"
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
              <template>
                <vue-countdown-timer
                  @start_callback="startCallBack('event started')"
                  @end_callback="endCallBack('event ended')"
                  :start-time="new Date().getTime()"
                  :end-time="new Date().getTime() + 300000"
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
              </template>
            </div>
            <div class="hidden lg:flex flex-row items-center space-x-2">
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
                Review
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
    </section>
  </div>
</template>
<script>
export default {
  layout: "exam",
  data() {
    return {};
  },

  watch: {},

  methods: {
    startCallBack: function (x) {
    
    },
    endCallBack: function (x) {

    },
  },

  mounted() {},
};
</script>
<style scoped>
.green-gradient {
  background-image: linear-gradient(
    to right,
    #5db5a6,
    #81c7d0,
    #b3d7e9,
    #e0e9f6,
    #ffffff
  );
}

.h-93 {
  height: 93%;
}

.bg-green {
  background: #6dcaa1;
}
</style>
