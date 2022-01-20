<template>
    <div class="partner-main-page" id="PartnerMainPage" :class="[{ 'stopAnimation': !getProgressAxios.statusResponseAxios} , {'change-screen': ChangeScreen}]">

        <separator :show="!ChangeScreen && getProgressAxios.statusResponseAxios"/>
        <div class="partner-scroll">
            <div class="text-wrap row ">
                <div class="col-xxl-12">
                    <h1 showScroll="title" :class="[{ 'moveTop': elementVisibleScroll.title.visible}]"
                        v-if="resultMainPage.arProperty && resultMainPage.arProperty.TITLE_MAIN_PARTNER"
                    >
                        {{resultMainPage.arProperty.TITLE_MAIN_PARTNER.VALUE}}
                    </h1>
                </div>
                <div class="text-partner col-xxl-11" >
                    <p>
                        <span showScroll="text" :class="[{ 'move-top-inline': elementVisibleScroll.text.visible}]">мы&nbsp;&mdash; авторизованные партнеры заводов-производителей: все специалисты аттестованы и&nbsp;регулярно проходят повышение квалификации</span>
                        <i :style="styleHeadText" showScroll="text2" :class="[{ 'moveTop': elementVisibleScroll.text2.visible}]">наши сотрудники знают особенности всех материалов, с&nbsp;которыми они работают</i>
                    </p>


                    <i class="text-execution" :style="positionBodyText" showScroll="text3" :class="[{ 'specifications-show-move-top': elementVisibleScroll.text3.visible}]">
                        помимо ГОСТов и&nbsp;наших внутренних стандартов, наши объекты посещают представители компаний-партнеров и&nbsp;контролируют соблюдение технологий строительства
                    </i>
                    <base-button
                            :style="styleBtn"
                            :text="'наши дома'"
                            :link="'/works/'"
                            :typeBtn="'base-btn'"
                            :showScroll="'linkProjects'"
                            :class="[{ 'show-button': elementVisibleScroll['linkProjects'] && elementVisibleScroll['linkProjects'].visible}]"
                    />
                </div>
            </div>

            <div class="partners-wrap row">
                <div v-for="(partner, i) in this.arResult" :key="i"
                     class="partner-block col-xl-11"
                     :class="[{'offset-xl-1': i % 2}]"
                >
                    <separator :show="!ChangeScreen && getProgressAxios.statusResponseAxios"/>
                    <div class="row">
                        <div class="partner-name col-14"
                             :showScroll="'namePartner' + i"
                             :class="[{ 'moveTop': elementVisibleScroll['namePartner' + i] && elementVisibleScroll['namePartner' + i].visible}]">
                                <p>{{partner.arFields.NAME}}</p>
                                <span v-if="partner.arProperty.COUNTRY_PARTNER">
                                    {{partner.arProperty.COUNTRY_PARTNER.VALUE}}
                                </span>
                        </div>
                        <div class="partner-logo col-9"
                             :showScroll="'logoPartner' + i"
                             :class="[{ 'opacity-animate': elementVisibleScroll['logoPartner' + i] && elementVisibleScroll['logoPartner' + i].visible}]">
                            <img :src="$hostname + partner.arFields.PREVIEW_PICTURE_INFO.SRC"
                                 :width="partner.arFields.PREVIEW_PICTURE_INFO.WIDTH"
                                 :height="partner.arFields.PREVIEW_PICTURE_INFO.HEIGHT"
                            />
                        </div>
                    </div>
                    <div class="row certificate-row">
                        <div class="partner-certificate col-md-14">
                            <a class="img-certificate"
                               :showScroll="'certPartner' + i"
                               :class="[{ 'show-img-project': elementVisibleScroll['certPartner' + i] && elementVisibleScroll['certPartner' + i].visible}]"
                               @click="openLightBox(i)"
                            >
                                <img :src="$hostname + partner.arProperty.IMG_CERTIFICATE.FILE_INFO.SRC"
                                     :width="partner.arProperty.IMG_CERTIFICATE.FILE_INFO.WIDTH"
                                     :height="partner.arProperty.IMG_CERTIFICATE.FILE_INFO.HEIGHT"
                                />
                            </a>
                            <div :showScroll="'nameSert' + i"
                                 :class="[{ 'moveTop': elementVisibleScroll['nameSert' + i] && elementVisibleScroll['nameSert' + i].visible}]">
                                <p>{{partner.arProperty.TITLE_CERTIFICATE.VALUE}}</p>
                                <span>{{partner.arProperty.SUBTITLE_CERTIFICATE.VALUE}}</span>
                            </div>
                        </div>
                        <div class="col-md-9 btn-partner">
                            <base-button
                                    :text="'подробнее'"
                                    :link="partner.arFields.DETAIL_PAGE_URL"
                                    :typeBtn="'secondary-button'"
                                    :showScroll="'linkPartner' + i"
                                    :class="[{ 'show-button': elementVisibleScroll['linkPartner' + i] && elementVisibleScroll['linkPartner' + i].visible}]"
                                    delay-animation="500"
                                    delay-animation-width="413"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <popup-cool-light-box v-if="arSrc" :elems="arSrc"/>
        <footer-bar v-if="typeof activeScreen !== 'undefined'" :show-contacts="true" :mainPage="footerStartAnimation"/>
    </div>
</template>

