<template>
    <div class="row listing-gallery">
        <div class="item-gallery" :class="[getWidthOrder(i)]" v-for="(item, i) in arResult" :key="i" @click="$emit('click' ,item.arProperty.PHOTOGALLERY.FILE_INFO)">
            <base-button
                    v-if="item"
                    :text="item.arFields.NAME"
                    :link="'javascript:void(0);'"
                    :typeBtn="'link-arrow-right'"
                    :showScroll="'toProject' + i" :class="[{ 'show-link-arrow': elementVisibleScroll['toProject' + i] && elementVisibleScroll['toProject' + i].visible}]"
            />
            <span class="subtitle" v-if="item.arProperty.SUBTITLE"
                  :showScroll="'subtitlePortfolio' + i" :class="[{ 'moveTop': elementVisibleScroll['subtitlePortfolio' + i] && elementVisibleScroll['subtitlePortfolio' + i].visible}]"
            >
                {{item.arProperty.SUBTITLE.VALUE}}
            </span>

            <div class="text-gallery" v-html="item.arFields['PREVIEW_TEXT']"
                 :showScroll="'textPortfolio' + i" :class="[{ 'moveTop': elementVisibleScroll['textPortfolio' + i] && elementVisibleScroll['textPortfolio' + i].visible}]"
            />

            <div class="preview-img"
                 :class="[{ 'show-img-project': elementVisibleScroll['previewPictureGallery' + i] && elementVisibleScroll['previewPictureGallery' + i].visible}]"
                 :showScroll="'previewPictureGallery' + i">
                <img :src="$hostname + item.arFields.PREVIEW_PICTURE_INFO.SRC"
                     :width="item.arFields.PREVIEW_PICTURE_INFO.WIDTH"
                     :height="item.arFields.PREVIEW_PICTURE_INFO.HEIGHT"
                >
            </div>
        </div>

    </div>
</template>

<script>
    import {getClBlockElement} from "../../../../jsFunction/getCIBlockElement";
    import {getWidthOrder} from "../../../../jsFunction/getWidthOrder";
    import BaseButton from "../../../layout/BaseButton";

    export default {
        name: "GalleryServiceProject",
        components: {BaseButton},
        props:{
            arParent: [Array, Object],
            elementVisibleScroll: Object,
        },
        data(){
            return{
                arResult:{},
                arSort: {
                    'SORT' : 'ASC'
                },
                arFilter: {
                    'IBLOCK_ID' : 17, 'ACTIVE' : 'Y', 'ID': this.arParent
                },
                arSelect: [
                    'NAME', 'CODE', 'PREVIEW_PICTURE', 'DETAIL_PAGE_URL', 'DETAIL_TEXT', 'PREVIEW_TEXT'
                ],
                arNuvParam: {},
                widthOrder:['col-xl-8','col-xl-12 offset-xl-3',
                            'col-xl-12','col-xl-8 offset-xl-3',
                ],
            }
        },
        watch:{
            'arParent'(value){
                this.arFilter.ID = value;
                getClBlockElement.methods.GetList(this.arSort, this.arFilter,  false, this.arNuvParam, this.arSelect).then((data) => {
                    this.arResult = data.ITEMS;
                })
            }
        },
        methods:{
            getWidthOrder(index){
                return getWidthOrder.methods.order(index, this.widthOrder);
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