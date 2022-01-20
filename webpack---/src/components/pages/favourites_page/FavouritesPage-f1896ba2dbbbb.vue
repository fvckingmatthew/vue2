<template>
    <div class="container favourite-page" :class="[{ 'stopAnimation': !getProgressAxios.statusResponseAxios}]">
        <h1 showScroll="title" :class="[{ 'moveTop': elementVisibleScroll.title.visible}]">{{$route.name}}</h1>
        <swiper-table v-if="idItems.length > 0 && idItems[0] !== ''"
                      :id-item="idItems"
                      :element-visible-scroll="elementVisibleScroll"
                      :table-property="tableProperty"
                      :table-price="priceProperty"
                      :id-block="9"
        />
        <div v-else>
            <separator :show="true"/>
            <div class="error-container">
                <div class="text-block col-xl-9">
                    <div class="text">
                        <div class="title" showScroll="underTitle"  :class="[{ 'moveTop': elementVisibleScroll.underTitle.visible}]">в избранном пока ничего нет</div>
                        <p showScroll="textUnderTitle"  :class="[{ 'moveTop': elementVisibleScroll.textUnderTitle.visible}]">
                            жмите <icon-base width="22" height="20"><favourite-icon/></icon-base>  на странице проекта, чтобы добавлять проекты в избранное
                        </p>
                    </div>
                    <base-button
                            :text="'проекты'"
                            :link="'/projects/'"
                            :typeBtn="'base-btn'"
                            showScroll="button" :class="[{ 'show-button': elementVisibleScroll.button.visible}]"
                    />
                </div>
                <div class="offset-7 col-16 " v-if="windowWidth === 1200">
                    <icon-base class="svg-plan" :width="1304" :height="709"><error-desc @clickPath="routeDetailPage($event)"></error-desc></icon-base>
                </div>
                <icon-base class="svg-plan" v-if="windowWidth === 768" :width="729" :height="531"><error-tablet @clickPath="routeDetailPage($event)"></error-tablet></icon-base>
                <icon-base class="svg-plan" v-if="windowWidth === 414" :width="396" :height="610"><error-mobile @clickPath="routeDetailPage($event)"></error-mobile></icon-base>
            </div>
        </div>
    </div>
</template>

<script>
    import {cookie} from "../../../jsFunction/cookie";
    import {showElementScroll} from "../../../jsFunction/showElementScroll";
    import SwiperTable from "../price_page/parts/SwiperTable";
    import BaseButton from "../../layout/BaseButton";
    import Separator from "../../layout/Separator";
    import IconBase from "../../IconBase";
    import ErrorDesc from "../../icons/ErrorDesc";
    import ErrorMobile from "../../icons/ErrorMobile";
    import ErrorTablet from "../../icons/ErrorTablet";
    import FavouriteIcon from "../../icons/FavouriteIcon";


    export default {
        name: "FavouritesPage",
        components: {FavouriteIcon, ErrorTablet, ErrorMobile, ErrorDesc, IconBase, Separator, BaseButton, SwiperTable},
        data(){
            return{
                elementVisibleScroll: { // зписывам в объект имена showScroll элементов
                    title:{}, titleFilter: {}, wrapFilter: {}, filerList: {}, linkProjectsWork1: {}, mobileTitleFilter: {}, btnConsul:{}, btnConsul2: {}, similarTitle:{},
                    projectsBtn1: {}, navBtn:{}, textTable: {}, priceTextMaterial: {}, rowTable: {}, priceMaterial:{}, titlePayment:{}, titleConfigurator: {}, inputCalculator:{},
                    resultPrice: {}, textResultPrice: {}, materialBlock: {}, titleScheme: {}, underTitle:{}, textUnderTitle:{}, button:{}
                },
                idItems: [],
                tableProperty: [
                    'AREA_PROJECT', 'SIZE_PROJECT', 'ROOM_PROJECT', 'BATHROOMS_PROJECT', 'WALL_PROJECT', 'ROOF_PROJECT',
                    'OVERLAPS_PROJECT', 'EXTERIOR_FINISH', 'ARCHITECTURAL_STYLE', 'PRICE_PROJECT'
                ],
                priceProperty: 'PRICE_BUILDING',
                windowWidth: 1200,
            }
        },
        computed: {
            getIntroStatus(){
                return this.$store.getters.getIntroStatus; // чекаем статус Интро
            },
            getProgressAxios(){
                return this.$store.getters.getProgressAxios;
            },
        },
        watch:{
            'getProgressAxios.statusResponseAxios' (value){
                if(value){
                    this.startAnimation();
                }
            }
        },
        methods:{
            routeDetailPage(link){
                if(link !== '' && link !== 'javascript:void(0);'){
                    this.$router.push(link)
                }
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
            startAnimation(){                                                                            // запуск анимации видимых элементов
                this.arElementsShow = showElementScroll.methods.GetElements('.favourite-page');   // получаем позиции элементов на странице для анимации
                let visibleStatus = showElementScroll.methods.comparisonPosition(this.arElementsShow);
                this.setObjectAnimation(visibleStatus);
                this.$store.dispatch('receiveCheckPosition');
            },
            handleScroll(){
                let visibleStatus = showElementScroll.methods.comparisonPosition(this.arElementsShow);   // получаем статус видимости элементов на экранен
                this.setObjectAnimation(visibleStatus);                                                 // закидываем полученный массив на обработку под реактивность Vue
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
            document.title = 'Избранное';
            document.querySelector('meta[name="description"]').setAttribute("content", "");
            document.querySelector('meta[name="keywords"]').setAttribute("content", "");
            if(cookie.methods.get('favouriteId') !== null){
                this.idItems = cookie.methods.get('favouriteId').split(',');
            }

            if(window.innerWidth > 1199){
                this.windowWidth = 1200;
            } else if(window.innerWidth > 767){
                this.windowWidth = 768;
            } else {
                this.windowWidth = 414;
            }
        },
        mounted() {
            this.startAnimation();
            this.$store.dispatch('receiveAppClass' ,{appClass: 'bgColorLightGray' , showSeparator: true} );

        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
            window.removeEventListener('resize', this.handleResize);
        }
    }
</script>

<style scoped>

</style>