<template>
    <div class="main-page container"  v-if="arResult.arProperty">
        <swiper-main-page :active-screen="activeScreen"  :class="arStatusComponents.display[0]"/>
        <project-main-page :active-screen="activeScreen"  :result-main-page="arResult" :class="arStatusComponents.display[1]"/>
        <work-main-page :active-screen="activeScreen"   :result-main-page="arResult" :class="arStatusComponents.display[2]"/>
        <service-main-page :active-screen="activeScreen"  :result-main-page="arResult" :class="arStatusComponents.display[3]"/>
        <partner-main-page :active-screen="activeScreen"  :result-main-page="arResult" :class="arStatusComponents.display[4]"/>
        <!--<router-view :active-screen="activeScreen" v-if="arResult.arProperty" :result-main-page="arResult"/>-->
    </div>
</template>

<script>
    import SwiperMainPage from "./parts/SwiperMainPage";
    import ProjectMainPage from "./parts/ProjectMainPage";
    import WorkMainPage from "./parts/WorkMainPage";
    import ServiceMainPage from "./parts/ServiceMainPage";
    import PartnerMainPage from "./parts/PartnerMainPage";
    import {getClBlockElement} from "../../../jsFunction/getCIBlockElement";
    import {seo} from "../../../jsFunction/seo";
    import VueScrollTo from "vue-scrollto";

    export default {

        name: "MainPage",

        components:{
            SwiperMainPage,
            ProjectMainPage,
            WorkMainPage,
            ServiceMainPage,
            PartnerMainPage,
        },

        data(){
            return{
                activeScreen: '',
                arChildComponent: [             // массив всех экранов главной стр, для поиска активного экрана
                    'SwiperMainPage',
                    'ProjectMainPage',
                    'WorkMainPage',
                    'ServiceMainPage',
                    'PartnerMainPage'
                ],
                arStatusComponents:{
                    name:[],
                    display:[],
                },
                timeChangeScreen: {},
                arResult: [],
                seo: [],
                touchStart: 0,
                disableScrollScreen : false,
                disableOverScroll : false,
                counterWheel: 0,
                timeDisableChangeScreen: '',
                timeOverScrollChangeScreen: '',
            }
        },
        computed:{
            bitrixStore(){
                return this.$store.getters.cacheData;
            }
        },
        methods: {
            handleWheel (event) {
                let moveTop = false;                                             // вектор скролла для сенсора
                if(event.changedTouches){                                       // если сработал сенсер
                    if(this.touchStart - event.changedTouches[0].pageY > 0){   // и разница между координатами начальным касанием и свайпа больше 0
                        moveTop = false;                                      // было движение вниз
                    } else {                                                 // если меньше 0
                        moveTop = true;                                     // движение вверх
                    }
                }


                this.counterWheel += event.deltaY;                              // складываем изменения координаты Y при скролле
                if(this.counterWheel / event.deltaY > 4){                      // если количество прокрутор превышает 4 раза
                    this.disableOverScroll = true;                            // отключаем перелистования экранов по скроллу
                    clearTimeout(this.timeDisableChangeScreen);              // сбрасываем таймер включение перелистования экранов по скроллу

                    this.timeDisableChangeScreen = window.setTimeout(() =>{ // запускаем таймер на включение перелистования экранов по скроллу
                        this.fixedOverScroll()
                    }, 500);

                    if(window.pageYOffset <= 0 || window.pageYOffset >= document.body.offsetHeight - window.innerHeight){ // для настырных включаем перелистования экранов по скроллу после секунды, когда они дошли до края экрана
                        this.timeOverScrollChangeScreen = window.setTimeout(() =>{
                            this.fixedOverScroll()
                        }, 1000);
                    }
                }


                let numberScreen = this.arStatusComponents.name.indexOf(this.activeScreen); // запоминаем номер активного экрана
                if(event.deltaY < 0 || moveTop){  //скрол вверх
                    if(numberScreen === 0 ){                 // если мы на первом экране
                        //console.log('первый экран, выше некуда');
                        //this.activeScreen = this.arChildComponent.name[numberScreen];
                        //clearTimeout(this.timeChangeScreen);
                    } else if(window.pageYOffset === 0 && !this.disableScrollScreen && !this.disableOverScroll){ // если мы у каря экрана и нам ничего не запрещает
                        this.activeScreen = this.arStatusComponents.name[numberScreen - 1];                     // назначаем новый активный экран
                        this.disableScrollScreen = true;                                                       // отключаем возможность скролла во время анимации
                        this.timeChangeScreen = window.setTimeout( () => this.changeDisplayScreen(numberScreen, -1), 1200); // запускаем плавное переключение экранов
                    }


                } else if(window.pageYOffset >= document.body.offsetHeight - window.innerHeight && !this.disableScrollScreen && !this.disableOverScroll){             //скрол вниз
                    if(numberScreen === this.arStatusComponents.name.length - 1){ // если мы на последнем экране
                        //console.log('последний экран, ниже некуда');
                        //this.activeScreen = this.arStatusComponents.name[numberScreen];
                        //clearTimeout(this.timeChangeScreen);
                    } else {
                        this.activeScreen = this.arStatusComponents.name[numberScreen + 1];
                        this.disableScrollScreen = true;
                        this.timeChangeScreen = window.setTimeout( () => this.changeDisplayScreen(numberScreen, 1), 1200);

                    }
                }
            },
            handleTouchStart(event){
                this.touchStart = event.changedTouches[0].pageY;
            },
            changeDisplayScreen(numberScreen, direction){
                if(numberScreen + direction === 0){  // если 1 слайд
                    history.pushState("", '', window.location.pathname);
                } else {
                    history.pushState("", '', window.location.pathname + '#' + this.arStatusComponents.name[numberScreen + direction]);
                }

                this.$set(this.arStatusComponents.display, numberScreen + direction , '');
                this.$set(this.arStatusComponents.display, numberScreen , 'disableScreen');
                this.disableScrollScreen = false;
                window.scrollTo(0, 0);
            },
            handleScroll(){
                let arScreenElementsPositionHTML = [];
                let screenElementsHTML = [];
                for (let child in this.arChildComponent ) {
                    screenElementsHTML = document.querySelectorAll('#' + this.arChildComponent[child])[0];
                    if(screenElementsHTML){
                        arScreenElementsPositionHTML[child] = {
                            name: this.arChildComponent[child],
                            elementPos: screenElementsHTML.getBoundingClientRect().top + window.pageYOffset + document.body.clientTop,
                            heightElement: screenElementsHTML.offsetHeight,
                        };
                    }
                }

                let topScroll = window.pageYOffset;  // позиция скролла
                for (let item in arScreenElementsPositionHTML ) {
                    if (arScreenElementsPositionHTML[item].elementPos - (window.innerHeight - 10) < topScroll && topScroll < arScreenElementsPositionHTML[item].elementPos + arScreenElementsPositionHTML[item].heightElement + 10) { // если элемент в зоне видимости
                        this.activeScreen = arScreenElementsPositionHTML[item].name;
                        if(item == 0){
                            history.pushState("", '', window.location.pathname);
                        } else  if(window.innerWidth > 767){
                            history.pushState("", '', window.location.pathname + '#' + arScreenElementsPositionHTML[item].name);
                        }
                    }
                }
            },
            normalScroll(){
                if(window.innerWidth <= 767) {
                    window.removeEventListener('wheel', this.handleWheel);
                    window.removeEventListener('touchmove', this.handleWheel);
                    window.removeEventListener('touchstart', this.handleTouchStart);

                    window.addEventListener('scroll', this.handleScroll);

                    for (let i in this.arStatusComponents.display ) {
                        this.$set(this.arStatusComponents.display, i , '');
                    }


                } else {
                    window.addEventListener('wheel', this.handleWheel);
                    window.addEventListener('touchmove', this.handleWheel);
                    window.addEventListener('touchstart', this.handleTouchStart);

                    window.removeEventListener('scroll', this.handleScroll);

                    for (let child in this.arChildComponent ) {
                        if(this.activeScreen === this.arChildComponent[child]){
                            this.$set(this.arStatusComponents.display, child , '');
                        } else {
                            this.$set(this.arStatusComponents.display, child , 'disableScreen' );
                        }
                    }


                }
            },
            fixedOverScroll(){
                clearTimeout(this.timeOverScrollChangeScreen);
                this.disableOverScroll = false;
                this.counterWheel = 0;
            },
            resizeWindow(){
                this.normalScroll();
            }
        },
        created () {
            window.addEventListener('wheel', this.handleWheel);
            window.addEventListener('touchmove', this.handleWheel);
            window.addEventListener('touchstart', this.handleTouchStart);
            window.addEventListener('resize', this.resizeWindow);

            let paramsString = document.location.hash.replace('#', '');
            if(paramsString === ''){
                this.activeScreen = 'SwiperMainPage';
            } else {
                this.activeScreen = paramsString;

            }


            for (let child in this.arChildComponent ) {
                this.$set(this.arStatusComponents.name, child , this.arChildComponent[child]);
                if(this.activeScreen === this.arChildComponent[child]){
                    this.$set(this.arStatusComponents.display, child , '');
                } else {
                    this.$set(this.arStatusComponents.display, child , 'disableScreen' );
                }
            }


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

            let idCache = arFilter.IBLOCK_ID + '_main';
            if(!this.bitrixStore[idCache]){
                getClBlockElement.methods.GetList(arSort,arFilter, false,false, arSelect).then((data) => {
                    this.arResult = data.ITEMS[0];
                    seo.methods.set(this.arResult, 'detail');

                    let paramsString = document.location.hash.replace('#', '');
                    if(paramsString !== '' && window.innerWidth <= 768){
                        setTimeout(()=> {
                            VueScrollTo.scrollTo('#' + paramsString, 0, { container: 'body',offset: -60 });
                        }, 1000)
                    }

                    this.$store.dispatch('receiveCacheData', {id: idCache, cacheData: data})
                });
            } else {
                this.arResult = this.bitrixStore[idCache].ITEMS[0];
                seo.methods.set(this.arResult, 'detail');

                let paramsString = document.location.hash.replace('#', '');
                if(paramsString !== '' && window.innerWidth <= 768){
                    setTimeout(()=> {
                        VueScrollTo.scrollTo('#' + paramsString, 0, { container: 'body',offset: -60 });
                    }, 1000)
                }
            }
        },
        mounted() {
            this.normalScroll();
        },
        destroyed () {
            window.removeEventListener('wheel', this.handleWheel);
            window.removeEventListener('touchmove', this.handleWheel);
            window.removeEventListener('touchstart', this.handleTouchStart);
            window.removeEventListener('resize', this.resizeWindow);
            window.removeEventListener('scroll', this.handleScroll);
            this.$store.dispatch('receiveAppClass' ,{appClass: '' , showSeparator: true} );
        },

    }
</script>

<style scoped>
</style>