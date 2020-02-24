<template>
  <v-container fluid class="about_top">
Result
EDIT ON
<div id="app">
  <v-app>
    <v-form>
      <v-text-field
        v-model="text"
        :rules="rule"
        label="入力してください"
        required
      ></v-text-field>
 
      <v-btn
        :disabled="!text"
        color="success"
        @click="alert = !alert"
      >
        クリック
      </v-btn>
      <v-alert
        :value="alert"
        type="success"
        transition="scale-transition"
      >
        入力内容: {{ text }}
      </v-alert>
    </v-form>
  </v-app>
</div>
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