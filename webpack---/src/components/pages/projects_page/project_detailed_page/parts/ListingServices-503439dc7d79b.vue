<template>
    <div class="project-services">
        <separator :show="true"/>
        <div class="row text-block">
            <div class="col-xxl-7">
                <h2 v-if="resultParent.SERVICES_TITLE.VALUE"
                    showScroll="servicesProject"
                    :class="[{ 'moveTop': elementVisibleScroll.servicesProject.visible}]"
                >
                    {{resultParent.SERVICES_TITLE.VALUE}}
                </h2>
            </div>
            <div class="text-info-project col-xxl-7 col-md-19 offset-xxl-0 offset-md-2"
                 v-if="resultParent.SERVICES_TEXT['~VALUE'].TEXT"
                 v-html="resultParent.SERVICES_TEXT['~VALUE'].TEXT"
                 showScroll="servicesText"
                 :class="[{ 'moveTop': elementVisibleScroll.servicesText.visible}]"
            >
            </div>
        </div>
        <div class="list-service row">
            <div v-for="(item, i) in this.arResult" :key="i" :class="[getWidthOrder(i)]">
                <div class="service-block">
                    <base-button
                            v-if="item"
                            :text="item.arFields.NAME"
                            :link="item.arFields.DETAIL_PAGE_URL"
                            :typeBtn="'link-arrow-right'"
                            :showScroll="'toService' + i" :class="[{ 'show-link-arrow': elementVisibleScroll['toService' + i] && elementVisibleScroll['toService' + i].visible}]"
                    />
                    <div class="img-service" :showScroll="'serviceImg' + i"
                         :class="[{ 'show-img-project': elementVisibleScroll['serviceImg' + i] && elementVisibleScroll['serviceImg' + i].visible}]">
                        <img :src="$hostname + item.arProperty.IMAGE_FOR_PROJECT.FILE_INFO.SRC"
                             :width="item.arProperty.IMAGE_FOR_PROJECT.FILE_INFO.WIDTH"
                             :height="item.arProperty.IMAGE_FOR_PROJECT.FILE_INFO.HEIGHT"
                        />
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

    export default {
        name: "ListingServices",
        components: {BaseButton, Separator},
        mixins: [getWidthOrder, getClBlockElement],
        props:{
            resultParent: Object,
            servicesId: [Array, String],
            widthOrder: Array,
            elementVisibleScroll: Object,
        },
        data(){
            return{
                arResult: {},
                arSort: {
                    'PROPERTY_SORT_FOR_PROJECT' : 'ASC'
                },
                arFilter: {
                    'IBLOCK_ID' : 11,
                    'ACTIVE' : 'Y',
                    'ID': this.servicesId
                },
                arSelect: [
                    'NAME',
                    'CODE',
                    'PREVIEW_PICTURE',
                    'DETAIL_PAGE_URL',
                ],
                arNuvParam: {},
            }
        },
        computed:{
            bitrixStore(){
                return this.$store.getters.cacheData;
            }
        },
        watch:{
            servicesId: function (value) {
                this.arFilter.ID = value;

                let cacheId = this.arFilter.IBLOCK_ID + '_' + value;
                if(!this.bitrixStore[cacheId]) {
                    getClBlockElement.methods.GetList(this.arSort, this.arFilter,  false, this.arNuvParam, this.arSelect).then((data) => {
                        this.arResult = data.ITEMS;

                        this.$store.dispatch('receiveCacheData', {id: cacheId, cacheData: data})
                    });
                } else {
                    this.arResult = this.bitrixStore[cacheId].ITEMS;
                }
            }
        },
        methods:{
            getWidthOrder(index){
                return getWidthOrder.methods.order(index, this.widthOrder);
            },
        },
        created() {
            let cacheId = this.arFilter.IBLOCK_ID + '_' + this.servicesId;
            if(!this.bitrixStore[cacheId]) {
                getClBlockElement.methods.GetList(this.arSort, this.arFilter, false, this.arNuvParam, this.arSelect).then((data) => {
                    this.arResult = data.ITEMS;

                    this.$store.dispatch('receiveCacheData', {id: cacheId, cacheData: data})
                });
            } else {
                this.arResult = this.bitrixStore[cacheId].ITEMS;
            }
        }
    }
</script>

<style scoped>

</style>