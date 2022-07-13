<template>
    <div class="flex flex-wrap ml-[-13.5px] mr-[-13.5px] brand">
        <div class="brand-inner ml-[13.5px] mr-[12.5px] w-[43%] relative w-full md:w-[46%] lg:w-[22.6%] 2xl:w-[23.3%] h-[auto] 2xl:h-[366px] mb-[28px] cursor-pointer">
            <div class="brand-img">
                <img :src="brand1"/>
            </div>
            <div class="absolute w-[100%] h-[100%] left-0 top-0 flex justify-center items-center">
                <img class="w-[60%] lg:w-[150px]" :src="logo"/>
            </div>
        </div>
        <div class="brand-inner ml-[13.5px] mr-[12.5px] w-[43%] relative w-full md:w-[46%] lg:w-[22.6%] 2xl:w-[23.3%] h-[auto] 2xl:h-[366px] mb-[28px] cursor-pointer">
            <div class="brand-img">
                <img :src="brand2"/>
            </div>
            <div class="absolute w-[100%] h-[100%] left-0 top-0 flex justify-center items-center">
                <img class="w-[60%] lg:w-[150px]" :src="brandLogo"/>
            </div>
        </div>
        <div class="brand-inner ml-[13.5px] mr-[12.5px] w-[43%] relative w-full md:w-[46%] lg:w-[22.6%] 2xl:w-[23.3%] h-[auto] 2xl:h-[366px] mb-[28px] cursor-pointer">
            <div class="brand-img">
                <img :src="brand3"/>
            </div>
            <div class="absolute w-[100%] h-[100%] left-0 top-0 flex justify-center items-center">
                <img class="w-[60%] lg:w-[150px]" :src="brandLogo2"/>
            </div>
        </div>
        <div class="brand-inner ml-[13.5px] mr-[12.5px] w-[43%] relative w-full md:w-[46%] lg:w-[22.6%] 2xl:w-[23.3%] h-[auto] 2xl:h-[366px] mb-[28px] cursor-pointer">
            <div class="brand-img">
                <img :src="brand4"/>
            </div>
            <div class="absolute w-[100%] h-[100%] left-0 top-0 flex justify-center items-center">
                <img class="w-[60%] lg:w-[150px]" :src="brandLogo3"/>
            </div>
        </div>
        <div class="brand-inner ml-[13.5px] mr-[12.5px] w-[43%] relative w-full md:w-[46%] lg:w-[22.6%] 2xl:w-[23.3%] h-[auto] 2xl:h-[366px] mb-[28px] cursor-pointer">
            <div class="brand-img">
                <img :src="brand5"/>
            </div>
            <div class="absolute w-[100%] h-[100%] left-0 top-0 flex justify-center items-center">
                <img class="w-[60%] lg:w-[150px]" :src="brandLogo4"/>
            </div>
        </div>
        <div class="brand-inner ml-[13.5px] mr-[12.5px] w-[43%] relative w-full md:w-[46%] lg:w-[22.6%] 2xl:w-[23.3%] h-[auto] 2xl:h-[366px] mb-[28px] cursor-pointer">
            <div class="brand-img">
                <img :src="brand6"/>
            </div>
            <div class="absolute w-[100%] h-[100%] left-0 top-0 flex justify-center items-center">
                <img class="w-[60%] lg:w-[150px]" :src="brandLogo5"/>
            </div>
        </div>
        <div class="brand-inner ml-[13.5px] mr-[12.5px] w-[43%] relative w-full md:w-[46%] lg:w-[22.6%] 2xl:w-[23.3%] h-[auto] 2xl:h-[366px] mb-[28px] cursor-pointer">
            <div class="brand-img">
                <img :src="brand7"/>
            </div>
            <div class="absolute w-[100%] h-[100%] left-0 top-0 flex justify-center items-center">
                <img class="w-[60%] lg:w-[150px]" :src="brandLogo6"/>
            </div>
        </div>
        <div class="brand-inner ml-[13.5px] mr-[12.5px] w-[43%] relative w-full md:w-[46%] lg:w-[22.6%] 2xl:w-[23.3%] h-[auto] 2xl:h-[366px] mb-[28px]">
            <div class="brand-img">
                <img :src="brand8"/>
            </div>
            <div class="absolute w-[100%] h-[100%] left-0 top-0 flex justify-center items-center">
                <img class="w-[60%] lg:w-[150px]" :src="brandLogo7"/>
            </div>
        </div>
    </div>
</template>
<script>
    import logo from '../../assets/image/nivea logo.png'
    import brandLogo from '../../assets/image/brand-logo.png'
    import brandLogo2 from '../../assets/image/brand-logo2.png'
    import brandLogo3 from '../../assets/image/brand-logo3.png'
    import brandLogo4 from '../../assets/image/brand-logo4.png'
    import brandLogo5 from '../../assets/image/brand-logo5.png'
    import brandLogo6 from '../../assets/image/brand-logo6.png'
    import brandLogo7 from '../../assets/image/brand-logo7.png'
    import brand1 from '../../assets/image/brand1.png'
    import brand2 from '../../assets/image/brand2.png'
    import brand3 from '../../assets/image/brand3.png'
    import brand4 from '../../assets/image/brand4.png'
    import brand5 from '../../assets/image/brand5.png'
    import brand6 from '../../assets/image/brand6.png'
    import brand7 from '../../assets/image/brand7.png'
    import brand8 from '../../assets/image/brand8.png'

    export default{
        data: function () {
            return {
                logo: logo,
                brandLogo: brandLogo,
                brandLogo2: brandLogo2,
                brandLogo3: brandLogo3,
                brandLogo4: brandLogo4,
                brandLogo5: brandLogo5,
                brandLogo6: brandLogo6,
                brandLogo7: brandLogo7,
                brand1: brand1,
                brand2: brand2,
                brand3: brand3,
                brand4: brand4,
                brand5: brand5,
                brand6: brand6,
                brand7: brand7,
                brand8: brand8,
            }
        }
    }
</script>
