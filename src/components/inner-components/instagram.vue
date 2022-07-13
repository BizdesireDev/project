<template>
    <div class="w-container-width relative h-[100%] ml-[auto] mr-[auto] block pl-[20px] pr-[20px] lg:pl-[0] lg:pr-[0] instagram">
        <h5 class="center text-[24px] leading-[36px] text-center font-semibold block mb-[14px] ">Instagram Feed</h5>
        <ul class="m-0 p-0 list-none mr-[-4px] ml-[-4px] inline-flex w-[100%] justify-between flex-wrap lg:flex-nowrap">
            <li class="mr-[4px] ml-[4px] w-[47%] lg:w-[254px] h-[auto] 2xl:h-[254px] mb-[10px] lg:mb-[0]">
                <img :src="instagram1" />
                <div class="instagram-hover absolute hidden items-center justify-center left-0 top-0 w-[100%] h-[100%] before:content-[''] before:bg-back-blend before:mix-blend-multiply before:block before:w-[100%] before:h-[100%] before:absolute before:top-0">
                    <img :src="instagram" />
                </div>
            </li>
            <li class="mr-[4px] ml-[4px] w-[47%] lg:w-[254px] h-[auto] 2xl:h-[254px] mb-[10px] lg:mb-[0]">
                <img :src="instagram2" />
                <div class="instagram-hover absolute hidden items-center justify-center left-0 top-0 w-[100%] h-[100%] before:content-[''] before:bg-back-blend before:mix-blend-multiply before:block before:w-[100%] before:h-[100%] before:absolute before:top-0">
                    <img :src="instagram" />
                </div>
            </li>
            <li class="mr-[4px] ml-[4px] w-[47%] lg:w-[254px] h-[auto] 2xl:h-[254px] mb-[10px] lg:mb-[0]">
                <img :src="instagram3" />
                <div class="instagram-hover absolute hidden items-center justify-center left-0 top-0 w-[100%] h-[100%] before:content-[''] before:bg-back-blend before:mix-blend-multiply before:block before:w-[100%] before:h-[100%] before:absolute before:top-0">
                    <img :src="instagram" />
                </div>
            </li>
            <li class="mr-[4px] ml-[4px] w-[47%] lg:w-[254px] h-[auto] 2xl:h-[254px] mb-[10px] lg:mb-[0]">
                <img :src="instagram4" />
                <div class="instagram-hover absolute hidden items-center justify-center left-0 top-0 w-[100%] h-[100%] before:content-[''] before:bg-back-blend before:mix-blend-multiply before:block before:w-[100%] before:h-[100%] before:absolute before:top-0">
                    <img :src="instagram" />
                </div>
            </li>
            <li class="mr-[4px] ml-[4px] w-[47%] lg:w-[254px] h-[auto] 2xl:h-[254px] mb-[10px] lg:mb-[0]">
                <img :src="instagram5" />
                <div class="instagram-hover absolute hidden items-center justify-center left-0 top-0 w-[100%] h-[100%] before:content-[''] before:bg-back-blend before:mix-blend-multiply before:block before:w-[100%] before:h-[100%] before:absolute before:top-0">
                    <img :src="instagram" />
                </div>
            </li>
            <li class="mr-[4px] ml-[4px] w-[47%] lg:w-[254px] h-[auto] 2xl:h-[254px] mb-[10px] lg:mb-[0]">
                <img :src="instagram6" />
                <div class="instagram-hover absolute hidden items-center justify-center left-0 top-0 w-[100%] h-[100%] before:content-[''] before:bg-back-blend before:mix-blend-multiply before:block before:w-[100%] before:h-[100%] before:absolute before:top-0">
                    <img :src="instagram" />
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    import instagram from '../../assets/image/instagram.png'
    import instagram1 from '../../assets/image/instagram1.png'
    import instagram2 from '../../assets/image/instagram2.png'
    import instagram3 from '../../assets/image/instagram3.png'
    import instagram4 from '../../assets/image/instagram4.png'
    import instagram5 from '../../assets/image/instagram5.png'
    import instagram6 from '../../assets/image/instagram6.png'

    export default{
        data: function () {
            return {
                instagram: instagram,
                instagram1: instagram1,
                instagram2: instagram2,
                instagram3: instagram3,
                instagram4: instagram4,
                instagram5: instagram5,
                instagram6: instagram6,
            }
        }
    }
</script>