<template>
    <div class="work-detailed-page container" :class="[
            {'stopAnimation': !getProgressAxios.statusResponseAxios},
        ]" >
        <div class="row preview-info">
            <h1 v-if="arResult.arFields.NAME" class="col-xl-12 order-1 col-md-20 col-23" showScroll="title" :class="[{ 'moveTop': elementVisibleScroll.title.visible}]">
                {{arResult.arFields.NAME}}
            </h1>
            <div class="fixed-mobile-btn col-xl-11 order-xl-2 order-md-6 col-md-13">
                <base-button
                        :text="'консультация'"
                        :link="'javascript:void(0);'"
                        :typeBtn="'base-btn'"
                        showScroll="consultationBtn1" :class="[{ 'show-button': elementVisibleScroll.consultationBtn1.visible || fixedBtn}]"
                        @clickBtn="openCallBackForm(3, 'консультация')"
                />
            </div>
            <div class="col-23 order-xl-3 order-md-3 order-2">
                <div class="go-to-project">
                    <go-to-project
                            :id="arResult.arProperty.PROJECT.VALUE"
                            :element-visible-scroll="elementVisibleScroll"
                    />
                </div>
            </div>
            <div  class="col-xl-12 go-to-map order-xl-4 order-md-2 col-md-3 col-auto order-5">
                <span v-if="arResult.arProperty.MAP.VALUE" showScroll="linkMap" :class="[{ 'moveTop': elementVisibleScroll.linkMap.visible}]" v-scroll-to="{
                        element: '#map', 
                        duration: 500, 
                        offset: -headerHeight }">на карте</span>
            </div>
            <div class="prev-info-block col-xl-2 order-xl-5 order-md-4 col-md-5 col-auto order-3" v-if="arResult.arProperty.BEDROOMS.VALUE">
                <div showScroll="room" :class="[{ 'moveTop': elementVisibleScroll.room.visible}]">
                    <span class="title-info">спальни</span>
                    <p>{{arResult.arProperty.BEDROOMS.VALUE}}</p>
                </div>
            </div>
            <div class="prev-info-block col-xl-4 order-xl-6 order-md-5 col-md-5 col-auto order-4" v-if="arResult.arProperty.AREA_WORK.VALUE">
                <div showScroll="area" :class="[{ 'moveTop': elementVisibleScroll.area.visible}]">
                    <span class="title-info">общая площадь</span>
                    <p>{{arResult.arProperty.AREA_WORK.VALUE}}м<sup>2</sup></p>
                </div>
            </div>
        </div>
        <swiper-detailed-projects :ar-slide="arSlidePicture"
                                  :element-visible-scroll="elementVisibleScroll"
                                  @click="openLightBox($event, 'arPicture')"
                                  @slideChange="startAnimation"
        />
        <separator :show="true"/>
        <GoogleMapLoader
                id="map"
                v-if="arResult.arProperty.MAP.VALUE"
                :apiKey="'AIzaSyDzzESXOO5htMqy5-fnRMp9DwRqxPaPxto'"
                :zoom="14"
                :markers="arResult.arProperty.MAP.VALUE"
                showScroll="map" :class="[{ 'opacity-animate': elementVisibleScroll.map.visible}]"
        />
        <popup-cool-light-box :elems="arSrc"/>
    </div>
</template>

