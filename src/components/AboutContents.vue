<template>
  <v-container fluid class="" style="padding:0;">
      <section>
        <v-layout
          column
          wrap
          class="my-12"
          align-center
        >

          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>

                <v-flex xs12 md6 class="">
                  <v-card flat class="transparent cyan lighten-5 white--text">
                    <v-img src="../assets/img09.jpg" class="pa-6">
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-center py-6">Bespoke</div>
                      </v-card-title>
                      <v-card-text>
                        昔から靴やスーツを仕立てることをbespoke（ビスポーク）と呼びますが、<br class="hidden-sm-and-up">
                        これはお客様お一人お一人と対話<br class="hidden-sm-and-up">（be spoke）しながら仕立てていくことに由来しています。<br>
                        私達もお客様と理想にあった形を作り上げていく過程を大切にしていきます。
                      </v-card-text>
                    </v-img>
                  </v-card>
                </v-flex>

                <v-flex xs12 md6>
                  <v-card flat class="transparent cyan lighten-5 white--text">
                    <v-img src="../assets/img10.jpg" class="pa-6">
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-center py-6">Material</div>
                      </v-card-title>
                      <v-card-text>
                        革は天然のものである為、ひとつとして同じものがありません。<br>
                        その時々で最高の素材を仕入れていくことはもちろんですが、ご要望に合わせて
                        常にお客様にあった最高の素材を提供できるように努力し続けます。
                      </v-card-text>
                    </v-img>
                  </v-card>
                </v-flex>


                <v-flex xs12 md6>
                  <v-card flat class="transparent cyan lighten-5 white--text">
                    <v-img src="../assets/img11.jpg" class="pa-6">
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-center py-6">Japan made</div>
                      </v-card-title>
                      <v-card-text>
                        <br>
                        私達の先輩方が守ってきた伝統と技術に敬意を込めて<br class="hidden-sm-and-down">
                        どんなに時代が変わろうと「MADE IN JAPAN」にこだわります。<br><br><br>
                      </v-card-text>
                    </v-img>
                  </v-card>
                </v-flex>

              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>
  </v-container>
</template>

<script>
export default {
name: 'AboutContents',
  components: {
  }
}
</script>

<style>

</style>