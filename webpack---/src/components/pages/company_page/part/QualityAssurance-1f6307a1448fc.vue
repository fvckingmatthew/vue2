<template>
    <partner-main-page v-if="arResult.arProperty.PARTNER_ON_MAIN"  :result-main-page="arResult"/>
</template>

<script>
    import {getClBlockElement} from "../../../../jsFunction/getCIBlockElement";
    import PartnerMainPage from "../../main_page/parts/PartnerMainPage";

    export default {
        name: "QualityAssurance",
        components: {PartnerMainPage},
        data(){
            return{
                arResult:{
                    arProperty:{
                        PARTNER_ON_MAIN:{}
                    }
                }
            }
        },
        computed:{
            bitrixStore(){
                return this.$store.getters.cacheData;
            }
        },
        created() {
            let arSort = {
                'SORT' : 'ASC'
            };
            let arFilter = {
                'IBLOCK_ID' : 5,
                'ACTIVE' : 'Y',
            };
            let arSelect = [
                'ID', 'IBLOCK_ID', 'NAME', 'CODE'
            ];

            if(!this.bitrixStore[arFilter.IBLOCK_ID]) {
                getClBlockElement.methods.GetList(arSort, arFilter, false, false, arSelect).then((data) => {
                    this.arResult = data.ITEMS[0];

                    this.$store.dispatch('receiveCacheData', {id: arFilter.IBLOCK_ID, cacheData: data})
                });
            } else {
                this.arResult = this.bitrixStore[arFilter.IBLOCK_ID].ITEMS[0];
            }
        }
    }
</script>

<style scoped>

</style>