<template>
    <div class="list-item-design">
        <div class="project-design-item accordion-item" v-for="(item, i) in this.arResult" :key="i" :class="[{'active': activeAccordion === i}]">
            <div class="head-accordion">
                <div class="head-info">
                    <div class="title-design"
                         :showScroll="'titleDesign' + i"
                         :class="[{ 'moveTop': elementVisibleScroll['titleDesign' + i] && elementVisibleScroll['titleDesign' + i].visible}]"
                         v-html="item.arFields.NAME"
                    />
                    <div class="price-design" v-if="item.arProperty.DESIGN_PRICE.VALUE">
                        <p :showScroll="'priceDesign' + i" :class="[{ 'moveTop': elementVisibleScroll['priceDesign' + i] && elementVisibleScroll['priceDesign' + i].visible}]">
                            <span>от</span> {{item.arProperty.DESIGN_PRICE.VALUE}} ₽/м<sup>2</sup>
                        </p>
                    </div>
                    <div class="period-design" v-if="item.arProperty.DESIGN_PERIOD.VALUE">
                        <p :showScroll="'periodDesign' + i" :class="[{ 'moveTop': elementVisibleScroll['periodDesign' + i] && elementVisibleScroll['periodDesign' + i].visible}]">
                            <span>примерные сроки</span> {{item.arProperty.DESIGN_PERIOD.VALUE}}
                        </p>
                    </div>
                </div>
                <div class="circle-plus" @click="openAccordion(i)"/>
            </div>
            <div class="body-accordion" :style="i === activeAccordion ? styleHeightContent : ''">
                <div class="hidden-content" v-html="item.arFields['~DETAIL_TEXT']"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {getClBlockElement} from "../../../../jsFunction/getCIBlockElement";
    import {searchElement} from "../../../../jsFunction/searchElement";

    export default {
        name: "CompositionServiceProject",
        props:{
            arParent: [Number, String],
            elementVisibleScroll: [Array, Object]
        },
        data(){
            return{
                arResult:{
                },
                arSort: {
                    'SORT' : 'ASC'
                },
                arFilter: {
                    'IBLOCK_ID' : 16, 'ACTIVE' : 'Y', 'IBLOCK_SECTION_ID': this.arParent,
                },
                arSelect: [
                    'NAME', 'CODE', 'PREVIEW_PICTURE', 'DETAIL_PAGE_URL', 'DETAIL_TEXT'
                ],
                arNuvParam: {},
                styleHeightContent: '',
                activeAccordion: -1,
            }
        },
        watch:{
            'arParent'(value){
                this.arFilter.IBLOCK_SECTION_ID = value;
                getClBlockElement.methods.GetList(this.arSort, this.arFilter,  false, this.arNuvParam, this.arSelect).then((data) => {
                    this.arResult = data.ITEMS;
                })
            }
        },
        methods:{
            openAccordion(index){
                if(index !== this.activeAccordion){
                    this.activeAccordion = index;
                    let heightContent = searchElement.methods.parent(event.target, 'accordion-item').querySelectorAll('.hidden-content')[0].offsetHeight;
                    this.styleHeightContent = 'height:' + heightContent + 'px';
                } else {
                    this.activeAccordion = -1;
                }
                setTimeout(()=>{
                    this.$emit('clickAccordion');
                }, 610)
            },
        },
        created() {
            getClBlockElement.methods.GetList(this.arSort, this.arFilter,  false, this.arNuvParam, this.arSelect).then((data) => {
                this.arResult = data.ITEMS;
            })
        },
    }
</script>

<style scoped>

</style>