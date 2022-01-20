<template>
    <div class="privacy-policy-page container article" :class="[
                { 'stopAnimation': !getProgressAxios.statusResponseAxios && !changeCode},
            ]">
        <div class="row">
            <div class="col-23 title-block">
                <h1 showScroll="title" :class="[{ 'moveTop': elementVisibleScroll.title.visible}]">{{$route.name}}</h1>
            </div>
            <separator class="col-23" :show="true" :static-separator="true"/>
            <div class="col-xl-7 col-23 title-block" :class="{'change-screen': animateText}">
                <h2 v-if="arResult.arFields.NAME" showScroll="name" :class="[{ 'moveTop': elementVisibleScroll.name.visible}]">{{arResult.arFields.NAME}}</h2>
            </div>
            <div class="col-xl-16 offset-xl-0 offset-md-5 col-md-18 col-23 article">
                <div class="blog-text" v-html="arResult.arFields.DETAIL_TEXT"/>
            </div>

        </div>
    </div>
</template>

<script>
    import {getClBlockElement} from "../../../jsFunction/getCIBlockElement";
    import Separator from "../../layout/Separator";
    import {showElementScroll} from "../../../jsFunction/showElementScroll";

    export default {
        name: "PrivacyPolicyPage",
        mixins:[getClBlockElement, showElementScroll],
        components: {Separator},
        computed: {
            getProgressAxios(){
                return this.$store.getters.getProgressAxios; // чекаем статус загузки контента
            },
        },
        watch:{
            '$route' (to){
                this.changeCode = true;
                this.animateText = true;
                window.setTimeout( () => this.leavePage(to), 1000);
            },
            'getProgressAxios.statusResponseAxios' (value){
                if(value){
                    this.startAnimation();
                    this.$store.dispatch('receiveAppClass' ,{appClass: 'bgColorLightGray' , showSeparator: true} );
                }
            }
        },
        data(){
            return{
                arResult: {
                    arFields:{
                        NAME:{}
                    },
                },
                elementVisibleScroll: {
                    title:{}, name: {}
                },
                showAfterIntro: true,
                arElementsShow: [],
                arSort: {
                    'SORT' : 'ASC'
                },
                arFilter: {
                    'IBLOCK_ID' : 20, 'ACTIVE' : 'Y',
                },
                arSelect: [
                    'NAME',
                    'CODE',
                    'PREVIEW_PICTURE',
                    'DETAIL_TEXT'
                ],
                arNuvParam: {},
                changeCode: false,
                animateText: false,
            }
        },

        methods:{
            handleScroll(){
                let visibleStatus = showElementScroll.methods.comparisonPosition(this.arElementsShow);
                this.setObjectAnimation(visibleStatus);

            },
            startAnimation(){
                this.arElementsShow = showElementScroll.methods.GetElements('.privacy-policy-page');
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
                        if(this.elementVisibleScroll[j].selectID.indexOf('selectorText') > -1){
                            let elem = document.querySelector(this.elementVisibleScroll[j].selectID);
                            if(elem){
                                elem.classList.add('moveTop');
                            }
                        }
                    } else {
                        if(this.elementVisibleScroll[j].selectID){
                            if(this.elementVisibleScroll[j].selectID.indexOf('selectorText') > -1){
                                let elem = document.querySelector(this.elementVisibleScroll[j].selectID);
                                if(elem) {
                                    elem.classList.remove('moveTop');
                                }
                            }
                        }
                    }
                }
            },
            handleResize(){
                this.startAnimation();
            },
            leavePage(to){
                this.arFilter.CODE = to.params.code;
                window.scrollTo(0, 0);
                getClBlockElement.methods.GetList(this.arSort, this.arFilter,  false, this.arNuvParam, this.arSelect).then((data) => {
                    this.arResult = data.ITEMS[0];
                    this.sectionInfo = data.infoBlock.SECTION_LIST;
                    if(data.ITEMS[0].arFields.DETAIL_TEXT.length > 0){
                        this.getHTMLChildren(data.ITEMS[0].arFields.DETAIL_TEXT);
                    }
                    this.animateText = false;
                });
            },
            getHTMLChildren(str){
                let div = document.createElement('div');
                div.innerHTML = str;
                let textElements = div.querySelectorAll('p, li, div.list-item, h2, h3, h4, h5');

                for (let i = 0, len = textElements.length; i < len; i++) {
                    textElements[i].setAttribute('showScroll', 'selectorText'+i);
                    this.$set(this.elementVisibleScroll, 'selectorText'+i, {});
                }
                this.arResult.arFields.DETAIL_TEXT = div.innerHTML;
                this.startAnimation();
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
            }
        },
        created(){
            window.addEventListener('scroll', this.handleScroll);
            window.addEventListener('resize', this.handleResize);

            getClBlockElement.methods.GetList(this.arSort, this.arFilter,  false, this.arNuvParam, this.arSelect).then((data) => {
                this.arResult = data.ITEMS[0];
                if(data.ITEMS[0].arFields.DETAIL_TEXT.length > 0){
                    this.getHTMLChildren(data.ITEMS[0].arFields.DETAIL_TEXT);
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