<script>
    import {getClBlockElement} from "../../../../jsFunction/getCIBlockElement";
    import {showElementScroll} from "../../../../jsFunction/showElementScroll";
    import BaseButton from "../../../layout/BaseButton";
    import Separator from "../../../layout/Separator";
    import FooterBar from '../../../FooterBar'
    import PopupCoolLightBox from "../../../layout/PopupCoolLightBox";

    let nameThisComponent = 'PartnerMainPage';

    export default {
        name: nameThisComponent,
        mixins: [getClBlockElement, showElementScroll],
        components:{
            PopupCoolLightBox,
            BaseButton,
            Separator,
            FooterBar
        },
        props:['activeScreen', 'resultMainPage'],

        data(){
            return{
                changeAxios: false,
                ChangeScreen: false,
                showAfterIntro: true,
                arElementsShow: {},
                elementVisibleScroll: {
                    title:{},
                    text:{},
                    text2:{},
                    text3:{},
                },
                arResult: [],
                positionBodyText: '',
                styleBtn: '',
                styleHeadText: '',
                footerStartAnimation: false,
                arSrc:[],
            }
        },

        watch: {
            activeScreen: function (arScreen) {           // при изменнеие свойства activeScreen
                if (arScreen !== nameThisComponent && window.innerWidth > 767) {  // если в свойсте activeScreen записан имя не этого компанента
                    this.ChangeScreen = true;           // включаем анимацию перехода экранов
                    window.removeEventListener('scroll', this.handleScroll);
                    window.setTimeout(() => this.setObjectAnimation(false), 1200);
                    this.footerStartAnimation = false;
                } else {
                    window.addEventListener('scroll', this.handleScroll);
                    window.setTimeout(() => {
                        this.$store.dispatch('receiveCheckPosition');
                        this.startAnimation();
                    }, 1200);
                    if (arScreen === nameThisComponent && window.innerWidth > 767){
                        this.$store.dispatch('receiveAppClass' ,{appClass: 'bgColorLightGray' , showSeparator: false} );
                    }
                    if (arScreen === nameThisComponent && window.innerWidth < 768){
                        this.$store.dispatch('receiveAppClass' ,{appClass: 'bgColorLightGray' , showSeparator: true} );
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
            openLightBox(i, variable){
                if(typeof variable !=='undefined'){
                    this.includeHostName(this[variable])
                }
                this.$store.dispatch('receiveArSrcImg' , {ind: i});

                console.log(variable)
            },
            includeHostName(arSrc){
                this.arSrc = [];

                for(let i in arSrc){
                    this.arSrc[i] ={
                        'src':this.$hostname + arSrc[i],
                        'title': '',
                    };
                }

                //return this.arSrc
            },
            handleScroll(){
                let visibleStatus = showElementScroll.methods.comparisonPosition(this.arElementsShow);
                this.setObjectAnimation(visibleStatus);
            },
            startAnimation(){
                this.arElementsShow = showElementScroll.methods.GetElements('.partner-scroll');
                let visibleStatus = showElementScroll.methods.comparisonPosition(this.arElementsShow);
                this.setObjectAnimation(visibleStatus);
                this.ChangeScreen = false;
                this.footerStartAnimation = true;
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
                this.upadatePositionBodyText();
                this.startAnimation();
            },
            upadatePositionBodyText(){
                let positionHeadText = document.querySelectorAll('.text-partner p i')[0].offsetLeft - document.querySelectorAll('.text-partner p')[0].offsetLeft + 10;
                if(positionHeadText < 220){
                    this.styleBtn = 'float: none; margin-left: auto;';
                    this.positionBodyText = 'position: static';
                    if(positionHeadText > 100){
                        this.positionBodyText = 'left:' + positionHeadText + 'px;';
                    } else {
                        this.positionBodyText = 'position: static';
                    }
                    if(positionHeadText === 10){
                        this.styleHeadText = 'margin-top: 25px;'
                    } else {
                        this.styleHeadText = ''
                    }
                } else {
                    this.styleBtn = '';
                    this.positionBodyText = 'left:' + positionHeadText + 'px;';
                    this.styleHeadText = ''
                }
            }
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);
            window.addEventListener('resize', this.handleResize);

            let arSort = {
                'SORT' : 'ASC'
            };
            let arFilter = {
                'IBLOCK_ID' : 12,
                'ACTIVE' : 'Y',
                'ID': this.resultMainPage.arProperty.PARTNER_ON_MAIN.VALUE,
            };
            let arSelect = [
                'ID', 'IBLOCK_ID', 'NAME', 'CODE', 'PREVIEW_PICTURE', 'DETAIL_PAGE_URL'
            ];

            let idCache = arFilter.IBLOCK_ID + '_main';
            if(!this.bitrixStore[idCache]) {
                getClBlockElement.methods.GetList(arSort, arFilter, false,false, arSelect).then((data) => {
                    this.arResult = data.ITEMS;

                    for(let item in this.arResult){
                        this.arSrc[item] = this.$hostname + this.arResult[item].arProperty.IMG_CERTIFICATE.FILE_INFO.SRC;
                    }
                    this.$store.dispatch('receiveCacheData', {id: idCache, cacheData: data})
                });
            } else {
                this.arResult = this.bitrixStore[idCache].ITEMS;
                for(let item in this.arResult){
                    this.arSrc[item] = this.$hostname + this.arResult[item].arProperty.IMG_CERTIFICATE.FILE_INFO.SRC;
                }
            }



        },
        mounted() {
            this.upadatePositionBodyText();
            if(!this.changeAxios){
                this.startAnimation();
            }

            let paramsString = document.location.hash.replace('#', '');
            if(paramsString === 'PartnerMainPage'){
                this.$store.dispatch('receiveAppClass');
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