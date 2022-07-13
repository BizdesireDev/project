<script setup>
import Product from './inner-components/product.vue'
import Header from './header.vue'
import Banner from './inner-components/banner.vue'
import Register from './inner-components/register.vue'
import MoreProduct from './inner-components/moreProduct.vue';
import BabyProduct from './inner-components/babyProduct.vue';
import Brands from './inner-components/brands.vue';
import Medical from './inner-components/medical.vue';
import Sellers from './inner-components/sellers.vue';
import Arrival from './inner-components/arrival.vue';
import Rating from './inner-components/rating.vue';
import Footer from './footer.vue';
import MoreProduct2 from './inner-components/moreProduct2.vue';
import Instagram from './inner-components/instagram.vue';
import ProductBanner from './inner-components/product-banner.vue';
import Categories from './inner-components/categories.vue';
// import Footer from './footer.vue';
</script>

<template>
  <div>
      <Header />
      <Banner />
      <div class="products-listing w-container-width ml-[auto] mr-[auto] mb-[45px] pl-[20px] pr-[20px] lg:pl-[0] lg:pr-[0]">
        <h5 class="font-Manrope font-semibold text-[20px] lg:text-[26px] leading-[36px] mb-[28px] text-typography-100">Νέα Προϊόντα</h5>
        <!-- <div class="product-listing-inner ml-[-13px] mr-[-13px] flex flex-wrap">
          <Product class="mr-[14px] ml-[14px] mb-[31px] w-[286px]" />
          <Product class="mr-[14px] ml-[14px] mb-[31px] w-[286px]" />
          <Product class="mr-[14px] ml-[14px] mb-[31px] w-[286px]" />
          <Product class="mr-[14px] ml-[14px] mb-[31px] w-[286px]" />
          <Product class="mr-[14px] ml-[14px] mb-[31px] w-[286px]" />
          <Product class="mr-[14px] ml-[14px] mb-[31px] w-[286px]" />
          <Product class="mr-[14px] ml-[14px] mb-[31px] w-[286px]" />
          <Product class="mr-[14px] ml-[14px] mb-[31px] w-[286px]" />
          <Product class="mr-[14px] ml-[14px] mb-[31px] w-[286px]" />
          <Product class="mr-[14px] ml-[14px] mb-[31px] w-[286px]" />
        </div> -->
        <Product />
      </div>
      <ProductBanner />
      <div class="w-container-width relative ml-[auto] mr-[auto] mb-[20px] lg:mb-[61px] pl-[20px] pr-[20px] lg:pl-[0] lg:pr-[0]">
      <h5 class="font-Manrope font-semibold text-[20px] lg:text-[26px] leading-[36px] mb-[24px] text-typography-100 ">Διάλεξε κατηγορία</h5>
      <Categories />
      <a href="#" class="font-Manrope font-bold text-[20px] text-typography-1000 text-center block pt-[34px]">Όλες οι κατηγορίες</a>
    </div>
    <Register />
    <div class="more-products-section w-container-width ml-[auto] mr-[auto] mt-[40px] mb-[65px] pl-[20px] pr-[20px] lg:pl-[0] lg:pr-[0]">
      <h5 class="font-Manrope font-semibold text-[20px] lg:text-[26px] leading-[36px] mb-[15px] lg:mb-[28px] text-typography-100">Περισσότερα Προϊόντα</h5>
      <MoreProduct />
    </div>
    <BabyProduct />
    <div class="brands w-container-width relative h-[100%] ml-[auto] mr-[auto] mb-[35px] pl-[20px] pr-[20px] lg:pl-[0] lg:pr-[0]">
        <h5 class="font-Manrope font-semibold text-[20px] lg:text-[26px] leading-[36px] mb-[28px] text-typography-100">Γνωρίστε τα Brands</h5>
        <Brands />
        <a href="#" class="font-Manrope text-[20px] leading-[36px] text-typography-300 mt-[3px] text-center block">Δείτε περισσότερα</a>
    </div>
    <Medical />
    <div class="sellers w-container-width relative h-[100%] ml-[auto] mr-[auto] mb-[0] lg:mb-[40px] 2xl:mb-[67px] pl-[20px] pr-[20px] lg:pl-[0] lg:pr-[0]">
      <h5 class="font-Manrope font-semibold text-[20px] lg:text-[26px] leading-[36px] mb-[28px] text-typography-100">Best Sellers</h5>
      <Sellers />
    </div>
    <div class="more-products-section w-container-width ml-[auto] mr-[auto] mb-[40px] lg:mb-[65px] pl-[20px] pr-[20px] lg:pl-[0] lg:pr-[0]">
      <span class="block font-Manrope font-semibold text-[20px] leading-[36px] text-typography-100">δείτε ακόμα</span>
      <h5 class="font-Manrope font-semibold text-[20px] lg:text-[26px] leading-[36px] mb-[28px] text-typography-100">Περισσότερα Προϊόντα</h5>
      <MoreProduct2 />
    </div>
    <Arrival />
    <Rating />
    <Instagram />
    <Footer />
  </div>
</template>
