<template>
  <div class="flex items-center mb-3">
    <div class="">
      <span
        class="h-7 w-7 rounded-full bg-blue-400 text-white flex items-center justify-center font-semibold"
        v-text="index"
      ></span>
    </div>

    <div class="ml-2">
      <div class="flex items-center">
        <select
          class="w-28 border-gray-200 pt-1 pb-1"
          v-model="answer"
          @change="changeHandler(question)"
        >
          <option></option>
          <option value="YES">YES</option>
          <option value="NO">NO</option>
          <option value="NOT GIVEN">NOT GIVEN</option>
        </select>
        <div class="ml-3">{{ question.text }}</div>
      </div>
      <!--    <span class="ml-2">Non-English language courses</span>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "YNN",
  data() {
    return {
      answer: null,
      answered: true,
      is_correct : 2
    };
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
        is_correct: this.is_correct,
        correct_answer: item.answer_text,
        type: item.type,
      });
    },
  },
};
</script>

<style scoped></style>
