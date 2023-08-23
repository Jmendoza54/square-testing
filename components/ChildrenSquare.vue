        
<script setup lang="ts">
//get prop size, to set width and height of this children
const props = defineProps<{size: number}>();
const size = toRef(props, 'size');

//get data and function to change color on hover and count seconds to remove the square
const { show,
        bgColor,
        changeColor,
        stopSeconds } = useChildSquare();

</script>

<template>
    <div
        v-show="show"
        :class="`bg-color-${bgColor}`"
        :style="{ width: size + 'px', height: size + 'px' }"
        @mouseover="changeColor"
        @mouseout="stopSeconds"></div>
</template>

<style scoped>
    .bg-color-1{
        background-color: #6C7059;
    }
    .bg-color-2{
        background-color: #252850;
    }
    .bg-color-3{
        background-color: #CB3234;
    }
    .bg-color-4{
        background-color: #4A192C;
    }
    .bg-color-5{
        background-color: #84C3BE;
    }
    .bg-color-6{
        background-color: #2271B3;
    }
    .bg-color-7{
        background-color: #DE4C8A;
    }
    .bg-color-8{
        background-color: #3B83BD;
    }
    .bg-color-9{
        background-color: #75151E;
    }
    .bg-color-10{
        background-color: #9D9101;
    }
</style>