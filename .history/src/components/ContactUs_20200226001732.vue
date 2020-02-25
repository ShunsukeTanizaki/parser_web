<template>
  <section class="">
    <v-layout
      column
      wrap
      class="py-10"
      align-center
    >
      <v-flex xs12 sm4>
        <div class="text-center">
          <h2 class="headline mb-6">お問合わせはメールにてご連絡ください</h2>
          <span class="subheading pb-2">
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
  name: "ContactUs"
};
</script>

<style scoped>
a{
  text-decoration: none;
  font-size: 1.2em;
}
</style>