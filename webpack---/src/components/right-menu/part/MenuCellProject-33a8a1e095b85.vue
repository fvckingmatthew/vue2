<template>
    <div class="project-cell-menu">
        <div class="title-wrap-menu">
            <h2>Проекты</h2><span>{{countAll}}</span>
        </div>

        <div class="link-list">
            <a class="hide-line" :href="'/projects/?&PROPERTY_AREA_FILTER=' + property.ID" v-for="(property, i) in filterArea" :key="i"
               @click="changePage('/projects/?&PROPERTY_AREA_FILTER=' + property.ID)"
               v-html="property.VALUE"
            />
        </div>
    </div>
</template>

<script>
    import {getClBlockElement} from "../../../jsFunction/getCIBlockElement";

    export default {
        name: "MenuCellProject",
        data(){
            return{
                filterArea: [],
                countAll: '',
                arSort: {
                    'SORT' : 'ASC'
                },
                arFilter: {
                    'IBLOCK_ID' : 9, 'ACTIVE' : 'Y',
                },
                arSelect: [
                    'NAME', 'CODE', 'PREVIEW_PICTURE', 'DETAIL_PAGE_URL', 'GET_FILTER'
                ],
                arNuvParam: {
                    'iNumPage' : 1, 'nPageSize': 1, 'realPageSize': 1,
                },
                lazyLoadPage: {
                    'iNumPage': 1,
                    'nPageSize': 4,
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
                this.filterArea = data.infoBlock.FILTERS.AREA_FILTER.arProperty;
                this.countAll = data.infoBlock.ALL_COUNT_ITEM;
            });
        }
    }
</script>

<style scoped>

</style>