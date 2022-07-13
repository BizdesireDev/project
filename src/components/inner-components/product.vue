<template>
    <div class="product-listing-inner lg:ml-[-13px] lg:mr-[-13px] flex-wrap flex justify-between">
        <div class="box flex-row cursor-pointer lg:mr-[14px] lg:ml-[14px] mb-[31px] w-[48%] lg:w-[17%] 2xl:w-[18.217%] ">
            <div class="box-img padding border-b-border-img border-b-[3.16px] pb-[28.8px] lg:pt-[30px] h-[295px] lg:h-[375px] flex justify-center items-center">
                <img :src="image"/>
            </div>
            <div class="box-detail pl-[16px]">
                <h6 class="text-heading-100 font-Manrope font-bold mb-[4px] mt-[12px] leading-20 text-[16px]">Women’s Placement Thinstrap</h6>
                <p class="text-typography-400 font-Manrope text-[14px] mb-[8px] min-h-[45px]">Muscleback Swimsuit Blue/Black</p>
                <p class="text-typography-200 font-Manrope text-[12px] font-bold">Συνδεθείτε για να δείτε την τιμή</p>
            </div>
        </div>
        <div class="box flex-row cursor-pointer lg:mr-[14px] lg:ml-[14px] mb-[31px] w-[48%] lg:w-[17%] 2xl:w-[18.217%] ">
            <div class="box-img padding border-b-border-img border-b-[3.16px] pb-[28.8px] lg:pt-[30px] h-[295px] lg:h-[375px] flex justify-center items-center">
                <img :src="image2"/>
            </div>
            <div class="box-detail pl-[16px]">
                <h6 class="text-heading-100 font-Manrope font-bold mb-[4px] mt-[12px] leading-20 text-[16px]">tonic mountain tea</h6>
                <p class="text-typography-400 font-Manrope text-[14px] mb-[8px] min-h-[45px]">Αφρόλουτρο με Αιθέρια Έλαια Ecopack 500ml</p>
                <p class="text-typography-200 font-Manrope text-[12px] font-bold">Συνδεθείτε για να δείτε την τιμή</p>
            </div>
        </div>
        <div class="box flex-row cursor-pointer lg:mr-[14px] lg:ml-[14px] mb-[31px] w-[48%] lg:w-[17%] 2xl:w-[18.217%] ">
            <div class="box-img padding border-b-border-img border-b-[3.16px] pb-[28.8px] lg:pt-[30px] h-[295px] lg:h-[375px] flex justify-center items-center">
                <img :src="image3"/>
            </div>
            <div class="box-detail pl-[16px]">
                <h6 class="text-heading-100 font-Manrope font-bold mb-[4px] mt-[12px] leading-20 text-[16px]">Erythro Forte</h6>
                <p class="text-typography-400 font-Manrope text-[14px] mb-[8px] min-h-[45px]">Dermotherapy Balsam Gold 200ml</p>
                <p class="text-typography-200 font-Manrope text-[12px] font-bold">Συνδεθείτε για να δείτε την τιμή</p>
            </div>
        </div>
        <div class="box flex-row cursor-pointer lg:mr-[14px] lg:ml-[14px] mb-[31px] w-[48%] lg:w-[17%] 2xl:w-[18.217%] ">
            <div class="box-img padding border-b-border-img border-b-[3.16px] pb-[28.8px] lg:pt-[30px] h-[295px] lg:h-[375px] flex justify-center items-center">
                <img :src="image4"/>
            </div>
            <div class="box-detail pl-[16px]">
                <h6 class="text-heading-100 font-Manrope font-bold mb-[4px] mt-[12px] leading-20 text-[16px]">Galesyn® Emulsion</h6>
                <p class="text-typography-400 font-Manrope text-[14px] mb-[8px] min-h-[45px]">Ενυδατικό γαλάκτωμα με αιθέρια έλαια και για προστασία από τα έντομα</p>
                <p class="text-typography-200 font-Manrope text-[12px] font-bold">Συνδεθείτε για να δείτε την τιμή</p>
            </div>
        </div>
        <div class="box flex-row cursor-pointer lg:mr-[14px] lg:ml-[14px] mb-[31px] w-[48%] lg:w-[17%] 2xl:w-[18.217%] ">
            <div class="box-img padding border-b-border-img border-b-[3.16px] pb-[28.8px] lg:pt-[30px] h-[295px] lg:h-[375px] flex justify-center items-center">
                <img :src="image5"/>
            </div>
            <div class="box-detail pl-[16px]">
                <h6 class="text-heading-100 font-Manrope font-bold mb-[4px] mt-[12px] leading-20 text-[16px]">Galesyn® After Nip</h6>
                <p class="text-typography-400 font-Manrope text-[14px] mb-[8px] min-h-[45px]">Απαλό, καταπραϋντικό, δροσιστικό gel Μοναδική σύνθεση</p>
                <p class="text-typography-200 font-Manrope text-[12px] font-bold">Συνδεθείτε για να δείτε την τιμή</p>
            </div>
        </div>
        <div class="box flex-row cursor-pointer lg:mr-[14px] lg:ml-[14px] mb-[31px] w-[48%] lg:w-[17%] 2xl:w-[18.217%] ">
            <div class="box-img padding border-b-border-img border-b-[3.16px] pb-[28.8px] lg:pt-[30px] h-[295px] lg:h-[375px] flex justify-center items-center">
                <img :src="image6"/>
            </div>
            <div class="box-detail pl-[16px]">
                <h6 class="text-heading-100 font-Manrope font-bold mb-[4px] mt-[12px] leading-20 text-[16px]">Δαφνέλαιο Kanavos</h6>
                <p class="text-typography-400 font-Manrope text-[14px] mb-[8px] min-h-[45px]">Δαφνέλαιο Kanavos 250ml</p>
                <p class="text-typography-200 font-Manrope text-[12px] font-bold">Συνδεθείτε για να δείτε την τιμή</p>
            </div>
        </div>
        <div class="box flex-row cursor-pointer lg:mr-[14px] lg:ml-[14px] mb-[31px] w-[48%] lg:w-[17%] 2xl:w-[18.217%] ">
            <div class="box-img padding border-b-border-img border-b-[3.16px] pb-[28.8px] lg:pt-[30px] h-[295px] lg:h-[375px] flex justify-center items-center">
                <img :src="image7"/>
            </div>
            <div class="box-detail pl-[16px]">
                <h6 class="text-heading-100 font-Manrope font-bold mb-[4px] mt-[12px] leading-20 text-[16px]">Galesyn® Anti Hair Loss Shampoo</h6>
                <p class="text-typography-400 font-Manrope text-[14px] mb-[8px] min-h-[45px]">Σαμπουάν που ενδυναμώνει τις τρίχες συμβάλλοντας στη μείωση της</p>
                <p class="text-typography-200 font-Manrope text-[12px] font-bold">Συνδεθείτε για να δείτε την τιμή</p>
            </div>
        </div>
        <div class="box flex-row cursor-pointer lg:mr-[14px] lg:ml-[14px] mb-[31px] w-[48%] lg:w-[17%] 2xl:w-[18.217%] hover:">
            <div class="box-img padding border-b-border-img border-b-[3.16px] pb-[28.8px] lg:pt-[30px] h-[295px] lg:h-[375px] flex justify-center items-center ">
                <img :src="image8"/>
            </div>
            <div class="box-detail pl-[16px]">
                <h6 class="text-heading-100 font-Manrope font-bold mb-[4px] mt-[12px] leading-20 text-[16px]">Soft Shampoo & Bath</h6>
                <p class="text-typography-400 font-Manrope text-[14px] mb-[8px] min-h-[45px]">Υποαλλεργικό, μειώνει τον κίνδυνο εμφάνισης αλλεργιών</p>
                <p class="text-typography-200 font-Manrope text-[12px] font-bold ">Συνδεθείτε για να δείτε την τιμή</p>
            </div>
        </div>
        <div class="box flex-row cursor-pointer lg:mr-[14px] lg:ml-[14px] mb-[31px] w-[48%] lg:w-[17%] 2xl:w-[18.217%] ">
            <div class="box-img padding border-b-border-img border-b-[3.16px] pb-[28.8px] lg:pt-[30px] h-[295px] lg:h-[375px] flex justify-center items-center">
                <img :src="image9"/>
            </div>
            <div class="box-detail pl-[16px]">
                <h6 class="text-heading-100 font-Manrope font-bold mb-[4px] mt-[12px] leading-20 text-[16px]">Aqua Beelicious</h6>
                <p class="text-typography-400 font-Manrope text-[14px] mb-[8px] min-h-[45px]">Oil-Free Κρέμα- Gel Ενυδάτωσης ελαφριάς υφής</p>
                <p class="text-typography-200 font-Manrope text-[12px] font-bold">Συνδεθείτε για να δείτε την τιμή</p>
            </div>
        </div>
        <div class="box flex-row cursor-pointer lg:mr-[14px] lg:ml-[14px] mb-[31px] w-[48%] lg:w-[17%] 2xl:w-[18.217%] ">
            <div class="box-img padding border-b-border-img border-b-[3.16px] pb-[28.8px] lg:pt-[30px] h-[295px] lg:h-[375px] flex justify-center items-center">
                <img :src="image10"/>
            </div>
            <div class="box-detail pl-[16px]">
                <h6 class="text-heading-100 font-Manrope font-bold mb-[4px] mt-[12px] leading-20 text-[16px]">BY 90 – Βρεφοζυγός Beurer</h6>
                <p class="text-typography-400 font-Manrope text-[14px] mb-[8px] min-h-[45px]">Βρεφοζυγός Ψηφιακός Beurer -BY 80- Ικανότητα Ζύγισης: 20kg/5gr</p>
                <p class="text-typography-200 font-Manrope text-[12px] font-bold">Συνδεθείτε για να δείτε την τιμή</p>
            </div>
        </div>
    </div>
</template>
<script>
    import image from '../../assets/image/product1.png'
    import image2 from '../../assets/image/product2.png'
    import image3 from '../../assets/image/product3.png'
    import image4 from '../../assets/image/product4.png'
    import image5 from '../../assets/image/product5.png'
    import image6 from '../../assets/image/product6.png'
    import image7 from '../../assets/image/product7.png'
    import image8 from '../../assets/image/product8.png'
    import image9 from '../../assets/image/product9.png'
    import image10 from '../../assets/image/product10.png'
    export default{
        data: function () {
            return {
                image: image,
                image2: image2,
                image3: image3,
                image4: image4,
                image5: image5,
                image6: image6,
                image7: image7,
                image8: image8,
                image9: image9,
                image10: image10,
            }
        }
    }
</script>
