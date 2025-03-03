<template>
    <div class="body">
       <img src="@/assets/loading5.gif" alt="Monke">
    </div>
</template>

<script>
    export default {
        name: "LoadingComp",
    }
</script>

<style lang="scss" scoped>
    .body {
        height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
        img: {
            width:100%;
            height: 100%;
        }
    }
</style>