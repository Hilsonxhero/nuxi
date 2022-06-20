<template>
  <div class="bg-white rounded-lg p-5">
    <vs-table v-model="selected">
      <template #header>
        <vs-input v-model="search" border placeholder="جستجو" />
      </template>
      <template #thead>
        <vs-tr>
          <vs-th> عنوان </vs-th>
          <!-- <vs-th> قیمت </vs-th> -->
          <vs-th> تاریخ خرید </vs-th>
          <vs-th> تاریخ آخرین بازدید </vs-th>
        </vs-tr>
      </template>
      <template #notFound> نتیجه ای یافت نشد </template>
      <template #tbody>
        <vs-tr
          :key="i"
          v-for="(tr, i) in $vs.getPage(
            $vs.getSearch(courses, search),
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
                name: 'courses-id-slug',
                params: { id: tr.book.id, slug: tr.book.slug },
              }"
              >{{ tr.book.name }}</nuxt-link
            >
          </vs-td>

          <vs-td>
            {{ tr.created_at }}
          </vs-td>
          <vs-td>
            {{ tr.visit_at }}
          </vs-td>
        </vs-tr>
      </template>
      <template #footer>
        <vs-pagination
          v-model="page"
          :length="$vs.getLength($vs.getSearch(courses, search), max)"
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
    const res = await $dataApi.get("/v1/application/user/courses");
    const courses = res?.data;
    return {
      courses,
    };
  },
};
</script>
