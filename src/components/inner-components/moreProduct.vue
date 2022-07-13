<template>
    <div class="relative h-[100%] ml-[auto] mr-[auto] more-products">
        <div class="flex flex-row flex-wrap lg:flex-nowrap 2xl:h-[761px]">
            <div class="w-[100%] max-w-[100%] lg:max-w-[49%] mb-[20px] lg:mb-[0] lg:mr-[29px]">
                <div class="more-img relative h-[100%]">
                    <img :src="more1" class="w-[100%] h-[100%]"/>
                </div>
                <badge class="text-[14px] absolute bg-black top-[21px] left-[16px] rounded-[4px] pt-[3px] pb-[5px] pl-[13px] pr-[13px] font-Manrope text-white leading-[20px] text-center font-bold">BEE SUN SAFE</badge>
                <div class="desc w-[281px] absolute left-[16px] bottom-[21px] text-white">
                    <p class="font-Manrope text-[18px] leading-[28px] font-bold mb-[7px]">Apivita</p>
                    <p class="font-Manrope text-[14px] leading-[18px] ">Ενυδατική Κρέμα-Gel Προσώπου με Χρώμα SPF50</p>
                </div>
            </div>
            <div class="w-[100%] max-w-[100%] lg:max-w-[49%]">
                <div class="flex flex-row flex-wrap lg:flex-nowrap justify-between 2xl:h-[365px] mb-[31px]">
                    <div class="w-[48%] max-w-[100%] md:max-w-[48%] lg:max-w-[48%] lg:mb-[0] lg:mr-[29px]">
                         <div class="more-img relative h-[100%]">
                            <img :src="more2" class="h-[100%]"/>
                        </div>
                        <badge class="absolute bg-black text-[14px] top-[21px] left-[16px] rounded-[4px] pt-[0] pb-[0] pl-[14px] pr-[14px] font-Manrope text-white leading-[25px] text-center font-bold">0%</badge>
                        <div class="desc w-[100%] absolute left-[0] pl-[10px] pr-[10px] 2xl:pl-[0] 2xl:pr-[0] 2xl:left-[16px] bottom-[10px] lgbottom-[21px] ">
                            <p class="font-Manrope text-[14px] lg:text-[18px] leading-[18px] lg:leading-[28px] font-bold mb-[7px] text-typography-100">Nivea Cellular Luminous630</p>
                            <p class="font-Manrope text-[10px] lg:text-[14px] leading-[14px] lg:leading-[18px] lg:h-[22px] font-medium text-typography-400">Κρέμα ημέρας κατά των κηλίδων</p>
                        </div>
                    </div>
                    <div class="w-[48%] max-w-[100%] md:max-w-[48%] lg:max-w-[48%]">
                         <div class="more-img relative h-[100%]">
                            <img :src="more3" class="h-[100%]"/>
                        </div>
                        <badge class="absolute bg-black text-[14px] top-[21px] left-[16px] rounded-[4px] pt-[0] pb-[0] pl-[14px] pr-[14px] font-Manrope text-white leading-[25px] text-center font-bold">0%</badge>
                        <div class="desc w-[100%] absolute left-[0] pl-[10px] pr-[10px] 2xl:pl-[0] 2xl:pr-[0] 2xl:left-[16px] bottom-[10px] lgbottom-[21px] ">
                            <p class="font-Manrope text-[14px] lg:text-[18px] leading-[18px] lg:leading-[28px] font-bold mb-[7px] text-typography-100">Nivea Cellular Luminous630</p>
                            <p class="font-Manrope text-[10px] lg:text-[14px] leading-[14px] lg:leading-[18px] lg:h-[22px] font-medium text-typography-400">Κρέμα ημέρας κατά των κηλίδων</p>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row flex-wrap lg:flex-nowrap justify-between 2xl:h-[365px]">
                    <div class="w-[48%] max-w-[100%] md:max-w-[48%] lg:max-w-[48%] lg:mb-[0] lg:mr-[29px]">
                         <div class="more-img relative h-[100%]">
                            <img :src="more4" class="h-[100%]"/>
                        </div>
                        <badge class="absolute bg-black text-[14px] top-[21px] left-[16px] rounded-[4px] pt-[0] pb-[0] pl-[14px] pr-[14px] font-Manrope text-white leading-[25px] text-center font-bold">20%</badge>
                        <div class="desc w-[100%] absolute left-[0] pl-[10px] pr-[10px] 2xl:pl-[0] 2xl:pr-[0] 2xl:left-[16px] bottom-[10px] lgbottom-[21px] ">
                            <p class="font-Manrope text-[14px] lg:text-[18px] leading-[18px] lg:leading-[28px] font-bold mb-[7px] text-typography-100">Αντηλιακή Προστασία</p>
                            <p class="font-Manrope text-[10px] lg:text-[14px] leading-[14px] lg:leading-[18px] lg:h-[22px] font-medium text-typography-400">Intense Bronze Lotion spf6</p>
                        </div>
                    </div>
                    <div class="w-[48%] max-w-[100%] md:max-w-[48%] lg:max-w-[48%]">
                         <div class="more-img relative h-[100%]">
                            <img :src="more5" class="h-[100%]"/>
                        </div>
                        <div class="desc w-[100%] absolute left-[16px] bottom-[21px] text-white">
                            <p class="font-Manrope text-[14px] lg:text-[18px] leading-[18px] lg:leading-[28px] font-bold mb-[7px]">Aqua Beelicious</p>
                            <p class="font-Manrope text-[10px] lg:text-[14px] leading-[14px] lg:leading-[18px] lg:h-[22px] font-medium">Gel Ενυδάτωσης ελαφριάς υφής</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import more1 from '../../assets/image/more-1.png'
    import more2 from '../../assets/image/more-2.png'
    import more3 from '../../assets/image/more-3.png'
    import more4 from '../../assets/image/more-4.png'
    import more5 from '../../assets/image/more-5.png'

    export default{
        data: function () {
            return {
                more1: more1,
                more2: more2,
                more3: more3,
                more4: more4,
                more5: more5,
            }
        }
    }
</script>