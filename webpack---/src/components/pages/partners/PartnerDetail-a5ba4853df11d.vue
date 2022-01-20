<template>
    <div class="partner-detail-page container" :class="[
            { 'stopAnimation': !getProgressAxios.statusResponseAxios && !changeCode},
            {'change-screen': changeCode}
        ]">
        <div class="main-title-block">
            <h1 v-if="arResult.arProperty.FULL_NAME" showScroll="title" :class="[{ 'moveTop': elementVisibleScroll.title.visible}]">{{arResult.arProperty.FULL_NAME.VALUE}}</h1>
            <div class="main-logo" v-if="arResult.arFields.PREVIEW_PICTURE" showScroll="logo" :class="[{ 'moveTop': elementVisibleScroll.logo.visible}]">
                <img :src="$hostname + arResult.arFields.PREVIEW_PICTURE_INFO.SRC">
            </div>
        </div>
        <separator :show="true"/>
        <div class="row">
            <div class="col-xl-7 col-23 title-block">
                <div class="product-logo" v-if="arResult.arProperty.PRODUCT_LOGO" showScroll="productLogo" :class="[{ 'moveTop': elementVisibleScroll.productLogo.visible}]">
                    <img :src="$hostname + arResult.arProperty.PRODUCT_LOGO.FILE_INFO.SRC" alt="">
                </div>
                <div class="tagline" v-if="arResult.arProperty.TAGLINE" showScroll="tagline" :class="[{ 'moveTop': elementVisibleScroll.tagline.visible}]">
                    <span>{{arResult.arProperty.TAGLINE.VALUE}}</span>
                </div>
            </div>
            <div class="col-xl-16 offset-xl-0 offset-md-5 col-md-18 col-23 article">
                <div class="block-text-container">
                    <div class="blog-text"
                         v-if="arResult.arFields.DETAIL_TEXT"
                         @click="handleClicks"
                         v-html="arResult.arFields.DETAIL_TEXT"
                    ></div>
                </div>
            </div>
        </div>
        <popup-cool-light-box v-if="gallery" :elems="gallery" />
    </div>
</template>

