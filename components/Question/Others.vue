<template>
  <div class="mt-5 others-box" id="others-box" ref="others">
    <div class="my-3">
      <!--      <span-->
      <!--        class="h-7 w-7 rounded-full bg-blue-400 text-white flex items-center justify-center font-semibold"-->
      <!--        v-text="index"-->
      <!--      ></span>-->
    </div>
    <div v-html="question_text" class="mb-3"></div>

    <div class="flex flex-col space-y-10">
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Others",
  data() {
    return {
      question_text: "",
      answered: true,
      is_correct: 2,
    };
  },
  props: {
    question: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    changeHandler() {

    },
  },
  mounted() {
    const classes = `outline-none border-0 ring-0 border-b-2 border-gray-300 ml-3 py-1 px-2 focus:border-black others-inp-ui`;
    this.question_text = this.question.question_text.replace(
      /\+\+input\+\+/g,
      `
      <div class="flex items-center mb-3">
         <span
          class="h-7 w-7 rounded-full bg-blue-400 text-white flex items-center justify-center font-semibold"
        >
         ${this.index}
        </span>
       <input ref="test" class="${classes}" type='text' />
      </div>
`
    );

    let t = this.$refs.others;

    setTimeout(() => {
      const elements = t.querySelectorAll(`.others-inp-ui`);
      elements.forEach((e, index) => {
        e.addEventListener("input", (e) => {
          if (e.target.value === this.question.text) {
            this.is_correct = 1;
          } else {
            this.is_correct = 0;
          }
          this.$emit("answer", {
            id: this.question.id,
            question_id: this.question.id,
            answered: this.answered,
            option: this.question.id,
            answer: e.target.value,
            correct_answer: this.question.text,
            is_correct: this.is_correct,
            type: "6",
          });
        });
      });
    }, 2000);
  },
};
</script>

<style scoped>
.form-controller {
  @apply outline-none border-0 ring-0 border-b-2 border-gray-300 ml-3 py-1 px-2 focus:border-black;
}
</style>
