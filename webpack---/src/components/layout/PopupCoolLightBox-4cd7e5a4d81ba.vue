<template>
    <div class="popup-cool-block">
        <CoolLightBox
                v-if="elems"
                :items="elems"
                :index="index"
                :slideshow="false"
                :effect="'fade'"
                :overlayColor="'#000'"
                :gallery="false"
                @close="index = null">
            <div class="line-close" slot="close"></div>
            <icon-base icon-name="arrow-right" :width="50" :height="28" slot="icon-next"><arrow-right/></icon-base>
            <icon-base icon-name="arrow-left" :width="50" :height="28" slot="icon-previous"><arrow-left/></icon-base>
        </CoolLightBox>
    </div>
</template>

<script>
    import CoolLightBox from 'vue-cool-lightbox'
    import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
    import IconBase from "../IconBase";
    import ArrowLeft from "../icons/ArrowLeft";
    import ArrowRight from "../icons/ArrowRight";


    export default {
        name: "PopupCoolLightBox",
        components: {
            ArrowRight,
            ArrowLeft,
            IconBase,
            CoolLightBox,
        },
        props:{
            elems: Array
        },
        data: function () {
            return {
                index: null,
            };
        },
        watch:{
            getArImg: function (value) {
                this.index = value[0].ind;
            }
        },
        computed: {
            getArImg(){
                return this.$store.getters.getImgGallery;
            },
        },
    }
</script>

<style scoped>

</style>