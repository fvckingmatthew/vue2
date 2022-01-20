<template>
    <div class="container error-page" :class="[{ 'stopAnimation': !getProgressAxios.statusResponseAxios}]">
        <h1 showScroll="title"  :class="[{ 'moveTop': elementVisibleScroll.title.visible}]">Страница не найдена</h1>
        <separator :show="true"/>
        <div class="error-container">
            <div class="text-block col-xl-8">
                <div class="text">
                    <div class="title" showScroll="underTitle"  :class="[{ 'moveTop': elementVisibleScroll.underTitle.visible}]">кажется, вы потерялись</div>
                    <p showScroll="textUnderTitle"  :class="[{ 'moveTop': elementVisibleScroll.textUnderTitle.visible}]">используйте карту, чтобы найти нужную страницу, или вернитесь на главную</p>
                </div>
                <base-button
                        :text="'на главную'"
                        :link="'/'"
                        :typeBtn="'base-btn'"
                        showScroll="button" :class="[{ 'show-button': elementVisibleScroll.button.visible}]"
                />
            </div>
            <div class="offset-7 col-16" v-if="windowWidth === 1200">
                <icon-base :width="1304" :height="709"><error-desc @clickPath="routeDetailPage($event)"/></icon-base>
            </div>
            <icon-base v-if="windowWidth === 768" :width="729" :height="531"><error-tablet @clickPath="routeDetailPage($event)"/></icon-base>
            <icon-base v-if="windowWidth === 414" :width="396" :height="610"><error-mobile @clickPath="routeDetailPage($event)"/></icon-base>
        </div>
    </div>
</template>

<script>
    import {showElementScroll} from "./../jsFunction/showElementScroll";
    import IconBase from "./IconBase";
    import ErrorDesc from "./icons/ErrorDesc";
    import ErrorTablet from "./icons/ErrorTablet";
    import ErrorMobile from "./icons/ErrorMobile";
    import Separator from "./layout/Separator";
    import BaseButton from "./layout/BaseButton";

    export default {
        name: "NotFound",
        mixins:[showElementScroll],
        components: {BaseButton, Separator, ErrorMobile, ErrorDesc, IconBase, ErrorTablet},
        data(){
            return{
                elementVisibleScroll: {
                    title:{},
                    button: {},
                    underTitle: {},
                    textUnderTitle:{},
                    text:{},
                },
                showAfterIntro: true,
                arElementsShow: [],
                windowWidth: 1200,
            }
        },
        computed: {
            getProgressAxios(){
                return this.$store.getters.getProgressAxios;
            },
        },
        watch:{
            'getProgressAxios.statusResponseAxios' (value){
                if(value){
                    this.startAnimation();
                    this.$store.dispatch('receiveAppClass' ,{appClass: 'bgColorLightGray' , showSeparator: true} );
                }
            }
        },
        methods:{
            routeDetailPage(link){
                if(link !== '' && link !== 'javascript:void(0);'){
                    this.$router.push(link)
                }
            },
            handleScroll(){
                let visibleStatus = showElementScroll.methods.comparisonPosition(this.arElementsShow);   // получаем статус видимости элементов на экранен
                this.setObjectAnimation(visibleStatus);                                                  // закидываем полученный массив на обработку под реактивность Vue
            },
            startAnimation(){                                                                            // запуск анимации видимых элементов
                this.arElementsShow = showElementScroll.methods.GetElements('.error-page');   // получаем позиции элементов на странице для анимации
                let visibleStatus = showElementScroll.methods.comparisonPosition(this.arElementsShow);
                this.setObjectAnimation(visibleStatus);
                this.$store.dispatch('receiveCheckPosition');
            },
            setObjectAnimation(visibleStatus){                   // обработка объекта с позициями элементов под реактивность Vue
                for (let item in this.arElementsShow ) {
                    this.$set(this.elementVisibleScroll, item , this.arElementsShow[item]);
                    if(typeof visibleStatus === 'boolean'){
                        this.$set(this.elementVisibleScroll[item], 'visible' , visibleStatus);
                    } else {
                        this.$set(this.elementVisibleScroll[item], 'visible' , visibleStatus[item].visible);
                    }

                }
            },
            handleResize(){
                if(window.innerWidth > 1199){
                    this.windowWidth = 1200;
                } else if(window.innerWidth >767) {
                    this.windowWidth = 768;
                } else {
                    this.windowWidth = 414;
                }
                this.startAnimation();
            },
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);
            window.addEventListener('resize', this.handleResize);
            if(window.innerWidth > 1199){
                this.windowWidth = 1200;
            } else if(window.innerWidth >767) {
                this.windowWidth = 768;
            } else {
                this.windowWidth = 414;
            }
        },
        mounted(){
            if(this.getProgressAxios.statusResponseAxios){
                this.startAnimation();
                this.$store.dispatch('receiveAppClass' ,{appClass: 'bgColorLightGray' , showSeparator: true} );
            }
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
            window.removeEventListener('resize', this.handleResize);
            this.$store.dispatch('receiveAppClass' ,{appClass: '' , showSeparator: true} );
        }
    }
</script>

<style scoped>

</style>