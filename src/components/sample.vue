<template>
  <v-container>
    <v-card id="product">
      <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
        <!-- slides -->
        <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
          <v-avatar tile="tile" size="150px" :color="slide">
            <img src="https://www.dropbox.com/s/a8813qmu9f5yixz/shoe_left.png?raw=1">
          </v-avatar>
        </swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'sample',
  data: () => ({
    swiperSlides: [
      "pink",
      "red",
      "yellow",
      "purple",
      "green",
      "orange",
      "blue"
    ],
    swiperOption: {
      initialSlide: 0,
      slidesPerView: 4,
      spaceBetween: 20,
      freeMode: true,
      watchOverflow: true,
      breakpoints: {
        1904: {
          slidesPerView: 4,
          spaceBetween: 20
        },
        1264: {
          slidesPerView: 4,
          spaceBetween: 20
        },
        960: {
          slidesPerView: 4,
          spaceBetween: 50
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 150
        },
        400: {
          slidesPerView: 2,
          spaceBetween: 150
        }
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    }
  }),
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    this.swiper.slideTo(3, 1000, false);
  },
  methods: {
    callback() {
      //read the API docs to see which slider events are available
    }
  }
}
</script>

<style>

</style>