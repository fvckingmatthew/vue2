<template>
    <div class="article-block">
        <!--{{this.arResult.length}}-->
        <div v-for="(article, i) in this.arResult" :key="i"
             class="article"
             :showScroll="'fullPage' + i"
             :class="[getWidthOrder(i), {'last-article': i === (arResultLength-1) && (arResultLength % 2 === 1)}, { 'opacity-animate': elementVisibleScroll['fullPage' + i] && elementVisibleScroll['fullPage' + i].visible}]"

        >
            <div class="top-block">
                <div class="date"
                     v-if="article.arFields.CREATED_DATE"
                     :showScroll="'specifications' + i"
                     :class="[
                       {'moveTop': elementVisibleScroll['specifications' + i] && elementVisibleScroll['specifications' + i].visible}
                    ]"
                >{{format_date(article.arFields.CREATED_DATE)}}</div>
                <base-button
                        v-if="article"
                        :text="article.arFields.NAME"
                        :link="pathListPage + article.arFields.CODE"
                        :typeBtn="'link-arrow-right'"
                        :showScroll="'toArticle' + i"
                        :class="[{ 'show-link-arrow': elementVisibleScroll['toArticle' + i] && elementVisibleScroll['toArticle' + i].visible}]"
                />
            </div>

            <div class="bottom-block"
                 v-if="article.arFields.PREVIEW_PICTURE || article.arFields.PREVIEW_TEXT">
                <div v-if="article.arFields.SECTION_INFO.NAME">
                    <span class="section-name"
                          @click="triggerUpdateUrl(article.arFields.SECTION_INFO.ID)"
                          :showScroll="'showSection' + i"
                          :class="[{ 'moveTop': elementVisibleScroll['showSection' + i] && elementVisibleScroll['showSection' + i].visible}, setTagColor(article.arFields.IBLOCK_SECTION_ID)]">
                        <span>{{article.arFields.SECTION_INFO.NAME}}</span>
                    </span>
                </div>
                <div class="image"
                     v-if="article.arFields.PREVIEW_PICTURE"
                     :showScroll="'articleImg' + i"
                     :class="[{ 'show-img-project': elementVisibleScroll['articleImg' + i] && elementVisibleScroll['articleImg' + i].visible}]">
                    <img :src="$hostname + article.arFields.PREVIEW_PICTURE_INFO.SRC" />
                </div>

                <div class="text" v-else-if="article.arFields.PREVIEW_TEXT">
                    <div :showScroll="'showText' + i"
                    :class="[{ 'moveTop': elementVisibleScroll['showText' + i] && elementVisibleScroll['showText' + i].visible}]">
                        <div class="prev-text" v-html="article.arFields.PREVIEW_TEXT"/>
                        <base-button
                                v-if="article"
                                :text="'читать далее'"
                                :link="pathListPage + article.arFields.CODE"
                                :typeBtn="'article-more'"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div style="clear: both;"></div>
    </div>
</template>


<script>
    import {getWidthOrder} from "../../../jsFunction/getWidthOrder";
    import BaseButton from "../../layout/BaseButton";
    import moment from 'moment';

    export default {
        name: "ListingBlog",
        mixins: [getWidthOrder],
        components: {BaseButton},
        props:{
            arResult: Array,
            arResultLength: Number,
            widthOrder: Array,
            elementVisibleScroll: Object,
            pathListPage: String,
        },
        methods:{
            getWidthOrder(index){
                return getWidthOrder.methods.order(index, this.widthOrder);
            },
            format_date(value){
                if (value) {
                    let temp = value.split('.');
                    let month = Number(temp[1]) - 1;
                    let date = new Date(temp[0], month, temp[2]);
                    moment.locale('ru');
                    return moment(String(date)).format('DD MMMM YYYY');
                }
            },
            setTagColor(id) {
                return {
                    'tag-green': id==16,
                    'tag-blue': id==15,
                }
            },
            triggerUpdateUrl(id){
              this.$emit("triggerUpdateUrl", id);
            },
        },
/*        mounted(){
            console.log(this.arResultLength);
        },*/
    }
</script>

<style scoped>

</style>