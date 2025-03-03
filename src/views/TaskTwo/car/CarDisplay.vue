<template>
    <div class="wrapper">
        <car-card v-for="content in sortCarsByType" :key="content.id" :content="content"/>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import CarCard from "./CarCard.vue"
    export default {
        name: "CarDisplay",
        components: {CarCard},
        computed: {
            ...mapGetters(['getCarList', 'getCurrentType']),

            sortCarsByType() {
                this.setCarAction
                return this.getCarList
            }
        },
        methods: {
            ...mapActions(['setCarAction'])
        },
        mounted() {
            this.setCarAction();
        }
    }
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
}
</style>