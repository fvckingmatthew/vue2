<template>
    <div class="footer"
         :class="[{container: !mainPage},{ 'stopAnimation': getIntroStatus}, {'change-page': changeScreen}]"
         v-if="arProperty"
         itemscope itemtype="http://schema.org/Organization"
    >
        <div class="row contact-bar" v-if="showContacts">
            <div class="col-xl-7 col-md-11 order-1 contact"
                 :showScroll="'contact'"
                 :class="[{ 'moveTop': elementVisibleScroll && elementVisibleScroll.contact.visible}]">
                <p>контакты для связи:</p>
                <div>
                    <a :href="'tel:' + phoneLink" v-if="arProperty.CONTACT_PHONE.VALUE"
                        class="hide-line"
                        itemprop="telephone"
                    >
                        {{arProperty.CONTACT_PHONE.VALUE}}
                    </a>
                    <a :href="'mail:' + arProperty.CONTACT_MAIL.VALUE" v-if="arProperty.CONTACT_MAIL.VALUE"
                       class="hide-line"
                       itemprop="email"
                    >
                        {{arProperty.CONTACT_MAIL.VALUE}}
                    </a>
                </div>
            </div>
            <div class="col-xl-5 col-md-11 order-xl-2 order-md-3 order-4 social-link">
                <p :showScroll="'social'"
                   :class="[{ 'moveTop': elementVisibleScroll.social.visible}]">
                    соцсети:
                </p>
                <div :showScroll="'socialLink'"
                     :class="[{ 'opacity-animate': elementVisibleScroll.socialLink.visible}]">
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
            <div class="col-xl-6 col-md-12 order-xl-3 order-2 address"
                 :showScroll="'address'"
                 :class="[{ 'moveTop': elementVisibleScroll.address.visible}]"
                 itemscope itemtype="http://schema.org/PostalAddress"
            >
                    <p>работаем:</p>
                    <div>
                        <span itemprop="addressLocality" v-if="arProperty.CONTACT_CITY.VALUE">{{arProperty.CONTACT_CITY.VALUE}}</span>,
                        <span itemprop="streetAddress" v-if="arProperty.CONTACT_ADDRESS.VALUE">{{arProperty.CONTACT_ADDRESS.VALUE}}</span> <br>
                        <span itemprop="streetAddress" v-if="arProperty.CONTACT_OFFICE.VALUE"> {{arProperty.CONTACT_OFFICE.VALUE}}</span>
                    </div>
            </div>
            <div class="col-xl-5 col-md-12 order-md-4 order-3 time-work"
                 itemprop="openingHours"
                 :showScroll="'timeWork'"
                 :class="[{ 'moveTop': elementVisibleScroll.timeWork.visible}]"
                 v-if="arProperty.CONTACT_TIME_WORK.VALUE" v-html="arProperty.CONTACT_TIME_WORK['~VALUE'].TEXT">
            </div>
        </div>
        <separator :show="!changeScreen && elementVisibleScroll.footer_separator.visible"
                   :showScroll="'footer_separator'"
                   delay-animation="600"
        />
        <div class="copyright-bar row">
            <div class="col-xl-7 col-md-11 hidden-mobile"
                 :showScroll="'domvaVeka1'"
                 :class="[{ 'moveTop': elementVisibleScroll.domvaVeka1.visible}]">
                    <p>doma-veka.ru©{{fullYear}}</p>
            </div>
            <div class="col-xl-7 col-md-8 col-16 copyright-site"
                 :showScroll="'copyright'"
                 :class="[{ 'moveTop': elementVisibleScroll.copyright.visible}]">
                    <p class="show-mobile">doma-veka.ru©{{fullYear}}</p>
                    <base-button :link="'/privacy-policy/'" :text="'политика конфиденциальности'"/>
            </div>
            <a target="_blank" href="https://sagirov.com/" class="logo-sagirov col-auto offset-auto ">
                <p :showScroll="'made'" :class="[{ 'moveTop': elementVisibleScroll.made.visible}]">made in</p>
                <div :showScroll="'logoMr'" :class="[{ 'animation-show-move-down': elementVisibleScroll.logoMr.visible}]">
                    <img width="102" height="18" src="../assets/logo-sagirov.svg"/>
                </div>
            </a>
        </div>

        <call-back-form />

    </div>
</template>

