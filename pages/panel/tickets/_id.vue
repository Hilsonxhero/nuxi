<template>
  <div>
    <div class="bg-white rounded-xl p-7">

      <div class="mb-8">
        <div class="flex justify-between flex-wrap items-center">

          <div>
            <h2 class="text-primary text-lg">عنوان تیکت</h2>
            <h4 class="mt-4 text-gray-400">تیکت شماره 43576553</h4>
          </div>
          <div>
            <vs-button
            >
              {{ status }}
            </vs-button>
          </div>
        </div>


        <div v-for="(reply,index) in replies" :key="index"
             class="flex  bg-gray-200 p-7 w-8/12  rounded-lg mt-8"
             :class="[reply.is_answer ? 'flex justify-end support-answer mr-auto text-right' : 'flex justify-start ml-auto']"
        >
          <div>

          </div>

          <p class="text-justify" :class="{'text-white w-full' : reply.is_answer}">
            {{ reply.body }}
          </p>
        </div>
      </div>

      <div class="mt-12"></div>

    </div>
  </div>
</template>

<script>
export default {
  name: "courses",
  layout: "panel",
  data() {
    return {
      replies : [],
      status : '',
    }
  },
  methods: {},

  mounted() {

  },

  async asyncData({$dataApi, params}) {
    try {
      const res = await $dataApi.get(`/v1/application/user/tickets/replies/${params.id}`);
      const replies = res?.data;
      const status = replies ? replies[0].ticket.status_type : ''
      return {
        replies,
        status
      };
    }catch (e) {
      console.log("eeeeeee",e)
    }

  },
}
</script>

<style scoped>
.support-answer {
  background: rgb(25, 91, 255) !important;
  box-shadow: 0px 10px 20px -10px rgb(25, 91, 255) !important;
}
</style>
