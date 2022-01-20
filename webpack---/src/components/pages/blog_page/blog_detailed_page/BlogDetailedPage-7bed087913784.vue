<template>
    <article class="blog-detail-page container" :class="[
                { 'stopAnimation': !getProgressAxios.statusResponseAxios && !changeCode},
            ]">
        <div class="row">
            <div class="col-23 buttons-panel">
                <go-to-button v-if="arResult.arFields.SECTION_INFO.ID"
                              :id="arResult.arFields.ID"
                              :sort="'DESC'"
                              :sectionId="arResult.arFields.SECTION_INFO.ID"
                              :elem="'<ID'"
                              showScroll="prev" :class="[{ 'show-button': elementVisibleScroll.prev.visible}]"
                />
                <go-to-button v-if="arResult.arFields.SECTION_INFO.ID"
                              :id="arResult.arFields.ID"
                              :sort="'ASC'"
                              :sectionId="arResult.arFields.SECTION_INFO.ID"
                              :elem="'>ID'"
                              showScroll="next" :class="[{ 'show-button': elementVisibleScroll.next.visible}]"
                />
            </div>
            <separator class="col-23" :show="true" :static-separator="true"/>
            <div class="col-xl-7 col-23 title-block" :class="{'change-screen': animateBlogInfo}">
                <div class="date" v-if="arResult.arFields.CREATED_DATE"
                     showScroll="date" :class="[{ 'moveTop': elementVisibleScroll.date.visible}]">{{format_date(arResult.arFields.CREATED_DATE)}}</div>
                <h1 v-if="arResult.arFields.NAME"
                    showScroll="title" :class="[{ 'moveTop': elementVisibleScroll.title.visible}]">{{arResult.arFields.NAME}}</h1>
                <div>
                    <div v-for="(section, i) in sectionInfo" :key="i">
                        <base-button
                                v-if="section.ID === arResult.arFields.SECTION_INFO.ID"
                                class="section-name"
                                :text="section.NAME"
                                :link="'/blog/?blog='+section.CODE"
                                :typeBtn="'section-name'"
                                showScroll="section"
                                :class="[setTagColor(arResult.arFields.IBLOCK_SECTION_ID), {'moveTop': elementVisibleScroll.title.visible}]"
                        />
                    </div>
                </div>
            </div>
            <div class="col-xl-16 offset-xl-0 offset-md-5 col-md-18 col-23 article" :class="{'change-screen': animateBlogInfo}">
                <div class="block-text-container">
                    <div class="blog-text"
                         v-if="arResult.arFields.DETAIL_TEXT"
                         @click="handleClicks"
                         v-html="arResult.arFields.DETAIL_TEXT"
                    ></div>
                </div>
            </div>
            <popup-cool-light-box v-if="gallery" :elems="gallery" />
            <!--{{gallery}}-->
                <!--:items=""-->
        </div>
    </article>
</template>


