<template>
  <section >
    <v-container grid-list-xl class="">
      <v-layout row wrap justify-center class="my-6 mx-md-12">

        <v-flex xs12 class="mb-md-12 xs-md-2">
          <div class="text-center">
            <h2 class="display-1">ケアガイド</h2>
            <span class="subheading">
              Care Guide
            </span>
          </div>
        </v-flex>

        <v-flex xs12 md5>
          <v-card class="mx-auto" tile>
            <v-img
              class="white--text align-end"
              height="100%"
              src="../assets/care02.jpg"
              >
              <v-card-title></v-card-title>
            </v-img>
          </v-card>
        </v-flex>

        <v-flex xs12 sm6 offset-lg1>
          <v-card flat class="transparent">
            <v-card-title primary-title class="mt-md-12">
              <div class="title mt-md-12">普段のお手入れ、ブラシクリーン</div>
            </v-card-title>
            <v-card-text class="body-1">
              雨で濡れている場合や汚れがひどい場合は先に硬く絞ったタオルでしっかりと泥を落とし、日陰で十分に乾かしてください。
              <br><br class="hidden-sm-and-down">
              使用後は毎回馬毛のブラシで全体をブラッシングし、土やホコリをしっかりと落とします。<br>
              特にウェブや指先のレース周りは汚れが落ちにくいので入念にブラシをかけます。
              <br><br class="hidden-sm-and-down">
              グラブをバッグに入れっぱなしにしておくと汗が溜まったままになって重くなったり、カビの原因になってしまいます。
              陽の当たらない風通しの良い場所で保管してください。<br>
              <br><br class="hidden-sm-and-down">
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 sm5 class="pl-md-0">
          <v-card flat class="transparent">
            <v-card-title primary-title class=" pt-md-0">
              <div class="title">オイルを使ったお手入れ</div>
            </v-card-title>
            <v-card-text class="body-1">
              グラブレザーはオイルが中まで均一に浸透していますので、毎日オイルを塗る必要はありません。<br>
              毎日ハードな練習をする学生でも週に1、2度、週末しか使用しない社会人の方だと1ヶ月に1度で十分です。<br>
              <br class="hidden-sm-and-down">
              ブラッシング・陰干しのあと、汚れ落としのローションで全体をサッと拭きあげます。<br>
              次にクリームを少量ずつ布にとり薄く均等に塗ることを心がけてください。<br>
              ※できればロウ成分の少ないオイルをお勧めいたします。<br>
              <br class="hidden-sm-and-down">
              豚毛のブラシをお持ちであればクリームを全体に馴染ませるようにブラッシングしていきます。<br>
              5分ほど放置した後、乾いた布で余分なクリームを拭きあげます。<br>
              <br class="hidden-sm-and-down">
              <br class="hidden-sm-and-down">
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs12 sm6 offset-md1>
          <v-card class="mx-auto" max-width="" tile>
            <v-img
              class="white--text align-end"
              height="100%"
              src="../assets/care03.jpg"
              >
              <v-card-title></v-card-title>
            </v-img>
          </v-card>
        </v-flex>
        <!-- 推奨商品追加 -->
      </v-layout>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "HowToCare"
};
</script>

<style scoped>
</style>