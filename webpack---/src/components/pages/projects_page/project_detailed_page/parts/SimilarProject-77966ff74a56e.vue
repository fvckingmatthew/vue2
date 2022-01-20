<template>
    <div class="similar-project">
        <separator :show="true"/>
        <div class="row title-block">
            <h2 class="col-xxl-12 col-md-15" showScroll="similarTitle" :class="[{ 'moveTop': elementVisibleScroll.similarTitle.visible}]">
                {{titleComponent}}
            </h2>
            <div class="col-auto offset-xxl-0 offset-md-auto">
                <base-button
                        :text="'все проекты'"
                        :link="'/projects/'"
                        :typeBtn="'base-btn'"
                        showScroll="projectsBtn1" :class="[{ 'show-button': elementVisibleScroll.projectsBtn1.visible}]"
                />
            </div>
        </div>

        <div class="row similar-listing">
            <div class="" v-for="(item, i) in this.arResult" :key="i" :class="[getWidthOrder(i)]">
                <div class="similar-block">
                    <base-button
                            v-if="item"
                            :text="item.arFields.NAME"
                            :link="'/projects/' + item.arFields.CODE"
                            :typeBtn="'link-arrow-right'"
                            :showScroll="'toProject' + i" :class="[{ 'show-link-arrow': elementVisibleScroll['toProject' + i] && elementVisibleScroll['toProject' + i].visible}]"
                    />
                    <div class="specifications"
                         :showScroll="'specifications' + i"
                         :class="[
                             {'specifications-show-move-top': elementVisibleScroll['specifications' + i] && elementVisibleScroll['specifications' + i].visible}
                         ]">
                        <p  v-if="item.arProperty.AREA_PROJECT">{{item.arProperty.AREA_PROJECT.VALUE}} м<sup>2</sup></p>
                        <span  v-if="item.arProperty.ROOM_PROJECT">{{item.arProperty.ROOM_PROJECT.VALUE}} {{roomCount(item.arProperty.ROOM_PROJECT.VALUE)}}</span>
                    </div>
                    <div class="img-project" :showScroll="'projectSimilarImg' + i"
                         :class="[
                             { 'show-img-project': elementVisibleScroll['projectSimilarImg' + i] && elementVisibleScroll['projectSimilarImg' + i].visible},
                             {'watermark': item.arFields.PREVIEW_PICTURE_INFO.WATERMARK}
                         ]">
                        <img :src="$hostname + item.arFields.PREVIEW_PICTURE_INFO.SRC"
                             :width="item.arFields.PREVIEW_PICTURE_INFO.WIDTH"
                             :height="item.arFields.PREVIEW_PICTURE_INFO.HEIGHT"
                             @load="backWatermark(i, item.arFields.PREVIEW_PICTURE_INFO)"
                        />
                        <div class="wrap-backWatermark">
                            <div class="backWatermark" v-if="styleBackWatermark[i]" :style="styleBackWatermark[i]"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getWidthOrder} from "../../../../../jsFunction/getWidthOrder";
    import Separator from "../../../../layout/Separator";
    import {getClBlockElement} from "../../../../../jsFunction/getCIBlockElement";
    import BaseButton from "../../../../layout/BaseButton";
    import {hiddenWatermark} from "../../../../../jsFunction/hiddenWatermark";

    export default {
        name: "SimilarProject",
        components: {BaseButton, Separator},
        mixins: [getWidthOrder, getClBlockElement],
        props:{
            resultParent: Array,
            widthOrder: Array,
            elementVisibleScroll: Object,
            titleComponent: String,
        },
        data(){
            return{
                arResult: {},
                arSort: {
                    'SORT' : 'ASC'
                },
                arFilter: {
                    'IBLOCK_ID' : 9,
                    'ACTIVE' : 'Y',
                    'ID': this.resultParent,
                },
                arSelect: [
                    'NAME',
                    'CODE',
                    'PREVIEW_PICTURE',
                    'DETAIL_PAGE_URL',
                ],
                arNuvParam: {},
                styleBackWatermark: [],
            }
        },
        computed:{
            bitrixStore(){
                return this.$store.getters.cacheData;
            }
        },
        methods:{
            getWidthOrder(index){
                return getWidthOrder.methods.order(index, this.widthOrder);
            },
            backWatermark(i, realParam){
                this.styleBackWatermark[i] = hiddenWatermark.methods.set(i, realParam, '.img-project')
            },
            handleResize(){
                for(let i in this.arResult){
                    this.styleBackWatermark[i] = hiddenWatermark.methods.set(i, this.arResult[i].arFields.PREVIEW_PICTURE_INFO, '.img-project')
                }
            },
            roomCount(count){
                let number = Number(count);
                if(Number(number) === 1){
                    return 'спальня'
                }
                if(Number(number) >= 2 && Number(number) <= 4){
                    return 'спальни'
                }
                if(Number(number) >= 5){
                    return 'спален'
                }
                return ''
            }
        },
        watch:{
            resultParent: function(value){
                this.arFilter.ID = value;

                let cacheId = this.arFilter.IBLOCK_ID + '_' + value;
                if(!this.bitrixStore[cacheId]) {
                    getClBlockElement.methods.GetList(this.arSort, this.arFilter, false, this.arNuvParam, this.arSelect).then((data) => {
                        this.arResult = data.ITEMS;

                        this.$store.dispatch('receiveCacheData', {id: cacheId, cacheData: data})
                    });
                } else {
                    this.arResult = this.bitrixStore[cacheId].ITEMS;
                }
            }
        },
        created() {
            window.addEventListener('resize', this.handleResize);

            let cacheId = this.arFilter.IBLOCK_ID + '_' + this.resultParent;
            if(!this.bitrixStore[cacheId]) {
                getClBlockElement.methods.GetList(this.arSort, this.arFilter, false, this.arNuvParam, this.arSelect).then((data) => {
                    this.arResult = data.ITEMS;

                    this.$store.dispatch('receiveCacheData', {id: cacheId, cacheData: data})
                });
            } else {
                this.arResult = this.bitrixStore[cacheId].ITEMS;
            }
        },
        destroyed() {
            window.removeEventListener('resize', this.handleResize);
        }
    }
</script>

<style scoped>

</style>