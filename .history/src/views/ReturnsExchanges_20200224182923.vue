<template>
  <section >
    <v-container grid-list-xl class="">
      <v-layout row wrap justify-center class="my-6 mx-md-12">
        <v-flex xs12 class="mb-md-12 xs-md-2">
          <div class="text-center">
            <h2 class="display-1">返品・交換について</h2>
            <!-- <span class="subheading">
              payment shipping
            </span> -->
          </div>
        </v-flex>
        <v-flex xs12 class="my-4">
          <div class="text-left ">
            <h2 class="headline my-6">ご注意</h2>
            <span class="subheading grey--text text--darken-2">
              一度ご決定をいただいたデザインの変更は、出来る限りご遠慮願います。<br>
              <br>
              オーダーメイドという商品の性質上、ご成約後のお客様のご都合による解約キャンセルは原則として承っておりません。<br>
              <br>
              ご理解の上、ご依頼ご発注をお願い致します。<br>
              <br><br>
            </span>
            <v-divider></v-divider>
          </div>

          <!-- <div class="text-left">
            <h2 class="headline my-6">配送料</h2>
            <span class="subheading grey--text text--darken-2">
              送料全国無料<br>
              <br>
              代金引換手数料：330 円（税込）<br>
              <br>
              配送は日本国内に限らせていただきます。<br>
              <br><br>
            </span>
            <v-divider></v-divider>
          </div> -->

          <div class="text-left">
            <h2 class="headline my-8">お問い合わせ</h2>
            <span class="subheading">
              <!-- <v-text text to="/contsct">a</v-text> -->
              <a class=" grey--text text--darken-2" href="/contact">お問い合わせ</a><br>
              <!-- <br> -->
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
  name: 'returns-exchanges',
  components: {
  }
};
</script>