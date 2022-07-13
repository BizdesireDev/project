<template>
    <div class="w-container-width relative h-[100%] ml-[auto] mr-[auto] block pl-[20px] pr-[20px] lg:pl-[0] lg:pr-[0]">
        <div class="w-[100%] bg-clip-content bg-primary-100 pt-[50px] pr-[0] pl-[0] pb-[20px] lg:pl-[0] lg:pr-[0] lg:pt-[67px] lg:pb-[67px] bg-no-repeat bg-right mb-[20px] lg:mb-[74px]">
             <img class="w-[120px] lg:w-[auto] absolute right-0 top-0 m-[auto] " :src="medical"/>
            <p class="font-Manrope font-bold text-[16px] leading-[20px] lg:text-[34px] lg:leading-[44px] mb-[43px] pr-[20px] pl-[20px] lg:pr-[0] pt-[80px] pb-[20px] lg:pt-[65px] lg:pb-[27px] lg:pl-[30px] 2xl:pl-[161px] lg:w-[916px] text-white"><sup class="text-[100px] lg:text-[150px] top-0 align-bottom">“</sup>Πάνω από 30 χρόνια δίπλα στον Έλληνα φαρμακοποιό και επαγγελματία υγείας<sub class="transform rotate-180 text-[100px] lg:text-[150px] top-[20px] lg:top-[10px] align-bottom">”</sub></p>
        </div>
    </div>
</template>
<script>
    import medical from '../../assets/image/medical.png'

    export default{
        data: function () {
            return {
                medical: medical,
            }
        }
    }
</script>