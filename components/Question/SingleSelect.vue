<template>
  <div class="">
    <div class="">
      <span
        class="h-7 w-7 rounded-full bg-blue-400 text-white flex items-center justify-center font-semibold"
        v-text="index"
      ></span>
    </div>

    <div v-html="question.text" class="mb-3"></div>

    <div class="space-y-3">
      <ul>
        <li v-for="option in question.options">
          <label class="flex items-center">
            <span class="ml-2">{{ option.text }}</span>
            <input
              type="radio"
              :name="index"
              class="order-first"
              :value="option.text"
              v-model="answer"
              @change="changeHandler(question, option)"
            />
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleSelect",
  data() {
    return {
      answer: "",
      answered: true,
      is_correct: 2,
    };
  },
  watch: {
    answer(newQuestion, oldQuestion) {
      // this.question.student_answer = this.answer
    },
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
    changeHandler(item, option) {
      const answer = (this.question.correct_answer = item.options.find(
        (item) => item.answer === 1
      ));

      if (answer.text === this.answer) {
        this.is_correct = 1;
      } else {
        this.is_correct = 0;
      }

      this.$emit("answer", {
        id: item.id,
        question_id: this.question.id,
        answered: this.answered,
        option: option.id,
        answer: this.answer,
        is_correct: this.is_correct,
        correct_answer: answer.text,
        type: item.type,
      });
    },
  },
};
</script>

<style scoped></style>
