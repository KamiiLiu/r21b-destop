<template lang="pug">
BModal(
    v-model='showLoc',
    hide-footer,
    hide-header,
    centered,
    modalClass='backdrop-blur',
    content-class='p-6 position-relative'
)
    i.bi.bi-x-lg.close-icon.position-absolute.cursor(@click="closeModal")
    i.d-block.text-center.bi.bi-exclamation-octagon-fill.fs-48.icon-color
    p.mb-0.text-center 離開嗎?你要確欸
</template>
<script lang="ts">
import { BModal } from 'bootstrap-vue-3'
import { computed, defineComponent } from 'vue'

export default defineComponent({
    name: 'RouteSwiftModal',
    props: {
    show: {
        type: Boolean,
        default: false,
    }
    },
    components: {
    BModal
    },
    setup (props, { emit }) {
    const showLoc = computed({
        get: () => props.show,
        set: (v) => emit('update:show', v)
    });
    function closeModal(){
        emit('update:modalShow', false);
        showLoc.value=!showLoc.value
        console.log(showLoc.value);
    }
    return {showLoc ,closeModal}
    }
})
</script>

<style lang="scss" scoped>
.icon-color{
    color:$red-secondary-color
}
.close-icon{
    top: 12px;
    right: 12px;
}
.fs-48{
    font-size: 48px;
}
</style>