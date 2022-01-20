<template>
    <div class="project-detailed-page container" :class="[
            { 'stopAnimation': !getProgressAxios.statusResponseAxios && !changeCode},
            {'change-screen': changeCode}
         ]"
         itemscope itemtype="http://schema.org/Product"
    >
        <div class="row preview-info">
            <h1 itemprop="name" class="col-xl-13 col-md-19 col-17 order-1" showScroll="title" :class="[{ 'moveTop': elementVisibleScroll.title.visible}]">
                {{arResult.arFields.NAME}}
            </h1>
            <div class="col-btn fixed-mobile-btn col-xl-6 col-md-auto col-23 order-xl-2 order-6 offset-xl-0 offset-md-auto">
                <base-button
                        :text="'консультация'"
                        :link="'javascript:void(0);'"
                        :typeBtn="'base-btn'"
                        showScroll="consultationBtn1" :class="[{ 'show-button': elementVisibleScroll.consultationBtn1.visible || fixedBtn}]"
                        @clickBtn="openCallBackForm(2, 'консультация')"
                />
            </div>

            <div class="col-auto offset-auto order-xl-3 order-2 favourite-btn-block">
                <div class="favourite-btn" showScroll="like" :class="[{ 'moveTop': elementVisibleScroll.title.visible}, {'selected': checkFavourite}]" @click="setFavourite()">
                    <icon-base width="23" height="20" icon-name="favourite-icon"><favourite-icon/></icon-base>
                </div>
            </div>

            <div class="col-xl-7 col-23 architectural-style order-xl-4 order-3" v-if="arResult.arProperty.ARCHITECTURAL_STYLE.VALUE" showScroll="architectural" :class="[{ 'moveTop': elementVisibleScroll.architectural.visible}]">
                <span class="title-info">архитектурный стиль</span>
                <p>{{arResult.arProperty.ARCHITECTURAL_STYLE.VALUE}}</p>
            </div>
            <div class="col-md-6 col-auto area-project order-xl-5 order-5" v-if="arResult.arProperty.AREA_PROJECT.VALUE" showScroll="area" :class="[{ 'moveTop': elementVisibleScroll.area.visible}]">
                <div><span class="title-info">общая площадь</span>
                    <p>{{arResult.arProperty.AREA_PROJECT.VALUE}}М<sup>2</sup></p></div>
            </div>
            <div
                    class="col-xl-6 col-md-7 col-14 price-build order-xl-6 order-4"
                    v-if="arResult.arProperty.PRICE_BUILDING.VALUE"
                    showScroll="priceBuild"
                    :class="[{ 'moveTop': elementVisibleScroll.priceBuild.visible}]"
                    itemprop="offers" itemscope itemtype="http://schema.org/Offer"
            >
                <span class="title-info">цена строительства</span>
                <p itemprop="price">{{arResult.arProperty.PRICE_BUILDING.VALUE}} <b itemprop="priceCurrency">₽</b></p>
            </div>
        </div>

        <swiper-detailed-projects :ar-slide="arSlidePicture"
                                  :element-visible-scroll="elementVisibleScroll"
                                  @click="openLightBox($event, 'arSlidePicture')"
                                  @slideChange="startAnimation"
        />

        <div class="specifications-block">
            <separator :show="true"/>
            <h2 showScroll="specificationsTitle" :class="[{ 'moveTop': elementVisibleScroll.specificationsTitle.visible}]">
                Характеристики
            </h2>
            <div class="row">
                <div class="col-xl-7 col-md-11 order-1">
                    <div class="price-project" v-if="arResult.arProperty.PRICE_PROJECT.VALUE"
                         showScroll="priceProject" :class="[{ 'moveTop': elementVisibleScroll.priceProject.visible}]"
                    >
                        <p>цена проекта</p>
                        <span>{{arResult.arProperty.PRICE_PROJECT.VALUE}} ₽</span>
                    </div>
                    <div class="print-project" showScroll="printProject" :class="[{ 'moveTop': elementVisibleScroll.printProject.visible}]">
                        <a target="_blank" :href="$hostname + '/upload/pdf/' + arResult.arFields.CODE + '.pdf'">распечатать проект</a>
                    </div>
                </div>
                <div class="row col-xl-10 order-xl-2 order-3">
                    <div class="price-build col-xl-23 col-11" v-if="arResult.arProperty.PRICE_BUILDING.VALUE"
                         showScroll="priceBuild2" :class="[{ 'moveTop': elementVisibleScroll.priceBuild2.visible}]"
                    >
                        <span class="title-info">цена строительства</span>
                        <p>{{arResult.arProperty.PRICE_BUILDING.VALUE}} ₽</p>
                    </div>
                    <div class="specifications-detail col-xl-23 col-md-12"
                         showScroll="specificationsDetail" :class="[{ 'moveTop': elementVisibleScroll.specificationsDetail.visible}]"
                    >
                        <div v-if="arResult.arProperty.AREA_PROJECT.VALUE" itemprop="description">
                            <p class="title-specification">площадь</p>
                            <span class="value-specification">{{arResult.arProperty.AREA_PROJECT.VALUE}}м<sup>2</sup></span>
                        </div>
                        <div v-if="arResult.arProperty.SIZE_PROJECT.VALUE" itemprop="description">
                            <p class="title-specification">габариты </p>
                            <span class="value-specification">{{arResult.arProperty.SIZE_PROJECT.VALUE}}м</span>
                        </div>
                        <div v-if="arResult.arProperty.ROOM_PROJECT.VALUE" itemprop="description">
                            <p class="title-specification">спальни</p>
                            <span class="value-specification">{{arResult.arProperty.ROOM_PROJECT.VALUE.replace(/\D+/g,"")}}</span>
                        </div>
                        <div v-if="arResult.arProperty.BATHROOMS_PROJECT.VALUE" itemprop="description">
                            <p class="title-specification">санузлы</p>
                            <span class="value-specification">{{arResult.arProperty.BATHROOMS_PROJECT.VALUE}}</span>
                        </div>

                        <div v-if="arResult.arProperty.WALL_PROJECT.VALUE" itemprop="description">
                            <p class="title-specification">стены</p>
                            <span class="value-specification">{{arResult.arProperty.WALL_PROJECT.VALUE}}</span>
                        </div>
                        <div v-if="arResult.arProperty.ROOF_PROJECT.VALUE" itemprop="description">
                            <p class="title-specification">кровля</p>
                            <span class="value-specification">{{arResult.arProperty.ROOF_PROJECT.VALUE}}</span>
                        </div>
                        <div v-if="arResult.arProperty.OVERLAPS_PROJECT.VALUE" itemprop="description">
                            <p class="title-specification">перекрытия</p>
                            <span class="value-specification">{{arResult.arProperty.OVERLAPS_PROJECT.VALUE}}</span>
                        </div>
                        <div v-if="arResult.arProperty.EXTERIOR_FINISH.VALUE" itemprop="description">
                            <p class="title-specification">наружная отделка</p>
                            <span class="value-specification">{{arResult.arProperty.EXTERIOR_FINISH.VALUE}}</span>
                        </div>
                    </div>
                </div>
                <div class="col-auto order-xl-3 order-2 btn-mobile-hidden">
                    <base-button
                            :text="'консультация'"
                            :link="'javascript:void(0);'"
                            :typeBtn="'base-btn '"
                            showScroll="consultationBtn2" :class="[{ 'show-button': elementVisibleScroll.consultationBtn2.visible}]"
                            @clickBtn="openCallBackForm(2, 'консультация')"
                    />
                </div>
            </div>
        </div>

        <div class="plans-and-facades">
            <separator :show="true"/>
            <h2 showScroll="titleFacades" :class="[{ 'moveTop': elementVisibleScroll.titleFacades.visible}]">
                Планировки и фасады
            </h2>
            <div class="row">
                <div class="col-xl-4 facade-col" >
                    <div class="text-square" showScroll="textFacades" :class="[{ 'moveTop': elementVisibleScroll.textFacades.visible}]">
                        <span>фасады</span>
                    </div>
                    <div class="facade-img-wrap">
                        <div class="facade-img" v-for="(srcImg, i) in this.arResult.arProperty.FACADES_PICTURE.FILE_INFO" :key="i"
                             :showScroll="'facadeImg' + i"
                             :class="[{ 'show-img-project': elementVisibleScroll['facadeImg' + i] && elementVisibleScroll['facadeImg' + i].visible}]"
                             @click="openLightBox(i, 'arFacadesSrc')"
                        >
                            <img :src="$hostname + srcImg.SRC"
                                 :width="srcImg.WEIGHT"
                                 :height="srcImg.HEIGHT"
                                 @load="startAnimation"
                            >
                        </div>
                    </div>
                </div>
                <div class="col-xl-14 offset-xl-3 col-plans">
                    <div class="plan-block" :class="[{ 'multiply': elementVisibleScroll.titlePlan1.visible}]" v-if="arResult.arProperty.PLAN_FIRST_FLOOR.FILE_INFO.SRC">
                        <div class="text-square" showScroll="titlePlan1" :class="[{ 'moveTop': elementVisibleScroll.titlePlan1.visible}]">
                            <span>план <i>первого этажа</i></span>
                        </div>
                        <div class="mirror-plan"
                             showScroll="mirrorBtn1"
                             :class="[{ 'moveTop': elementVisibleScroll.mirrorBtn1.visible}]"
                             @click="mirrorPlan('mirrorPlan1')"
                        >
                            показать зеркальный вариант
                        </div>
                        <div class="img-plan"
                             :showScroll="'planImg1'"
                             :class="[{ 'show-img-project': elementVisibleScroll.planImg1.visible}, {'mirror-active': mirrorPlan1}]"
                             @click="openLightBox(0, 'arPlansSrc')"
                        >
                            <img :src="$hostname + arResult.arProperty.PLAN_FIRST_FLOOR.FILE_INFO.SRC"
                                 :width="arResult.arProperty.PLAN_FIRST_FLOOR.FILE_INFO.WIDTH"
                                 :height="arResult.arProperty.PLAN_FIRST_FLOOR.FILE_INFO.HEIGHT"
                            />
                        </div>
                    </div>
                    <div class="plan-block" :class="[{ 'multiply': elementVisibleScroll.titlePlan1.visible}]" v-if="arResult.arProperty.PLAN_SECOND_FLOOR.FILE_INFO.SRC">
                        <div class="text-square" showScroll="titlePlan2" :class="[{ 'moveTop': elementVisibleScroll.titlePlan2.visible}]">
                            <span>план <i>второго этажа</i></span>
                        </div>
                        <div class="mirror-plan"
                             showScroll="mirrorBtn2"
                             :class="[{ 'moveTop': elementVisibleScroll.mirrorBtn2.visible}]"
                             @click="mirrorPlan('mirrorPlan2')"
                        >
                            показать зеркальный вариант
                        </div>
                        <div class="img-plan"
                             :showScroll="'planImg2'"
                             :class="[{ 'show-img-project': elementVisibleScroll.planImg2.visible}, {'mirror-active': mirrorPlan2}]"
                             @click="openLightBox(1, 'arPlansSrc')"
                        >
                            <img :src="$hostname + arResult.arProperty.PLAN_SECOND_FLOOR.FILE_INFO.SRC"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="project-adjustment">
            <separator :show="true"/>
            <div class="row">
                <div class="col-xxl-7">
                    <h2 v-if="arInfoBlock.arProperty.ADJUSTMENT_TITLE.VALUE"
                        showScroll="adjustmentProject"
                        :class="[{ 'moveTop': elementVisibleScroll.adjustmentProject.visible}]"
                    >
                        {{arInfoBlock.arProperty.ADJUSTMENT_TITLE.VALUE}}
                    </h2>
                </div>
                <div class="text-info-project col-xxl-7 col-md-19 offset-xxl-0 offset-md-2"
                     v-if="arInfoBlock.arProperty.ADJUSTMENT_TEXT['~VALUE'].TEXT"
                     v-html="arInfoBlock.arProperty.ADJUSTMENT_TEXT['~VALUE'].TEXT"
                     showScroll="adjustmentText"
                     :class="[{ 'moveTop': elementVisibleScroll.adjustmentText.visible}]"
                >
                </div>
                <div class="col-auto offset-xxl-3 offset-md-2">
                    <base-button
                            :text="'Подробнее'"
                            :link="'/services/individualnoe-proektirovanie'"
                            :typeBtn="'base-btn'"
                            showScroll="projectAdjustment" :class="[{ 'show-button': elementVisibleScroll.projectAdjustment.visible}]"
                    />
                </div>
            </div>
        </div>


        <listing-services v-if="arInfoBlock.arProperty.SERVICES_ID.VALUE" :servicesId="arInfoBlock.arProperty.SERVICES_ID.VALUE" :result-parent="arInfoBlock.arProperty" :width-order="widthOrderService" :element-visible-scroll="elementVisibleScroll"/>

        <similar-project v-if="arResult.arProperty.SIMILAR_PROJECTS.VALUE" :title-component="'похожие проекты'" :result-parent="arResult.arProperty.SIMILAR_PROJECTS.VALUE" :width-order="widthOrderSimilar" :element-visible-scroll="elementVisibleScroll"/>

        <popup-cool-light-box :elems="arSrc"/>
    </div>
