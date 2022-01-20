<template>
    <div class="project-main-page work-main-page" id="WorkMainPage" :class="[{ 'stopAnimation': !getProgressAxios.statusResponseAxios} , {'change-screen': ChangeScreen}]">
        <h1  :showScroll="'titleWork'"  :class="[{ 'moveTop': elementVisibleScroll.titleWork.visible}]"
             v-if="resultMainPage.arProperty.TITLE_MAIN_WORKS.VALUE">
                {{resultMainPage.arProperty.TITLE_MAIN_WORKS.VALUE}}
        </h1>

        <separator :show="!ChangeScreen"/>

        <div class="count-project row" >
            <div class="col-xl-12 col-md-auto" showScroll="textWork" :class="[{ 'moveTop': elementVisibleScroll.textWork.visible}]"
                 v-if="resultMainPage.arProperty.ADD_INFO_WORKS.VALUE"
                 v-html="resultMainPage.arProperty.ADD_INFO_WORKS['~VALUE'].TEXT">
            </div>
            <div class="col-xl-11 col-md-auto">
                <base-button
                        :text="'все дома'"
                        :link="'/projects/'"
                        :typeBtn="'base-btn'"
                        showScroll="linkProjectsWork1" :class="[{ 'show-button': elementVisibleScroll.linkProjectsWork1.visible}]"
                />
            </div>
        </div>

        <listing-projects v-if="arResult && elementVisibleScroll" :ar-result="arResult" :width-order="widthOrder"  :element-visible-scroll="elementVisibleScroll"
                          :path-list-page="'.work-main-page'"
                          :check-position-watermark="checkPositionWatermark"
        />

        <div class="text-under-projects row">
            <p class="col-xxl-8 offset-xxl-7 col-md-auto" showScroll="textUnderProjectsWork"
               :class="[{ 'moveTop': elementVisibleScroll.textUnderProjectsWork.visible}]"
               v-if="resultMainPage.arProperty.TEXT_UNDER_WORKS.VALUE "
               v-html="resultMainPage.arProperty.TEXT_UNDER_WORKS['~VALUE'].TEXT">
            </p>
            <div class="col-xxl-8 col-md-auto">
                <base-button
                        :text="'все дома'"
                        :link="'/projects/'"
                        :typeBtn="'base-btn'"
                        showScroll="linkProjectsWork2" :class="[{ 'show-button': elementVisibleScroll.linkProjectsWork2.visible}]"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import Separator from "../../../layout/Separator";
    import BaseButton from "../../../layout/BaseButton";
    import ListingProjects from "../../../layout/projects/ListingProjects";
    import {getClBlockElement} from "../../../../jsFunction/getCIBlockElement";
    import {showElementScroll} from "../../../../jsFunction/showElementScroll";
    let nameThisComponent = 'WorkMainPage';
    export default {
        name: nameThisComponent,
        mixins: [getClBlockElement, showElementScroll],
        components:{
            ListingProjects,
            BaseButton,
            Separator
        },
        props:['activeScreen', 'resultMainPage'],

        data(){
            return{
                changeAxios: false,
                ChangeScreen: false,
                showAfterIntro: true,
                checkPositionWatermark: false,
                arElementsShow: {},
                elementVisibleScroll: {
                    titleWork:{},
                    linkProjectsWork1:{},
                    linkProjectsWork2:{},
                    textUnderProjectsWork:{},
                    textWork:{},
                },
                arResult: [],
                widthOrder:['col-xl-16 col-md-13','col-xl-7 col-md-10','col-xl-7 col-md-10','col-xl-16 col-md-13'], // последеовательность колонок для проектов
            }
        },

        watch: {
            activeScreen: function (arScreen) {           // при изменнеие свойства activeScreen
                if(arScreen !== nameThisComponent && window.innerWidth > 767){  // если в свойсте activeScreen заисан имя не этого компанента
                    this.ChangeScreen = true;           // включаем анимацию перехода экранов
                    window.removeEventListener('scroll', this.handleScroll);
                    window.setTimeout( () => this.setObjectAnimation(false), 1200);
                    this.checkPositionWatermark = false;
                } else  {
                    window.addEventListener('scroll', this.handleScroll);
                    window.setTimeout( () => {
                        this.startAnimation();
                        this.checkPositionWatermark = true;
                    }, 1200);
                    if(arScreen === nameThisComponent){
                        this.$store.dispatch('receiveAppClass' ,{appClass: 'bgColorGray'} );
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
                this.arElementsShow = showElementScroll.methods.GetElements('.work-main-page');
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
                'IBLOCK_ID' : 10,
                'ACTIVE' : 'Y',
                'ID': this.resultMainPage.arProperty.WORKS_ON_MAIN.VALUE,
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
                this.$store.dispatch('receiveAppClass' ,{appClass: 'bgColorGray'} );
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