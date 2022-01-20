<template>
    <div class="work-cell-menu">
        <div class="title-wrap-menu">
            <h2>Наши работы</h2><span>{{countAll}}</span>
        </div>

        <div class="link-list">
            <a class="hide-line" :href="'works/?gallery=video&sort=desc'" @click="changePage('/works/?gallery=video&sort=desc')">
                видео
            </a>
            <a class="hide-line" :href="'works/?gallery=photo&sort=desc'" @click="changePage('/works/?gallery=photo&sort=desc')">
                фотогалереи
            </a>
        </div>
    </div>
</template>

<script>
    import {getClBlockElement} from "../../../jsFunction/getCIBlockElement";

    export default {
        name: "MenuCellWork",
        data(){
            return{
                filterArea: [],
                countAll: '',
                arSort: {
                    'SORT' : 'ASC'
                },
                arFilter: {
                    'IBLOCK_ID' : 10, 'ACTIVE' : 'Y',
                },
                arSelect: [
                    'NAME', 'CODE', 'PREVIEW_PICTURE', 'DETAIL_PAGE_URL', 'GET_FILTER'
                ],
                arNuvParam: {
                    'iNumPage' : 1, 'nPageSize': 1, 'realPageSize': 1,
                },
            }
        },
        methods:{
            changePage(path){
                event.preventDefault();
                if(path !== this.$route.path && path !== ''){
                    this.$router.push(path);
                    this.$emit('closeRightMenu');
                }
            },
        },
        created() {
            getClBlockElement.methods.GetList(this.arSort, this.arFilter,  false, this.arNuvParam, this.arSelect).then((data) => {
                this.countAll = data.infoBlock.ALL_COUNT_ITEM;
            });
        }
    }
</script>

<style scoped>

</style>