<script>
    import Vue from "vue";
    import {showElementScroll} from "../../../../jsFunction/showElementScroll";
    import {getClBlockElement} from "../../../../jsFunction/getCIBlockElement";
    import BaseButton from "../../../layout/BaseButton";
    import Separator from "../../../layout/Separator";
    import SwiperDetailedProjects from "../../../layout/projects/SwiperDetailedProjects";
    import GoogleMapLoader from "../../../layout/map/GoogleMapLoader";
    import VueScrollTo from "vue-scrollto";
    import {scroller} from 'vue-scrollto/src/scrollTo'
    import {seo} from "../../../../jsFunction/seo";
    import GoToProject from './GoToProject';
    import PopupCoolLightBox from "../../../layout/PopupCoolLightBox";

    Vue.use(VueScrollTo, {
        container: "body",
        duration: 500,
        easing: 'ease-in-out',
        onStart: function(element) {
            window.history.replaceState('',"", window.location.pathname + '#' + element.id); // перезаписываем url
        },
    });


    export default {
        name: "WorksDetailedPage",
        mixins: [getClBlockElement, showElementScroll],
        components: {PopupCoolLightBox, SwiperDetailedProjects, BaseButton, GoogleMapLoader, Separator, GoToProject},
        computed: {
            getProgressAxios(){
                return this.$store.getters.getProgressAxios; // чекаем статус загузки контента
            },
        },

        watch:{
            'getProgressAxios.statusResponseAxios' (value){
                if(value){
                    this.startAnimation();
                    this.getHeaderHeight();
                }
            }
        },
        data(){
            return{
                arResult: {
                    arFields:{
                        NAME:{}
                    },
                    arProperty:{
                        MAP: [], PROJECT: [], BEDROOMS: [], PHOTOGALLERY: [], VIDEOGALLERY: [], AREA_WORK: [],
                    }
                },
                arInfoBlock: {
                    arProperty:{
                        ADJUSTMENT_TITLE:{},
                        ADJUSTMENT_TEXT: {
                            '~VALUE': ''
                        },
                        SERVICES_TITLE:{},
                        SERVICES_TEXT: {
                            '~VALUE': ''
                        },
                    },
                },
                arSlidePicture: [],
                arPicture: [],
                arSrc: [],
                elementVisibleScroll: {
                    title:{}, consultationBtn1: {}, consultationBtn2: {}, viewProject: {}, area:{}, linkMap: {}, activeImgSlide: {}, room: {}, map: {}
                },
                arFilters: {},
                showAfterIntro: true,
                arElementsShow: [],
                markers: [],
                arSort: {
                    'SORT' : 'ASC'
                },
                arFilter: {
                    'IBLOCK_ID' : 10, 'ACTIVE' : 'Y', 'CODE': this.$route.params.code,
                },
                arSelect: [
                    'NAME', 'CODE', 'PREVIEW_PICTURE', 'DETAIL_PAGE_URL',
                ],
                arNuvParam: {},
                headerHeight: 0,
                fixedBtn: false,
            }
        },
        methods:{
            openLightBox(i, variable){
                this.includeHostName(this[variable])
                this.$store.dispatch('receiveArSrcImg' , {ind: i});
            },
            includeHostName(arSrc){
                this.arSrc = [];
                console.log(arSrc)
                for(let i in arSrc){
                    this.arSrc[i] ={
                        'src':this.$hostname + arSrc[i].SRC,
                        'title': '',
                    };
                }
                return this.arSrc
            },
            handleScroll(){
                let visibleStatus = showElementScroll.methods.comparisonPosition(this.arElementsShow);
                this.setObjectAnimation(visibleStatus);

                if(window.innerWidth <= 768){
                    this.fixedBtn = true
                } else {
                    this.fixedBtn = false
                }
            },
            startAnimation(){
                this.arElementsShow = showElementScroll.methods.GetElements('.work-detailed-page');
                let visibleStatus = showElementScroll.methods.comparisonPosition(this.arElementsShow);
                this.setObjectAnimation(visibleStatus);
                this.$store.dispatch('receiveCheckPosition');
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
                this.getHeaderHeight();
            },
            scrollTo(id){
                let element = document.querySelector('#'+id);
                let header = document.getElementsByClassName('header');
                window.scrollTo({
                    top: (element.offsetTop - header[0].clientHeight),
                    behavior: 'smooth'
                });
            },
            getHeaderHeight() {
                let header = document.getElementsByClassName('header');
                this.headerHeight = header[0].clientHeight;
            },
            openCallBackForm(id, title){
                let getOnlyFields = 'ALL',
                    sort = 's_sort',
                    order = 'asc',
                    arFilter = {
                        'ACTIVE': 'Y'
                    };
                this.$store.dispatch('receiveParamForm', {
                    id: id, getOnlyFields: getOnlyFields, sort: sort, order: order, arFilter: arFilter, title: title
                });
            },
        },

        created() {
            this.$store.dispatch('receiveAppClass' ,{appClass: 'bgColorGray'} );

            window.addEventListener('scroll', this.handleScroll);
            window.addEventListener('resize', this.handleResize);

            // let arParamUrl = document.location.search.replace('?', '').split('&');
            // let header = document.getElementsByClassName('header');
            // this.headerHeight = header[0].clientHeight;


            getClBlockElement.methods.GetList(this.arSort, this.arFilter,  false, this.arNuvParam, this.arSelect).then((data) => {
                if(typeof data.ITEMS != 'undefined') {
                    this.arResult = data.ITEMS[0];
                    seo.methods.set(this.arResult, 'detail');
                    this.arSlidePicture = [data.ITEMS[0].arFields.PREVIEW_PICTURE_INFO];
                    this.arSlidePicture = this.arSlidePicture.concat(data.ITEMS[0].arProperty.PHOTOGALLERY.FILE_INFO);
                    this.arSlidePicture = this.arSlidePicture.concat(data.ITEMS[0].arProperty.VIDEOGALLERY.VALUE);

                    this.arPicture = [this.arResult.arFields.PREVIEW_PICTURE_INFO];
                    this.arPicture = this.arPicture.concat(this.arResult.arProperty.PHOTOGALLERY.FILE_INFO);

                    if(document.location.hash) {
                        let scrollTo = scroller();
                        scrollTo(document.location.hash);
                    }
                } else {
                    this.$router.push('/404');
                }

            });
        },

        destroyed() {
            this.$store.dispatch('receiveAppClass' ,{appClass: ''} );

            window.removeEventListener('scroll', this.handleScroll);
            window.removeEventListener('resize', this.handleResize);
        }

    }
</script>

<style scoped>

</style>