<script>
    import {showElementScroll} from "../../../../jsFunction/showElementScroll";
    import {getClBlockElement} from "../../../../jsFunction/getCIBlockElement";
    import {seo} from "../../../../jsFunction/seo";
    import Separator from "../../../layout/Separator";
    import moment from 'moment';
    import BaseButton from "../../../layout/BaseButton";
    import GoToButton from '../../../layout/blog/GoToButton'
    // import LightBox from "../../../layout/LightBox";
    import PopupCoolLightBox from "../../../layout/PopupCoolLightBox";

    export default {
        name: "BlogDetailedPage",
        mixins: [getClBlockElement, showElementScroll],
        components: {Separator, BaseButton, GoToButton, PopupCoolLightBox},
        computed: {
            getProgressAxios(){
                return this.$store.getters.getProgressAxios; // чекаем статус загузки контента
            },
        },
        watch:{
            '$route' (to){
                this.changeCode = true;
                this.animateBlogInfo = true;
                window.setTimeout( () => this.leavePage(to), 1000);
            },
            'getProgressAxios.statusResponseAxios' (value){
                if(value){
                    this.startAnimation();
                }
            }
        },
        data(){
            return{
                arResult: {
                    arFields:{
                        NAME:{},
                        SECTION_INFO:{}
                    },
                    arProperty:{
                    }
                },
                arInfoBlock: {
                    arProperty:{
                    },
                },
                sectionInfo: [],
                elementVisibleScroll: {
                    title:{}, date:{}, detailText: {}, section: {}, next: {}, prev: {}
                },
                arFilters: {
                },
                gallery: [],
                className: {},
                showAfterIntro: true,
                arElementsShow: [],
                arSort: {
                    'SORT' : 'ASC'
                },
                arFilter: {
                    'IBLOCK_ID' : 18, 'ACTIVE' : 'Y', 'CODE': this.$route.params.code,
                },
                arSelect: [
                    'ID', 'NAME', 'CODE', 'PREVIEW_PICTURE', 'DETAIL_PAGE_URL', 'DETAIL_TEXT', 'CREATED_DATE', 'IBLOCK_SECTION_ID'
                ],
                arNuvParam: {},
                fixedBtn: false,
                changeCode: false,
                animateBlogInfo: false,
            }
        },
        methods:{
            handleScroll(){
                let visibleStatus = showElementScroll.methods.comparisonPosition(this.arElementsShow);
                this.setObjectAnimation(visibleStatus);
            },
            startAnimation(){
                this.arElementsShow = showElementScroll.methods.GetElements('.blog-detail-page');
                let visibleStatus = showElementScroll.methods.comparisonPosition(this.arElementsShow);
                this.setObjectAnimation(visibleStatus);
            },
            setObjectAnimation(visibleStatus){
                for (let item in this.arElementsShow ) {
                    this.$set(this.elementVisibleScroll, item , this.arElementsShow[item]);
                    if(typeof visibleStatus === 'boolean'){
                        this.$set(this.elementVisibleScroll[item], 'visible' , visibleStatus);
                    } else {
                        this.$set(this.elementVisibleScroll[item], 'visible' , visibleStatus[item].visible);
                    }
                }
                for(let j in this.elementVisibleScroll){
                    if(this.elementVisibleScroll[j].visible) {
                        // console.log(this.elementVisibleScroll[j].selectID.indexOf('selectorText'));
                        if(this.elementVisibleScroll[j].selectID.indexOf('selectorText') > -1){
                            let elem = document.querySelector(this.elementVisibleScroll[j].selectID);
                            if(elem){
                                elem.classList.add('moveTop');
                            }
                        } else {
                            if(this.elementVisibleScroll[j].selectID.indexOf('selectorImg') > -1){
                                let elem = document.querySelector(this.elementVisibleScroll[j].selectID);
                                if(elem) {
                                    elem.classList.add('show-img-project');
                                }
                            }
                        }
                    } else {
                        if(this.elementVisibleScroll[j].selectID){
                            if(this.elementVisibleScroll[j].selectID.indexOf('selectorText') > -1){
                                let elem = document.querySelector(this.elementVisibleScroll[j].selectID);
                                if(elem) {
                                    elem.classList.remove('moveTop');
                                }
                            } else {
                                if(this.elementVisibleScroll[j].selectID.indexOf('selectorImg') > -1){
                                    let elem = document.querySelector(this.elementVisibleScroll[j].selectID);
                                    if(elem) {
                                        elem.classList.remove('show-img-project');
                                    }
                                }
                            }
                        }
                    }
                }
            },
            setTagColor(id) {
                return {
                    'tag-green': id == 16,
                    'tag-blue': id == 15,
                }
            },
            handleResize(){
                this.startAnimation();
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
            leavePage(to){
                this.arFilter.CODE = to.params.code;
                window.scrollTo(0, 0);
                //this.changeCode = false;
                getClBlockElement.methods.GetList(this.arSort, this.arFilter,  false, this.arNuvParam, this.arSelect).then((data) => {
                    this.arResult = data.ITEMS[0];
                    seo.methods.set(this.arResult, 'detail');
                    this.sectionInfo = data.infoBlock.SECTION_LIST;
                    if(data.ITEMS[0].arFields.DETAIL_TEXT.length > 0){
                        this.getGalleryFromText(data.ITEMS[0].arFields.DETAIL_TEXT);
                        this.getHTMLChildren(data.ITEMS[0].arFields.DETAIL_TEXT);
                    }
                    this.animateBlogInfo = false;
                });
            },
            openLightBox(srcImg){
                for(let i in this.gallery) {
                    if(this.gallery[i]['src'] === srcImg) {
                        this.$store.dispatch('receiveArSrcImg' , {ind: Number(i)});
                    }
                }
            },
            getHTMLChildren(str){
                let div = document.createElement('div');
                div.innerHTML = str;
                let textElements = div.querySelectorAll('p, li, div.list-item, h2, h3, h4, h5');
                let imgElements = div.querySelectorAll('div.preview-img');

                for (let i = 0, len = textElements.length; i < len; i++) {
                    textElements[i].setAttribute('showScroll', 'selectorText'+i);
                    this.$set(this.elementVisibleScroll, 'selectorText'+i, {});
                }
                for (let j = 0, len = imgElements.length; j < len; j++) {
                    imgElements[j].setAttribute('showScroll', 'selectorImg'+j);
                    this.$set(this.elementVisibleScroll, 'selectorImg'+j, {});
                }
                this.arResult.arFields.DETAIL_TEXT = div.innerHTML;
                this.startAnimation();
            },
            getGalleryFromText(str){
                let images = /<img[^>]+>/ig;
                let imgTitle = /title=(\\"|'|")(.*)\1/i;
                let imgSrc = /(src)=(\\"|'|")([^"]*)\2/i;
                let allImg = str.match(images);
                if(allImg){
                    for(let i in allImg){
                        let tempSrc = allImg[i].match(imgSrc);
                        let tempTitle = allImg[i].match(imgTitle);
                        let counter = parseInt(i) + 1;
                        let tmpTitle = '';
                        if(tempTitle){
                            tmpTitle = tempTitle[2] + "<span class='index-counter'>"+counter+"/"+allImg.length+"</span>" ;
                        } else {
                            tmpTitle = "<span class='index-counter'>"+counter+"/"+allImg.length+"</span>";
                        }
                        this.gallery[i] = {
                            'src': tempSrc[3],
                            'title': tmpTitle,
                        };
                    }
                }
            },
            handleClicks (event) {
                let { target } = event;
                while (target && target.tagName !== 'A') target = target.parentNode;
                if (target && target.matches(".blog-text a:not([href*='://'])") && target.href) {
                    const { altKey, ctrlKey, metaKey, shiftKey, button, defaultPrevented } = event;
                    if (metaKey || altKey || ctrlKey || shiftKey) return;
                    if (defaultPrevented) return;
                    if (button !== undefined && button !== 0) return;
                    if (target && target.getAttribute) {
                        const linkTarget = target.getAttribute('target');
                        if (/\b_blank\b/i.test(linkTarget)) return;
                    }
                    const url = new URL(target.href);
                    const to = url.pathname;
                    if (window.location.pathname !== to && event.preventDefault) {
                        event.preventDefault();
                        this.$router.push(to);
                    }
                }
                this.openLightBox(event.target.src);//.replace(this.$hostname+'/', ''));
            }
        },
        created() {
            this.$store.dispatch('receiveAppClass' ,{appClass: 'bgColorGray'} );

            window.addEventListener('scroll', this.handleScroll);
            window.addEventListener('resize', this.handleResize);


            getClBlockElement.methods.GetList(this.arSort, this.arFilter,  false, this.arNuvParam, this.arSelect).then((data) => {
                if(typeof data.ITEMS != 'undefined') {
                    this.arResult = data.ITEMS[0];
                    seo.methods.set(this.arResult, 'detail');
                    this.sectionInfo = data.infoBlock.SECTION_LIST;
                    if (data.ITEMS[0].arFields.DETAIL_TEXT.length > 0) {
                        this.getGalleryFromText(data.ITEMS[0].arFields.DETAIL_TEXT);
                        this.getHTMLChildren(data.ITEMS[0].arFields.DETAIL_TEXT);
                    }
                } else {
                    this.$router.push('/404');
                }
            });
        },

        destroyed() {
            this.$store.dispatch('receiveAppClass' ,{appClass: ''} );

            window.removeEventListener('scroll', this.handleScroll);
            window.removeEventListener('resize', this.handleResize);
        }
    }
</script>

<style scoped>

</style>