<script setup>
import { ref } from 'vue';

const images = ref([
    '/assets/images/slider/slider1.png',
    '/assets/images/slider/slider2.png',
    '/assets/images/slider/Group 4917.png',
])

const selectedSlider1Image = ref(1)

function selectSlider1Image(index) {
    let interval = setInterval(() => {
        if (selectedSlider1Image.value < index) {
            selectedSlider1Image.value += 1
        }
        else if (selectedSlider1Image.value > index) {
            selectedSlider1Image.value -= 1
        }
        else {
            clearInterval(interval)
        }

    }, 100)
}
</script>

<template>
    <div class="slider-1 flex flex-col justify-center w-full max-w-full overflow-x-hidden">
        <!-- slides -->
        <div class="md:w-3/4 w-full relative mx-auto h-[300px]">
            <div v-for="(image, index) in images" :key="image"
                :class="selectedSlider1Image !== index ? selectedSlider1Image < index ? `translate-x-full z-[${images.length - index}]` : `-translate-x-full z-[${images.length - index}]` : `translate-x-0 z-[100] z-[${images.length - index}]`"
                class="absolute inset-0 overflow-y-hidden h-full flex items-center justify-center transition-all ease-in-out duration-300 transform md:px-3">
                <img :class="`z-[${images.length - index}]`"
                    v-show="[selectedSlider1Image + 1, selectedSlider1Image, selectedSlider1Image - 1].includes(index)"
                    :key="selectedSlider1Image" class="object-cover w-full h-[350px]" :src="image" :alt="`image-${index}`">
            </div>
        </div>

        <!-- controls -->
        <div class="flex gap-x-1 py-3 w-full justify-center">
            <div v-for="(image, index) in images" :key="`image-${index}`" @click="selectSlider1Image(index)"
                :class="selectedSlider1Image == index ? 'bg-red-500' : 'bg-gray-400 hover:bg-gray-700'"
                class="w-3 h-3 rounded-full">
            </div>
        </div>
    </div>
</template>

<style>
</style>
