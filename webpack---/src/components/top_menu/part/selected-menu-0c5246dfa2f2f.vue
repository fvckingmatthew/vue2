<template>
    <transition name="popUpMenu">
        <div class="menu-sections container" v-if="this.idBlock > 0 && this.idBlock != null && arResult && arResult.length > 0 "

        >

            <div class="row">
                <div class="link-block" v-for="(item, i) in arResult" :key="i"
                     @mouseover="hoverMenuCell(item.arFields.CODE)"
                     @mouseout="mouseoutMenuCell()"
                     @click="routeDetailPage(item.arFields.DETAIL_PAGE_URL)"
                     :class="[{'active': item.arFields.DETAIL_PAGE_URL === $route.path}]"
                >
                    <div v-if="item.arFields && item.arFields.PREVIEW_PICTURE_INFO.SRC" class="bg-service-menu"
                         :style="'background-image: url(' + $hostname + (item.arProperty.IMG_MENU.FILE_INFO.SRC && item.arProperty.IMG_MENU ? item.arProperty.IMG_MENU.FILE_INFO.SRC : item.arFields.PREVIEW_PICTURE_INFO.SRC) +');'"></div>
                    <base-button
                            v-if="item.arFields"
                            :text="item.arFields.NAME"
                            :link="''"
                            :typeBtn="'link-arrow-right'"
                    />
                    <span class="name-section" v-if="item.arFields && item.arFields.SECTION_INFO">{{item.arFields.SECTION_INFO.NAME}}</span>
                </div>
            </div>
            <div :class="{'active': hoverLineClose}" class="line-close" @click="$emit('closeSelectedMenu')"><span></span></div>
        </div>
    </transition>
</template>

<script>
    import {getClBlockElement} from "../../../jsFunction/getCIBlockElement";
    import BaseButton from "../../layout/BaseButton";

    export default {
        name: "selected-menu",
        components: {BaseButton},
        props: {
            'idBlock': Number,
        },
        watch:{
            idBlock: function (idBlock) {
                this.arFilter.IBLOCK_ID = idBlock;
                if(!this.bitrixStore[idBlock]) {
                    getClBlockElement.methods.GetList(this.arSort, this.arFilter,  false, this.arNuvParam, this.arSelect,false).then((data) => {
                        this.arResult = data.ITEMS;

                        this.$store.dispatch('receiveCacheData', {id: idBlock, cacheData: data})
                    })
                } else {
                    this.arResult = this.bitrixStore[idBlock].ITEMS;
                }
            }
        },
        data(){
          return{
              arResult:[],
              arSort: {
                  'SORT' : 'ASC'
              },
              arFilter: {
                  'IBLOCK_ID' : this.idBlock, 'ACTIVE' : 'Y',
              },
              arSelect: [
                  'NAME', 'CODE', 'PREVIEW_PICTURE', 'DETAIL_PAGE_URL',
              ],
              arNuvParam: {},
              hoverLineClose: false,
          }
        },
        computed:{
            bitrixStore(){
                return this.$store.getters.cacheData;
            }
        },
        methods:{
            routeDetailPage(link){
                if(link !== '' && link !== 'javascript:void(0);'){
                    event.preventDefault();
                    this.$router.push(link);
                }
            },
            hoverMenuCell(valueCell){
                if(window.innerWidth >= 768 && valueCell === 'derevyannye-doma'){
                    this.hoverLineClose = true;
                }
                if(window.innerWidth < 768 && valueCell === 'kirpichnye-doma'){
                    this.hoverLineClose = true;
                }
            },
            mouseoutMenuCell(){
                this.hoverLineClose = false;
            },
            handleResize(){
                this.$emit('closeSelectedMenu');
            }
        },
        created() {
            window.addEventListener('resize', this.handleResize);
        },
        destroyed() {
            window.removeEventListener('resize', this.handleResize);
        }
    }
</script>

<style scoped>

</style>