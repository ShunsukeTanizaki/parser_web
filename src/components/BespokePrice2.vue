<template>
  <section >
    <v-container grid-list-xl class="">
      <h2 class="text-center headline pb-2">価格</h2>
      <v-layout row wrap justify-center class="my-6 mx-md-12">
        
        <v-simple-table height="350px">
          <template v-slot:default>
            <thead>
              <tr>
                <th></th>
                <th class="title">硬式用</th>
                <th class="title">軟式用</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in price" :key="item.name">
                <td class="title">{{ item.name }}</td>
                <td class="body-1">{{ item.price1 }}</td>
                <td class="body-1">{{ item.price2 }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        
      </v-layout>
      <v-divider></v-divider>

      <v-layout
        column
        wrap
        class="py-10"
      >
        <v-flex xs12 class="m-4">
          <div class="text-left">
            <span class="subheading">
            </span>
          </div>
        </v-flex> 

      </v-layout>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "BespokePrice",
  data () {
    return {
      price: [
        {
          name: 'グラブ',
          price1: '￥50,000-（税抜）',
          price2: '￥30,000-（税抜）'
        },
        {
          name: 'ミット',
          price1: '￥52,000-（税抜）',
          price2: '￥32,000-（税抜）'
        },
        {
          name: 'オプション',
          options: [
            {name: '刺繍', price: '一箇所　1,000-'},
            {name: '', price: '1,000-'},
            {name: '', price: '1,000-'},
            {name: '', price: '1,000-'},
          ],
        },
      ],
    }
  },
};
</script>

<style scoped>
th, tr, td {
  padding: 10px 20px 10px 20px ;
}
</style>