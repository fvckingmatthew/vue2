<template>
    <div class="contacts-page container" :class="[{ 'stopAnimation': !getProgressAxios.statusResponseAxios}]" itemscope itemtype="http://schema.org/Organization">
        <h1 v-if="arResult.arFields.NAME"
            :showScroll="'title'"
            :class="[{ 'moveTop': elementVisibleScroll.title.visible}]">
            {{arResult.arFields.NAME}}
        </h1>
        <div class="row">
            <separator class="col-23"  :show="true"/>
        </div>
        <div class="row contacts-block">
            <div class="col-xl-6 col-md-11 bold-contact order-xl-1 order-md-1 order-1"
                 :showScroll="'phone'"
                 :class="[{ 'moveTop': elementVisibleScroll.phone.visible}]">
                <a :href="'tel:' + arProperty.CONTACT_PHONE.VALUE.replace(/\D/g, '')" v-if="arProperty.CONTACT_PHONE.VALUE"
                    class="hide-line"
                   itemprop="telephone"
                >
                    {{arProperty.CONTACT_PHONE.VALUE}}
                </a>
            </div>
            <div class="col-xl-10 col-md-12 bold-contact order-xl-2 order-md-2 order-2"
                 :showScroll="'email'"
                 :class="[{ 'moveTop': elementVisibleScroll.email.visible}]">
                <a :href="'mail:' + arProperty.CONTACT_MAIL.VALUE" v-if="arProperty.CONTACT_MAIL.VALUE"
                    class="hide-line"
                    itemprop="email"
                >
                    {{arProperty.CONTACT_MAIL.VALUE}}
                </a>
            </div>
            <div class="col-xl-7 col-md-11 address order-xl-3 order-md-5 order-4" itemscope itemtype="http://schema.org/PostalAddress">
                <div :showScroll="'address'" :class="[{ 'moveTop': elementVisibleScroll.address.visible}]">
                    <span itemprop="addressLocality" v-if="arProperty.CONTACT_CITY.VALUE">{{arProperty.CONTACT_CITY.VALUE}}</span>,
                    <span itemprop="streetAddress" v-if="arProperty.CONTACT_ADDRESS.VALUE">{{arProperty.CONTACT_ADDRESS.VALUE}}</span> <br>
                    <span itemprop="streetAddress" v-if="arProperty.CONTACT_OFFICE.VALUE"> {{arProperty.CONTACT_OFFICE.VALUE}}</span>
                </div>
            </div>
            <div class="col-xl-6 col-md-11 order-xl-4 order-md-3 social-block order-3">
                <div :showScroll="'social'"
                     :class="[{ 'opacity-animate': elementVisibleScroll.social.visible}]">
                    <a class="logo-social" v-if="arProperty.CONTACT_YOUTUBE.VALUE" :href="arProperty.CONTACT_YOUTUBE.VALUE">
                        <icon-base icon-name="youtube-icon"><youtube-icon/></icon-base>
                    </a>
                    <a class="logo-social" v-if="arProperty.CONTACT_FACEBOOK.VALUE" :href="arProperty.CONTACT_FACEBOOK.VALUE">
                        <icon-base icon-name="facebook-icon"><facebook-icon/></icon-base>
                    </a>
                    <a class="logo-social" v-if="arProperty.CONTACT_INSTAGRAM.VALUE" :href="arProperty.CONTACT_INSTAGRAM.VALUE">
                        <icon-base icon-name="instagram-icon"><insta-icon/></icon-base>
                    </a>
                    <a class="logo-social" v-if="arProperty.CONTACT_VK.VALUE" :href="arProperty.CONTACT_VK.VALUE">
                        <icon-base icon-name="vk-icon"><vk-icon/></icon-base>
                    </a>
                </div>
            </div>
            <div class="fixed-mobile-btn col-xl-10 col-md-12 order-xl-5 order-md-4 order-5"
                 :class="[{'over-map' : elementVisibleScroll.map.visible}]"
                >
                <base-button
                        :text="'написать нам'"
                        :link="'javascript:void(0);'"
                        :typeBtn="'base-btn'"
                        @clickBtn="openCallBackForm(1, 'написать нам')"
                        showScroll="btnConsul" :class="[{ 'show-button': elementVisibleScroll.btnConsul.visible || fixedBtn}]"
                />
            </div>
            <div class="col-xl-7 col-md-12 time-work order-xl-6 order-6" v-if="arProperty.CONTACT_TIME_WORK.VALUE"
                 :showScroll="'timeWork'"
                 itemprop="openingHours"
                 :class="[{ 'moveTop': elementVisibleScroll.timeWork.visible}]"
                 v-html="arProperty.CONTACT_TIME_WORK['~VALUE'].TEXT">
            </div>
            <div class="offset-xl-6 col-xl-10 col-md-11 project-contacts order-xl-7 order-7" :showScroll="'project'" :class="[{ 'moveTop': elementVisibleScroll.project.visible}]">
                <div v-if="arProperty.CONTACT_PROJECT_PHONE.VALUE || arProperty.CONTACT_PROJECT_EMAIL.VALUE">{{arProperty.CONTACT_PROJECT_EMAIL.NAME}}:</div>
                <a v-if="arProperty.CONTACT_PROJECT_EMAIL.VALUE"
                   class="hide-line"
                   :href="'mailto:' + arProperty.CONTACT_PROJECT_EMAIL.VALUE"
                >{{arProperty.CONTACT_PROJECT_EMAIL.VALUE}}</a>
                <a v-if="arProperty.CONTACT_PROJECT_PHONE.VALUE"
                   class="hide-line"
                     :href="'tel:' + arProperty.CONTACT_PROJECT_PHONE.VALUE.replace(/\D/g, '')"
                >{{arProperty.CONTACT_PROJECT_PHONE.VALUE}}</a>
            </div>
            <div class="col-xl-7 col-md-12 project-contacts order-xl-8 order-8" v-if="arProperty.CONTACT_COMMERCIAL.VALUE"
                 :showScroll="'commercial'"
                 :class="[{ 'moveTop': elementVisibleScroll.commercial.visible}]">
                <div>{{arProperty.CONTACT_COMMERCIAL.NAME}}:</div>
                <a v-if="arProperty.CONTACT_COMMERCIAL.VALUE"
                   class="hide-line"
                   :href="'mailto:' + arProperty.CONTACT_COMMERCIAL.VALUE"
                >{{arProperty.CONTACT_COMMERCIAL.VALUE}}</a>
            </div>
        </div>
        <div class="row">
            <separator class="col-23"  :show="true"/>
        </div>
        <GoogleMapLoader
                id="map"
                v-if="arProperty.CONTACTS_MAP.VALUE"
                :apiKey="arProperty.CONTACTS_MAP.USER_TYPE_SETTINGS.API_KEY"
                :zoom="22"
                :markers="arProperty.CONTACTS_MAP.VALUE"
                showScroll="map" :class="[{ 'opacity-animate': elementVisibleScroll.map.visible}]"
        >
        </GoogleMapLoader>
        <footer-bar :show-contacts="false" :check-position="startCheckPosition"/>
    </div>
