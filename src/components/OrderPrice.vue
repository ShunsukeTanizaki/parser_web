<template>
  <section >
    <v-container grid-list-xl class="">
      <h2 class="text-center headline pb-2">価格（税抜）</h2>
      <v-layout row wrap justify-center class="my-6 mx-md-12">
        
        <v-simple-table height="100%">
          <template>
            <thead>
              <tr>
                <th></th>
                <th class="title">硬式用</th>
                <th class="title">軟式用</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="subtitle-1">グラブ</td>
                <td>50,000-</td>
                <td>35,000-</td>
              </tr>
              <tr>
                <td class="subtitle-1">ミット</td>
                <td>52,000-</td>
                <td>37,000-</td>
              </tr>
              <tr class="grey darken-3">
                <td class="title white--text">オプション</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td class="subtitle-1">刺繍</td>
                <td>一ヵ所</td>
                <td>1,000〜</td>
              </tr>
              <tr>
                <td class="subtitle-1">刺繍ロゴ</td>
                <td></td>
                <td>別途お見積もり</td>
              </tr>
              <tr>
                <td class="subtitle-1">複数カラー</td>
                <td>3色以上</td>
                <td>1,500〜</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
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
  name: "OrderPrice",
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