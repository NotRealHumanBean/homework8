<template>
    <div class="error">
        Wooops.. Something went wrong ...
    </div>
</template>

<script>
    export default {
        name: "ErrorComp",
    }
</script>

<style lang="scss" scoped>
.error {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 800;
    font-size: 30px;
    color: black;
}
</style>