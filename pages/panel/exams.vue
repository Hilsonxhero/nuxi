<template>
  <div class="bg-white rounded-xl p-10">
    <vs-table v-model="selected">
      <template #header>
        <vs-input v-model="search" border placeholder="جستجو" />
      </template>
      <template #thead>
        <vs-tr>
          <vs-th> عنوان </vs-th>
          <!-- <vs-th> قیمت </vs-th> -->
          <vs-th> نوع آزمون </vs-th>
          <vs-th> وضعیت آزمون </vs-th>
          <vs-th> تاریخ خرید </vs-th>
          <vs-th> عملیات </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr
          :key="i"
          v-for="(tr, i) in $vs.getPage(
            $vs.getSearch(exams, search),
            page,
            max
          )"
          :data="tr"
          :is-selected="!!selected.includes(tr)"
          not-click-selected
          open-expand-only-td
        >
          <vs-td>
            <nuxt-link
              :to="{
                name: 'exams-id-slug',
                params: { id: tr.exam.id, slug: tr.exam.slug },
              }"
            >
              {{ tr.exam.name }}
            </nuxt-link>
          </vs-td>
          <!-- <vs-td> {{ tr.exam.price }} تومان </vs-td> -->
          <vs-td>
            {{ tr.exam.type_name }}
          </vs-td>

          <vs-td>
            <vs-button success flat v-if="tr.status">
              {{ tr.status_title }}
            </vs-button>

            <vs-button warning flat v-else>
              {{ tr.status_title }}
            </vs-button>
          </vs-td>

          <vs-td>
            {{ tr.created_at }}
          </vs-td>

          <vs-td>
            <template v-if="tr.status">
              <div class="flex items-center">
                <nuxt-link
                  :to="{
                    name: 'kind-id-school',
                    params: { kind: 'school', id: tr.exam.id },
                  }"
                >
                  <vs-button border> شرکت مجدد در آزمون </vs-button>
                </nuxt-link>

                <nuxt-link
                  class="mr-3"
                  :to="{
                    name: 'kind-id-result',
                    params: { kind: 'school', id: tr.exam.id },
                  }"
                >
                  <vs-button border>مشاهده نتایج</vs-button>
                </nuxt-link>
              </div>
            </template>

            <template v-else>
              <nuxt-link
                :to="{
                  name: 'kind-id-school',
                  params: { kind: 'school', id: tr.exam.id },
                }"
              >
                <vs-button border> شرکت در آزمون </vs-button>
              </nuxt-link>
            </template>
          </vs-td>
        </vs-tr>
      </template>
      <template #notFound> نتیجه ای یافت نشد </template>

      <template #footer>
        <vs-pagination
          v-model="page"
          :length="$vs.getLength($vs.getSearch(exams, search), max)"
        />
      </template>
    </vs-table>

    <vs-dialog v-model="editActive">
      <template #header> Change Prop {{ editProp }} </template>
      <vs-input
        @keypress.enter="editActive = false"
        v-if="editProp == 'email'"
        v-model="edit[editProp]"
      />
      <vs-select
        @change="editActive = false"
        block
        v-if="editProp == 'name'"
        placeholder="Select"
        v-model="edit[editProp]"
      >
        <vs-option label="Vuesax" value="Vuesax"> Vuesax </vs-option>
        <vs-option label="Vue" value="Vuejs"> Vue </vs-option>
        <vs-option label="Javascript" value="Javascript">
          Javascript
        </vs-option>
        <vs-option disabled label="Sass" value="Sass"> Sass </vs-option>
        <vs-option label="Typescript" value="Typescript">
          Typescript
        </vs-option>
        <vs-option label="Webpack" value="Webpack"> Webpack </vs-option>
        <vs-option label="Nodejs" value="Nodejs"> Nodejs </vs-option>
      </vs-select>
    </vs-dialog>
  </div>
</template>
<script>
export default {
  layout: "panel",
  data: () => ({
    editActive: false,
    edit: null,
    editProp: {},
    search: "",
    allCheck: false,
    page: 1,
    max: 5,
    active: 0,
    selected: [],
  }),

  async asyncData({ $dataApi }) {
    const res = await $dataApi.get("/v1/application/user/exams");
    const exams = res?.data;
    return {
      exams,
    };
  },
};
</script>
