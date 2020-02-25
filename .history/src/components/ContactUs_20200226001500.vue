<template>
  <section class="grey darken-3">
    <v-layout
      column
      wrap
      class="py-10"
      align-center
    >
      <v-flex xs12 sm4>
        <div class="text-center white--text">
          <h2 class="headline mb-6">お問合わせはメールにてご連絡ください</h2>
          <span class="subheading">
            <a href="mailto:info@parser.jp"><v-icon>mdi-email</v-icon>  info@parser.jp</a>
          </span>
          <span>※現在は当社の製品に限って修理を受け付けています。</span>
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