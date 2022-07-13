<template>
    <div class=" w-container-width relative pr-[20px] pl-[20px] lg:pr-[0] lg:pl-[0] h-[100% ] bg-[length:cover] h-[100%] mt-[20px] lg:mt-[61px] mb-[20px] lg:mb-[83px] lg:ml-[auto] lg:mr-[auto]">
        <div class="bg-register banner-detail top-0 w-[100%] left-0 text-white lg:pl-[96px] lg:pt-[59px] lg:pb-[45px] pl-[20px] pt-[20px] pb-[20px]">
            <p class="font-Manrope text-[17px] leading-[20px] lg:text-[26px] lg:leading-[32px] mb-[8px]">Είστε επαγγελματίας; </p>
            <p class="font-Manrope text-[26px] leading-[30px] lg:text-[36px] lg:leading-[46px] font-semibold mb-[20px] lg:mb-[43px]">Αποκτήστε πρόσβαση στο e-shop.</p>
            <button type="button" class="text-white bg-transparent text-[16px] leading-[19px] pt-[13px] pb-[14px] pl-[10px] pr-[10px] lg:pl-[0] lg:pr-[0] border lg:w-[198px] text-center">σύνδεση / εγγραφη</button>
        </div>
        <div class="absolute w-[60px] right-[30px] bottom-[0] lg:w-[auto] lg:bottom-[auto] lg:right-[71px] lg:top-[23%] mb-[20px] lg:mb-0">
            <img :src="logo" class="m-auto"/>
        </div>
    </div>
</template>
<script>
    import logo from '../../assets/image/register-logo.png'

    export default{
        data: function () {
            return {
                logo: logo,
            }
        }
    }
</script>
