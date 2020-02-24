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
        <div class="text-center">
          <h2 class="headline mb-6">Philosophy</h2>
          <span class="subheading">
            <p class="font-italic mb-6">お客様お一人お一人にあったグラブ・ミットをお届けする為、<br>
            <br>
              完全オーダーメイドを専門とし、素材選びから、<br>
              <br>
              裁断・縫製・商品完成まで、職人の手仕事にこだわったものづくりをしています。</p>
          </span>
        </div>
      </v-flex>

          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>

                <v-flex xs12 md6>
                  <v-card flat class="transparent cyan lighten-5">
                    <v-card-text class="text-center">
                      <v-icon x-large class="blue--text text--lighten-2">mdi-account-voice</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">Bespoke</div>
                    </v-card-title>
                    <v-card-text>
                      昔から靴のオーダーをbespoke（ビスポーク）と呼びますが、
                      これはお客様お一人お一人と会話（speak）しながら制作することに由来しています<br>
                      Parserのグラブづくりにおいてもこだわりをお聞きする時間を大切にしていきます
                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex xs12 md6>
                  <v-card flat class="transparent lime lighten-5">
                    <v-card-text class="text-center">
                      <!-- <v-icon x-large class="blue--text text--lighten-2">mdi-cow</v-icon> -->
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Material</div>
                    </v-card-title>
                    <v-card-text>
                      革は天然のものである為、ひとつとして同じものがありません<br>
                      常にお客様にあった最高の素材を提供できるようにしています
                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex xs12 md6>
                  <v-card flat class="transparent deep-orange lighten-5">
                    <v-img src="../assets/img06.jpg"></v-img>
                    <v-card-text class="text-center">
                      <!-- <v-icon x-large class="blue--text text--lighten-2">mdi-account-voice</v-icon> -->
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">Hand made</div>
                    </v-card-title>
                    <v-card-text>
                      昔から靴のオーダーをbespoke（ビスポーク）と呼びますが、
                      これはお客様お一人お一人と会話（speak）しながら制作することに由来しています<br>
                      Parserのグラブづくりにおいてもこだわりをお聞きする時間を大切にしていきます
                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex xs12 md6>
                  <v-card flat class="transparent teal lighten-5">
                    <v-card-text class="text-center">
                      <!-- <v-icon x-large class="blue--text text--lighten-2">mdi-hand-right</v-icon> -->
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-center">Japan made</div>
                    </v-card-title>
                    <v-card-text>
                      日本で作られる本物のグラブ<br>
                      どんなに時代が変わろうと「MADE IN JAPAN」で作られたグラブで世界を目指します
                    </v-card-text>
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