<template>
  <v-container fluid class="about_top">
    <v-container grid-list-lg>
      <v-layout column>
        <v-flex
          class="display-2 font-weight-black text-xs-center my-5"
        >お問合わせ</v-flex>
        <v-flex>
          <div class="headline mt-3  font-weight-bold">お問合わせフォーム
            
          </div>
          <p class="subheading mt-3">説明文</p>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "ContactUs"
};
</script>

<style scoped>
.about_top {
  width:300px;
}
</style>