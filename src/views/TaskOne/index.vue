<template>
    <div class="task-wrapper">
        <nav class="nav">
            <selector-component v-for="item in list" :key="item.id" :content="item" @chosen="onChoose"/>
        </nav>
        <div class="main">
            <loading-comp v-if="getLoading"/>
            <error-comp v-else-if="getError" />
            <div v-else class="list">
                <product-item v-for="item in getRenderList" :key="item.id" :content="item"/>
            </div>
           
        </div>
    </div>
</template>

<script>
import SelectorComponent from './SelectorComponent.vue'
import LoadingComp from '@/components/messages/LoadingComp.vue';
import ErrorComp from '@/components/messages/ErrorComp.vue';
import ProductItem from '@/components/messages/ProductItem.vue';
import { list } from '@/constants/list.js'
import { mapActions, mapGetters } from 'vuex';
    export default {
        name: "TaskOne",
        components: { SelectorComponent, LoadingComp,  ErrorComp, ProductItem},
        data() {
            return {
               list
            }
        },
        methods: {
            onChoose(data) {
                this.list.forEach(element => {
                    element.chosen = false;
                });
                data.chosen =  !data.chosen
                this.mainRenderAction(data.name)
            },
            ...mapActions(['mainRenderAction'])
        },
        computed: {
            ...mapGetters(['getCurrentSection', 'getRenderList', 'getLoading', 'getError'])
        },
    }
</script>

<style lang="scss" scoped>
.task-wrapper {
    padding: 20px;
    display: flex;
    gap: 70px;
    // flex-direction: column;
}
.nav {
    flex: 0 0 auto;
}
.main {
    flex: 0 1 70%;
    display: flex;
    justify-content: center;
}
.list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, 245px);
    grid-template-rows: repeat(auto-fill, minmax(245px, 1fr));
    gap: 30px;
}
</style>