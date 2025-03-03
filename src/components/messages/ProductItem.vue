<template>
<div class="product-body">
        <div class="image-container">
            <img :src="content.image" alt="Image">
        </div>
        <div class="text-content">
            <div class="title-block">
                <h2 class="title">{{ content.name }}</h2>
            </div>
            <div class="price-holder">
                <div class="price">
                    <p class="new-price">{{ content.price }} <span class="hrn">₴</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductItem",
        props: {
            content: {
                type: Object,
                default: ()=>({})
            },
        },
    }
</script>

<style lang="scss" scoped>
.product-body {
    display: flex;
    flex-direction: column;
    font-family: "Montserrat Alternates", serif;
    border: 2px solid black;
    border-radius: 20px;
    background-color: #BFAAE5;
    padding: 20px;
    gap: 10px;
    position: relative;
    overflow: hidden;
}
.image-container {
    width: 200px;
    height:140px;
    img {
        width: 100%;
        height: 100%;
    }
}
.text-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.title {
    color: #4c6ace;
}
.price-holder {
    display: flex;
    justify-content: space-between;
}
.price {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.seller-name {
    position:absolute;
    bottom: 0;
    right: 0;
    padding: 10px 12px 10px 12px;
    background-color: #780dea;
    color: #fff;
    border-radius: 25px 0px 16px 0px;
}
.new-price {
    font-size: 18px;
    color: rgb(254, 254, 254);
    span {
        font-size: 14px;
    }
}
</style>