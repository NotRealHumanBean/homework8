<template>
    <div class="filter-selector">
        <h3 class="title">{{ title }}</h3>
        <select  class="selector" v-model="selectType">
            <option class="select-option" v-for="type in list" :key="type.id" :value="type.type">{{ type.type }}</option>
        </select>
    </div>
</template>

<script>

    export default {
        name: "FilterSelector",
        props: {
            title: {
                type: String,
                default: ""
            },
            list: {
                type: Array,
                default: ()=>[]
            },
            modelValue: {
                type: [String, Number],
                default: ''
            }
        },
        computed: {
            selectType: {
                get() {
                    return this.modelValue
                },
                set(val) {
                    this.$emit('update:modelValue', val)
                }
            },
           
        },
        
    }
</script>

<style lang="scss" scoped>
.title {
    font-family: "Montserrat Alternates", serif;
    font-size: 20px;
    margin-bottom: 15px;
}
.select-option, .selector {
    font-family: "Montserrat Alternates", serif;
    font-size: 18px;
}
.selector {
    padding: 10px 20px;
    border-radius: 11px;
   
}
</style>