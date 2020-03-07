<template>
  <section>
    <v-container grid-list-xl class="">
      <v-layout row wrap justify-center class="my-6 mx-md-12">
        <v-flex xs12 class="mb-md-12 xs-md-2">
          <div class="text-center">
            <h2 class="display-1">Q & A</h2>
            <!-- <span class="subheading">
              payment shipping
            </span> -->
          </div>
        </v-flex>

        <v-flex xs12 class="text-left my-4">
            <!-- <h2 class="headline my-8">ビスポークについて</h2> -->
          <template v-for="list in lists">
            <v-list :key="list.name">
              <div>
                <v-list-item-content>
                  <v-list-item-title class="headline py-4">
                    {{ list.title }}
                  </v-list-item-title>
                </v-list-item-content>
              </div>
              <div>
                <v-list-item
                  v-for="item in list.item"
                  :key="item.question"
                  class="pa-0"
                >
                  <v-list-item-content
                    class="subheading grey--text text--darken-3 pb-8"
                    style="white-space:pre-wrap; word-wrap:break-word;">
                    <span>
                      {{ item.question }}
                    </span>
                    <br>
                    <span class="pt-6">
                      {{ item.answer }}
                    </span>
                  </v-list-item-content>
                </v-list-item>
              </div>
              <v-divider></v-divider>
            </v-list>
          </template>

          <contact-link></contact-link>

        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import ContactLink from '@/components/ContactLink';

export default {
  name: "qa",
  components: {
    ContactLink
  },
  data(){
    return{
      lists: [
        {
          title: 'ビスポークについて',
          item: [
            {
              question: `Q. オーダーするには事前予約が必要ですか？`,
              answer: `A. 当店は完全予約制ではございません。ご予約なしでご来店頂いてご注文可能です。\n※ただし当日の混み具合によってはお待たせしてしまう場合はございますのでご来店の日時がお決まりの方はお電話にてご予約頂けますとご案内がスムーズになります。`
            },
            {
            question: `Q. オーダーにはどれくらい時間が掛かりますか`,
            answer: `A. 約1時間、頂いております。\nお急ぎのお客様はショップ定員にご相談頂けますようにお願いします。`
            },
            {
              question: `Q. インターネットでオーダーできますか？`,
              answer: `A. 申し訳ございませんが、現在インターネットでのオーダーは承っておりません。\n※　只今開発中です。`
            },
            {
              question: `Q. 気に入っているグラブを持参して、同じサイズや似たデザインのものを作れますか？`,
              answer: `A. 持ち込み頂き、なるべく近いサイズのスーツを作ることは可能です。\nただ、ベースとなるパターン（型紙）、素材が他社製品と違いますので全く同じスーツを再現することはできません。\n特殊なデザインや同じ着用感など全てのご要望には対応できない点をご了承頂けると幸いです。`
            }
          ]
        },
        {
          title: '納期について',
          item: [
            { question: `Q. 仕上がりまでどのくらい時間がかかりますか？`,
              answer: `A. スーツは約3週間から5週間掛かります。シャツは約3週間から1か月かかります。\nお選び頂く生地や仕立てによって仕上り日は異なりますので、詳しくは店舗スタイリストにお問い合わせ下さい。`
            },
            {
            question: `Q. 納期を早めることは可能ですか？`,
            answer: `A. 有償になりますがエクスプレスラインをご用意しており、12日仕上がりのオプションがございます。詳しくは店舗にてお問い合わせください。`
            }
          ]
        },
        {
          title: 'お支払い',
          item: [
            {
              question: `Q. 料金は先払い（注文時）、後払い（受取時）どちらでしょう？`,
              answer: `A. ご注文時（先払い）にてお支払い頂いております。`
            },
            {
            question: `Q. クレジットカードでの支払いはできますか？`,
            answer: `A. ご利用いただけます。（JCB, VISA, Master Card, AMERICAN EXPRESS）`
            },
          ]
        },
        {
          title: '修理について',
          item: [
            {
              question: `Q. 仕上がったスーツの修理やお直しはできますか？`,
              answer: `A. 修理、お直し可能でございます。\n購入後、６ケ月は無償にてお直し致します。\n但し、下記等の場合は期間内でも修理代金を頂戴致します。\n・お好みによりデザイン変更をご希望なさる場合'\n・事故または故意により破損された場合'`,
            },
            {
            question: 'Q. 他店で購入したスーツは修理できますか？',
            answer: 'A. はい。有償にてご修理賜ります。詳細につきましてはご相談ください。'
            },
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>