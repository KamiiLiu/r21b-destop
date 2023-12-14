<template lang="pug">
.banner-wrap
    .mx-1280
        .banner-img-wrap
            img(src='@/assets/pic/logo.svg')
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'MainHeader'
}
)
</script>
<style lang="scss">
.banner-img-wrap {
    width: 30%;
    height: 100px;
    margin: 0 auto;
    img {
        display: block;
        max-width: 100%;
        height: 100px;
    }
}
</style>