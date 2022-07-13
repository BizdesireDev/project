<script setup>
</script>

<template>
    <div class="newsletter w-container-width relative h-[100% ] mt-[48px] mb-[34.5px] ml-[auto] mr-[auto] pl-[20px] pr-[20px] lg:pl-[0] lg:pr-[0] bg-back-hover">
        <div class="pt-[15px] pl-[15px] pb-[15px] pr-[15px] lg:pt-[25px] lg:pl-[42px] lg:pb-[28px] lg:pr-[40px]">
            <div class="flex flex-wrap flex-row justify-between">
                <div class="">
                    <p class="font-Manrope text-[14px] leading-[20px] lg:text-[18px] lg:leading-[24px] font-semibold text-typography-300">Θέλετε να εγγραφείτε στο newsletter μας; <br />Συμπληρώστε το email σας για να σας ενημερώνουμε για τα νέα μας.</p>
                    <div class="flex items-center mt-[8px]">
                        <input disabled checked id="radio" type="radio" value="" name="disabled-radio" class="w-4 h-4 text-typography-700 bg-gray-100 border-gray-300 focus:ring-transparent focus:ring-2">
                        <label for="radio" class="ml-[10px] font-Manrope text-[14px] leading-[28px] font-semibold text-typography-300">Συμφωνώ με την Πολιτική απορρήτου <sapn class="text-typography-700">*</sapn></label>
                    </div>
                </div>
                <div class="flex items-center mt-[10px]  lg-[mt-0] w-[100%] lg:w-[auto]">
                    <input type="email" id="default-search" class="block pt-[19px] pr-[10px] lg:pr-[23px] pl-[10px] lg:pl-[29px] pb-[16px] w-[100%] lg:w-[407px] text-[14px] text-typography-10 mr-[8px] border border-border-img-400 h-[61px] focus:ring-transparent focus:border-border-img-400" placeholder="Το email σας" required>
                    <button type="submit" class="bg-back-400 w-[126px] pt-[19px] h-[61px] pb-[16px] text-center text-white font-bold text-[12px] lg:text-[15px]">Αποστολή</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  
</script>
