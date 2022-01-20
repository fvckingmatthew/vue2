<template>
    <div class="price-page container" :class="[{ 'stopAnimation': !getProgressAxios.statusResponseAxios}]">
        <h1 showScroll="title" :class="[{ 'moveTop': elementVisibleScroll.title.visible}]">{{$route.name}}</h1>

        <swiper-table v-if="arResult.arProperty.MATERIAL_WALL.VALUE"
                      :id-item="arResult.arProperty.MATERIAL_WALL.VALUE"
                      :element-visible-scroll="elementVisibleScroll"
                      :table-property="tableProperty"
                      :table-price="priceProperty"
                      :id-block="15"
        />

        <div class="payment-methods-block">
            <separator  :show="true"/>
            <div class="row">
                <div class="col-xxl-10 col-xl-11 col-md-16">
                    <h3 showScroll="titlePayment" :class="[{ 'moveTop': elementVisibleScroll.titlePayment.visible}]">
                        {{arResult.arProperty.TITLE_PAYMENT_METHODS.VALUE}}
                    </h3>
                </div>
                <div class="list-methods col-xl-7 col-md-16">
                    <div class="text-square" v-for="(item, i) in arResult.arProperty.LIST_PAYMENT_METHODS['~VALUE']" :key="i"
                         :showScroll="'listPayment' + i" :class="[{ 'moveTop': elementVisibleScroll['listPayment' + i] && elementVisibleScroll['listPayment' + i].visible}]"
                         v-html="item.TEXT"
                    >
                        {{item}}
                    </div>
                </div>
            </div>

        </div>

        <home-configurator v-if="arResult.arProperty.MATERIAL_ID_SECTION.VALUE"
                           :parent-result="arResult.arProperty.MATERIAL_ID_SECTION"
                           :element-visible-scroll="elementVisibleScroll"
                            @created="startAnimation"/>

        <div class="working-scheme">
            <separator :show="true"/>
            <h2 showScroll="titleScheme" :class="[{ 'moveTop': elementVisibleScroll.titleScheme.visible}]">
                схема работы
            </h2>
            <snake-diagram v-if="arResult.arProperty.WORKING_SCHEME['~VALUE']" :list-value="arResult.arProperty.WORKING_SCHEME['~VALUE']" :element-visible-scroll="elementVisibleScroll"/>
        </div>

        <similar-project v-if="arResult.arProperty.PROJECT_ID.VALUE" :title-component="'наши проекты'" :result-parent="arResult.arProperty.PROJECT_ID.VALUE" :element-visible-scroll="elementVisibleScroll" :width-order="widthOrder"/>
    </div>
</template>

<script>

    import {getClBlockElement} from "../../../jsFunction/getCIBlockElement";
    import {showElementScroll} from "../../../jsFunction/showElementScroll";
    import {seo} from "../../../jsFunction/seo";
    import SwiperTable from "./parts/SwiperTable";
    import Separator from "../../layout/Separator";
    import HomeConfigurator from "./parts/HomeConfigurator";
    import SnakeDiagram from "../../layout/SnakeDiagram";
    import SimilarProject from "../projects_page/project_detailed_page/parts/SimilarProject";

    export default {
        name: "PricePage",
        components: {SimilarProject, SnakeDiagram, HomeConfigurator, Separator, SwiperTable},
        mixins:[getClBlockElement, showElementScroll],
        data(){
            return{
                changeAxios: false,
                arResult:{
                    arProperty:{
                        MATERIAL_WALL: [],
                        MATERIAL_ID_SECTION: [],
                        TITLE_PAYMENT_METHODS: [],
                        LIST_PAYMENT_METHODS: [],
                        WORKING_SCHEME: [],
                        PROJECT_ID: []
                    }
                },
                elementVisibleScroll: { // зписывам в объект имена showScroll элементов
                    title:{}, titleFilter: {}, wrapFilter: {}, filerList: {}, linkProjectsWork1: {}, mobileTitleFilter: {}, btnConsul:{}, btnConsul2: {}, similarTitle:{},
                    projectsBtn1: {}, navBtn:{}, textTable: {}, priceTextMaterial: {}, rowTable: {}, priceMaterial:{}, titlePayment:{}, titleConfigurator: {}, inputCalculator:{},
                    resultPrice: {}, textResultPrice: {}, materialBlock: {}, titleScheme: {}
                },

                arElementsShow: [],
                arSort: {
                    'SORT' : 'ASC'
                },
                arFilter: {
                    'IBLOCK_ID' : 14, 'ACTIVE' : 'Y',
                },
                arSelect: [
                    'NAME', 'CODE', 'PREVIEW_PICTURE', 'DETAIL_PAGE_URL',
                ],
                arNuvParam: {},
                snakePart: ['col-13 offset-7 tail-body-right',
                            'col-18 offset-2 part-right tail-body-left tail-head-right',
                            'col-10 offset-2 tail-head-left part-left-inside',
                            'col-8 tail-body-right',
                            'col-13 offset-7 part-right tail-body-left tail-head-right',
                            'col-8 offset-7 part-left-inside tail-head-left',
                            'col-5 part-right tail-body-right',
                            'col-18 offset-2 part-left tail-head-right',
                ],
                widthOrder:['col-xxl-7 ','col-xxl-5 col-md-12', 'col-md-11'],
                tableProperty: [
                    'ANALYSIS_SECTION_TABLE', 'FOUNDATION_TABLE', 'COMMUNICATION_TABLE', 'PARTITIONS_TABLE', 'JUMPERS_TABLE', 'OVERLAP_TABLE',
                    'STAIRS_TABLE', 'ROOF_TABLE'
                ],
                priceProperty: 'PRICE_MATERIAL',
            }
        },
        methods: {
            handleScroll() {
                let visibleStatus = showElementScroll.methods.comparisonPosition(this.arElementsShow);   // получаем статус видимости элементов на экранен
                this.setObjectAnimation(visibleStatus);                                                 // закидываем полученный массив на обработку под реактивность Vue
            },
            startAnimation() {                                                                            // запуск анимации видимых элементов
                this.arElementsShow = showElementScroll.methods.GetElements('.price-page');   // получаем позиции элементов на странице для анимации
                let visibleStatus = showElementScroll.methods.comparisonPosition(this.arElementsShow);
                this.setObjectAnimation(visibleStatus);
                this.$store.dispatch('receiveCheckPosition');
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
                window.setTimeout( () => {
                    this.startAnimation();
                }, 100);
            },
        },
        computed: {
            getProgressAxios(){
                return this.$store.getters.getProgressAxios; // чекаем статус Интро
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

            this.$store.dispatch('receiveAppClass' ,{appClass: 'bgColorLightGray' , showSeparator: true} );

            if(!this.bitrixStore[this.arFilter.IBLOCK_ID]) {
                getClBlockElement.methods.GetList(this.arSort, this.arFilter,  false, this.arNuvParam, this.arSelect).then((data) => {
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