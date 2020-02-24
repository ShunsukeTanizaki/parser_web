<template>
  <v-container fluid class="" style="padding:0;">

      <section>
        <v-layout
          column
          wrap
          class="my-12"
          align-center
        >

          <v-flex xs12 sm4>
            <div class="pb-6 mx-my-12">
              <h2 class="headline text-center mb-6">Philosophy</h2>
              <span class="subheading">
                <p class="font-italic mb-6">お客様お一人お一人にあったグラブ・ミットをお届けする為、<br>
                <br>
                  完全オーダーメイドを専門とし、素材選びから<br>
                  <br>
                  裁断・縫製・商品完成まで手仕事にこだわったものづくりをしています。</p>
              </span>
            </div>
          </v-flex>

          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>

                <v-flex xs12 md6>
                  <v-card flat class="transparent cyan lighten-5 white--text">
                    <v-img src="../assets/img09.jpg" class="pa-12">
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-center py-6">Bespoke</div>
                      </v-card-title>
                      <v-card-text>
                        昔から靴やスーツを仕立てることをbespoke（ビスポーク）と呼びますが、
                        これはお客様お一人お一人とお話し（be spoke）をしながら仕立てていくことに由来しています。<br>
                        私達もお客様と理想にあった形を作り上げていく過程を大切にしていきます。
                      </v-card-text>
                    </v-img>
                  </v-card>
                </v-flex>

                <v-flex xs12 md6>
                  <v-card flat class="transparent cyan lighten-5 white--text">
                    <v-img src="../assets/img10.jpg" class="pa-12">
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
                    <v-img src="../assets/img11.jpg" class="pa-12">
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
                    <v-img src="../assets/img11.jpg" class="pa-12">
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-center py-6">Japan made</div>
                      </v-card-title>
                      <v-card-text>
                        私達の先輩方が守ってきた伝統と技術に敬意を込めて。<br>
                        どんなに時代が変わろうと「MADE IN JAPAN」にこだわります。
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
name: 'AboutPhilosophy',
  components: {
  }
}
</script>

<style>

</style>