<template>
    <div>
        <div class="max-w-[1920px] w-[100%] relative h-[100% ] ml-[auto] mr-[auto] pl-[20px] pr-[20px] border-b-[3px] border-border-img-100 ">
           <nav class="pt-[10px] pb-[15px]">
                <div class="flex flex-wrap justify-between items-end">
                    <div class="flex flex-row items-baseline mb-[20px] lg:mb-[0] ">
                        <a href="https://flowbite.com" class="flex items-center">
                                <img :src="logo" />
                        </a>
                        <div class="relative bottom-[9px] ml-[22px] xl:ml-[62px] flex">
                            <button data-collapse-toggle="mega-menu" type="button" class="inline-flex items-center p-2text-sm text-gray-500 rounded-lg " aria-controls="mega-menu" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="20" viewBox="0 0 32 19.5">
                                    <g id="Group_4603" data-name="Group 4603" transform="translate(-1721 -67.25)">
                                        <line id="Line_1482" data-name="Line 1482" x2="32" transform="translate(1721 68)" fill="none" stroke="#212121" stroke-width="1.5"/>
                                        <line id="Line_1483" data-name="Line 1483" x2="26" transform="translate(1727 77)" fill="none" stroke="#212121" stroke-width="1.5"/>
                                        <line id="Line_1484" data-name="Line 1484" x2="32" transform="translate(1721 86)" fill="none" stroke="#212121" stroke-width="1.5"/>
                                    </g>
                                </svg>
                            </button>
                            <p class="font-Manrope text-typography-900 text-[16px] leading-[20px] ml-[15px]">Προϊόντα</p>
                        </div>
                    </div>
                    <div class="flex items-center lg:order-2">
                        <div class="flex items-center">
                            <input type="search" class="w-[100%] 2xl:w-[752px] border-t-0 border-l-0 border-r-0 border-b border-border-img-400 text-[16px] font-Manrope pb-10px text-typography-100 mr-[16.3px] pl-0 pt-0 pr-0 placeholder:text-typography-500 focus:ring-transparent focus:outline-0 focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:border-border-img-400 focus:shadow-none" placeholder="ψάχνω για …"/>
                            <a href="#" class=""><img :src="search" /></a>
                        </div>
                        <a href="#" class="ml-[16px]"><img :src="heart" /></a>
                        <a href="#" class="ml-[16px]"><img :src="user" /></a>
                        <a href="#" class="ml-[16px] relative"><img :src="cart" /> <span class="absolute w-[20px] h-[20px] rounded-full bg-back-800 text-white flex items-center justify-center font-Manrope text-[12px] leading-[18px] right-[-10px] top-[-10px]">2</span></a>
                    </div>
                    <div id="mega-menu" class="hidden justify-between items-center w-full text-sm">
                        <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-blue-600 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-600 lg:p-0 dark:text-blue-500 lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 lg:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                            </li>
                            <li>
                                <button id="mega-menu-dropdown-button" data-dropdown-toggle="mega-menu-dropdown" class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 lg:w-auto hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 lg:dark:hover:bg-transparent dark:border-gray-700">
                                    Company <svg aria-hidden="true" class="ml-1 w-5 h-5 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                                <div id="mega-menu-dropdown" class="hidden absolute z-10 grid-cols-2 w-auto text-sm bg-white rounded-lg border border-gray-100 shadow-md dark:border-gray-700 lg:grid-cols-3 dark:bg-gray-700">
                                    <div class="p-4 pb-0 text-gray-900 lg:pb-4 dark:text-white">
                                        <ul class="space-y-4">
                                            <li>
                                                <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                                    About Us
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                                    Library
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                                    Resources
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                                    Pro Version
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="p-4 pb-0 text-gray-900 lg:pb-4 dark:text-white">
                                        <ul class="space-y-4">
                                            <li>
                                                <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                                    Blog
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                                    Newsletter
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                                    Playground
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                                    License
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="p-4 text-gray-900 dark:text-white">
                                        <ul class="space-y-4">
                                            <li>
                                                <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                                    Contact Us
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                                    Support Center
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                                    Terms
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>      
</template>
<script>
    import logo from '../../assets/image/logo.png'
    import search from '../../assets/image/search.png'
    import heart from '../../assets/image/heart.png'
    import user from '../../assets/image/user.png'
    import cart from '../../assets/image/cart.png'
    export default{
        data: function () {
            return {
                logo: logo,
                search: search,
                heart: heart,
                user: user,
                cart: cart,
            }
        }
    }
</script>