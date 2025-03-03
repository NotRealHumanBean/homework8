<template>
    <div class="wrapper">
        <div class="cell">
            <label for="vehicle1">Седан
                <input type="checkbox" name="vehicle1" value="Седан" v-model="checkBox.sedan">
            </label>
            <label for="vehicle2">Кроссовер
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Кроссовер" v-model="checkBox.crossover">
            </label>
        </div>
        <div class="cell">
            <label for="vehicle3">Мінівен
                <input type="checkbox" id="vehicle3" name="vehicle3" value="Мінівен" v-model="checkBox.minivan">
            </label>
            <label for="vehicle4">Мікровен
                <input type="checkbox" id="vehicle4" name="vehicle3" value="Мікровен" v-model="checkBox.microvan">
            </label>
        </div>
        <label for="vehicle5">Хетчбек
            <input type="checkbox" id="vehicle5" name="vehicle3" value="Хетчбек" v-model="checkBox.hatchback">
        </label>
    </div>
</template>

<script>
    export default {
        name: "CheckboxComp",
        data() {
            return {
                checkBox: {
                    sedan: null,
                    crossover: null,
                    minivan: null,
                    microvan: null,
                    hatchback: null,
                }
            }
        },
        watch: {
            checkBox: {
                handler() {
                    this.$emit('updateCheckbox', this.checkBox)
                },
                deep: true,
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper {
        .cell {
            display: flex;
            gap: 15px;
        }
        label {
            font-family: "Montserrat Alternates", serif;
            font-size: 20px;
            width: fit-content;
        }
    }
</style>