<script>
    import Separator from "./layout/Separator";
    import {getClBlockElement} from "../jsFunction/getCIBlockElement";
    import {showElementScroll} from "../jsFunction/showElementScroll";
    import IconBase from './IconBase';
    import FacebookIcon from './icons/FacebookIcon';
    import VkIcon from './icons/VkIcon';
    import InstaIcon from './icons/InstaIcon';
    import YoutubeIcon from './icons/YoutubeIcon';
    import CallBackForm from "./layout/CallBackForm";
    import BaseButton from "./layout/BaseButton";

    export default {
        name: "FooterBar",
        mixins:[getClBlockElement, showElementScroll],
        components:{
            BaseButton,
            CallBackForm,
            Separator, IconBase, FacebookIcon, VkIcon, InstaIcon, YoutubeIcon
        },
        props:{
            mainPage: Boolean,
            checkPosition: Boolean,
            showContacts: Boolean,
        },
        computed: {
            getIntroStatus(){
                return this.$store.getters.getIntroStatus; // чекаем статус Интро
            },
            getProgressAxios(){
                return this.$store.getters.getProgressAxios; // чекаем статус загузки контента
            },
            startCheckPosition(){
                return this.$store.getters.startCheckPosition;
            },
            bitrixStore(){
                return this.$store.getters.cacheData;
            }
        },
        watch: {
            mainPage: function (mainPageCheck) {           // главная страница
                if(mainPageCheck === true){
                    setTimeout(()=> {this.startAnimation();}, 200)
                }
            },
            startCheckPosition () {                 // обновить позиции футера для анимации
                this.startAnimation();
            },
            'getProgressAxios.statusResponseAxios' (value){
                this.changeAxios = true;
                this.changeScreen = true;
                if(value){
                    setTimeout(()=> {
                        this.changeScreen = false;
                    }, 400);
                    this.startAnimation();
                }
            },
            '$route' (){
                this.changeAxios = false;
                this.changeScreen = true;
                setTimeout(()=> {
                    if(!this.changeAxios){
                        this.changeScreen = false
                        this.startAnimation();
                    }
                }, 1500);
            },
        },
        data(){
            return{
                changeAxios: false,
                fullYear: new Date().getFullYear(),
                phoneLink: '',
                arProperty:{
                    CONTACT_PHONE: {},
                    CONTACT_MAIL: {},
                    CONTACT_YOUTUBE: {},
                    CONTACT_FACEBOOK: {},
                    CONTACT_INSTAGRAM: {},
                    CONTACT_VK: {},
                    CONTACT_CITY: {},
                    CONTACT_ADDRESS:{},
                    CONTACT_OFFICE:{},
                    CONTACT_TIME_WORK: {}
                },
                elementVisibleScroll: {
                    contact: {},
                    social: {},
                    socialLink: {},
                    address: {},
                    timeWork: {},
                    domvaVeka1: {},
                    copyright: {},
                    made: {},
                    logoMr: {},
                    footer: {},
                    footer_separator: {},
                },
                changeScreen: false,
                arElementsShow: [],
            }
        },

        methods:{
            handleScroll(){
                let visibleStatus = showElementScroll.methods.comparisonPosition(this.arElementsShow);
                this.setObjectAnimation(visibleStatus);
            },
            startAnimation(){
                this.arElementsShow = showElementScroll.methods.GetElements('.footer');
                let visibleStatus = showElementScroll.methods.comparisonPosition(this.arElementsShow);
                this.setObjectAnimation(visibleStatus);
            },
            setObjectAnimation(visibleStatus){
                for (let item in this.arElementsShow ) {
                    this.$set(this.elementVisibleScroll, item , this.arElementsShow[item]);
                    if(typeof visibleStatus === 'boolean'){
                        this.$set(this.elementVisibleScroll[item], 'visible' , visibleStatus);
                    } else {
                        this.$set(this.elementVisibleScroll[item], 'visible' , visibleStatus[item].visible);
                    }
                }
            },
            handleResize(){
                this.startAnimation();
            },
        },

        created() {
            window.addEventListener('scroll', this.handleScroll);
            window.addEventListener('resize', this.handleResize);

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
                getClBlockElement.methods.GetList(arSort, arFilter, false,false, arSelect).then((data) => {
                    this.arProperty = data.ITEMS[0].arProperty;
                    this.phoneLink = this.arProperty.CONTACT_PHONE.VALUE.replace(/\D/g, '');

                    this.$store.dispatch('receiveCacheData', {id: arFilter.IBLOCK_ID, cacheData: data})
                });
            } else {
                this.arProperty = this.bitrixStore[arFilter.IBLOCK_ID].ITEMS[0].arProperty;
                this.phoneLink = this.arProperty.CONTACT_PHONE.VALUE.replace(/\D/g, '');

            }
        },

        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
            window.removeEventListener('resize', this.handleResize);
        }
    }
</script>

<style scoped>

</style>