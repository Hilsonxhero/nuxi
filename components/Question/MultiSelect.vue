<template>
  <div>
    <div class="my-3">
      <span
        class="h-7 w-7 rounded-full bg-blue-400 text-white flex items-center justify-center font-semibold"
        v-text="index"
      ></span>
    </div>
    <div v-html="question.text" class="mb-3"></div>

    <div class="flex flex-col space-y-10">
      <div>
        <ul class="space-y-3">
          <li v-for="option in question.options">
            <label class="flex items-center">
              <span class="ml-2">{{ option.text }}</span>
              <input
                type="checkbox"
                :name="index"
                class="order-first"
                :value="option.text"
                v-model="answers"
                @change="changeHandler(question, option)"
              />
            </label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MultiSelect",
  data() {
    return {
      answers: [],
      answered: true,
      correct_answer_ids: [],
      is_correct : 2
    };
  },
  watch: {
    answers(newQuestion, oldQuestion) {
      // this.question.student_answer = [...this.answers]
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
      this.is_correct = this.equalsIgnoreOrder(
        this.correct_answer_ids,
        this.answers
      );

      this.answered = !this.answers.length <= 0;
      this.$emit("answer", {
        id: item.id,
        question_id: this.question.id,
        answered: this.answered,
        option: option.id,
        answer: this.answers,
        correct_answer: this.correct_answer_ids,
        is_correct: this.is_correct,
        type: item.type,
      });
    },
    equalsIgnoreOrder(a, b) {
      if (a.length !== b.length) return false;
      const uniqueValues = new Set([...a, ...b]);
      for (const v of uniqueValues) {
        const aCount = a.filter((e) => e === v).length;
        const bCount = b.filter((e) => e === v).length;
        if (aCount !== bCount) return false;
      }
      return true;
    },
  },

  mounted() {
    const correct_answer = this.question.options.filter(
      (item) => item.answer === 1
    );

    correct_answer.map((answer) => this.correct_answer_ids.push(answer.text));
  },
};
</script>

<style scoped></style>
