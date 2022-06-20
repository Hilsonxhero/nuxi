<template>
  <div class="bg-white rounded-lg p-5">
    <div class="mb-6">
      <span class="">موجودی شما : </span>
      <span> {{ $auth.user.balance }} تومان </span>
    </div>
    <vs-table v-model="selected">
      <template #header>
        <vs-input v-model="search" border placeholder="جستجو" />
      </template>
      <template #thead>
        <vs-tr>
          <vs-th> عنوان </vs-th>
          <vs-th> قیمت </vs-th>
          <!-- <vs-th>
            کد پیگیری
          </vs-th>
          <vs-th>
             شماره تراکنش
          </vs-th> -->
          <vs-th> تاریخ خرید </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr
          :key="i"
          v-for="(tr, i) in $vs.getPage(
            $vs.getSearch(purchases, search),
            page,
            max
          )"
          :data="tr"
          open-expand-only-td
        >
          <vs-td>
            {{ tr.title }}
          </vs-td>

          <vs-td>
            <template v-if="tr.status == 'increase'">
              <vs-button success flat> {{ tr.amount }} تومان </vs-button>
            </template>
            <template v-else>
              <vs-button warn gradient flat> {{ tr.amount }} تومان </vs-button>
            </template>
          </vs-td>
          <vs-td>
            {{ tr.created_at }}
          </vs-td>
        </vs-tr>
      </template>
      <template #notFound> نتیجه ای یافت نشد </template>
      <template #footer>
        <vs-pagination
          v-model="page"
          :length="$vs.getLength($vs.getSearch(purchases, search), max)"
        />
      </template>
    </vs-table>
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
    const res = await $dataApi.get("/v1/application/user/purchases");
    const purchases = res?.data;
    return {
      purchases,
    };
  },
};
</script>
