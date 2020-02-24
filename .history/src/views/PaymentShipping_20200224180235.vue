<template>
  <section >
    <v-container grid-list-xl class="">
      <v-layout row wrap justify-center class="my-6 mx-md-12">
        <v-flex xs12 class="mb-md-12 xs-md-2">
          <div class="text-center">
            <h2 class="display-1">お支払い・配送について</h2>
            <!-- <span class="subheading">
              payment shipping
            </span> -->
          </div>
        </v-flex>
        <v-flex xs12 class="my-4">
          <div class="text-left ">
            <h2 class="headline my-6">お支払方法</h2>
            <span class="subheading grey--text text--darken-2">
              お支払いは、クレジットカード、代金引換のいずれかをご利用いただくことが可能です。<br>
              <br>
              ・ クレジットカード（VISA、MasterCard、AMEX、DINERS、JCB）<br>
              ※海外で発行されたクレジットカードはご利用いただけません。予めご了承ください。<br>
              <br>
              ・ 代金着払い<br>
              現金、クレジットカード、デビットカードがご利用いただけます。<br>
              商品お届け時に、商品と引換えで配達業者<br>
              代引手数料：330 円（税込）<br>
              <br><br>
            </span>
            <v-divider></v-divider>
          </div>

          <div class="text-left grey--text text--darken-2">
            <h2 class="headline my-6">配送料</h2>
            <span class="subheading">
              送料全国無料<br>
              <br>
              代金引換手数料：330 円（税込）<br>
              <br>
              配送は日本国内に限らせていただきます。<br>
              <br>
              ご注文時に指定いただいた配送指定日にお届けいたします。※交通状況の事情によりお届けが遅くなる場合がございます。<br>
              <!-- 時間帯は以下よりお選びいただけます（年末年始、製品未入荷・品切れ時を除く）。<br>
              午前中 / 12 ～ 14 時 / 14 ～ 16 時 / 16 ～ 18 時 / 18 ～ 21 時<br> -->
              <br><br>
            </span>
            <v-divider></v-divider>
          </div>

          <div class="text-left">
            <h2 class="headline my-6">お問い合わせ</h2>
            <span class="subheading">
              <!-- <v-text text to="/contsct">a</v-text> -->
              <a href="/contact">contact</a><br>
              <br><br>
            </span>
          </div>

        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>

export default {
  name: 'order',
  components: {
  }
};
</script>