<template>
    <div>
        <base-button
                :class="[{ 'right-inverse': elem === '<ID' }, {'disable' : !arResult.arFields.CODE}]"
                :link="'/blog/'+arResult.arFields.CODE"
                :typeBtn="className"
                :text="text"
        />
    </div>
</template>

<script>
    import {getClBlockElement} from "../../../jsFunction/getCIBlockElement";
    import BaseButton from '../../layout/BaseButton';

    export default {
        name: "GoToButton",
        props:{
            id: String,
            sectionId: String,
            sort: String,
            elem: String,
        },
        components: {BaseButton},
        watch:{
            id: function(value){
                this.arFilter[this.elem] = value;
                if(this.elem === '>ID'){
                    this.text = '<span>Следующая <span class="btn-mobile-hidden">статья</span></span>'
                } else {
                    this.text = '<span>Предыдущая <span class="btn-mobile-hidden">статья</span></span>'
                }
                getClBlockElement.methods.GetList(this.arSort, this.arFilter,  false, this.arNuvParam, this.arSelect).then((data) => {
                    if(data.ITEMS) {
                        this.arResult = data.ITEMS[0];
                    } else {
                        this.arResult.arFields.CODE = '';
                    }
                });
            }
        },
        data(){
            return{
                arResult: {
                    arFields:{
                        CODE:{},
                        IBLOCK_SECTION_ID: {}
                    },
                },
                text: {},
                sectionInfo: [],
                arSort: {
                    'SORT' : this.sort
                },
                className: {},
                arFilter: {
                    "IBLOCK_ID": 18,
                    "IBLOCK_SECTION_ID": this.sectionId,
                    "ACTIVE": "Y",
                },
                arSelect: [
                    'NAME', 'CODE', 'PREVIEW_PICTURE', 'DETAIL_PAGE_URL'
                ],
                arNuvParam: {
                    "nTopCount": 1
                },
            }
        },
        created() {
            window.addEventListener('resize', this.handleResize);

            this.arFilter[this.elem] = this.id;
            if(this.elem === '>ID'){
                this.text = '<span>Следующая <span class="btn-mobile-hidden">статья</span></span>'
            } else {
                this.text = '<span>Предыдущая <span class="btn-mobile-hidden">статья</span></span>'
            }
            getClBlockElement.methods.GetList(this.arSort, this.arFilter,  false, this.arNuvParam, this.arSelect).then((data) => {
                if(data.ITEMS) {
                    this.arResult = data.ITEMS[0];
                } else {
                    this.arResult.arFields.CODE = null;
                }
            });
        },
        methods: {
            changeButton(){
                if(window.innerWidth <= 768){
                    this.className = 'secondary-button';
                } else {
                    this.className = 'base-btn';
                }
            },
            handleResize(){
                this.changeButton();
            },
        },
        mounted() {
            this.changeButton();
        },
        destroyed() {
            window.removeEventListener('resize', this.handleResize);
        }
    }
</script>

<style scoped>

</style>