<script>
    import {getClBlockElement} from "../../../jsFunction/getCIBlockElement";
    import {showElementScroll} from "../../../jsFunction/showElementScroll";
    import {seo} from "../../../jsFunction/seo";
    import Separator from "../../layout/Separator";
    import PopupCoolLightBox from "../../layout/PopupCoolLightBox";

    export default {
        name: "PartnerDetail",
        mixins: [getClBlockElement],
        components: {Separator, PopupCoolLightBox},
        data(){
            return{
                elementVisibleScroll: {
                    title:{}, logo:{}, detailText: {}, productLogo: {}, tagline: {}
                },
                showAfterIntro: true,
                arElementsShow: [],
                arResult:{
                    arProperty:{
                    },
                    arFields:{
                        PREVIEW_PICTURE: [],
                        DETAIL_TEXT: '',
                        NAME: '',
                        PREVIEW_PICTURE_INFO: {}
                    }
                },
                arSort: {
                    'SORT' : 'ASC'
                },
                arFilter: {
                    'IBLOCK_ID' : 12, 'ACTIVE' : 'Y', 'CODE': this.$route.params.code
                },
                arSelect: [
                    'NAME', 'CODE', 'PREVIEW_PICTURE', 'DETAIL_PAGE_URL', 'DETAIL_TEXT'
                ],
                arNuvParam: {},
                gallery: [],
                changeCode: false,
            }
        },
        watch:{
            '$route' (to){
                this.changeCode = true;
                this.arFilter.CODE = to.params.code;
                window.setTimeout( () => {
                    getClBlockElement.methods.GetList(this.arSort, this.arFilter,  false, this.arNuvParam, this.arSelect).then((data) => {
                        this.arResult = data.ITEMS[0];
                        seo.methods.set(this.arResult, 'detail');
                        this.$store.dispatch('receiveCheckPosition'); // заставляем пересмотреть футер положение своих элементов
                    });
                    this.changeCode = false;
                }, 1000);
            },
            'getProgressAxios.statusResponseAxios' (value){
                if(value){
                    this.startAnimation();
                }
            }
        },
        computed: {
            getProgressAxios(){
                return this.$store.getters.getProgressAxios; // чекаем статус загузки контента
            },
        },
        methods:{
            handleScroll(){
                let visibleStatus = showElementScroll.methods.comparisonPosition(this.arElementsShow);
                this.setObjectAnimation(visibleStatus);
            },
            startAnimation(){
                this.arElementsShow = showElementScroll.methods.GetElements('.partner-detail-page');
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
                            } else {
                                if(this.elementVisibleScroll[j].selectID.indexOf('selectorVid') > -1){
                                    let elem = document.querySelector(this.elementVisibleScroll[j].selectID);
                                    if(elem) {
                                        elem.classList.add('opacity-animate');
                                    }
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
                                } else {
                                    if(this.elementVisibleScroll[j].selectID.indexOf('selectorVid') > -1){
                                        let elem = document.querySelector(this.elementVisibleScroll[j].selectID);
                                        if(elem) {
                                            elem.classList.remove('opacity-animate');
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            handleResize(){
                this.startAnimation();
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
                let videoElements = div.querySelectorAll('div.video-block');

                for (let i = 0, len = textElements.length; i < len; i++) {
                    textElements[i].setAttribute('showScroll', 'selectorText'+i);
                    this.$set(this.elementVisibleScroll, 'selectorText'+i, {});
                }
                for (let j = 0, len = imgElements.length; j < len; j++) {
                    imgElements[j].setAttribute('showScroll', 'selectorImg'+j);
                    this.$set(this.elementVisibleScroll, 'selectorImg'+j, {});
                }
                for (let j = 0, len = videoElements.length; j < len; j++) {
                    videoElements[j].setAttribute('showScroll', 'selectorVid'+j);
                    this.$set(this.elementVisibleScroll, 'selectorVid'+j, {});
                }
                this.arResult.arFields.DETAIL_TEXT = div.innerHTML;
                this.startAnimation();
            },
            getGalleryFromText(str){
                let test = {};
                let images = /<img[^>]+>/ig;
                let imgTitle = /title=(\\"|'|")(.*)\1/i;
                let imgSrc = /(src)=(\\"|'|")([^"]*)\2/i;
                let allImg = str.match(images);
                if(allImg.length > 0){
                    for(let i in allImg){
                        let tempSrc = allImg[i].match(imgSrc);
                        let tempTitle = allImg[i].match(imgTitle);
                        let counter = parseInt(i) + 1;
                        if(tempTitle){
                            test['title'] = tempTitle[2] + "<span class='index-counter'>"+counter+"/"+allImg.length+"</span>";
                        } else {
                            test['title'] = "<span class='index-counter'>"+counter+"/"+allImg.length+"</span>";
                        }
                        test['src'] = tempSrc[3];
                        this.$set(this.gallery, i , test);
                        test = {};
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
            window.addEventListener('scroll', this.handleScroll);
            window.addEventListener('resize', this.handleResize);

            getClBlockElement.methods.GetList(this.arSort, this.arFilter,  false, this.arNuvParam, this.arSelect).then((data) => {
                if(typeof data.ITEMS != 'undefined') {
                    this.arResult = data.ITEMS[0];
                    this.$store.dispatch('receiveAppClass' ,{appClass: 'bgColorLightGray' , showSeparator: true} );
                    this.$store.dispatch('receiveCheckPosition'); // заставляем пересмотреть футер положение своих элементов
                    seo.methods.set(this.arResult, 'detail');
                    if(data.ITEMS[0].arFields.DETAIL_TEXT.length > 0){
                        this.getGalleryFromText(data.ITEMS[0].arFields.DETAIL_TEXT);
                        this.getHTMLChildren(data.ITEMS[0].arFields.DETAIL_TEXT);
                    }
                } else {
                    this.$router.push('/404');
                }
            })
        },

        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
            window.removeEventListener('resize', this.handleResize);
            this.$store.dispatch('receiveAppClass' ,{appClass: '' , showSeparator: true} );
        }
    }
</script>

<style scoped>

</style>