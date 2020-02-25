<template lang="pug">
  .page
    h1.headline.page_headline Contact 
      .sub お問い合わせ
    form
      input(name="SPREADSHEET_ID" type="hidden" value="1RTlomP3hXQZhHw3arZfng3dJeGJAnz3EcreOeYM1npA")
      input(name="SHEET_NAME" type="hidden" value="フォームデータ")
      .form
        label.form__label メールアドレス
        input(type="email" name="your-email" placeholder="your@email.com").wide
      .form
        label.form__label お名前
        input(type="text" name="your-name" placeholder="Your Name").wide
      .form
        label.form__label メッセージ
          span.label-required 必須
        textarea(name="your-message" placeholder="Message" rows="8" required)#message
      .form.text-center
        button(type="button" v-on:click="sendMessage()")#submit.form_submit Submit
</template>

<script>
import ContactUs from '@/components/ContactUs';

export default {
  name: 'contact',
  components: {
    ContactUs,
  }
};
</script>