<template>
  <div class="mb-[40px] lg:mb-[80px] 2xl:mb-[113px] custom-carosel">
    <swiper
      class="swiper"
      :modules="modules"
      :space-between="10"
      :loop="true"
      :autoplay="{
        delay: 1500,
        disableOnInteraction: false
      }"
      slides-per-view="auto"
      :centered-slides="true"
      :pagination="{ clickable: true }"
    >
      <swiper-slide class="slide w-[60%] h-[300px] lg:h-[448px]">
        <div class="relative h-[100%]">
          <img :src="slider2" class="h-[100%] object-cover lg:object-fill" alt=""/>
          <div class="absolute top-[10px] left-[10px] md:top-[15px] md:left-[15px] lg:top-[28px] lg:left-[50px]">
            <img :src="sliderLogo" class="h-[100%]" alt=""/>
            <p class="font-Manrope text-[20px] leading-[24px] lg:text-[32px] lg:leading-[42px] font-bold text-white w-[55%] mb-[160px]">Γνωρίστε τη νέα σειρά δερμοκαλλυντικών προϊόντων</p>
          </div>
          <button class="absolute bottom-[10px] left-[10px] md:bottom-[15px] md:left-[15px] lg:bottom-[39px] lg:left-[50px] font-Manrope text-[14px] leading-[16px] text-white pt-[15px] pb-[15px] border border-border-img-100 pl-[13px] pr-[13px]">δείτε περισσότερα</button>
        </div>
      </swiper-slide>
      <swiper-slide class="slide w-[60%] h-[300px] lg:h-[448px]">
        <div class="relative h-[100%]">
          <img :src="slider3" class="h-[100%] object-cover lg:object-fill" alt=""/>
          <div class="absolute top-[10px] left-[10px] md:top-[15px] md:left-[15px] lg:top-[28px] lg:left-[50px]">
            <p class="font-Manrope text-[16px] leading-[20px] lg:text-[26px] lg:leading-[36px] text-white">Νέα προϊόντα</p>
            <p class="font-Manrope text-[20px] leading-[24px] lg:text-[32px] lg:leading-[42px] font-bold text-white mb-[160px]">Περιέκτης <br /> Με Διπλό Πώμα Child Proof <br />30ml 50τμχ</p>
          </div>
          <button class="absolute bottom-[10px] left-[10px] md:bottom-[15px] md:left-[15px] lg:bottom-[39px] lg:left-[50px] font-Manrope text-[14px] leading-[16px] text-white pt-[15px] pb-[15px] border border-border-img-100 pl-[13px] pr-[13px]">δείτε περισσότερα</button>
        </div>
      </swiper-slide>
      <swiper-slide class="slide w-[60%] h-[300px] lg:h-[448px]">
        <div class="relative h-[100%]">
          <img :src="slider1" class="h-[100%] object-cover lg:object-fill" alt=""/>
          <div class="absolute top-[10px] right-[10px] mdtop-[15px] md:right-[15px] lg:top-[28px] lg:right-[23.7px] text-right">
              <p class="font-Manrope text-[16px] leading-[20px] lg:text-[26px] lg:leading-[36px] text-white">Πιεσόμετρο <br /> Μπράτσου</p>            
          </div>
          <img :src="sliderLogo2" class="absolute bottom-[10px] right-[10px] md:bottom-[15px] md:right-[15px] lg:bottom-[39px] lg:right-[23.7px]"/>
          <!-- <button class="font-Manrope text-[14px] leading-[16px] text-white pt-[15px] pb-[15px] border border-border-img-100 pl-[13px] pr-[13px]">δείτε περισσότερα</button> -->
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>


<script>
  import 'swiper/css'
  import 'swiper/css/pagination'
  import { Pagination, Autoplay} from 'swiper'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import slider1 from '../../assets/image/slider1.png'
  import slider2 from '../../assets/image/slider2.png'
  import slider3 from '../../assets/image/slider3.png'
  import sliderLogo from '../../assets/image/slider-logo.png'
  import sliderLogo2 from '../../assets/image/slider-logo2.png'

  export default {
    title: 'Autoplay',
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination, Autoplay]
      }
    },
     data: function () {
          return {
              slider1: slider1,
              slider2: slider2,
              slider3: slider3,
              sliderLogo: sliderLogo,
              sliderLogo2: sliderLogo2,
          }
      }
  }
</script>