</template>

<script>
    import {showElementScroll} from "../../../../jsFunction/showElementScroll";
    import {getClBlockElement} from "../../../../jsFunction/getCIBlockElement";
    import {seo} from "../../../../jsFunction/seo";
    import BaseButton from "../../../layout/BaseButton";
    import Separator from "../../../layout/Separator";
    import 'swiper/swiper-bundle.min.css'
    import ListingServices from "./parts/ListingServices";
    import SimilarProject from "./parts/SimilarProject";
    import SwiperDetailedProjects from "../../../layout/projects/SwiperDetailedProjects";
    import IconBase from '../../../IconBase';
    import FavouriteIcon from '../../../icons/FavouriteIcon';
    import {cookie} from "../../../../jsFunction/cookie";
    import PopupCoolLightBox from "../../../layout/PopupCoolLightBox";

    export default {
        name: "ProjectDetailedPage",
        mixins: [getClBlockElement, showElementScroll],
        components: {
            PopupCoolLightBox,
            SwiperDetailedProjects, SimilarProject, ListingServices, Separator, BaseButton, IconBase, FavouriteIcon},
        computed: {
            getProgressAxios(){
                return this.$store.getters.getProgressAxios; // чекаем статус загузки контента
            },
            bitrixStore(){
                return this.$store.getters.cacheData;
            }
        },
        watch:{
            '$route' (to){
                this.changeCode = true;
                this.changeAxios = false;
                window.setTimeout( () => {
                    this.changeScreen(to)
                }, 1000);
            },
            'getProgressAxios.statusResponseAxios' (value){
                this.changeAxios = true;
                if(value){
                    window.setTimeout( () => {
                        this.startAnimation();
                    }, 300);
                }
            }
        },
        data(){
            return{
                changeAxios: false,
                arResult: {
                    arFields:{
                        NAME:{}
                    },
                    arProperty:{
                        ARCHITECTURAL_STYLE: [], AREA_PROJECT: [], PRICE_BUILDING: [], PRICE_PROJECT: [], SIZE_PROJECT: [], ROOM_PROJECT: [], BATHROOMS_PROJECT: [],
                        WALL_PROJECT: [], ROOF_PROJECT: [], OVERLAPS_PROJECT: [], EXTERIOR_FINISH: [], FACADES_PICTURE: [], PLAN_FIRST_FLOOR: {FILE_INFO: {}}, PLAN_SECOND_FLOOR: {FILE_INFO: {}},
                        SIMILAR_PROJECTS: [],
                    }
                },
                arInfoBlock: {
                    arProperty:{
                        ADJUSTMENT_TITLE:{},
                        ADJUSTMENT_TEXT: {
                            '~VALUE': ''
                        },
                        SERVICES_ID: {},
                        SERVICES_TITLE:{},
                        SERVICES_TEXT: {
                            '~VALUE': ''
                        },
                    },
                },
                arSlidePicture: [],
                arFacadesSrc: [],
                arPlansSrc: [],
                elementVisibleScroll: {
                    title:{}, consultationBtn1: {}, consultationBtn2: {}, projectAdjustment: {}, projectsBtn1: {}, like:{}, architectural:{}, area:{}, priceBuild: {}, specificationsTitle: {},
                    priceProject: {}, printProject: {}, priceBuild2: {}, specificationsDetail:{}, titleFacades: {}, textFacades: {}, activeImgSlide: {}, titlePlan1: {}, mirrorBtn1:{}, planImg1:{},
                    titlePlan2: {}, mirrorBtn2:{}, planImg2:{}, adjustmentProject:{}, adjustmentText:{}, servicesProject:{}, servicesText:{}, similarTitle:{}
                },
                arFilters: {},
                arElementsShow: [],
                arSort: {
                    'SORT' : 'ASC'
                },
                arFilter: {
                    'IBLOCK_ID' : 9, 'ACTIVE' : 'Y', 'CODE': this.$route.params.code,
                },
                arSelect: [
                    'NAME', 'CODE', 'PREVIEW_PICTURE', 'DETAIL_PAGE_URL',
                ],
                arNuvParam: {},
                widthOrderService:['col-xxl-7 col-md-11 left-side','col-xxl-10 col-md-12 right-side','col-xxl-6 col-md-11 right-side offset-right-1'],
                widthOrderSimilar:['col-xxl-7 ','col-xxl-5 col-md-12', 'col-md-11'],
                mirrorPlan1: false,
                mirrorPlan2: false,
                fixedBtn: false,
                checkFavourite: false,
                changeCode: false,
                arSrc: [],
            }
        },
        methods:{
            openLightBox(i, variable){
                this.includeHostName(this[variable])
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
                return this.arSrc
            },
            changeScreen(to){
                this.arFilter.CODE = to.params.code;
                window.scrollTo(0, 0);
                this.changeCode = false;

                let cacheId = this.arFilter.IBLOCK_ID + '_' + to.params.code;
                if(!this.bitrixStore[cacheId]) {
                    getClBlockElement.methods.GetList(this.arSort, this.arFilter, false, this.arNuvParam, this.arSelect).then((data) => {
                        this.setProject(data);

                        this.arResult.arFields.NAME = this.arResult.arFields.NAME.replace('проект', '№');
                        this.$store.dispatch('receiveCheckPosition'); // заставляем пересмотреть футер положение своих элементов

                        this.$store.dispatch('receiveCacheData', {id: cacheId, cacheData: data})

                    });
                } else {
                    this.setProject(this.bitrixStore[cacheId]);

                    this.arResult.arFields.NAME = this.arResult.arFields.NAME.replace('проект', '№');

                    setTimeout(()=> {
                        this.$store.dispatch('receiveCheckPosition'); // заставляем пересмотреть футер положение своих элементов

                        this.startAnimation()
                    }, 200)
                }

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
                this.arElementsShow = showElementScroll.methods.GetElements('.project-detailed-page');
                let visibleStatus = showElementScroll.methods.comparisonPosition(this.arElementsShow);
                this.setObjectAnimation(visibleStatus);
                setTimeout(()=>{
                    this.$store.dispatch('receiveCheckPosition'); // заставляем пересмотреть футер положение своих элементов
                }, 200)
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
            mirrorPlan(variableMirror){
                if(this[variableMirror] === true){
                    this[variableMirror] = false;
                } else {
                    this[variableMirror] = true;
                }
            },
            setFavourite(){
                let arFavouriteId = [];

                let cookies = cookie.methods.get('favouriteId');

                if(cookies === null || cookies === ''){                                                      // если куки пустые
                    arFavouriteId[0] = this.arResult.arFields.ID                                            // записываем 1 элемент в массив
                    this.checkFavourite = true;
                } else {                                                                                   // если куки не пустой
                    arFavouriteId = cookies.split(',');                                                   // получаем из куки ID проекта разделяя их по символу ','
                    let indexId = arFavouriteId.indexOf(this.arResult.arFields.ID);                      // узнаем номер ID в массиве
                    if(indexId !== -1){                                                                 // если ID есть в массиве
                        arFavouriteId.splice(indexId, 1);                                              // удаляем этот ID
                        this.checkFavourite = false;
                    } else {                                                                          // если ID нет в массиве
                        arFavouriteId.push(this.arResult.arFields.ID);                               // добавляем ID в массив
                        this.checkFavourite = true;
                    }
                }
                cookie.methods.set('favouriteId',arFavouriteId, 45) // сохраняем новый массив с ID выбранных проектов в куки
            },
            checkFavouriteId(){
                let arFavouriteId = [];
                if(cookie.methods.get('favouriteId') === null || cookie.methods.get('favouriteId') === ''){  // если куки пустые
                    this.checkFavourite = false;
                } else {                                                                                   // если куки не пустой
                    arFavouriteId = cookie.methods.get('favouriteId').split(',');                 // получаем из куки ID проекта разделяя их по символу ','
                    let indexId = arFavouriteId.indexOf(this.arResult.arFields.ID);                      // узнаем номер ID в массиве
                    if(indexId !== -1){                                                                 // если ID есть в массиве
                        this.checkFavourite = true;
                    } else {                                                                          // если ID нет в массиве
                        this.checkFavourite = false;
                    }
                }
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
                this.$metrika.reachGoal('PROEKT');
            },
            setProject(data){
                if(typeof data.ITEMS != 'undefined') {
                    this.arResult = data.ITEMS[0];
                    seo.methods.set(this.arResult, 'detail');
                    this.arInfoBlock = data.infoBlock.GENERAL_INFORMATION;

                    this.arSlidePicture = [data.ITEMS[0].arFields.PREVIEW_PICTURE_INFO];
                    this.arSlidePicture = this.arSlidePicture.concat(data.ITEMS[0].arProperty.FACADES_PICTURE.FILE_INFO);

                    this.arFacadesSrc = data.ITEMS[0].arProperty.FACADES_PICTURE.FILE_INFO;

                    this.arPlansSrc[0] = data.ITEMS[0].arProperty.PLAN_FIRST_FLOOR.FILE_INFO;
                    this.arPlansSrc[1] = data.ITEMS[0].arProperty.PLAN_SECOND_FLOOR.FILE_INFO;

                    this.arResult.arFields.NAME = this.arResult.arFields.NAME.replace('проект', '№');

                    this.checkFavouriteId();
                } else {
                    this.$router.push('/404');
                }
            },
        },

        created() {
            window.addEventListener('scroll', this.handleScroll);
            window.addEventListener('resize', this.handleResize);

            let cacheId = this.arFilter.IBLOCK_ID + '_' + this.$route.params.code;
            if(!this.bitrixStore[cacheId]) {
                getClBlockElement.methods.GetList(this.arSort, this.arFilter, false, this.arNuvParam, this.arSelect).then((data) => {
                    this.setProject(data);
                    this.$store.dispatch('receiveCacheData', {id: cacheId, cacheData: data})
                });
            } else {
                this.setProject(this.bitrixStore[cacheId]);
            }
        },

        mounted() {
            if(!this.changeAxios){
                this.startAnimation()
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