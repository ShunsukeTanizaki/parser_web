<template>
  <section class="contactas">
    <v-layout
      column
      wrap
      class="py-10 text-center"
      align-center
    >
      <v-flex xs12 sm4>
        <div v-cloak>
          <section v-bind:style="{height:fullheight}" style="">
            <h2 class=" mb-10"><p class="font-italic mt-12">
              Coming soon... 
            </p></h2>
          </section>
        </div>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
export default {
  name: "OrderTop",
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
};
</script>

<style scoped>
</style>