<template>
    <div class="item-container"
    @click="chooseItem">
        <div class="item" 
        :class="{'active': content.chosen}">
            <div class="image-holder">
                <img :src="content.image" alt="Image">
            </div>
        </div>
        <h4 class="title">{{ content.name }}</h4>
    </div>
   
</template>

<script>
    export default {
        name: "SelectorComponent",
        props: {
            content: {
                type: Object,
                default: ()=> ({})
            },
        },
        methods: {
            chooseItem() {
                this.$emit('chosen', this.content)
                // content.chosen =  !content.chosen


            }
        }
    }
</script>

<style lang="scss" scoped>
.item-container {
    width: fit-content;
    text-align: center;
     cursor: pointer;
}
.item {
    width:150px;
    height: 150px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
}
.image-holder {
    width:80px;
    height: 80px;
    img {
        width: 100%;
        height: 100%;
    }
}
.title {
    color: #4B0082;
    font-family: 'Montserrat Alternates';
    font-weight: 700;
    font-size: 20px;
    width: 150px;
    margin: 15px 0px;
}
.active {
    // width:145px;
    // height: 155px;
    border: 5px solid #4B0082;
}
</style>