<template>
  <div class="container mx-auto max-w-6xl">
    <div class="flex flex-col lg:flex-row">
      <div class="w-full lg:w-4/6 p-6">
        <div class="">
          <h3 class="text-md text-green-600 mb-3">SECTION 1 : QUESTIONS 1-9</h3>
          <div class="mb-6">
            <h4 class="text-black font-bold text-xl mb-4">Questions 1-7</h4>
            <p class="text-gray-500 mb-4">
              Listen to the conversation between Megan and Ken about how they
              will spend the evening. Circle the appropriate letter.
            </p>
            <div class="mb-4">
              Example: What is Thomas’s new home phone number?
            </div>
            <div class="mb-4">
              A 9731 4322 B 9813 4562 C 9452 3456 D 9340 2367
            </div>

            <div class="mb-10">
              <div class="flex items-center mb-4">
                <span
                  class="h-7 w-7 rounded-full bg-blue-400 text-white flex items-center justify-center font-semibold"
                  v-text="1"
                ></span>
                <span class="ml-2"
                  >What will Ken and Megan do this evening?</span
                >
              </div>
              <div>
                <img src="~/assets/images/01.jpg" alt="" loading="lazy" />
              </div>
              <div class="space-y-3">
                <div class="">
                  <label class="flex items-center">
                    <span class="ml-2">A</span>
                    <input
                      type="radio"
                      :name="2"
                      checked="checked"
                      class="order-first"
                      value=""
                    />
                  </label>
                </div>

                <div class="">
                  <label class="flex items-center">
                    <span class="ml-2">B</span>
                    <input
                      type="radio"
                      :name="2"
                      class="order-first"
                      value=""
                    />
                  </label>
                </div>

                <div class="">
                  <label class="flex items-center">
                    <span class="ml-2">C</span>
                    <input
                      type="radio"
                      :name="2"
                      class="order-first"
                      value=""
                    />
                  </label>
                </div>

                <div class="">
                  <label class="flex items-center">
                    <span class="ml-2">D</span>
                    <input
                      type="radio"
                      :name="2"
                      class="order-first"
                      value=""
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-6">
            <h4 class="text-black font-bold text-xl mb-4">Questions 8-9</h4>

            <p class="mb-4">
              Write <strong class="text-red-600">ONE NUMBER</strong> for each
              answer.
            </p>
            <p class="text-gray-500">Which telephone button will Ken press:</p>
            <div class="my-4">
              <strong class="font-semibold italic">Example</strong>
              <span class="ml-6">If he wishes to order a cab now?</span>
            </div>
            <div class="mb-4">Which telephone button will Ken press</div>

            <div class="flex flex-col space-y-10">
              <div>
                <h2 class="text-gray-500 text-md font-semibold mb-4">
                  Which exhibition can you visit in late August ?
                </h2>
                <div class="flex items-center">
                  <span
                    class="w-8 h-8 mt-3 rounded-full bg-blue-400 flex items-center justify-center text-white"
                    v-text="2"
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

        <div class="">
          <h3 class="text-md text-green-600 mb-3">
            SECTION 1 : QUESTIONS 9-10
          </h3>

          <div class="mb-6">
            <h4 class="text-black font-bold text-xl mb-4">Questions 9-10</h4>

            <div>
              <span
                class="w-8 h-8 mt-3 rounded-full bg-blue-400 flex items-center justify-center text-white my-4"
                >3</span
              >
            </div>

            <p class="mb-4">
              Circle <strong class="text-red-600">TWO </strong> letters
            </p>

            <div class="flex flex-col space-y-10">
              <div>
                <h2 class="text-gray-500 text-md font-semibold mb-4">
                  Which exhibition can you visit in late August ?
                </h2>
                <div class="space-y-3">
                  <div class="">
                    <label class="flex items-center">
                      <span class="ml-2">A</span>
                      <input
                        type="checkbox"
                        :name="3"
                        checked="checked"
                        class="order-first"
                        value=""
                      />
                    </label>
                  </div>

                  <div class="">
                    <label class="flex items-center">
                      <span class="ml-2">B</span>
                      <input
                        type="checkbox"
                        :name="3"
                        class="order-first"
                        value=""
                      />
                    </label>
                  </div>

                  <div class="">
                    <label class="flex items-center">
                      <span class="ml-2">C</span>
                      <input
                        type="checkbox"
                        :name="3"
                        class="order-first"
                        value=""
                      />
                    </label>
                  </div>

                  <div class="">
                    <label class="flex items-center">
                      <span class="ml-2">D</span>
                      <input
                        type="checkbox"
                        :name="3"
                        class="order-first"
                        value=""
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mb-6">
            <h4 class="text-black font-bold text-xl mb-4">Questions 10-11</h4>

            <div class="">
              Choose the correct letter <strong>A-C</strong> for each activity.
            </div>

            <div class="my-6">
              <table class="w-full border border-gray-300">
                <thead>
                  <tr class="bg-gray-200">
                    <td></td>
                    <td class="text-left py-2">Activity</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>A</th>
                    <th class="text-left text-gray-400 font-normal py-2">
                      All students
                    </th>
                  </tr>
                  <tr class="bg-gray-200">
                    <th>B</th>
                    <th class="text-left text-gray-400 font-normal py-2">
                      Beginners
                    </th>
                  </tr>
                  <tr>
                    <th>C</th>
                    <th class="text-left text-gray-400 font-normal py-2">
                      Advanced studentss
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="flex items-center">
              <span
                class="w-8 h-8 mt-3 rounded-full bg-blue-400 flex items-center justify-center text-white my-4"
                >3</span
              >
              <div class="ml-2">
                <select class="w-28 border-gray-200 pt-1 pb-1">
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </select>
              </div>
              <span class="ml-2">Non-English language courses</span>
            </div>
          </div>
        </div>

        <div class="border-t-2 border-gray-300 py-4 flex flex-col items-center">
          <h4 class="font-bold text-xl mb-6">END OF THE TEST</h4>
          <div class="">
            <base-button custom="bg-gray-200 text-green-600" icon>
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
              class="w-7 h-7 bg-teal-400 text-white rounded-full flex items-center justify-center flex-none mr-2 mb-2 cursor-pointer"
              v-for="(item, index) in 40"
              :key="index"
              v-text="index + 1"
            ></span>
          </div>

          <div class="flex items-center mt-4">
            <div class="flex items-center">
              <span class="w-4 h-4 rounded-full bg-teal-300 flex-none"></span>
              <span class="ml-2 text-white">Answered</span>
            </div>

            <div class="flex items-center ml-4">
              <span class="w-4 h-4 rounded-full bg-teal-400 flex-none"></span>
              <span class="ml-2 text-white">Unanswered</span>
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
  </div>
</template>
<script>
export default {
  layout: "exam",
  methods: {
    startCallBack: function (x) {
  ;
    },
    endCallBack: function (x) {

    },
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
