<template>
    <div class="service-detailed-page container" :class="[
            { 'stopAnimation': !getProgressAxios.statusResponseAxios && !changeCode},
            {'change-screen': changeCode}
        ]">
        <div class="preview-block row">
            <div class="col-xxl-3 col-md-23 col-11 order-xxl-1 order-2 left-side">
                <div class="added-img-service " v-for="(picture, i) in arrayInHalf(arResult.arProperty.ADD_PICTURE.FILE_INFO, true)" :key="i"
                     :class="[{'switch-picture': flagSwitchPicture && activeAddPicture === i}]"
                >
                    <div class="wrap-added-img">
                        <div class="prev-picture">
                            <img :src="$hostname + fakeAddPicture"/>
                        </div>
                        <div class="next-picture" :showScroll="'leftSideImg' + i" :class="[{ 'show-img-project': elementVisibleScroll['leftSideImg' + i] && elementVisibleScroll['leftSideImg' + i].visible},]">
                            <img :src="$hostname + picture.SRC" @click="switchImg(i)"
                                 :width="picture.WIDTH"
                                 :height="picture.HEIGHT"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xxl-4 col-md-23 col-12 order-xxl-2 order-3 right-side">
                <div class="added-img-service" v-for="(picture, i) in arrayInHalf(arResult.arProperty.ADD_PICTURE.FILE_INFO, false)" :key="i"
                     :class="[{'switch-picture': flagSwitchPicture && activeAddPicture === i + 3}]">
                    <div class="wrap-added-img">
                        <div class="prev-picture">
                            <img :src="$hostname + fakeAddPicture"/>
                        </div>
                        <div class="next-picture" :showScroll="'rightSideImg' + i" :class="[{ 'show-img-project': elementVisibleScroll['rightSideImg' + i] && elementVisibleScroll['rightSideImg' + i].visible},]">
                            <img :src="$hostname + picture.SRC" @click="switchImg(i + 3)"
                                 :width="picture.WIDTH"
                                 :height="picture.HEIGHT"
                            />
                        </div>
                    </div>

                </div>
            </div>
            <div class="col-xxl-16 order-xxl-3 order-1 preview-info">
                <div class="preview-picture"
                     :class="[{'switch-picture': flagSwitchPicture}]"

                     @click="openLightBox(0, 'arPicture')">
                    <div class="prev-picture">
                        <img :src="$hostname + fakePreview">
                    </div>
                    <div class="next-picture" :showScroll="'previewPicture'" :class="{ 'show-img-project': elementVisibleScroll.previewPicture.visible}">
                        <img :src="$hostname + arResult.arFields.PREVIEW_PICTURE_INFO.SRC"
                             :width="arResult.arFields.PREVIEW_PICTURE_INFO.WIDTH"
                             :height="arResult.arFields.PREVIEW_PICTURE_INFO.HEIGHT"
                        >
                    </div>

                </div>
                <div class="preview-text">
                    <div class="title-wrap">
                        <h1 showScroll="title" :class="[{ 'moveTop': elementVisibleScroll.title.visible}]">{{arResult.arFields.NAME}}</h1>
                    </div>
                    <div class="text-preview" showScroll="subtitle" :class="[{ 'moveTop': elementVisibleScroll.subtitle.visible}]" v-html="arResult.arFields['~DETAIL_TEXT']"></div>
                    <div class="btn-service fixed-mobile-btn">
                        <base-button
                                :text="'консультация'"
                                :link="'javascript:void(0);'"
                                :typeBtn="'base-btn'"
                                showScroll="consultationBtn1" :class="[{ 'show-button': elementVisibleScroll.consultationBtn1.visible || fixedBtn}]"
                                @clickBtn="openCallBackForm(8, 'консультация')"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div class="composition-project" v-if="arResult.arProperty.ID_PROJECT_DESIGN.VALUE">
            <separator :show="true"/>
            <h2 showScroll="compositionTitle" :class="[{ 'moveTop': elementVisibleScroll.compositionTitle.visible}]">{{arResult.arProperty.PROJECT_DESIGN_TITLE.VALUE}}</h2>
            <div class="row">
                <separator class="col-18 offset-5" :show="true"/>
                <div class="subtitle-section col-xxl-5 col-md-auto order-xxl-1 order-2">
                    <p showScroll="compositionSubtitle" :class="[{ 'moveTop': elementVisibleScroll.compositionTitle.visible}]">{{arResult.arProperty.PROJECT_DESIGN_SUBTITLE.VALUE}}</p>
                </div>
                <div class="title-composition col-xxl-7 col-md-auto offset-md-auto  order-xxl-2 order-1">
                    <h3 showScroll="compositionTitleH3" :class="[{ 'moveTop': elementVisibleScroll.compositionTitleH3.visible}]">Варианты проектов</h3>
                </div>

                <composition-service-project class=" col-xxl-11 col-md-auto offset-md-auto  order-3"
                                             :ar-parent="arResult.arProperty.ID_PROJECT_DESIGN.VALUE"
                                             :element-visible-scroll="elementVisibleScroll"
                                             @clickAccordion="startAnimation()"
                />
            </div>
        </div>

        <div class="design-stages" v-if="arResult.arProperty.DESIGN_STAGES['~VALUE']">
            <separator :show="true"/>
            <div class="row title-block">
                <div class="col-xxl-7">
                    <h2 showScroll="titleScheme" :class="[{ 'moveTop': elementVisibleScroll.titleScheme.visible}]">
                        этапы проектирования
                    </h2>
                </div>
                <div class="col-auto offset-xxl-0 offset-xl-7 offset-md-11" showScroll="textScheme" :class="[{ 'moveTop': elementVisibleScroll.textScheme.visible}]">
                    <p>Поможем сделать пространство вашего дома удобным и реализовать ваши пожелания по оформлению.</p>
                </div>
            </div>

            <snake-diagram :list-value="arResult.arProperty.DESIGN_STAGES['~VALUE']" :element-visible-scroll="elementVisibleScroll"/>
        </div>

        <div class="portfolio-service" v-if="arResult.arProperty.ID_GALLERY.VALUE">
            <separator :show="true"/>
            <h2 showScroll="titlePortfolio" :class="[{ 'moveTop': elementVisibleScroll.titlePortfolio.visible}]">Наши проекты</h2>

            <gallery-service-project :ar-parent="arResult.arProperty.ID_GALLERY.VALUE" :element-visible-scroll="elementVisibleScroll" @click="includeHostName($event), openLightBox(0)"/>
        </div>

        <popup-cool-light-box :elems="arSrc"/>

    </div>
