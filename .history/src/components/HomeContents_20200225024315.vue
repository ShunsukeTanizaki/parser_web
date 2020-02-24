<template>
  <section>
    <!-- 作業風景02 -->
    <v-flex xs12 md12 style="padding:0;">
      <v-parallax src="../assets/img01.jpg" height="380">
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-4 text-center">Philosophy of manufacturing</div>
          <em class="white--text">Pursue a world that can only be done by hand made.</em>
          <v-btn
            class="mt-12"
            color=""
            dark
            large
            outlined
            href="/About"
          >
            Philosophy
          </v-btn>
        </v-layout>
      </v-parallax>
    </v-flex>

    <!-- グラブ -->
    <v-flex xs12>
      <v-container grid-list-xl fluid>
        <v-layout row wrap align-center>
          <v-flex xs12 md6 class="hidden-sm-and-down">
            <v-card flat class="transparent text-center">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline mb-4">Gloves</div>
              </v-card-title>
              <p><em>たくましく、しなやかに<br>
                  一人ひとりの手に合わせてグラブに関節をつくることを<br>
                  心がけています</em></p>
              <v-btn
                class="mt-12"
                color="black"
                dark
                large
                outlined
                href="/collection"
              >
                Gallery
              </v-btn>
            </v-card>
          </v-flex>

          <v-flex xs12 md6 class="pa-0">
            <v-parallax src="../assets/glove01.jpg" height="380">
              <v-layout column align-center justify-center class="hidden-md-and-up pa-4">
                <div class="headline white--text mb-4 text-center">Gloves</div>
                <p><em>たくましく、しなやかに<br>
                  一人ひとりの手に合わせてグラブに関節をつくることを
                  心がけています</em></p>
                <v-btn
                  class="mt-12"
                  color="grey lighten-5"
                  dark
                  large
                  outlined
                  href="/collection"
                >
                  Gallery
                </v-btn>
              </v-layout>
          </v-parallax>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>

    <!-- ミット -->
    <v-flex xs12>
      <v-container grid-list-xl fluid>
        <v-layout row wrap align-center>
          <v-flex xs12 md6 class="pa-0">
            <v-parallax src="../assets/mitt02.jpg" height="380">
              <v-layout column align-center justify-center class="hidden-md-and-up pa-4">
                <div class="headline white--text mb-4 text-center">Mitts</div>
                <p><em>耐久性への挑戦<br>
                  操作性と耐久性を高い次元で求められるミットは芯材から選び抜き<br>
                  プロのブルペンキャッチャーからも信頼を得ています</em></p>
                <v-btn
                  class="mt-12"
                  color="grey lighten-5"
                  dark
                  large
                  outlined
                  href="/collection"
                >
                  Gallery
                </v-btn>
              </v-layout>
            </v-parallax>
          </v-flex>

          <v-flex xs12 md6 class="hidden-sm-and-down">
            <v-card flat class="transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline mb-4  text-center">Mitts</div>
              </v-card-title>
              <p><em>耐久性への挑戦<br>
                  操作性と耐久性を高い次元で求められるミットは芯材から選び抜き<br>
                  プロのブルペンキャッチャーからも信頼を得ています</em></p>
              <v-btn
                class="mt-12"
                color="black"
                dark
                large
                outlined
                href="/collection"
              >
                Gallery
              </v-btn>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>

    <!-- 作業風景02 -->
    <v-flex xs12 md12 style="padding:0;">
      <v-parallax src="../assets/img03.jpg" height="380">
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-4 text-center">Try to make a grab on Bespoke</div>
          <em class="white--text">We will deliver a companion of the ground</em>
          <v-btn
            class="mt-12"
            color=""
            dark
            large
            outlined
            href="/order"
          >
            Order
          </v-btn>
        </v-layout>
      </v-parallax>
    </v-flex>

  </section>
</template>

<script>
export default {
  name: "HomeContents"
};
</script>

<style scoped>
</style>