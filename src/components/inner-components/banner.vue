<template>
    <div class="banner p-[20px] pt-[13px] width-full max-w-[1920px] mr-[auto] ml-[auto] ">
        <div class="banner-upper flex-row flex mb-[19px] flex-wrap lg:flex-nowrap">
            <div class="w-[100%] max-w-[100%] relative mr-[0] lg:min-h-[300px;] 2xl:min-h-[416px;] mb-[20px] lg:max-w-[22.128%] lg:mr-[20px] lg:mb-[0]">
                <div class="banner-img h-[100%]">
                    <img :src="banner1" class="h-[100%] w-[100%]"/>
                </div>
                <div class="banner-detail absolute top-0 w-[100%] lg:h-[160px] 2xl:h-[208px] before:content-[''] before:mix-blend-multiply before:block before:w-[100%] before:h-[100%] before:absolute before:top-0 before-left-0 before:bg-back-100 left-0 text-white pr-[31px] pt-[20px] pb-[25px]">
                    <p class="text-right font-Manrope font-bold text-[20px] lg:text-[24px] 2xl:text-[28px] leading-[28px] 2xl:leading-[36px] mb-[5px] 2xl:mb-[45px]">Παιδικά <br />& Βρεφικά!</p>
                    <p class="text-right font-Manrope text-[16px] lg:text-[24px] leading-[56px]">KIDS CARE!</p>
                </div>
            </div>
            <div class="w-[100%] max-w-[100%] relative mr-[0] mb-[20px] min-h-[300px;] lg:min-h-[300px;] 2xl:min-h-[416px;] lg:max-w-[25.9%] lg:mr-[20px] lg:mb-[0]">
                <div class="banner-img h-[100%] bg-back-200">
                    <!-- <img :src="banner2"/> class="h-[100%]" -->
                </div>
                <div class="banner-detail w-[100%] h-[100%] text-white pr-[31px] pt-[50px] pl-[33px] absolute top-0" >
                    <p class="font-Manrope text-[20px] leading-[25px] lg:leading-[35px] 2xlleading-[44px] w-[68%] lg:text-[24px] 2xl:text-[30px] font-bold"><span class="font-[900] text-[50px] lg:text-[65px] 2xl:text-[110px]">30</span>χρόνια</p>
                    <p class="font-Manrope text-[20px] leading-[25px] lg:leading-[30px] 2xl:leading-[40px] w-[68%] lg:text-[24px] 2xl:text-[30px]">δίπλα στον Έλληνα φαρμακοποιό και επαγγελματία υγείας</p>
                </div>
            </div>
            <div class="w-[100%] max-w-[100%] relative lg:min-h-[300px;] 2xl:min-h-[416px;] lg:max-w-[50%]">
                <div class="banner-img h-[100%]">
                    <img :src="banner2" class="h-[100%] w-[100%]"/>
                </div>
            </div>
        </div>
        <div class="banner-bottom flex-row flex mb-[19px] flex-wrap lg:flex-nowrap">
            <div class=" w-[100%] max-w-[100%]  relative mr-[0] mb-[20px] lg:mb-[0] lg:mr-[20px] lg:min-h-[300px;] 2xl:min-h-[416px;] lg:max-w-[45.74%] ">
                <div class="banner-img h-[100%]">
                    <img :src="banner3" class="h-[100%] w-[100%]"/>
                </div>
                <div class="banner-detail absolute top-0 w-[100%] left-0 text-white pr-[20px] lg:pr-[48px] pt-[27px] pb-[25px]">
                    <p class="text-right font-Manrope text-[16px] lg:text-[20px] 2xl:text-[24px] leading-[32px] mb-[15px]">Sales</p>
                    <p class="text-right font-Manrope font-bold text-[18px] lg:text-[24px] 2xl:text-[28px] leading-[22px] lg:leading-[36px]">Γνωρίστε τη νέα σειρά <br />δερμοκαλλυντικών <br /> προϊόντων Galesyn®</p>
                </div>
            </div>
            <div class="w-[100%] max-w-[100%] lg:max-w-[30.71%] relative mr-[0] mb-[20px] lg:mb-[0] lg:mr-[20px] lg:min-h-[300px;] 2xl:min-h-[416px;]">
                    <div class="banner-img h-[100%]">
                        <img :src="banner4" class="h-[100%] w-[100%]"/>
                    </div>
                    <div class="banner-detail w-[100%] h-[100%] absolute text-black pr-[31px] pt-[27px] pl-[33px] top-0">
                        <p class="font-Manrope text-[16px] lg:text-[20px] 2xl:text-[24px] lg:leading-[32px] leading-[28px] mb-[15px]">new products</p>
                        <p class="font-Manrope text-[20px] lg:text-[24px] 2xl:text-[28px] lg:leading-[36px] leading-[25px] font-bold">Ενυδατικό <br />Γαλάκτωμα με <br />Εντομοαπωθητική <br />Δράση</p>
                    </div>
            </div>
            <div class="w-[100%] max-w-[100%] lg:max-w-[22.128%] relative lg:min-h-[300px;] 2xl:min-h-[416px;]">
                <div class="banner-img h-[100%]">
                    <img :src="banner5" class="h-[100%] w-[100%]"/>
                </div>
                <div class="banner-detail absolute top-0 w-[100%] h-[208px] left-0 text-white pl-[40px] lg:pl-[44px] pt-[27px] lg:pb-[25px]">
                    <p class="font-Manrope text-[16px] lg:text-[20px] 2xl:text-[24px] lg:leading-[32px] leading-[28px] mb-[10px] lg:mb-[15px]">new products</p>
                    <p class="font-Manrope text-[20px] lg:text-[24px] 2xl:text-[28px] lg:leading-[36px] leading-[25px] font-bold">Ωραίο μαλλί!</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import banner1 from '../../assets/image/banner-1.png'
    import banner2 from '../../assets/image/banner-2.png'
    import banner3 from '../../assets/image/banner-3.png'
    import banner4 from '../../assets/image/banner-4.png'
    import banner5 from '../../assets/image/banner-5.png'
    export default{
        data: function () {
            return {
                banner1: banner1,
                banner2: banner2,
                banner3: banner3,
                banner4: banner4,
                banner5: banner5,
            }
        }
    }
</script>