<template>
  <section >
    <v-container grid-list-xl class="">
      <h2 class="text-center headline pb-2">価格（税抜）</h2>
      <v-layout row wrap justify-center class="my-6 mx-md-12">
        
        <v-simple-table height="100%">
          <template>
            <thead>
              <tr class="grey darken-3">
                <th></th>
                <th class="title white--text">硬式用</th>
                <th class="title white--text">軟式用</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="subtitle-1">グラブ</td>
                <td>60,000-</td>
                <td>40,000-</td>
              </tr>
              <tr>
                <td class="subtitle-1">ミット</td>
                <td>63,000-</td>
                <td>43,000-</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr class="grey darken-3">
                <td class="title white--text">オプション</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td class="subtitle-1" link="/price">刺繍</td>
                <td>一ヵ所</td>
                <td>1,000〜</td>
              </tr>
              <tr>
                <td class="subtitle-1">刺繍ロゴ</td>
                <td></td>
                <td>別途お見積もり</td>
              </tr>
              <tr>
                <td class="subtitle-1">本体3色以上</td>
                <td>1色増えるごと</td>
                <td>＋2,000</td>
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
              <span class="subheading grey--text text--darken-3">
                ※現在オンラインでのご注文は受け付けておりません。<br>
                ビスポークのアポイントについては、
                <a class=" grey--text text--darken-2" href="/contact">こちら</a><br class="hidden-sm-and-up">
                にお問い合わせください。<br>
              <br>
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
          price1: '￥55,000-（税抜）',
          price2: '￥35,000-（税抜）'
        },
        {
          name: 'ミット',
          price1: '￥58,000-（税抜）',
          price2: '￥38,000-（税抜）'
        },
        {
          name: 'オプション',
          options: [
            {name: '刺繍', price: '一箇所　1,000〜'},
            {name: 'ロゴ刺繍', price: '別途お見積もり'},
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
td{
  padding: 10px 10px 10px 20px;
}
</style>