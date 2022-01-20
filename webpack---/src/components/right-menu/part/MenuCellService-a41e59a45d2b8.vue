<template>
    <div class="service-cell-menu" :class="{'open': toggleAccordion}">
        <div class="title-wrap-menu">
            <h2>Услуги</h2><span>{{countAll}}</span>
            <icon-base :width="14" :height="12" :class="'triangle-toggle-btn'"><triangle-down/></icon-base>
        </div>
        <div class="accordion-body" :style="styleAccordion">
            <div class="section-list">
                <div class="link-list" v-for="(section, i) in arSection" :key="i">
                    <p>{{section.NAME}}</p>
                    <a class="hide-line"
                       :href="link.DETAIL_PAGE_URL"
                       @click="changePage(link.DETAIL_PAGE_URL)"
                       v-for="(link, i) in section.ITEMS"
                       :key="i"
                       :class="[{'active': link.DETAIL_PAGE_URL === $route.path}]"
                    >
                        {{link.NAME}}
                    </a>

                </div>
            </div>
        </div>



    </div>
</template>

<script>
    import {getClBlockElement} from "../../../jsFunction/getCIBlockElement";
    import IconBase from "../../IconBase";
    import TriangleDown from "../../icons/TriangleDown";

    export default {
        name: "MenuCellService",
        components: {TriangleDown, IconBase},
        props: ['toggleAccordion'],
        data(){
            return{
                arResult: [],
                arSection: {},
                countAll: 0,
                styleAccordion: '',
                arSort: {
                    'SORT' : 'ASC'
                },
                arFilter: {
                    'IBLOCK_ID' : 11, 'ACTIVE' : 'Y',
                },
                arSelect: [
                    'NAME', 'CODE', 'DETAIL_PAGE_URL', 'PREVIEW_PICTURE'
                ],
                arNuvParam: {
                    'iNumPage' : 1, 'nPageSize': 30, 'realPageSize': 30,
                },
            }
        },
        watch:{
            toggleAccordion: function (value) {
                if(value){
                    this.openAccordion();
                } else {
                    this.closeAccordion();
                }
            }
        },
        methods:{
            changePage(path){
                event.preventDefault();
                if(path !== this.$route.path && path !== ''){
                    this.$router.push(path);
                    this.$emit('closeRightMenu');
                }
            },
            openAccordion(){
                let heightAccordionBody = document.querySelectorAll('.service-cell-menu .section-list')[0].clientHeight;
                this.styleAccordion = 'height:' + heightAccordionBody + 'px;';
            },
            closeAccordion(){
                this.styleAccordion = '';
            }
        },
        created() {
            getClBlockElement.methods.GetList(this.arSort, this.arFilter,  false, this.arNuvParam, this.arSelect).then((data) => {
                this.arResult = data.ITEMS;
                this.countAll = data.infoBlock.ALL_COUNT_ITEM;

                this.arSection = {};
                for (let item in this.arResult ) {
                    let fields = this.arResult[item].arFields;
                    if(typeof this.arSection[fields.SECTION_INFO.CODE] === 'undefined'){ // если такая услуга не существет в массиве

                        this.arSection[fields.SECTION_INFO.CODE] = fields.SECTION_INFO;
                        this.arSection[fields.SECTION_INFO.CODE]['ITEMS'] = [{'NAME': fields.NAME, 'CODE': fields.CODE, 'DETAIL_PAGE_URL': fields.DETAIL_PAGE_URL}]; // первая запись об услуге

                    } else { // если запись уже существет
                        this.arSection[fields.SECTION_INFO.CODE]['ITEMS'].push({'NAME': fields.NAME, 'CODE': fields.CODE, 'DETAIL_PAGE_URL': fields.DETAIL_PAGE_URL}); // добавляем услугу
                    }
                }

                this.$store.dispatch('receiveCacheData', {id: this.arFilter.IBLOCK_ID, cacheData: data})
            });
        }
    }
</script>

<style scoped>

</style>