</template>

<script>
    import {getClBlockElement} from "../../../jsFunction/getCIBlockElement";
    import {showElementScroll} from "../../../jsFunction/showElementScroll";
    import {seo} from "../../../jsFunction/seo";
    import Separator from "../../layout/Separator";
    import GoogleMapLoader from "../../layout/map/GoogleMapLoader";
    import BaseButton from "../../layout/BaseButton";
    import FooterBar from '../../../components/FooterBar';
    import IconBase from '../../IconBase';
    import FacebookIcon from '../../icons/FacebookIcon';
    import VkIcon from '../../icons/VkIcon';
    import InstaIcon from '../../icons/InstaIcon';
    import YoutubeIcon from '../../icons/YoutubeIcon';

    export default {
        name: "ContactsPage",
        mixins:[getClBlockElement, showElementScroll],
        components: {
            GoogleMapLoader, Separator, BaseButton, FooterBar, IconBase, FacebookIcon, VkIcon, InstaIcon, YoutubeIcon},
        data(){
            return{
                changeAxios: false,
                arResult: {
                    arFields:{
                        NAME:{}
                    },
                },
                arProperty:{
                    CONTACT_PHONE: {},
                    CONTACT_MAIL: {},
                    CONTACT_YOUTUBE: {},
                    CONTACT_FACEBOOK: {},
                    CONTACT_INSTAGRAM: {},
                    CONTACT_VK: {},
                    CONTACT_CITY: {},
                    CONTACT_ADDRESS: {},
                    CONTACT_OFFICE: {},
                    CONTACT_TIME_WORK: {},
                    CONTACTS_MAP: {},
                    CONTACT_PROJECT_PHONE: {},
                    CONTACT_PROJECT_EMAIL: {},
                    CONTACT_COMMERCIAL: {},
                },
                elementVisibleScroll: { // зписывам в объект имена showScroll элементов
                    title:{},
                    phone: {},
                    email: {},
                    social: {},
                    socialLink: {},
                    address: {},
                    timeWork: {},
                    map: {},
                    office: {},
                    commercial: {},
                    project: {},
                    button: {},
                    btnConsul: {},
                },
                showAfterIntro: true,
                arElementsShow: [],
                arSort: {
                    'SORT' : 'ASC'
                },
                arFilter: {
                    'IBLOCK_ID' : 6, 'ACTIVE' : 'Y',
                },
                arSelect: [
                    'NAME',
                    'CODE',
                    'PREVIEW_PICTURE',
                    'DETAIL_PAGE_URL'
                ],
                arNuvParam: {},
                fixedBtn: false,
            }
        },
        methods: {
            handleScroll() {
                let visibleStatus = showElementScroll.methods.comparisonPosition(this.arElementsShow);   // получаем статус видимости элементов на экранен
                this.setObjectAnimation(visibleStatus);                                                 // закидываем полученный массив на обработку под реактивность Vue
                if(window.innerWidth <= 768){
                    this.fixedBtn = true
                } else {
                    this.fixedBtn = false
                }
            },
            startAnimation() {                                                                            // запуск анимации видимых элементов
                this.arElementsShow = showElementScroll.methods.GetElements('.contacts-page');   // получаем позиции элементов на странице для анимации
                let visibleStatus = showElementScroll.methods.comparisonPosition(this.arElementsShow);
                this.setObjectAnimation(visibleStatus);
                this.$store.dispatch('receiveCheckPosition');
            },
            setObjectAnimation(visibleStatus) {                   // обработка объекта с позициями элементов под реактивность Vue
                for (let item in this.arElementsShow) {
                    this.$set(this.elementVisibleScroll, item, this.arElementsShow[item]);
                    if (typeof visibleStatus === 'boolean') {
                        this.$set(this.elementVisibleScroll[item], 'visible', visibleStatus);
                    } else {
                        this.$set(this.elementVisibleScroll[item], 'visible', visibleStatus[item].visible);
                    }
                }
            },
            handleResize() {
                this.startAnimation();
            },
            openCallBackForm(id, title){
                let getOnlyFields = 'ALL',
                    sort = 's_sort',
                    order = 'asc',
                    arFilter = {
                        'ACTIVE': 'Y'
                    };
                this.$store.dispatch('receiveParamForm', {
                    id: id, getOnlyFields: getOnlyFields, sort: sort, order: order, arFilter: arFilter, title: title
                });
            },
        },
        computed: {
            startCheckPosition(){
                return this.$store.getters.startCheckPosition;
            },
            getProgressAxios(){
                return this.$store.getters.getProgressAxios;
            },
            bitrixStore(){
                return this.$store.getters.cacheData;
            }
        },
        watch:{
            'getProgressAxios.statusResponseAxios' (value){
                this.changeAxios = true;
                if(value){
                    this.startAnimation();
                    this.$store.dispatch('receiveAppClass' ,{appClass: 'bgColorLightGray' , showSeparator: true} );
                }
            }
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);
            window.addEventListener('resize', this.handleResize);

            if(!this.bitrixStore[this.arFilter.IBLOCK_ID]) {
                getClBlockElement.methods.GetList(this.arSort, this.arFilter,  false, this.arNuvParam, this.arSelect).then((data) => {
                    this.arResult = data.ITEMS[0];
                    this.arProperty = data.ITEMS[0].arProperty;
                    seo.methods.set(this.arResult, 'detail');

                    this.$store.dispatch('receiveCacheData', {id: this.arFilter.IBLOCK_ID, cacheData: data})
                })
            } else {
                this.arResult = this.bitrixStore[this.arFilter.IBLOCK_ID].ITEMS[0];
                this.arProperty = this.bitrixStore[this.arFilter.IBLOCK_ID].ITEMS[0].arProperty;
                seo.methods.set(this.arResult, 'detail');
            }

            if(window.innerWidth <= 768){
                this.fixedBtn = true
            } else {
                this.fixedBtn = false
            }
        },
        mounted() {
            if(!this.changeAxios){
                this.startAnimation();
                this.$store.dispatch('receiveAppClass' ,{appClass: 'bgColorLightGray' , showSeparator: true} );
            }
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
            window.removeEventListener('resize', this.handleResize);
            this.$store.dispatch('receiveAppClass' ,{appClass: '' , showSeparator: true} );
        }

    }
</script>

<style scoped>

</style>