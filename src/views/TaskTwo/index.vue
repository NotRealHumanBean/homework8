<template>
    <div class="wrapper">
        <card-filter class="filter"/>
       <car-display class="display"/>
    </div>
</template>

<script>
import CarDisplay from './car/CarDisplay.vue';
import CardFilter from './filter/CardFilter.vue'
    export default {
        name: "TaskTwo",
        components: {CarDisplay, CardFilter},
    }
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    width: 100%;
    .filter {
        flex: 1 1 30%;
        border: 2px solid black;
        padding: 20px;
    }
    .display {
        flex: 1 1 70%;
        border: 2px solid black;
        padding: 20px;
    }
}
</style>