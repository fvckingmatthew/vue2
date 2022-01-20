<template>
    <transition name="show-intro">
        <div class="intro" v-if="(getIntroStatus && !getProgressAxios.statusResponseAxios) || firstVisit || getProgressAxios.introSPA">
            <img v-if="!getProgressAxios.introSPA || getIntroStatus" :class="{'flash': !getProgressAxios.statusResponseAxios && !firstVisit}" :src="$hostname + '/preloader/preloader.svg?' + random"/>
            <img v-if="!getIntroStatus && !firstVisit" :src="$hostname + '/preloader/preloader-spa.svg?' + random"/>
        </div>
    </transition>
</template>

<script>

    import {scrollStyle} from "../jsFunction/hiddenScroll";

    export default {
        name: "intro",
        props:{
            heightHeader: Number,
        },
        data(){
          return{
              firstVisit: true,
              random: 0,
              styleIntro: '',
          }
        },
        computed: {
            getIntroStatus(){
                return this.$store.getters.getIntroStatus;
            },
            getProgressAxios(){
                return this.$store.getters.getProgressAxios;
            },
        },
        watch:{
            getIntroStatus: function (status) {
                let paramsString = document.location.hash.replace('#', '');
                let pathPage = document.location.pathname;
                if(!status && ((pathPage !== '/' || paramsString !== '') || window.innerWidth <= 1199)){ // если прошла загрузку и мы не на главной стр слайдера
                    scrollStyle.methods.show();
                }
            },
        },
        created() {
            if(document.getElementsByTagName('body')[0].style.overflow === ''){
                scrollStyle.methods.hidden(false , true);
            }

            this.random = Math.random() * 100;
            //v-if="(getIntroStatus && !getProgressAxios.statusResponseAxios) || firstVisit || getProgressAxios.introSPA"
        },
        mounted() {
            setTimeout(()=> {this.firstVisit = false;}, 1800);
        }
    };
</script>

<style scoped>
    .flash{
        animation: flash-svg 2s cubic-bezier(0.42, 0, 0.58, 1) infinite;
    }
    @keyframes flash-svg{
        0% {opacity: 1;}
        50% {opacity: 0;}
        100% {opacity: 1;}
    }
</style>