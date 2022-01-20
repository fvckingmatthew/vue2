<template>
    <div class="partner-cell-menu" :class="{'open': toggleAccordion}">
        <div class="title-wrap-menu">
            <h3>Партнеры</h3>
            <icon-base :width="14" :height="12" :class="'triangle-toggle-btn'"><triangle-down/></icon-base>
        </div>
        <div class="accordion-body" :style="styleAccordion">
            <div class="section-list">
                <div class="link-list" v-for="(item, i) in arResult" :key="i">
                    <a class="hide-line"
                       :href="item.arFields.DETAIL_PAGE_URL"
                       @click="changePage(item.arFields.DETAIL_PAGE_URL)"
                       :key="i"
                       :class="[{'active': item.arFields.DETAIL_PAGE_URL === $route.path}]"
                    >
                        {{item.arFields.NAME}}
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
        name: "MenuCellPartner",
        components: {TriangleDown, IconBase},
        props: ['toggleAccordion'],
        data(){
            return{
                arResult: [],
                arSection: {},
                styleAccordion: '',
                arSort: {
                    'SORT' : 'ASC'
                },
                arFilter: {
                    'IBLOCK_ID' : 12, 'ACTIVE' : 'Y',
                },
                arSelect: [
                    'NAME', 'CODE', 'DETAIL_PAGE_URL',
                ],
                arNuvParam: {
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
                event.stopPropagation();
                if(path !== this.$route.path && path !== ''){
                    this.$router.push(path);
                    this.$emit('closeRightMenu');
                }
            },
            openAccordion(){
                let heightAccordionBody = document.querySelectorAll('.partner-cell-menu .section-list')[0].clientHeight;
                this.styleAccordion = 'height:' + heightAccordionBody + 'px;';
            },
            closeAccordion(){
                this.styleAccordion = '';
            }
        },
        created() {
            getClBlockElement.methods.GetList(this.arSort, this.arFilter,  false, this.arNuvParam, this.arSelect).then((data) => {
                this.arResult = data.ITEMS;
            });
        }
    }
</script>

<style scoped>

</style>