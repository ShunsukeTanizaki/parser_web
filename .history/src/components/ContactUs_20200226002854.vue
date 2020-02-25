<template>
  <section class="contactas">
    <v-layout
      column
      wrap
      class="py-10 text-center"
      align-center
    >
      <v-flex xs12 sm4>
        <div div id="mail_form" v-cloak >
          <h2 class="headline mb-6">お問合わせはメールにてご連絡ください</h2>
          <span class="subheading">
            <a href="mailto:info@parser.jp"><v-icon>mdi-email</v-icon>  info@parser.jp</a><br>
          </span>
          <span>※2営業日日以内に返信のない場合はお手数ですが再度ご連絡をお願いいたします。</span>
        </div>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return {
      //画面の高さを定義
      fullheight: window.innerHeight+'px',
      message: '',
      methods: {
        resize: function() {
        //画面のサイズが変更になる時の処理
        this.fullheight = window.innerHeight+'px';
        },
      },
      // イベント
      mounted() {
        window.addEventListener('resize', this.resize);
      }
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  font-size: 1.2em;
}
.contactas {
  height: 100％;
}
</style>