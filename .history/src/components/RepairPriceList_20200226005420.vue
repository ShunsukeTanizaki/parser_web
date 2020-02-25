<template>
  <section >
    <v-container grid-list-xl class="">
      <v-layout row wrap justify-center class="my-6 mx-md-12">

        <v-simple-table height="310px">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left headline">修理価格表</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in service" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

      </v-layout>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "RepairPliceList",
  data () {
    return {
      service: [
        {
          name: '紐交換',
          price: '￥1,000- /本',
        },
        {
          name: 'ウェブ交換',
          price: '￥3,000〜',
        },
        {
          name: 'グリス補充',
          price: '￥3,000-',
        },
        {
          name: '捕球面破れ',
          price: '￥6,000-',
        },
        {
          name: 'メンテナンスプラン',
          price: '￥10,000-',
        },
      ],
    }
  },
};
</script>

<style scoped>
</style>