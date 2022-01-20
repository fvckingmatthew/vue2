<template>
    <div class="project-block">
        <div v-for="(project, i) in this.arResult" :key="i"
             :showScroll="'border-bottom' + i"
             class="project"
             :class="[getWidthOrder(i),{ 'show-border': elementVisibleScroll['border-bottom' + i] && elementVisibleScroll['border-bottom' + i].visible}]"
        >

            <base-button
                    v-if="project"
                    :text="project.arFields.NAME"
                    :link="project.arFields.DETAIL_PAGE_URL"
                    :typeBtn="'link-arrow-right'"
                    :showScroll="'toProject' + i" :class="[{ 'show-link-arrow': elementVisibleScroll['toProject' + i] && elementVisibleScroll['toProject' + i].visible}]"
            />
            <div class="specifications"
                 :showScroll="'specifications' + i"
                 :class="[
                     {'work-spec': project.arProperty.YEAR_WORK},
                     {'specifications-show-move-top': elementVisibleScroll['specifications' + i] && elementVisibleScroll['specifications' + i].visible}
                 ]">
                    <p  v-if="project.arProperty.AREA_PROJECT">
                        {{project.arProperty.AREA_PROJECT.VALUE}} м<sup>2</sup>
                    </p>
                    <p  v-else-if="project.arProperty.AREA_WORK && project.arProperty.AREA_WORK.VALUE !== ''">
                        {{project.arProperty.AREA_WORK.VALUE}} м<sup>2</sup>
                    </p>
                    <span  v-if="project.arProperty.ROOM_PROJECT">{{project.arProperty.ROOM_PROJECT.VALUE}} {{roomCount(project.arProperty.ROOM_PROJECT.VALUE)}}</span>
                    <span  v-else-if="project.arProperty.YEAR_WORK">{{project.arProperty.YEAR_WORK.VALUE}}</span>
            </div>
            <div class="project-img"
                 @click="triggerLink()"
                 v-if="project.arFields.PREVIEW_PICTURE_INFO.SRC"
                 :style="!project.arFields.PREVIEW_PICTURE_INFO.LOADED ? 'opacity: 1 !important;': '' "
                 :showScroll="'projectImg' + i"
                 :class="[
                     {'show-img-project': elementVisibleScroll['projectImg' + i] && elementVisibleScroll['projectImg' + i].visible && project.arFields.PREVIEW_PICTURE_INFO.LOADED},
                     {'watermark': project.arFields.PREVIEW_PICTURE_INFO.WATERMARK},
                 ]">
                <img
                     :src="$hostname + project.arFields.PREVIEW_PICTURE_INFO.SRC"
                     :width="project.arFields.PREVIEW_PICTURE_INFO.WIDTH"
                     :height="project.arFields.PREVIEW_PICTURE_INFO.HEIGHT"
                     @load="[
                         backWatermark(i, project.arFields.PREVIEW_PICTURE_INFO),
                         project.arFields.PREVIEW_PICTURE_INFO.LOADED = true,
                         //$emit('imgLoaded')
                     ]"
                />
                <!--<div class="placeholder-img"
                     :class="[{'leave-placeholder': project.arFields.PREVIEW_PICTURE_INFO.LOADED}]">
                    <img :src="'https://doma-veka.isp.regruhosting.ru/placeholder-img.jpg'"
                         :width="project.arFields.PREVIEW_PICTURE_INFO.WIDTH"
                         :height="project.arFields.PREVIEW_PICTURE_INFO.HEIGHT"
                    />
                </div>-->
                <div class="wrap-backWatermark">
                    <div class="backWatermark" v-if="styleBackWatermark[i]" :style="styleBackWatermark[i]"/>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
    import BaseButton from "../BaseButton";
    import {getWidthOrder} from "../../../jsFunction/getWidthOrder";
    import {searchElement} from "../../../jsFunction/searchElement";
    import {hiddenWatermark} from "../../../jsFunction/hiddenWatermark";

    export default {
        name: "ListingProjects",
        mixins: [getWidthOrder],
        components: {BaseButton},
        props:{
            arResult: Array,
            widthOrder: Array,
            elementVisibleScroll: Object,
            pathListPage: String,
            checkPositionWatermark: Boolean,
        },
        data(){
            return{
                styleBackWatermark: []
            }
        },
        watch:{
            checkPositionWatermark: function (value) {
                if(value){
                    for(let i in this.arResult){
                        if(this.pathListPage) {
                            this.styleBackWatermark[i] = hiddenWatermark.methods.set(i, this.arResult[i].arFields.PREVIEW_PICTURE_INFO, this.pathListPage + ' .project-img');
                        } else {
                            this.styleBackWatermark[i] = hiddenWatermark.methods.set(i, this.arResult[i].arFields.PREVIEW_PICTURE_INFO, '.project-img');
                        }
                    }
                }
            }
        },
        methods:{
            getWidthOrder(index){
                return getWidthOrder.methods.order(index, this.widthOrder);
            },
            backWatermark(i, realParam){
                    if(this.pathListPage){
                        this.$set(this.styleBackWatermark, i , hiddenWatermark.methods.set(i, realParam, this.pathListPage + ' .project-img'));
                    } else {
                        this.$set(this.styleBackWatermark, i , hiddenWatermark.methods.set(i, realParam, '.project-img'));
                    }
            },
            handleResize(){
                for(let i in this.arResult){
                    this.backWatermark(i, this.arResult[i].arFields.PREVIEW_PICTURE_INFO);
                }
            },
            triggerLink(){
                let parent = searchElement.methods.parent(event.target, 'project');
                parent.querySelectorAll('.link-arrow-right')[0].click();
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
        created() {
            window.addEventListener('resize', this.handleResize);
        },
        mounted() {
            for(let i in this.arResult){
                this.backWatermark(i, this.arResult[i].arFields.PREVIEW_PICTURE_INFO);
            }
        },
        destroyed() {
            window.removeEventListener('resize', this.handleResize);
        }

    }
</script>

<style scoped>

</style>