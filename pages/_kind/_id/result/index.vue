<template>
  <div class="container mx-auto max-w-6xl" v-if="exam">
    <div class="mb-10">
      <div class="bg-white p-7 rounded-lg">
        <span class="text-2xl">کارنامه : </span>
        <span class="text-2xl">{{ exam.name }}</span>
      </div>

      <div class="bg-white p-7 mt-10 rounded-lg">
        <table class="min-w-full">
          <thead class="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th
                scope="col"
                class="py-3 px-6 text-xs font-medium text-right text-gray-700 dark:text-gray-400"
              >
                نام آزمون دهنده
              </th>
              <th
                scope="col"
                class="py-3 px-6 text-xs font-medium text-right text-gray-700 dark:text-gray-400"
              >
                زمان شروع
              </th>
              <th
                scope="col"
                class="py-3 px-6 text-xs font-medium text-right text-gray-700 dark:text-gray-400"
              >
                مدت آزمون
              </th>
              <th
                scope="col"
                class="py-3 px-6 text-xs font-medium text-right text-gray-700 dark:text-gray-400"
              >
                مدت پاسخ گویی
              </th>
              <th scope="col" class="relative py-3 px-6">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td
                class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ user.name }}
              </td>
              <td
                class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
              >
                21 اسفند 1400 - 17:37
              </td>
              <td
                class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
              >
                40 دقیقه
              </td>
              <td
                class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
              >
                45 ثانیه
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-16">
      <div class="xl:col-span-4 md:col-span-5 col-span-12 mb-15 group">
        <div class="bg-white p-7 rounded-lg" v-if="series">
          <client-only>
            <apexchart :options="chartOptions" :series="series"></apexchart>
          </client-only>
        </div>
      </div>

      <div class="xl:col-span-8 md:col-span-7 col-span-12 mb-15 group">
        <div class="bg-white p-7 rounded-lg">
          <div class="overflow-x-auto">
            <table class="min-w-full">
              <thead class="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th
                    scope="col"
                    class="py-3 px-6 text-xs font-medium text-right text-gray-700 dark:text-gray-400"
                  >
                    درس
                  </th>
                  <th
                    scope="col"
                    class="py-3 px-6 text-xs font-medium text-right text-gray-700 dark:text-gray-400"
                  >
                    تعداد سوالات
                  </th>
                  <th
                    scope="col"
                    class="py-3 px-6 text-xs font-medium text-right text-gray-700 dark:text-gray-400"
                  >
                    تعداد درست
                  </th>
                  <th
                    scope="col"
                    class="py-3 px-6 text-xs font-medium text-right text-gray-700 dark:text-gray-400"
                  >
                    تعداد غلط
                  </th>
                  <th
                    scope="col"
                    class="py-3 px-6 text-xs font-medium text-right text-gray-700 dark:text-gray-400"
                  >
                    بدون پاسخ
                  </th>
                  <th
                    scope="col"
                    class="py-3 px-6 text-xs font-medium text-right text-gray-700 dark:text-gray-400"
                  >
                    درصد
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(skill, index) in exam.skills"
                  :key="index"
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td
                    class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {{ skill.name }}
                  </td>
                  <td
                    class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
                  >
                    {{ result.total_question }}
                  </td>
                  <td
                    class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
                  >
                    {{ result.correct_answer }}
                  </td>
                  <td
                    class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
                  >
                    {{ result.wrong_answer }}
                  </td>

                  <td
                    class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
                  >
                    {{ result.no_answer }}
                  </td>

                  <td
                    class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
                  >
                    {{ result.overall_score }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="xl:col-span-6 md:col-span-6 col-span-6 mb-15 group mt-10">
          <div class="bg-white p-7 rounded-lg">
            <div class="overflow-x-auto">
              <table class="min-w-full">
                <thead class="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium text-right text-gray-700 dark:text-gray-400"
                    >
                      شماره سوال
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium text-right text-gray-700 dark:text-gray-400"
                    >
                      پاسخ درست
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium text-right text-gray-700 dark:text-gray-400"
                    >
                      پاسخ شما
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium text-right text-gray-700 dark:text-gray-400"
                    >
                      وضعیت
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(answer, index) in answers"
                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td
                      class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {{ index + 1 }}
                    </td>
                    <td
                      class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
                    >
                      {{ answer.correct_answer }}
                    </td>
                    <td
                      class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
                    >
                      {{ answer.student_answer }}
                    </td>

                    <td
                      class="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"
                    >
                      <template v-if="answer.is_correct === 1">
                        <svg
                          class="w-6 h-6 text-green-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                        >
                          <path
                            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
                          ></path>
                          <path
                            d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"
                          ></path>
                        </svg>
                      </template>

                      <template v-else-if="answer.is_correct === 0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-6 h-6 text-red-600"
                          fill="currentColor"
                        >
                          <path
                            d="M9.172 16.242 12 13.414l2.828 2.828 1.414-1.414L13.414 12l2.828-2.828-1.414-1.414L12 10.586 9.172 7.758 7.758 9.172 10.586 12l-2.828 2.828z"
                          ></path>
                          <path
                            d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z"
                          ></path>
                        </svg>
                      </template>

                      <template v-else-if="answer.is_correct === 2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-6 h-6 text-gray-600"
                          fill="currentColor"
                        >
                          <path
                            d="M12 2C6.486 2 2 6.486 2 12c.001 5.515 4.487 10.001 10 10.001 5.514 0 10-4.486 10.001-10.001 0-5.514-4.486-10-10.001-10zm0 18.001c-4.41 0-7.999-3.589-8-8.001 0-4.411 3.589-8 8-8 4.412 0 8.001 3.589 8.001 8-.001 4.412-3.59 8.001-8.001 8.001z"
                          ></path>
                        </svg>
                      </template>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      // series: [
      //   this.correct_answers_count,
      //   this.wrong_answers_count,
      //   this.no_answers_count,
      // ],
      chartOptions: {
        labels: ["پاسخ های درست", "پاسخ های غلط", "بدون پاسخ"],
        colors: ["#32de84", "#D2122E", "#8090BC"],
        chart: {
          // height: 250,
          type: "pie",
          fontFamily: "iranyekanBakh",
          rtl: true,
          // toolbar: false,
        },
        // pie: {
        //   size: 200,
        // },
        // colors: ["#00a3ff"],
        dataLabels: {
          enabled: false,
        },
        // stroke: {
        //   curve: "smooth",
        // },
        // yaxis: {
        //   labels: {
        //     show: false,
        //     enabled: false,
        //   },
        // },
        // xaxis: {
        //   labels: {},
        //   type: "datetime",
        //   categories: [
        //     "1390",
        //     "1391",
        //     "1392",
        //     "1393",
        //     "1394",
        //     "1395",
        //     "1396",
        //     "1397",
        //     "1398",
        //     "1399",
        //   ],
        // },
        // tooltip: {
        //   x: {
        //     format: "yyyy",
        //   },
        //   y: {
        //     formatter: function (val) {
        //       return new Intl.NumberFormat().format(val) + " تومان";
        //     },
        //   },
        // },
      },
    };
  },
  // layout: "exam",
  middleware: "authenticated",

  async asyncData({ $dataApi, params }) {
    const id = params.id;

    try {
      const response = await $dataApi.get(
        `/v1/application/exam/${id}/school/result`
      );
      const result = response?.data;
      const exam = result.exam;
      const user = result.user;
      const answers = result.answers;
      const series = [
        result.correct_answers_count,
        result.wrong_answers_count,
        result.no_answers_count,
      ];

      console.log("result", result);

      return {
        exam,
        user,
        answers,
        series,
        result,
      };
    } catch (error) {}
  },
};
</script>
<style></style>
