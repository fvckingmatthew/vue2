<template>
    <div class="company-page container" :class="[{ 'stopAnimation': !getProgressAxios.statusResponseAxios}]">
        <h1 showScroll="title" :class="[{ 'moveTop': elementVisibleScroll.title.visible}]">О компании</h1>

        <div class="row prev-info">
            <div
                    class="slogan col-auto offset-xl-7 offset-md-11 order-1"
                    showScroll="slogan" :class="[{ 'moveTop': elementVisibleScroll.slogan.visible}]"
            >{{arResult.arProperty.SLOGAN_COMPANY.VALUE}}</div>
            <separator class="col-23 order-2" :show="true"/>
            <div
                    class="subtitle col-xl-7 col-md-11 order-md-3 order-4"
                    v-html="arResult.arProperty.SUBTITLE_COMPANY['~VALUE'].TEXT"
                    showScroll="subtitle" :class="[{ 'moveTop': elementVisibleScroll.subtitle.visible}]"
            />
            <div class="list-info col-xl-16 col-md-12 order-md-4 order-5">
                <ul class="row">
                    <li
                            v-for="(item, i) in arResult.arProperty.ADVANTAGES_COMPANY.VALUE" :key="i"
                            :showScroll="'listInfo' + i" :class="[{ 'moveTop': elementVisibleScroll['listInfo' + i] && elementVisibleScroll['listInfo' + i].visible}]"
                    >
                        {{item}}
                    </li>
                </ul>
            </div>
            <div class="img-prev col-23 order-md-5 order-3">
                    <base-button
                            v-if="arResult.arProperty.LINK_FOR_IMG.VALUE"
                            :text="arResult.arProperty.LINK_FOR_IMG.DESCRIPTION"
                            :link="arResult.arProperty.LINK_FOR_IMG.VALUE"
                            showScroll="imgPrev"
                            :class="[{ 'moveTop': elementVisibleScroll.imgPrev.visible}]"
                    />

                <div :class="[{ 'show-img-project': elementVisibleScroll.previewPicture.visible}]"
                     :showScroll="'previewPicture'">
                    <img :src="$hostname + arResult.arFields.PREVIEW_PICTURE_INFO.SRC"
                         :width="arResult.arFields.PREVIEW_PICTURE_INFO.WIDTH"
                         :height="arResult.arFields.PREVIEW_PICTURE_INFO.HEIGHT"
                    />
                </div>

            </div>
        </div>

        <quality-assurance />

        <div class="mix-projects">
            <separator :show="true"/>
            <div class="row info-block-projects">
                <div class="col-xl-7 title-wrap">
                    <h2 showScroll="titleProjects" :class="[{ 'moveTop': elementVisibleScroll.titleProjects.visible}]">
                        {{arResult.arProperty.TITLE_PROJECTS_BLOCK.VALUE}}
                    </h2>
                </div>
                <div class="col-xxl-9 col-xl-7 subtitle"
                     showScroll="subtitleMix" :class="[{ 'moveTop': elementVisibleScroll.subtitleMix.visible}]"
                >
                    <p v-html="arResult.arProperty.SUBTITLE_PROJECTS_BLOCK['~VALUE']"/>
                </div>
                <div class="col-auto btn-col">
                    <base-button
                            :text="'все дома'"
                            :link="'/works/'"
                            :typeBtn="'base-btn'"
                            :showScroll="'linkPortfolio'"
                            :class="[{ 'show-button': elementVisibleScroll['linkPortfolio'].visible}]"
                    />
                    <base-button
                            :text="'все проекты'"
                            :link="'/projects/'"
                            :typeBtn="'base-btn revers'"
                            :showScroll="'linkProjects1'"
                            :class="[{ 'show-button': elementVisibleScroll['linkProjects1'].visible}]"
                    />
                </div>
            </div>

            <mix-projects
                    v-if="arResult.arProperty.PORTFOLIO_ID.VALUE"
                    :portfolio-id="arResult.arProperty.PORTFOLIO_ID.VALUE"
                    :element-visible-scroll="elementVisibleScroll"
            />

            <div class="service-company">
                <separator :show="true"/>
                <h2 showScroll="titleService" :class="[{ 'moveTop': elementVisibleScroll.titleService.visible}]">
                    {{arResult.arProperty.TITLE_SERVICE.VALUE}}
                </h2>

                <service-company-page @load="startAnimation" :element-visible-scroll="elementVisibleScroll"/>

            </div>

        </div>

    </div>