</template>

<script>
    import {showElementScroll} from "../../../jsFunction/showElementScroll";
    import {getClBlockElement} from "../../../jsFunction/getCIBlockElement";
    import {seo} from "../../../jsFunction/seo";
    import Separator from "../../layout/Separator";
    import BaseButton from "../../layout/BaseButton";
    import CompositionServiceProject from "./part/CompositionServiceProject";
    import SnakeDiagram from "../../layout/SnakeDiagram";
    import GalleryServiceProject from "./part/GalleryServiceProject";
    import PopupCoolLightBox from "../../layout/PopupCoolLightBox";

    export default {
        name: "ServiceDetailedPage",
        components: {
            PopupCoolLightBox, GalleryServiceProject, SnakeDiagram, CompositionServiceProject, BaseButton, Separator},
        data(){
          return{
              changeAxios: false,
              elementVisibleScroll: { // зписывам в объект имена showScroll элементов
                  titleScheme: '',
                  title: '',
                  subtitle: '',
                  consultationBtn1: '',
                  previewPicture: '',
                  compositionTitle: '',
                  compositionSubtitle: '',
                  compositionTitleH3: '',
                  textScheme: '',
                  titlePortfolio: '',
                  subtitlePortfolio: '',
                  textPortfolio: '',
                  previewPictureGallery: '',
              },
              showAfterIntro: true,
              arElementsShow: [],
              arSrc: [],
              arPicture: [],
              arResult:{
                  arProperty:{
                      ADD_PICTURE: [],
                      ID_PROJECT_DESIGN: [],
                      PROJECT_DESIGN_TITLE: '',
                      PROJECT_DESIGN_SUBTITLE: '',
                      DESIGN_STAGES: '',
                      ID_GALLERY: []
                  },
                  arFields:{
                      PREVIEW_PICTURE: [],
                      DETAIL_TEXT: '',
                      NAME: '',
                      PREVIEW_PICTURE_INFO: []
                  }
              },
              arSort: {
                  'SORT' : 'ASC'
              },
              arFilter: {
                  'IBLOCK_ID' : 11, 'ACTIVE' : 'Y', 'CODE': this.$route.params.code
              },
              arSelect: [
                  'NAME', 'CODE', 'PREVIEW_PICTURE', 'DETAIL_PAGE_URL', 'DETAIL_TEXT'
              ],
              arNuvParam: {},
              fixedBtn: false,
              changeCode: false,
              fakePreview: '',
              fakeAddPicture: '',
              activeAddPicture: -1,
              flagSwitchPicture: false,
          }
        },
        watch:{
            '$route' (to){
                this.changeCode = true;
                this.arFilter.CODE = to.params.code;
                window.setTimeout( () => {
                    let cacheId = this.arFilter.IBLOCK_ID + '_' + to.params.code;
                    if(!this.bitrixStore[cacheId]) {
                        getClBlockElement.methods.GetList(this.arSort, this.arFilter, false, this.arNuvParam, this.arSelect).then((data) => {
                            this.arResult = data.ITEMS[0];
                            this.arPicture = [data.ITEMS[0].arFields.PREVIEW_PICTURE_INFO];
                            this.arPicture = this.arPicture.concat(data.ITEMS[0].arProperty.ADD_PICTURE.FILE_INFO);
                            seo.methods.set(this.arResult, 'detail');
                            this.$store.dispatch('receiveCheckPosition'); // заставляем пересмотреть футер положение своих элементов
                        });
                    } else {
                        this.arResult = this.bitrixStore[cacheId].ITEMS[0];
                        this.arPicture = [this.arResult.arFields.PREVIEW_PICTURE_INFO];
                        this.arPicture = this.arPicture.concat(this.arResult.arProperty.ADD_PICTURE.FILE_INFO);
                        seo.methods.set(this.arResult, 'detail');
                        this.$store.dispatch('receiveCheckPosition'); // заставляем пересмотреть футер положение своих элементов
                    }
                    this.changeCode = false;
                }, 1000);
            },
            'getProgressAxios.statusResponseAxios' (value){
                this.changeAxios = true;
                if(value){
                    this.startAnimation();
                }
            }
        },
        methods: {
            switchImg(i){

                if(!this.flagSwitchPicture && window.innerWidth >= 1400){
                    let arAddPicture = this.arResult.arProperty.ADD_PICTURE

                    this.activeAddPicture = i;

                    let tmpAddPicture = arAddPicture.FILE_INFO[i].SRC;
                    let tmpPrevPicture = this.arResult.arFields.PREVIEW_PICTURE_INFO.SRC;

                    this.fakePreview = tmpPrevPicture;
                    this.fakeAddPicture = tmpAddPicture;

                    this.arResult.arFields.PREVIEW_PICTURE_INFO.SRC = tmpAddPicture;
                    this.arResult.arProperty.ADD_PICTURE.FILE_INFO[i].SRC = tmpPrevPicture;

                    this.flagSwitchPicture = true;

                    this.arPicture = [this.arResult.arFields.PREVIEW_PICTURE_INFO];
                    this.arPicture = this.arPicture.concat(this.arResult.arProperty.ADD_PICTURE.FILE_INFO);

                    setTimeout(()=> {
                        this.flagSwitchPicture = false;
                    }, 1350)

                } else {
                    this.openLightBox(i + 1, 'arPicture');
                }

            },
            openLightBox(i, variable){
                if(typeof variable !=='undefined'){
                    this.includeHostName(this[variable])
                }
                this.$store.dispatch('receiveArSrcImg' , {ind: i});
            },
            includeHostName(arSrc){
                this.arSrc = [];

                for(let i in arSrc){
                    this.arSrc[i] ={
                        'src':this.$hostname + arSrc[i].SRC,
                        'title': '',
                    };
                }
                //return this.arSrc
            },
            arrayInHalf(array, part){
                let resultArray = [0];
                let u = 0;
                for (let i in array){
                    if(part && i < 3){
                        resultArray[u] = array[i];
                        u++;
                    } else if(!part && i >= 3 && i <6){
                        resultArray[u] = array[i];
                        u++;
                    }
                }
                return resultArray
            },
            handleScroll() {
                let visibleStatus = showElementScroll.methods.comparisonPosition(this.arElementsShow);   // получаем статус видимости элементов на экранен
                this.setObjectAnimation(visibleStatus);                                                 // закидываем полученный массив на обработку под реактивность Vue

                if(window.innerWidth <= 768){
                    this.fixedBtn = true
                } else {
                    this.fixedBtn = false
                }
            },
            startAnimation() {                                                                            // запуск анимации видимых элементов
                this.arElementsShow = showElementScroll.methods.GetElements('.service-detailed-page');   // получаем позиции элементов на странице для анимации
                let visibleStatus = showElementScroll.methods.comparisonPosition(this.arElementsShow);
                this.setObjectAnimation(visibleStatus);
            },
            setObjectAnimation(visibleStatus) {                   // обработка объекта с позициями элементов под реактивность Vue
                for (let item in this.arElementsShow) {
                    this.$set(this.elementVisibleScroll, item, this.arElementsShow[item]);
                    if (typeof visibleStatus === 'boolean') {
                        this.$set(this.elementVisibleScroll[item], 'visible', visibleStatus);
                    } else {
                        this.$set(this.elementVisibleScroll[item], 'visible', visibleStatus[item].visible);
                    }
                }
            },
            handleResize() {
                this.startAnimation();
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
        computed: {
            getProgressAxios(){
                return this.$store.getters.getProgressAxios; // чекаем статус загузки контента
            },
            bitrixStore(){
                return this.$store.getters.cacheData;
            }
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);
            window.addEventListener('resize', this.handleResize);
            let cacheId = this.arFilter.IBLOCK_ID + '_' + this.$route.params.code;
            if(!this.bitrixStore[cacheId]) {
                getClBlockElement.methods.GetList(this.arSort, this.arFilter, false, this.arNuvParam, this.arSelect).then((data) => {
                    if(typeof data.ITEMS != 'undefined') {
                        this.arResult = data.ITEMS[0];

                        seo.methods.set(this.arResult, 'detail');

                        this.arPicture = [this.arResult.arFields.PREVIEW_PICTURE_INFO];
                        this.arPicture = this.arPicture.concat(data.ITEMS[0].arProperty.ADD_PICTURE.FILE_INFO);


                        this.$store.dispatch('receiveCheckPosition'); // заставляем пересмотреть футер положение своих элементов

                    } else {
                        this.$router.push('/404');
                    }
                })
            } else {
                this.arResult = this.bitrixStore[cacheId].ITEMS[0];
                seo.methods.set(this.arResult, 'detail');

                this.arPicture = [this.arResult.arFields.PREVIEW_PICTURE_INFO];
                this.arPicture = this.arPicture.concat(this.arResult.arProperty.ADD_PICTURE.FILE_INFO);


                this.$store.dispatch('receiveCheckPosition'); // заставляем пересмотреть футер положение своих элементов
            }
        },

        mounted() {
            if(!this.changeAxios){
                this.startAnimation();
            }
            this.$store.dispatch('receiveAppClass', {appClass: 'bgColorGreen', showSeparator: true});
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