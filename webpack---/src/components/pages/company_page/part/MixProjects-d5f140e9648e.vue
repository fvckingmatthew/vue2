<template>
    <div>
        <listing-projects v-if="mixResult && elementVisibleScroll" :ar-result="mixResult" :width-order="widthOrder"  :element-visible-scroll="elementVisibleScroll"/>
    </div>
</template>

<script>
    import {getClBlockElement} from "../../../../jsFunction/getCIBlockElement";
    import ListingProjects from "../../../layout/projects/ListingProjects";

    export default {
        name: "MixProjects",
        components: {ListingProjects},
        props:['portfolioId', 'elementVisibleScroll'],
        data(){
            return{
                arResult:[],
                mixResult:[],
                arSort: {
                    'SORT' : 'ASC'
                },
                arFilter: {
                    'IBLOCK_ID' : 10, 'ACTIVE' : 'Y', 'ID': this.portfolioId
                },
                arSelect: [
                    'NAME', 'CODE', 'PREVIEW_PICTURE', 'DETAIL_PAGE_URL',
                ],
                arNuvParam: {},
                widthOrder:[
                    'col-xl-16 col-md-10 order-1','col-xl-7 col-md-13 col-15 offset-md-0 offset-8 order-2 project-cell',
                    'col-xl-7 col-md-13 col-15 offset-md-0 offset-8 order-md-3 order-4 project-cell','col-xl-16 col-md-10 order-md-4 order-3',
                ],
            }
        },
        computed:{
            bitrixStore(){
                return this.$store.getters.cacheData;
            }
        },
        methods: {
            mixProject(projectsId, flagVector, i, u){                            //достаем проект связанный с портфолио
                let arSort = {
                    'SORT' : 'ASC'
                }
                let arFilter = {
                    'IBLOCK_ID' : 9, 'ACTIVE' : 'Y', 'ID': projectsId
                }
                let arNuvParam = {}
                let arSelect = [
                    'NAME', 'CODE', 'PREVIEW_PICTURE', 'DETAIL_PAGE_URL',
                ]

                let cacheId = arFilter.IBLOCK_ID + '_' + projectsId;

                if(!this.bitrixStore[cacheId]) {
                    getClBlockElement.methods.GetList(arSort, arFilter, false, arNuvParam, arSelect).then((data) => {
                        if(flagVector){
                            this.$set(this.mixResult, u++, this.arResult[i]);
                            this.$set(this.mixResult, u, data.ITEMS[0]);
                        } else {
                            this.$set(this.mixResult, u++, data.ITEMS[0]);
                            this.$set(this.mixResult, u, this.arResult[i]);
                        }

                        this.$store.dispatch('receiveCacheData', {id: cacheId, cacheData: data})
                    })
                } else {
                    if(flagVector){
                        this.$set(this.mixResult, u++, this.arResult[i]);
                        this.$set(this.mixResult, u, this.bitrixStore[cacheId].ITEMS[0]);
                    } else {
                        this.$set(this.mixResult, u++, this.bitrixStore[cacheId].ITEMS[0]);
                        this.$set(this.mixResult, u, this.arResult[i]);
                    }
                }
            },
            createdMixProjects(data){
                this.arResult = data.ITEMS;
                let u = 0;
                let flagVector = true;
                for(let i in this.arResult){   // собераем новый массив с элементами из портфолио и привязанными к ним проекты
                    if(i < 2){
                        this.mixProject(this.arResult[i].arProperty.PROJECT.VALUE, flagVector, i, u);
                        flagVector = !flagVector;
                        u += 2;
                    }

                }

            }
        },
        created() {
            let cacheId = this.arFilter.IBLOCK_ID + '_mixProjects';
            if(!this.bitrixStore[cacheId]) {
                getClBlockElement.methods.GetList(this.arSort, this.arFilter, false, this.arNuvParam, this.arSelect).then((data) => {
                    this.createdMixProjects(data);

                    this.$store.dispatch('receiveCacheData', {id: cacheId, cacheData: data})
                })
            } else {
                this.createdMixProjects(this.bitrixStore[cacheId]);
            }
        }
    }
</script>

<style scoped>

</style>