<template>
  <div class="flex items-center mb-3">
    <div class="">
      <span
        class="h-7 w-7 rounded-full bg-blue-400 text-white flex items-center justify-center font-semibold"
        v-text="index"
      ></span>
    </div>

    <div class="flex items-center ml-2">
      <select
        class="w-28 border-gray-200 pt-1 pb-1"
        v-model="answer"
        @change="changeHandler(question)"
      >
        <option></option>
        <option
          v-for="attribute in question.attributes"
          :value="attribute.title"
        >
          {{ attribute.title }}
        </option>
      </select>
      <span class="ml-2">{{ question.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropSelect",
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
    option: {
      type: Object,
      required: false,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    changeHandler(item) {
      if (item.answer_text === this.answer) {
        this.is_correct = 1;
      } else {
        this.is_correct = 0;
      }

      this.$emit("answer", {
        id: item.id,
        question_id: this.question.question_id,
        answered: this.answered,
        option: item.id,
        answer: this.answer,
        correct_answer: item.answer_text,
        is_correct: this.is_correct,
        type: item.type,
      });
    },
  },
};
</script>

<style scoped></style>
