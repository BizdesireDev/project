<template>
    <div class="w-container-width relative h-[100%] ml-[auto] mr-[auto] more-products mb-[55px] pl-[20px] pr-[20px] lg:pl-[0] lg:pr-[0]">
        <div class="bg-babyProduct relative pt-[20px] pl-[0] pr-[0] pb-[20px] lg:pt-[42px] lg:pl-[53px] lg:pr-[58px] lg:pb-[54px] flex justify-end bg-[length:cover] bg-no-repeat before:content-[''] before:bg-back-blendMode before:mix-blend-multiply before:block before:w-[100%] before:h-[100%] before:absolute before:top-0 before-left-0 lg:before:content-[none]">
            <div class="lg:absolute lg:left-[53px] lg:top-[33px] pl-[10px] lg:pl-[0]">
                <img :src="logo"/>
            </div>
            <div class="w-[666px] text-white text-right pr-[10px] ">
                <div class="text-white text-right pb-[24px] lg:pb-[124px]">
                    <p class="font-Manrope text-[13px] leading-[18px] lg:text-[20px] lg:leading-[28px] font-bold mb-[7px]">Βρεφική Περιποίηση</p>
                    <p class="font-Manrope text-[15px] leading-[20px] lg:text-[32px] lg:leading-[44px] font-semibold">Εξερεύνησε τη βρεφική <br /> συλλογή της NIVEA  <br />και βρες την περιποίηση <br /> που χρειάζεται το μωρό σου</p>
                </div>
                <button type="button" class="text-white bg-transparent text-[16px] leading-[19px] pt-[7px] pb-[7px] lg:pt-[13px] lg:pb-[14px] border w-[160px] lg:w-[184px] text-center hover:bg-back-900 hover:text-typography-100">δείτε περισσότερα</button>
            </div>
        </div>
    </div>
</template>
<script>
    import logo from '../../assets/image/nivea logo.png'

    export default{
        data: function () {
            return {
                logo: logo,
            }
        }
    }
</script>
