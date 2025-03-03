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
                    <p class="main-price">{{ returnPrice }} <span class="dol">$</span></p>
                    <span> - </span>
                    <p>{{ calcCurrency }} <span class="hrn">грн</span></p>
                </div>
            </div>
            <div class="parameters">
                <div class="parameter">
                    <img src="@/assets/icon1.png" alt="Icon">
                    <span>{{ content.mileage }} км.</span>
                </div>
                <div class="parameter">
                    <img src="@/assets/icon2.png" alt="Icon">
                    <span>{{ content.engineType }} </span>
                </div>
                <div class="parameter">
                    <img src="@/assets/icons3.png" alt="Icon">
                    <span>{{ content.city }}</span>
                </div>
                <div class="parameter">
                    <img src="@/assets/icons4.png" alt="Icon">
                    <span>{{ content.transmission }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CarCard",
        props: {
            content: {
                type: Object,
                default: ()=>({})
            },
        },
        data() {
            return {
                currencyRate: 41
            }
        },
        computed: {
            returnPrice() {
                return this.getFormattedNumber(this.content.price)
            },
            calcCurrency() {
                let price = this.content.price * this.currencyRate
                return this.getFormattedNumber(price)
            }
        },
        methods: {
            getFormattedNumber(number) {
                return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
        }
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
    // padding: 20px;
    gap: 10px;
    position: relative;
    overflow: hidden;
    width: fit-content;
}
.image-container {
    width: 450px;
    height: 300px;
    // width: 350px;
    img {
        width: 100%;
        height: 100%;
    }
}
.text-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
    margin-left: 20px;
}
.parameters {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 15px;
    margin-top: 15px;
    margin-bottom: 30px;
    .parameter {
        display: flex;
        align-items: center;
        gap: 10px;
        img {
        height: 30px;

    }
    }
    
}
.title {
    color: #4c6ace;
    font-weight: 800;
    font-size: 28px;
    letter-spacing: 3px;
    // margin-top: 20px;
}
.price-holder {
    display: flex;
    justify-content: space-between;
}
.price {
    display: flex;
    gap: 10px;
    align-items: center;
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
.main-price {
    font-size: 28px;
    color: rgb(254, 254, 254);
    font-weight: 700;
    .dol {
        font-size: 24px;
    }
    span {
        font-size: 14px;
    }
}
</style>