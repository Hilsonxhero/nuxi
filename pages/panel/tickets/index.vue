<template>
  <div>
    <div class="mb-6">
      <vs-button
        to="/panel/tickets/create"
        relief
        size="large"
      >
        تیکت جدید
      </vs-button>
    </div>
    <div class="bg-white rounded-lg p-5">
      <vs-table
      >
        <template #header>
          <vs-input v-model="search" border placeholder="جستجو"/>
        </template>
        <template #thead>
          <vs-tr>

            <vs-th>
              عنوان
            </vs-th>

            <vs-th>
              وضعیت
            </vs-th>

            <vs-th>
              تاریخ ایجاد
            </vs-th>

            <vs-th>
              عملیات
            </vs-th>

          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr
            :key="i"
            v-for="(tr, i) in $vs.getPage($vs.getSearch(tickets, search), page, max)"
            :data="tr"
            open-expand-only-td
          >
            <vs-td>
              {{ tr.title }}
            </vs-td>

            <vs-td>
              <template v-if="tr.status == 'answered'">
                <vs-button
                  success
                  flat
                >
                  {{ tr.status_type }}
                </vs-button>
              </template>

              <template v-else-if="tr.status == 'pending'">
                <vs-button

                >
                  {{ tr.status_type }}
                </vs-button>
              </template>

              <template v-else-if="tr.status == 'open'">
                <vs-button
                  color="rgb(59,222,200)"
                  border
                >
                  {{ tr.status_type }}
                </vs-button>
              </template>

              <template v-else-if="tr.status == 'close'">
                <vs-button
                  warn
                  border
                >
                  {{ tr.status_type }}
                </vs-button>
              </template>

              <template v-else-if="tr.status == 'rejected'">
                <vs-button
                  danger
                  border
                >
                  {{ tr.status_type }}
                </vs-button>
              </template>

            </vs-td>
            <vs-td>
              {{ tr.created_at }}
            </vs-td>

            <vs-td>
              <div class="flex">
                <div class="ml-3">
                  <nuxt-link :to="{name : 'panel-tickets-id',params : {id : tr.id}}">
                    <vs-button
                      color="#f4f7f8"
                      icon
                      relief
                      class="text-gray-600"
                    >
                      <i class='bx bx-show-alt'></i>
                    </vs-button>
                  </nuxt-link>

                </div>
                <div>
                  <vs-button
                    icon
                    danger
                    relief
                  >
                    <i class='bx bx-trash'></i>
                  </vs-button>
                </div>
              </div>
            </vs-td>

          </vs-tr>
        </template>
        <template #footer>
          <vs-pagination v-model="page" :length="$vs.getLength($vs.getSearch(tickets, search), max)"/>
        </template>
      </vs-table>

    </div>
  </div>

</template>
<script>
export default {
  layout: "panel",
  data: () => ({
    editActive: false,
    edit: null,
    editProp: {},
    search: '',
    allCheck: false,
    page: 1,
    max: 5,
    active: 0,
  }),


  async asyncData({$dataApi}) {
    const res = await $dataApi.get("/v1/application/user/tickets");
    const tickets = res?.data;
    return {
      tickets,
    };
  },
}
</script>

