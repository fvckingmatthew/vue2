<template>
    <div class="wrap-section">
        <div class="service-section row" v-for="(section, i) in arSection" :key="i">
            <separator class="offset-xl-7 col-xl-16 order-1" :show="true"/>
            <div class="section-description col-xl-7 col-md-12 order-xl-2 order-3">
                <p :showScroll="'descriptionSection' + i"
                   :class="[{ 'moveTop': elementVisibleScroll['descriptionSection' + i] && elementVisibleScroll['descriptionSection' + i].visible}]">
                    {{section.DESCRIPTION}}
                </p>
            </div>

            <div class="col-xl-16 col-md-11 order-xl-3 order-2 section-name">
                <p :showScroll="'nameSection' + i"
                   :class="[{ 'moveTop': elementVisibleScroll['nameSection' + i] && elementVisibleScroll['nameSection' + i].visible}]">
                    {{section.NAME}}
                </p>
            </div>

            <div class="service-list offset-xl-12 col-xl-8 order-4">
                <div class="service-wrap " v-for="(item, u) in section.ITEMS" :key="u" @click="$router.push(item.arFields.DETAIL_PAGE_URL)">
                    <p class="name-service"
                       :showScroll="'nameService' + i + u"
                       :class="[{ 'moveTop': elementVisibleScroll['nameService' + i + u] && elementVisibleScroll['nameService' + i + u].visible}]">
                        {{item.arFields.NAME}}
                    </p>
                    <div class="link-service">
                        <base-button
                                :text="'подробнее'"
                                :link="item.arFields.DETAIL_PAGE_URL"
                                :type-btn="'secondary-button'"
                                :showScroll="'nameService' + i + u"
                                :class="[{ 'show-button': elementVisibleScroll['nameService' + i + u] && elementVisibleScroll['nameService' + i + u].visible}]"
                        />
                    </div>
                    <div class="price-service" v-if="item.arProperty.PRICE_SERVICE.VALUE"
                         :showScroll="'priceService' + i + u"
                         :class="[{ 'moveTop': elementVisibleScroll['priceService' + i + u] && elementVisibleScroll['priceService' + i + u].visible}]"
                    >
                        <p>стоимость от</p> <span>{{item.arProperty.PRICE_SERVICE.VALUE}} ₽/м<sup>2</sup></span>
                    </div>
                    <div class="img-service"
                         :class="[{ 'show-img-project': elementVisibleScroll['servicePicture' + i + u] && elementVisibleScroll['servicePicture' + i + u].visible}]"
                         :showScroll="'servicePicture' + i + u">
                        <img :src="$hostname + item.arFields.PREVIEW_PICTURE_INFO.SRC"
                             :width="item.arFields.PREVIEW_PICTURE_INFO.WIDTH"
                             :height="item.arFields.PREVIEW_PICTURE_INFO.HEIGHT"
                        />
                        <separator :show="true"/>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getClBlockElement} from "../../../../jsFunction/getCIBlockElement";
    import Separator from "../../../layout/Separator";
    import BaseButton from "../../../layout/BaseButton";

    export default {
        name: "ServiceCompanyPage",
        components: {BaseButton, Separator},
        props: {
            elementVisibleScroll: [Array, Object]
        },
        data(){
            return{
                changeAxios: false,
                arResult: {},
                arSection: {},
                arSort: {
                    'SORT' : 'ASC'
                },
                arFilter: {
                    'IBLOCK_ID' : 11, 'ACTIVE' : 'Y',
                },
                arSelect: [
                    'NAME', 'CODE', 'PREVIEW_PICTURE', 'DETAIL_PAGE_URL',
                ],
                arNuvParam: {},
            }
        },
        computed:{
            bitrixStore(){
                return this.$store.getters.cacheData;
            }
        },
        methods:{
          createdService(data){
              this.arResult = data.ITEMS;
              this.arSection = data.infoBlock.SECTION_LIST;

              for (let i in this.arSection) {
                  let countItem = 0;
                  this.arSection[i]['ITEMS'] = {}
                  for (let u in this.arResult) {
                      if (this.arSection[i].ID === this.arResult[u].arFields.IBLOCK_SECTION_ID) {
                          this.arSection[i]['ITEMS'][countItem] = this.arResult[u];
                          countItem++;
                      }
                  }
              }
          }
        },
        created() {
            if(!this.bitrixStore[this.arFilter.IBLOCK_ID]) {
                getClBlockElement.methods.GetList(this.arSort, this.arFilter, false, this.arNuvParam, this.arSelect).then((data) => {
                    this.createdService(data)

                    this.$store.dispatch('receiveCacheData', {id: this.arFilter.IBLOCK_ID, cacheData: data})
                })
            } else {
                this.createdService(this.bitrixStore[this.arFilter.IBLOCK_ID])
            }
        },
        mounted(){
            this.$emit('load');
        }
    }
</script>

<style scoped>

</style>