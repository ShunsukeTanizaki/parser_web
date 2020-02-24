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
          <div class="text-left">
            <h2 class="headline mb-6">お支払方法</h2>
            <span class="subheading">
              お支払いは、クレジットカード、代金引換のいずれかをご利用いただくことが可能です。<br>
              ・ クレジットカード（VISA、MasterCard、AMEX、DINERS、JCB）<br>
              ※海外で発行されたクレジットカードはご利用いただけません。予めご了承ください。<br>
              <br><br>
              ・ 代金着払い<br>
              現金、クレジットカード、デビットカードがご利用いただけます。<br>
              商品お届け時に、商品と引換えで配達業者<br>
              <br>
            </span>
            <v-divider></v-divider>
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