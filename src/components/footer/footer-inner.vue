<template>
    <div>
        <div class="bg-footer footer max-w-full relative pl-[20px] pr-[20px] lg:pl-[0] lg:pr-[0] border-t border-border-img-100">
            <div class="w-container-width mr-auto ml-auto pt-[18px] lg:pt-[58px] pb-[44px] lg:pl-[60px] lg:pr-[50px]">
                <div class="mb-[22px] mt-[20px] lg:mt-[0] lg:mb-[71.9px] ">
                    <img :src="logo" class="h-[100%]"/>
                </div>
                <div class="flex items-start justify-between flex-wrap lg:mr-0">
                        <div class="w-[100%] lg:w-[20%] 2xl:w-[280px] mb-[20px] lg:mb-[0] lg:mr-0">
                            <p class="font-Manrope text-typography-400 text-[14px] leading-[22px] mb-[30px] lg:mb-[100px] 2xl:mb-[130px]">Εταιρεία δεύτερης γενιάς που προμηθεύει φαρμακαποθήκες & φαρμακεία με παραφαρμακευτικά, ιατροτεχνολογικά & χημικές ουσίες πάνω από 30 χρόνια…</p>
                            <ul class="list-none m-0 p-0 inline-flex"> 
                                <li class="mr-[24.5px]"><a href="#" class="">
                                    <img :src="insta" />
                                </a></li>
                                <li class="mr-[24.5px]"><a href="#" class="">
                                    <img :src="facebook" />
                                </a></li>
                                <li class="mr-[24.5px]"><a href="#" class="">
                                    <img :src="youtube" />
                                </a></li>
                            </ul>
                        </div>
                        <div class="md:w-[auto] w-[100%] lg:w-[auto] mb-[20px] lg:mb-[0]">
                            <ul class="list-none m-0 p-0">
                                <li class="font-bold font-Manrope text-typography-400 text-[14px] leading-[22px]">Κατηγορίες</li>
                                <li class="font-Manrope text-typography-400 text-[14px] leading-[22px]"><a class="font-Manrope text-typography-400 text-[14px] leading-[22px]" href="">Α’ Ύλες</a> </li>
                                <li class="font-Manrope text-typography-400 text-[14px] leading-[22px]"><a class="font-Manrope text-typography-400 text-[14px] leading-[22px]" href=""> Pack</a> </li>
                                <li class="font-Manrope text-typography-400 text-[14px] leading-[22px]"><a class="font-Manrope text-typography-400 text-[14px] leading-[22px]" href=""> Εργαστηριακός Εξοπλισμός</a> </li>
                                <li class="font-Manrope text-typography-400 text-[14px] leading-[22px]"><a class="font-Manrope text-typography-400 text-[14px] leading-[22px]" href=""> Ατομική Φροντίδα - Ευεξία</a> </li>
                                <li class="font-Manrope text-typography-400 text-[14px] leading-[22px]"><a class="font-Manrope text-typography-400 text-[14px] leading-[22px]" href=""> Αναλώσιμα & Εξοπλισμός Ιατρείου</a> </li>
                                <li class="font-Manrope text-typography-400 text-[14px] leading-[22px]"><a class="font-Manrope text-typography-400 text-[14px] leading-[22px]" href=""> Ορθοπεδικά</a> </li>
                                <li class="font-Manrope text-typography-400 text-[14px] leading-[22px]"><a class="font-Manrope text-typography-400 text-[14px] leading-[22px]" href=""> Φροντίδα Βρεφών & Παιδιών</a> </li>
                                <li class="font-Manrope text-typography-400 text-[14px] leading-[22px]"><a class="font-Manrope text-typography-400 text-[14px] leading-[22px]" href=""> Υγεία - Ομορφιά</a> </li>
                                <li class="font-Manrope text-typography-400 text-[14px] leading-[22px]"><a class="font-Manrope text-typography-400 text-[14px] leading-[22px]" href=""> Ιατρικές Συσκευές</a> </li>
                                <li class="font-Manrope text-typography-400 text-[14px] leading-[22px]"><a class="font-Manrope text-typography-400 text-[14px] leading-[22px]" href=""> Διάφορα</a> </li>
                                <li class="font-Manrope text-typography-400 text-[14px] leading-[22px]"><a class="font-Manrope text-typography-400 text-[14px] leading-[22px]" href=""> Είδη Covid-19</a> </li>
                            </ul>
                        </div>
                        <div class="md:w-[auto] w-[100%] lg:w-[auto] mb-[20px] lg:mb-[0]">
                            <ul class="list-none m-0 p-0">
                                <li class="font-bold font-Manrope text-typography-400 text-[14px] leading-[22px]">Μενού</li>
                                <li class="font-Manrope text-typography-400 text-[14px] leading-[22px]"><a class="font-Manrope text-typography-400 text-[14px] leading-[22px]" href=""> O Λογαριασμός μου</a> </li>
                                <li class="font-Manrope text-typography-400 text-[14px] leading-[22px]"><a class="font-Manrope text-typography-400 text-[14px] leading-[22px]" href=""> Εταιρεία</a> </li>
                                <li class="font-Manrope text-typography-400 text-[14px] leading-[22px]"><a class="font-Manrope text-typography-400 text-[14px] leading-[22px]" href=""> Nέα</a> </li>
                                <li class="font-Manrope text-typography-400 text-[14px] leading-[22px]"><a class="font-Manrope text-typography-400 text-[14px] leading-[22px]" href=""> Επικοινωνία</a> </li>
                            </ul>
                        </div>
                        <div class="md:w-[auto] w-[100%] lg:w-[auto] mb-[20px] lg:mb-[0]">
                            <ul class="list-none m-0 p-0">
                                <li class="font-bold font-Manrope text-typography-400 text-[14px] leading-[22px]">Πληροφορίες</li>
                                <li class="font-Manrope text-typography-400 text-[14px] leading-[22px]"><a class="font-Manrope text-typography-400 text-[14px] leading-[22px]" href=""> Διαθεσιμότητα ειδών</a> </li>
                                <li class="font-Manrope text-typography-400 text-[14px] leading-[22px]"><a class="font-Manrope text-typography-400 text-[14px] leading-[22px]" href=""> Τρόποι Πληρωμής</a> </li>
                                <li class="font-Manrope text-typography-400 text-[14px] leading-[22px]"><a class="font-Manrope text-typography-400 text-[14px] leading-[22px]" href=""> Τρόποι Αποστολής</a> </li>
                                <li class="font-Manrope text-typography-400 text-[14px] leading-[22px]"><a class="font-Manrope text-typography-400 text-[14px] leading-[22px]" href=""> Πολιτική επιστροφών</a> </li>
                            </ul>
                        </div>
                        <div class="information md:w-[auto] w-[100%] lg:w-[329px]mb-[20px] lg:mb-[0] ">
                            <div class="mb-[20px]">
                                <p class="font-bold font-Manrope text-typography-400 text-[14px] leading-[22px]">Syndesmos S.A.</p>
                                <p class="font-Manrope text-typography-400 text-[14px] leading-[22px]">Ψαρών 17 & Αιγίνης, 131 22 Ίλιον, Ελλάδα</p>
                                <p class="font-bold font-Manrope text-typography-400 text-[14px] leading-[22px]"><span class="text-typography-700 font-bold">T &nbsp;</span> 210 269 3600</p>
                            </div>
                            <div class="mb-[20px]">
                                <p class="font-bold font-Manrope text-typography-400 text-[14px] leading-[22px]">GMP Facility</p>
                                <p class="font-Manrope text-typography-400 text-[14px] leading-[22px]">Νερατζούλας 10,</p>
                                <p class="font-Manrope text-typography-400 text-[14px] leading-[22px]">136 72 Αχαρναί, Ελλάδα</p>
                            </div>
                            <div class="mb-[20px]">
                                <p class="font-bold font-Manrope text-typography-400 text-[14px] leading-[22px]"><span class="text-typography-700 font-bold">T &nbsp;</span> 210 269 3600</p>
                                <p class="font-bold font-Manrope text-typography-400 text-[14px] leading-[22px]"><span class="text-typography-700 font-bold">E &nbsp;</span> info@syndesmossa.com</p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <div class="max-w-full relative pl-[20px] pr-[20px] lg:pl-[0] lg:pr-[0] bg-back-600 border-t-[5px] border-border-img-500">
            <div class="w-container-width mr-auto ml-auto pt-[28.4px] pb-[28.4px] lg:pl-[60px] lg:pr-[50px]">
                <div class="flex justify-center lg:justify-between flex-wrap text-center lg:text-left">
                    <div>
                        <p class="font-Manrope text-typography-800 text-[10px] inline">© 2022 Syndesmos S.A. All rights reserved 
                            <ul class="list-none m-0 p-0 inline-flex">
                                <li class="font-Manrope text-typography-800 text-[10px] relative pl-[15px] lg:ml-[15px] before:content before:absolute before:w-[2px] before:h-full before:left-0 before:bg-back-700">Privacy Policy</li>
                                <li class="font-Manrope text-typography-800 text-[10px] relative pl-[15px] ml-[15px] before:content before:absolute before:w-[2px] before:h-full before:left-0 before:bg-back-700">Cookie Policy</li>
                                <li class="font-Manrope text-typography-800 text-[10px] relative pl-[15px] ml-[15px] before:content before:absolute before:w-[2px] before:h-full before:left-0 before:bg-back-700">Terms & Conditions</li>
                            </ul>
                        </p>
                    </div>
                    <div>
                        <p class="font-Manrope text-typography-800 text-[9px] lg:mr-[6.4px] inline">designed & developed by <img :src="copy" class="inline ml-[10px]"/></p>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
    import logo1 from '../../assets/image/footer-logo.png'
    import insta from '../../assets/image/insta.png'
    import facebook from '../../assets/image/facebook.png'
    import youtube from '../../assets/image/youtube.png'
    import copy from '../../assets/image/copy-logo.png'
    export default{
        data: function () {
            return {
                logo: logo1,
                insta: insta,
                facebook: facebook,
                youtube: youtube,
                copy: copy,
            }
        }
    }
</script>
