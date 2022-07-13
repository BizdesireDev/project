<template>
<div class="pb-[20px] custom-carosel2">
    <swiper
    class="swiper"
      :modules="modules"
      :space-between="7"
      :navigation="true"
      :loop="true"
      :autoplay="{
        delay: 1500,
        disableOnInteraction: false
      }"
      :pagination="{ clickable: true }"
      :breakpoints="{
        '640': {
          slidesPerView: 2,
          spaceBetween: 20
        },
        '768': {
          slidesPerView: 4,
          spaceBetween: 40
        },
        '1024': {
          slidesPerView: 7,
          spaceBetween: 10
        }
      }"
    >
      <swiper-slide class="slide m-[auto]">
        <div class="">
            <img :src="swipper1" class="ml-[auto] mr-[auto]"/>
            <p class="font-Manrope text-[16px] leading-[22px] text-center mt-[15px] h-[22px]">Pack</p>
        </div>
      </swiper-slide>
      <swiper-slide class="slide m-[auto]">
        <div class="">
            <img :src="swipper2" class="ml-[auto] mr-[auto]"/>
            <p class="font-Manrope text-[16px] leading-[22px] text-center mt-[15px] h-[22px]">Α’ Yλες</p>
        </div>
      </swiper-slide>
      <swiper-slide class="slide m-[auto]">
        <div class="">
            <img :src="swipper3" class="ml-[auto] mr-[auto]"/>
            <p class="font-Manrope text-[16px] leading-[22px] text-center mt-[15px] h-[22px]">Αναλωσιμα & Εξοπλισμος Ιατρειου Αναλωσιμα & Εξοπλισμος Ιατρειου</p>
        </div>
      </swiper-slide>
      <swiper-slide class="slide m-[auto]">
        <div class="">
            <img :src="swipper4" class="ml-[auto] mr-[auto]"/>
            <p class="font-Manrope text-[16px] leading-[22px] text-center mt-[15px] h-[22px]">Ατομικη Φροντιδα Ευεξια</p>
        </div>
      </swiper-slide>
      <swiper-slide class="slide m-[auto]">
        <div class="">
            <img :src="swipper5" class="ml-[auto] mr-[auto]"/>
            <p class="font-Manrope text-[16px] leading-[22px] text-center mt-[15px] h-[22px]">Υγεια - Ομορφιa</p>
        </div>
      </swiper-slide>
      <swiper-slide class="slide m-[auto]">
        <div class="">
            <img :src="swipper6" class="ml-[auto] mr-[auto]"/>
            <p class="font-Manrope text-[16px] leading-[22px] text-center mt-[15px] h-[22px]">Εργαστηριακος Εξοπλισμος</p>
        </div>
      </swiper-slide>
      <swiper-slide class="slide m-[auto]">
        <div class="">
            <img :src="swipper7" class="ml-[auto] mr-[auto]"/>
            <p class="font-Manrope text-[16px] leading-[22px] text-center mt-[15px] h-[22px]">Ιατρικες Συσκευες</p>
        </div>
      </swiper-slide>
      <swiper-slide class="slide m-[auto]">
        <div class="">
            <img :src="swipper2" class="ml-[auto] mr-[auto]"/>
            <p class="font-Manrope text-[16px] leading-[22px] text-center mt-[15px] h-[22px]">Α’ Yλες</p>
        </div>
      </swiper-slide>
      <swiper-slide class="slide m-[auto]">
        <div class="">
            <img :src="swipper3" class="ml-[auto] mr-[auto]"/>
            <p class="font-Manrope text-[16px] leading-[22px] text-center mt-[15px] h-[22px]">Αναλωσιμα & Εξοπλισμος Ιατρειου</p>
        </div>
      </swiper-slide>
      <swiper-slide class="slide m-[auto]">
        <div class="">
            <img :src="swipper4" class="ml-[auto] mr-[auto]"/>
            <p class="font-Manrope text-[16px] leading-[22px] text-center mt-[15px] h-[22px]">Ατομικη Φροντιδα Ευεξια</p>
        </div>
      </swiper-slide>
      <swiper-slide class="slide m-[auto]">
        <div class="">
            <img :src="swipper5" class="ml-[auto] mr-[auto]"/>
            <p class="font-Manrope text-[16px] leading-[22px] text-center mt-[15px] h-[22px]">Υγεια - Ομορφιa</p>
        </div>
      </swiper-slide>
      <swiper-slide class="slide m-[auto]">
        <div class="">
            <img :src="swipper6" class="ml-[auto] mr-[auto]"/>
            <p class="font-Manrope text-[16px] leading-[22px] text-center mt-[15px] h-[22px]">Pack</p>
        </div>
      </swiper-slide>
      <swiper-slide class="slide m-[auto]">
        <div class="">
            <img :src="swipper4" class="ml-[auto] mr-[auto]"/>
            <p class="font-Manrope text-[16px] leading-[22px] text-center mt-[15px] h-[22px]">Ατομικη Φροντιδα Ευεξια</p>
        </div>
      </swiper-slide>
      <swiper-slide class="slide m-[auto]">
        <div class="">
            <img :src="swipper5" class="ml-[auto] mr-[auto]"/>
            <p class="font-Manrope text-[16px] leading-[22px] text-center mt-[15px] h-[22px]">Υγεια - Ομορφιa</p>
        </div>
      </swiper-slide>
      <swiper-slide class="slide m-[auto]">
        <div class="">
            <img :src="swipper6" class="ml-[auto] mr-[auto]"/>
            <p class="font-Manrope text-[16px] leading-[22px] text-center mt-[15px] h-[22px]">Pack</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { Pagination, Autoplay, Navigation} from 'swiper'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/pagination'
  import 'swiper/css/navigation'
  import swipper1 from '../../assets/image/swipper1.png'
  import swipper2 from '../../assets/image/swipper2.png'
  import swipper3 from '../../assets/image/swipper3.png'
  import swipper4 from '../../assets/image/swipper4.png'
  import swipper5 from '../../assets/image/swipper5.png'
  import swipper6 from '../../assets/image/swipper6.png'
  import swipper7 from '../../assets/image/swipper7.png'

  export default defineComponent({
    title: 'Autoplay',
    name: 'swiper-example-responsive-breakpoints',
    title: 'Responsive breakpoints Loop mode / Infinite loop per',
    // url: import.meta.url,
    components: {
      Swiper,
      SwiperSlide
    },
    setup() {
      return {
        modules: [Pagination, Navigation, Autoplay]
      }
    },
     data: function () {
        return {
            swipper1: swipper1,
            swipper2: swipper2,
            swipper3: swipper3,
            swipper4: swipper4,
            swipper5: swipper5,
            swipper6: swipper6,
            swipper7: swipper7,
        }
    }
  })
</script>