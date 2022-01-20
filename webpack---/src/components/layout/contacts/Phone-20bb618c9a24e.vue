<template>
    <a itemprop="telephone" :href="'tel:' + this.phoneLink" v-if="arResult.arProperty">{{arResult.arProperty.CONTACT_PHONE.VALUE}}</a>
</template>

<script>
    import {getClBlockElement} from "../../../jsFunction/getCIBlockElement";

    export default {
        name: "Phone",
        mixins: [getClBlockElement],
        data(){
            return{
                phoneLink: '',
                arResult: {},
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
                'IBLOCK_ID' : 6,
                'ACTIVE' : 'Y',
            };
            let arSelect = [
                'ID', 'IBLOCK_ID', 'NAME','CONTACT_PHONE',
            ];
            if(!this.bitrixStore[arFilter.IBLOCK_ID]) {
                getClBlockElement.methods.GetList(arSort, arFilter, false, false, arSelect).then((data) => {
                    this.arResult = data.ITEMS[0];
                    this.phoneLink = this.arResult.arProperty.CONTACT_PHONE.VALUE.replace(/\D/g, '');

                    this.$store.dispatch('receiveCacheData', {id: arFilter.IBLOCK_ID, cacheData: data})
                });
            } else {
                this.arResult = this.bitrixStore[arFilter.IBLOCK_ID].ITEMS[0];
                this.phoneLink = this.arResult.arProperty.CONTACT_PHONE.VALUE.replace(/\D/g, '');

            }
        },
    }
</script>

<style scoped>

</style>