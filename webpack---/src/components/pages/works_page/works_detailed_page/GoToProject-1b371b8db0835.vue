<template>
    <base-button
            :text="'Посмотреть проект'"
            :link="'/projects/' + this.code"
            :typeBtn="'secondary-button'"
            showScroll="viewProject" :class="[{ 'show-button': elementVisibleScroll.viewProject.visible}]"
    />
</template>

<script>
    import {getClBlockElement} from "../../../../jsFunction/getCIBlockElement";
    import BaseButton from "../../../layout/BaseButton";

    export default {
        name: "GoToProject",
        mixins: [getClBlockElement],
        components: {BaseButton},
        props: ['id', 'elementVisibleScroll'],
        data() {
            return {
                code: '',
                arResult: {},
            }
        },
        created() {
            let arSort = {
                'SORT': 'ASC'
            };
            let arFiler = {
                'IBLOCK_ID': 9,
                'ID': this.id,
                'ACTIVE': 'Y',
            };
            let arSelect = [
                'ID', 'IBLOCK_ID', 'NAME', 'CODE',
            ];
            getClBlockElement.methods.GetList(arSort, arFiler, false, false, arSelect).then((data) => {
                this.arResult = data.ITEMS[0];
                this.code = data.ITEMS[0].arFields.CODE;
            });
        },
        mounted() {

        },
    }
</script>

<style scoped>

</style>