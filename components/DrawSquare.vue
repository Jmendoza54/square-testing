<script setup lang="ts">
//Gte parameters and function to dra the main square
const { sizeMainSquare,
        widthChildSize,
        noEnter,
        square,
        numberSquares,
        drawContainer } = useDrawSquare();

        //When is mounted the component, draw the square
onMounted(() => {
    drawContainer(200, 50, 17);
    //drawContainer(310, 200, 4);
    //drawContainer(413, 42, 30);
    //drawContainer(200, 300, 2);
})
</script>

<template>
    <div>
        <!-- Set width and height with the parameter sizeMainSquare -->
        <div
            id="mainSquare"
            :style="{ width: sizeMainSquare + 'px', height: sizeMainSquare + 'px' }">
            <!-- Child Component to draw childs as parameter size with the value of widthChildSize -->
            <ChildrenSquare
                v-for="(index) of square"
                :key="index"
                :size="widthChildSize" />
        </div>
        <!-- If total of child couldnt be rendered in the main square, show this message -->
        <div v-if="noEnter">Only could show {{ square }} square(s) from {{ numberSquares }}</div>
    </div>
</template>


<style scoped>
#mainSquare {
    border: 1px solid red;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
    align-content: flex-start;
}
</style>