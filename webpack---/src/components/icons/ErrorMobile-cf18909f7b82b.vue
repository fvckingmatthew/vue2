<template>
    <g class="error-svg" @click="clickPath($event)" v-html="arResult.arFields.DETAIL_TEXT"/>
</template>

<script>
    import {searchElement} from "../../jsFunction/searchElement";
    import {getClBlockElement} from "../../jsFunction/getCIBlockElement";

    export default {
        name: "ErrorMobile",
        data(){
            return{
                arResult: {
                    arFields:{
                        DETAIL_TEXT: '',
                    }
                },
                arSort: {
                    'SORT': 'ASC',
                },
                arFilter: {
                    'IBLOCK_ID': 21,
                    'ACTIVE': 'Y',
                    'ID': 121
                },
                arSelect: [
                    'NAME',
                    'CODE',
                    'DETAIL_TEXT',
                    'DETAIL_PAGE_URL',
                ],
                arNuvParam: {},
            }
        },
        methods:{
            clickPath(event){
                let parent = searchElement.methods.parent(event.target, 'pointer');
                this.$emit('clickPath', parent.attributes.clickpath.nodeValue);
            }
        },
        created() {
            getClBlockElement.methods.GetList(this.arSort, this.arFilter,  false, this.arNuvParam, this.arSelect).then((data) => {
                this.arResult = data.ITEMS[0];
            });
        }
    }
</script>

<style scoped>

</style>