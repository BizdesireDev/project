<template>
    <div class="headerTop max-w-[1920px] w-[100%] relative h-[100% ] ml-[auto] mr-[auto] pl-[20px] pr-[20px] lg:pl-[0] lg:pr-[0] bg-primary-100">
        <div class="flex justify-center items-end pl-[18px] pr-[18px] lg:h-[30px] flex-wrap pt-[20px] pb-[20px] lg:pt-[0] lg:pb-[3px]">
            <div class="">

            </div>
            <div class="">
                <ul class="list-none m-0 p-0 inline-flex">
                    <li class="font-Manrope text-white text-[12px] leading-[22px] pr-[14px] pl-[14px]">Εταιρία</li>
                    <li class="font-Manrope text-white text-[12px] leading-[22px] pr-[14px] pl-[14px]">Νέα</li>
                    <li class="font-Manrope text-white text-[12px] leading-[22px] pr-[14px] pl-[14px]">Επικοινωνία</li>
                    <li class="font-Manrope text-white text-[12px] leading-[22px] pr-[14px] pl-[14px]">Κατηγορίες</li>
                </ul>
            </div>
            <div class="flex justify-center items-center lg:absolute lg:right-[18px]">
                <p class="font-Manrope text-white text-[12px] leading-[22px]">Χρειάζεστε βοήθεια?  Καλέστε μας: 210 269 3600  &nbsp;&nbsp;&nbsp;</p><img :src="mobile" />
            </div>
        </div>
    </div>
</template>
<script>
    import mobile from '../../assets/image/mobile.png'
    export default{
        data: function () {
            return {
                mobile: mobile,
            }
        }
    }
</script>
