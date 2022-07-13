<script setup>
import { ref } from 'vue';

const images = ref([
    '/assets/images/slider2/Mask Group 60.png',
    '/assets/images/slider2/Mask Group 61.png',
    '/assets/images/slider2/Mask Group 62.png',
    '/assets/images/slider2/Mask Group 63.png',
    '/assets/images/slider2/Mask Group 64.png',
    '/assets/images/slider2/Mask Group 65.png',
    '/assets/images/slider2/Mask Group 66.png',
    '/assets/images/slider2/Mask Group 60.png',
    '/assets/images/slider2/Mask Group 61.png',
    '/assets/images/slider2/Mask Group 62.png',
    '/assets/images/slider2/Mask Group 63.png',
    '/assets/images/slider2/Mask Group 64.png',
    '/assets/images/slider2/Mask Group 65.png',
    '/assets/images/slider2/Mask Group 66.png'
])

const slider = ref(null)
const sliderParent = ref(null)
const selectedSlider1Image = ref(0)
function moveSliderImage(amount) {
    const BoundingClientRectWidth = slider.value.getBoundingClientRect().width
    const singleScreenWidth = sliderParent.value.getBoundingClientRect().width
    let velocity = slider.value.getBoundingClientRect().left + (singleScreenWidth * amount)
    velocity = Math.abs(velocity) <= BoundingClientRectWidth ? velocity : 0
    velocity = velocity > 0 ? 0 : velocity
    slider.value.style.transform = `translateX(${velocity}px)`
}
</script>

<template>
    <div ref="sliderParent"
        class="slider-2 relative flex flex-col justify-center w-full overflow-x-hidden max-w-[900px] mx-auto">
        <!-- slides -->
        <div ref="slider"
            class="relative left-0 mx-auto flex overflow-x-hidden transition-all ease-in-out duration-300 transform">
            <div v-for="(image, index) in images" :key="image"
                :class="selectedSlider1Image !== index ? selectedSlider1Image < index ? `z-[${images.length - index}]` : `z-[${images.length - index}]` : 'z-[100]'"
                class="w-32 h-32 aspect-square inset-0 overflow-y-hidden flex items-center justify-center p-1">
                <img :class="`z-[${images.length - index}]`" :key="selectedSlider1Image"
                    class="w-full h-full object-cover" :src="image" :alt="`image-${index}`">
            </div>
        </div>
        <div class="absolute left-0 top-0 flex items-center h-full">
            <span @click="moveSliderImage(1)"
                class="shadow-xl cursor-pointer rounded-full bg-white aspect-square shadow w-7 h-7 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd" />
                </svg>
            </span>
        </div>
        <div class="absolute right-0 top-0  flex justify-end items-center h-full">
            <span @click="moveSliderImage(-1)"
                class="shadow-xl cursor-pointer rounded-full absolute bg-white aspect-square shadow w-7 h-7 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                </svg>
            </span>
        </div>
    </div>
</template>
