<template>
    <div class="wrapper">
        <filter-selector title = "Тип транспорта" :list = "getTypeList" v-model="carType"/>
        <filter-selector title = "Марка автомобіля" :list = "getBrandList" v-model="carBrand"/>
        <filter-selector title = "Рік випуску" :list = "getYearList" v-model="carYear"/>
        <filter-selector title = "Місто" :list = "getCityList" v-model="carCity"/>
        <checkbox-comp v-if="getCurrentType === 'Легкові автомобілі'" @updateCheckbox="checkboxHandler"/>
    </div>
</template>

<script>
import FilterSelector from './FilterSelector.vue';
import CheckboxComp from './CheckboxComp.vue';
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
    export default {
        name: "CardFilter",
        components: {FilterSelector, CheckboxComp},
        methods: {
            checkboxHandler(data) {
                this.setValueAction({prop:"checkbox", val:data})
            },
            ...mapActions(['setValueAction', 'setCarAction', 'clearAction'])
        },
        computed: {
            carType: {
                get() {
                    return this.getCurrentType
                },
                set(val) {
                    this.setValueAction({prop:'currentType', val:val})
                    this.setCarAction()
                    this.clearAction()
                }
            },
            carBrand: {
                get() {
                    return this.getCurrentBrand
                },
                set(val) {
                    if (val === "Всі марки") {
                        this.setValueAction({prop:"currentYear", val: "Не вибрано"})
                        this.setValueAction({prop:"currentCity", val: "Не вибрано"})
                    }

                    this.setValueAction({prop:'currentBrand', val:val})
                }
            },
            carYear: {
                get() {
                    return this.getCurrentYear
                },
                set(val) {
                    if (val === "Всі роки") {
                        this.setValueAction({prop:"currentBrand", val: "Не вибрано"})
                        this.setValueAction({prop:"currentCity", val: "Не вибрано"})
                    }
                    this.setValueAction({prop:'currentYear', val:val})
                }
            },
            carCity: {
                get() {
                    return this.getCurrentCity
                },
                set(val) {
                    if (val === "Всі міста") {
                        this.setValueAction({prop:"currentBrand", val: "Не вибрано"})
                        this.setValueAction({prop:"currentYear", val: "Не вибрано"})
                    }
                    this.setValueAction({prop:'currentCity', val:val})
                }
            },
            ...mapGetters(['getTypeList', 'getCurrentType','getCurrentBrand',
            'getCurrentYear', 'getBrandList', 'getYearList', 'getCityList', 'getCurrentCity'])
        },
    }
</script>

<style lang="scss" scoped>
.wrapper {
    width:300px;
    display: flex;
    flex-direction: column;
    gap: 30px;
}
</style>