</template>

<script>
    import Separator from "../../layout/Separator";
    import {showElementScroll} from "../../../jsFunction/showElementScroll";
    import {getClBlockElement} from "../../../jsFunction/getCIBlockElement";
    import {seo} from "../../../jsFunction/seo";
    import BaseButton from "../../layout/BaseButton";
    import QualityAssurance from "./part/QualityAssurance";
    import MixProjects from "./part/MixProjects";
    import ServiceCompanyPage from "./part/ServiceCompanyPage";
    export default {
        name: "CompanyPage",
        components: {ServiceCompanyPage, MixProjects, QualityAssurance, BaseButton, Separator},
        data(){
            return{
                changeAxios: false,
                elementVisibleScroll: { // зписывам в объект имена showScroll элементов
                    title:{},
                    titleProjects:{},
                    linkProjects1: {},
                    linkPortfolio: {},
                    slogan: {},
                    subtitle: {},
                    listInfo: {},
                    imgPrev: {},
                    previewPicture: {},
                    subtitleMix: {},
                    titleService: {},
                },
                arResult:{
                    arProperty:{
                        SLOGAN_COMPANY: {},
                        SUBTITLE_COMPANY: {
                            '~VALUE': ''
                        },
                        ADVANTAGES_COMPANY: {},
                        LINK_FOR_IMG: {},
                        TITLE_PROJECTS_BLOCK: {},
                        SUBTITLE_PROJECTS_BLOCK: {},
                        PORTFOLIO_ID: {},
                        TITLE_SERVICE: {},
                        SUBTITLE_SERVICE: {},
                    },
                    arFields:{
                        PREVIEW_PICTURE: '',
                        PREVIEW_PICTURE_INFO: {},
                    }

                },
                showAfterIntro: true,
                arElementsShow: [],
                arSort: {
                    'SORT' : 'ASC'
                },
                arFilter: {
                    'IBLOCK_ID' : 19, 'ACTIVE' : 'Y',
                },
                arSelect: [
                    'NAME', 'CODE', 'PREVIEW_PICTURE', 'DETAIL_PAGE_URL',
                ],
                arNuvParam: {},
            }
        },
        methods: {
            handleScroll() {
                let visibleStatus = showElementScroll.methods.comparisonPosition(this.arElementsShow);   // получаем статус видимости элементов на экранен
                this.setObjectAnimation(visibleStatus);                                                 // закидываем полученный массив на обработку под реактивность Vue
            },
            startAnimation() {                                                                            // запуск анимации видимых элементов
                this.arElementsShow = showElementScroll.methods.GetElements('.company-page');   // получаем позиции элементов на странице для анимации
                let visibleStatus = showElementScroll.methods.comparisonPosition(this.arElementsShow);
                this.setObjectAnimation(visibleStatus);
                setTimeout(()=>{
                    this.$store.dispatch('receiveCheckPosition'); // заставляем пересмотреть футер положение своих элементов
                }, 200)
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
        },
        computed: {
            getProgressAxios(){
                return this.$store.getters.getProgressAxios;
            },
            bitrixStore(){
                return this.$store.getters.cacheData;
            }
        },
        watch:{
            'getProgressAxios.statusResponseAxios' (value){
                this.changeAxios = true;
                if(value){
                    this.startAnimation();
                }
            }
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);
            window.addEventListener('resize', this.handleResize);

            if(!this.bitrixStore[this.arFilter.IBLOCK_ID]) {
                getClBlockElement.methods.GetList(this.arSort, this.arFilter, false, this.arNuvParam, this.arSelect).then((data) => {
                    this.arResult = data.ITEMS[0];
                    seo.methods.set(this.arResult, 'detail');

                    this.$store.dispatch('receiveCacheData', {id: this.arFilter.IBLOCK_ID, cacheData: data})
                })
            } else {
                this.arResult = this.bitrixStore[this.arFilter.IBLOCK_ID].ITEMS[0];
                seo.methods.set(this.arResult, 'detail');
            }
        },
        mounted() {
            if(!this.changeAxios){
                this.startAnimation();
            }
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