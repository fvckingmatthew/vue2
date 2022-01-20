<template>
    <div class="service-main-page" id="ServiceMainPage" :class="[{ 'stopAnimation': !getProgressAxios.statusResponseAxios} , {'change-screen': ChangeScreen}]">

        <separator :show="!ChangeScreen"/>

        <div class="row" >
            <div class="col-xxl-10">
                <div class="info-text"
                     showScroll="text" :class="[{ 'moveTop': elementVisibleScroll.text.visible}]"
                     v-if="resultMainPage.arProperty.ADD_INFO_SERVICE.VALUE"
                     v-html="resultMainPage.arProperty.ADD_INFO_SERVICE['~VALUE'].TEXT">
                </div>
            </div>
            <div class="col-xxl-13">
                <div class="listing-services">
                    <div  v-for="(service, i) in this.arResult" :key="i">
                        <separator :show="!ChangeScreen"/>
                        <div class="service-block row">
                            <div class="title-service col-xxl-11 col-xl-13 col-md-15">
                                <h2 :showScroll="'title' + i"
                                    :class="[{ 'moveTop': elementVisibleScroll['title' + i] && elementVisibleScroll['title' + i].visible}]">
                                    {{service.arFields.NAME}}
                                </h2>
                                <base-button
                                        :text="'подробнее'"
                                        :link="service.arFields.DETAIL_PAGE_URL"
                                        :typeBtn="'secondary-button'"
                                        :showScroll="'linkProjects' + i"
                                        :class="[{ 'show-button': elementVisibleScroll['linkProjects' + i] && elementVisibleScroll['linkProjects' + i].visible}]"
                                />
                            </div>
                            <div class="img-service col-xxl-12 col-xl-10 col-md-8"
                                 v-if="service.arFields.PREVIEW_PICTURE"
                                 :showScroll="'projectImg' + i"
                                 :class="[{ 'show-img-scale': elementVisibleScroll['projectImg' + i] && elementVisibleScroll['projectImg' + i].visible}]"
                            >
                                <img :src="$hostname + service.arFields.PREVIEW_PICTURE_INFO.SRC"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getClBlockElement} from "../../../../jsFunction/getCIBlockElement";
    import {showElementScroll} from "../../../../jsFunction/showElementScroll";
    import BaseButton from "../../../layout/BaseButton";
    import Separator from "../../../layout/Separator";

    let nameThisComponent = 'ServiceMainPage';

    export default {
        name: nameThisComponent,
        mixins: [getClBlockElement, showElementScroll],
        components:{
            BaseButton,
            Separator
        },
        props:['activeScreen', 'resultMainPage'],

        data(){
            return{
                changeAxios: false,
                ChangeScreen: false,
                showAfterIntro: true,
                arElementsShow: {},
                elementVisibleScroll: {
                    text:{},
                },
                arResult: [],
            }
        },

        watch: {
            activeScreen: function (arScreen) {           // при изменнеие свойства activeScreen
                if(arScreen !== nameThisComponent && window.innerWidth > 767){  // если в свойсте activeScreen заисан имя не этого компанента
                    this.ChangeScreen = true;           // включаем анимацию перехода экранов
                    window.removeEventListener('scroll', this.handleScroll);
                    window.setTimeout( () => this.setObjectAnimation(false), 1200);
                } else {
                    window.addEventListener('scroll', this.handleScroll);
                    window.setTimeout( () => this.startAnimation(), 1200);
                    if(arScreen === nameThisComponent && window.innerWidth > 767){
                        this.$store.dispatch('receiveAppClass' ,{appClass: 'bgColorGreen' , showSeparator: false} );
                    }
                    if (arScreen === nameThisComponent && window.innerWidth < 768){
                        this.$store.dispatch('receiveAppClass' ,{appClass: 'bgColorGreen' , showSeparator: true} );
                    }
                }
            },
            'getProgressAxios.statusResponseAxios' (value){
                this.changeAxios = true;
                if(value){
                    this.startAnimation();
                }
            }
        },
        computed: {
            getProgressAxios(){
                return this.$store.getters.getProgressAxios; // чекаем статус загузки контента
            },
            bitrixStore(){
                return this.$store.getters.cacheData;
            }
        },
        methods:{
            handleScroll(){
                let visibleStatus = showElementScroll.methods.comparisonPosition(this.arElementsShow);
                this.setObjectAnimation(visibleStatus);
            },
            startAnimation(){
                this.arElementsShow = showElementScroll.methods.GetElements('.service-main-page');
                let visibleStatus = showElementScroll.methods.comparisonPosition(this.arElementsShow);
                this.setObjectAnimation(visibleStatus);
                this.ChangeScreen = false;
            },
            setObjectAnimation(visibleStatus){
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
                this.startAnimation();
            },
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);
            window.addEventListener('resize', this.handleResize);

            let arSort = {
                'SORT' : 'ASC'
            };
            let arFilter = {
                'IBLOCK_ID' : 11,
                'ACTIVE' : 'Y',
                'ID': this.resultMainPage.arProperty.SERVICE_ON_MAIN.VALUE,
            };
            let arSelect = [
                'ID', 'IBLOCK_ID', 'NAME', 'CODE', 'PREVIEW_PICTURE', 'DETAIL_PAGE_URL'
            ];

            let idCache = arFilter.IBLOCK_ID + '_main';
            if(!this.bitrixStore[idCache]) {
                getClBlockElement.methods.GetList(arSort, arFilter, false, false, arSelect).then((data) => {
                    this.arResult = data.ITEMS;

                    this.$store.dispatch('receiveCacheData', {id: idCache, cacheData: data})
                });
            } else {
                this.arResult = this.bitrixStore[idCache].ITEMS;
            }

        },
        mounted() {
            if(!this.changeAxios){
                this.startAnimation();
            }

            let paramsString = document.location.hash.replace('#', '');
            if(paramsString === nameThisComponent){
                this.$store.dispatch('receiveAppClass' ,{appClass: 'bgColorGreen' , showSeparator: false} );
            }
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
            window.removeEventListener('resize', this.handleResize);
        }
    }
</script>

<style scoped>

</style>