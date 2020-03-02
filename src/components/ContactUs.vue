<template>
  <section class="">
    <v-layout
      column
      wrap
      class="py-10 text-center"
      align-center
    >
      <v-flex xs12 sm4>
        <div v-cloak>
          <section v-bind:style="{height:fullheight}" style="">
            <h2 class="headline mb-10">お問合わせはメールにて<br class="hidden-sm-and-up">
            ご連絡ください</h2>
          <span class="subheading mb-10">
            <a href="mailto:info@parser.jp"><v-icon>mdi-email</v-icon>  info@parser.jp</a>
            <span class="pl-4">担当：谷﨑</span><br>
            <br>
          </span>
          <span>※通常3営業日以内に<br class="hidden-sm-and-up">
          回答メールを送らせて頂いております
          </span>
          </section>
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
      fullheight: window.innerHeight- 230 + 'px',
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
</style>