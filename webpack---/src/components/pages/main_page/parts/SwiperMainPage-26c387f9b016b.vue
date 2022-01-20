<template>
  <div class="main-swiper" id="SwiperMainPage" :style="heightSwiper" :class="[{ 'stopAnimation': !getProgressAxios.statusResponseAxios} , {'change-screen': ChangeScreen}]">
      <div class="swiper-wrap" :style="heightSlidePicture">
          <div class="show-scale-swiper">
              <swiper :options="swiperOption" @slideChange="onSlideChange" ref="SwiperMainPage" :class="animationClass" class="animation-overlap">
                  <swiper-slide  v-for="(slide, i) in this.arResult" :key="i" :class="[{'prev-prev': prevSlide === i}]">
                    <div class="img-slide">
                        <img  :src="$hostname + slide.arFields.PREVIEW_PICTURE_INFO.SRC"
                              :width="slide.arFields.PREVIEW_PICTURE_INFO.WIDTH"
                              :height="slide.arFields.PREVIEW_PICTURE_INFO.HEIGHT"
                              @load="imgLoaded()"
                        />
                    </div>
                  </swiper-slide>
              </swiper>
          </div>
      </div>

      <separator :show="!ChangeScreen && separatorShow" :header-show="false"/>

      <div class="slide-text-wrap">
          <transition name="text-slide-show" v-for="(slide, i) in this.arResult" :key="i" >
              <div class="slide-info" v-if="show === slide.arFields.CODE" :class="[{'active' : show === slide.arFields.CODE}]">
                  <div class="wrap-title-slide">
                      <h2 class="title-slide" :style="titleSlideSize">{{slide.arFields.NAME}}</h2>
                      <div
                          class="subtitle"
                          v-if="slide.arProperty.SUB_TITLE['~VALUE'].TEXT"
                          v-html="slide.arProperty.SUB_TITLE['~VALUE'].TEXT"/>
                  </div>
                  <div  class="pagination offset-auto">{{'0' + (i+1)}}</div>
                  <div v-if="slide.arProperty.LIST_SLIDE['~VALUE'][0]" class="list-title" >
                      <div
                          v-for="(itemList, key) in slide.arProperty.LIST_SLIDE['~VALUE']" :key="key"
                          v-html="itemList.TEXT"/>
                  </div>
              </div>
          </transition>
      </div>
      <div class="nav-btn animation-show-nav-btn">
          <div  class="button-prev"/>
          <div  class="button-next"/>
      </div>
  </div>
</template>

<script>

    import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
    import SwiperCore, { Navigation, EffectFade} from 'swiper';
    import 'swiper/swiper-bundle.min.css'

    import {getClBlockElement} from "../../../../jsFunction/getCIBlockElement";

    import Separator from '../../../layout/Separator'
    import {scrollStyle} from "../../../../jsFunction/hiddenScroll";

    SwiperCore.use([Navigation, EffectFade]);
    let nameThisComponent = 'SwiperMainPage';
    export default {
        name: nameThisComponent,

        mixins: [getClBlockElement],

        components: {
          Swiper,
          SwiperSlide,
          Separator
        },

        props: ['activeScreen'],

        data(){
            return{
                changeAxios: false,
                activeSlideMoveLeft: false,
                activeSlideMoveRight: false,
                arResult: [],
                show: '',
                activeSlide: 0,
                prevSlide: 100,
                sizeX: 0,
                heightSlidePicture: 0,
                heightSwiper : 0,
                titleSlide: '',
                titleSlideSize: 0,
                timerOverflow: [],
                ChangeScreen: false,
                showAfterIntro: true,
                SwiperMainPage: null,
                swiperOption: {
                    grabCursor: true,
                    speed: 500,
                    effect: 'fade',
                    navigation: {
                        nextEl: '.main-swiper .button-next',
                        prevEl: '.main-swiper .button-prev'
                    }
                },
                separatorShow: true,
                tmpWidthWindow: window.innerWidth,
                countImgLoaded: 0,
            }
        },

        watch: {
            activeScreen: function (arScreen) {
                if(arScreen !== nameThisComponent && window.innerWidth > 767){
                    this.show = '';
                    this.ChangeScreen = true;
                    this.separatorShow = false;
                    scrollStyle.methods.hidden(1200, true)
                } else {
                    this.$store.dispatch('receiveAppClass' ,{appClass: 'bgColorLightGray' , showSeparator: true} );
                    if(window.innerWidth > 767){
                        window.setTimeout( () => this.ChangeScreen = false, 1150);
                        window.setTimeout( () => { this.separatorShow = true; }, 1200);
                        window.setTimeout( () => { this.show = this.arResult[this.activeSlide].arFields.CODE }, 1900);

                        window.setTimeout( () => {
                            if(window.innerWidth > 768){
                                this.updateSwiperHeight();
                                this.updateSlideHeight();
                            }
                            if(window.innerWidth <= 1199) {
                                this.updateTitleSize(this.titleSlide);
                            } else {
                                this.titleSlideSize = '';
                            }
                        },2000)
                    } else {
                        this.separatorShow = true;
                        this.show = this.arResult[this.activeSlide].arFields.CODE;
                        setTimeout(()=>{
                            this.updateSwiperHeight();
                            this.updateSlideHeight();
                            this.updateTitleSize(this.titleSlide);
                        }, 500)
                    }

                    if(window.innerWidth > 1199){
                        scrollStyle.methods.hidden(false, true)
                    }

                }
            },
            'getProgressAxios.statusResponseAxios' (value){
                this.changeAxios = true;
                if(value){
                    this.startAnimation();
                }
            }
        },

        computed: {
            animationClass() {
                return {
                    'active-slide-move-left': this.activeSlideMoveLeft,
                    'active-slide-move-right': this.activeSlideMoveRight,
                }
            },
            getProgressAxios(){
                return this.$store.getters.getProgressAxios;
            },
            bitrixStore(){
                return this.$store.getters.cacheData;
            }
        },

        methods: {
            onSlideChange(change) {
                this.prevSlide = this.activeSlide;    //запоминаем предыдущий слайд

                this.show = this.arResult[change.activeIndex].arFields.CODE;        // показать текст активного слайда
                this.titleSlide = this.arResult[change.activeIndex].arFields.NAME; // передаем заголовок активного слайда для масштабирования

                if(this.activeSlide < change.activeIndex){  // если мы показывает следующий слайд
                    this.activeSlideMoveRight = false;     // отключаем анимацию активного слайда ( движение - направо )
                    this.activeSlideMoveLeft = true;      // включаем анимацию активного слайда ( движение - налево )
                } else {                                 // если мы показываем предыдущий слайд
                    this.activeSlideMoveLeft = false;   // отключаем анимацию активного слайда ( движение - налево )
                    this.activeSlideMoveRight = true;  // включаем анимацию активного слайда ( движение - направо )
                }

                this.activeSlide = change.activeIndex; // запоминаем активный слайд
                //scrollStyle.methods.hidden(1200);

                window.setTimeout(() =>this.updateSlideHeight('onSlideChange'), 10);  // подогнать высоту изображения

                if(window.innerWidth <= 1199) {              // если ширина экрана меньше или равна 1199
                    this.updateTitleSize(this.titleSlide);  // подгоняем font size заголовока под ширину экрана
                }
            },


            resizeWindow() {
                if(window.innerWidth <= 767) {
                    this.ChangeScreen = false
                    this.separatorShow = true;
                }

                if(this.activeScreen === nameThisComponent){

                    if(window.innerWidth <= 767) {
                        this.show = this.arResult[this.activeSlide].arFields.CODE

                    } else {
                        this.updateSwiperHeight();
                        this.updateSlideHeight();
                    }
                    if(window.innerWidth <= 1199) {
                        this.updateTitleSize(this.titleSlide);
                    } else {
                        this.titleSlideSize = '';
                    }
                    if(window.innerWidth <= 991 && this.tmpWidthWindow !== window.innerWidth) {
                        this.updateSwiperHeight();
                        this.updateSlideHeight();
                        this.tmpWidthWindow = window.innerWidth;
                    }
                }


            },

            getHeightItemClass(itemClass) {
                let element = document.querySelectorAll(itemClass);
                let matchHeight = 0;
                element.forEach(function(item) {
                    matchHeight += item.offsetHeight;
                });
                return matchHeight;
            },

            getMarginItemClass(itemClass) {
                let element = document.querySelectorAll(itemClass);
                let strStyle = '';
                element.forEach(function(item) {
                    let marginBottom = window.getComputedStyle(item).marginBottom;
                    let marginTop = window.getComputedStyle(item).marginTop;
                    if(parseInt(marginBottom.match(/\d+/)) > 0){
                        strStyle += ' - ' + marginBottom;
                    }
                    if(parseInt(marginTop.match(/\d+/)) > 0){
                        strStyle += ' - ' + marginTop;
                    }
                });
                return strStyle;
            },

            updateSlideHeight(eventTrigger){
                let classForTextSlide = '';
                if(typeof eventTrigger != 'undefined' && eventTrigger === 'onSlideChange'){
                    classForTextSlide = '.slide-text-wrap .text-slide-show-enter-active';
                } else {
                    classForTextSlide = '.slide-info';
                }
                let marginElements =                                  //отсупы элементов, которые не попадают под getHeightItemClass
                    this.getMarginItemClass('.header') +
                    this.getMarginItemClass('.swiper-wrap') +
                    this.getMarginItemClass('.slide-text-wrap') +
                    this.getMarginItemClass('.main-swiper .separator');

                let otherHeightItem =                               //высота элементов
                    this.getHeightItemClass(classForTextSlide) +
                    this.getHeightItemClass('.main-swiper .separator') +
                    this.getHeightItemClass('.header');

                let vh = window.innerHeight * 0.01;

                this.heightSlidePicture = 'height: calc( ' + vh + 'px * 100 - ' + otherHeightItem + 'px ' + marginElements + ');';


            },

            updateSwiperHeight(){
                let marginElements =                                  //отсупы элементов, которые не попадают под getHeightItemClass
                    this.getMarginItemClass('.header');

                let otherHeightItem =                               //высота элементов
                    this.getHeightItemClass('.header');

                let vh = window.innerHeight * 0.01;

                this.heightSwiper = 'height: calc( ' + vh + 'px * 100 - ' + otherHeightItem + 'px ' + marginElements + ');';

            },

            updateTitleSize(titleSlide){
                let coefficientLetter = 0.810;  // усреденный коэффициент соотношение ширины к высоте 1 буквы при текущем семействе ширфтов
                let coefficientSpace = 0.35;   // усреденный коэффициент соотношение ширины к высоте 1 пробела при текущем семействе ширфтов
                let widthWrap = document.getElementsByClassName('slide-text-wrap')[0].offsetWidth;   // ширина контейнера заголовка

                let countLetter = 0;  // счетчик букв
                let countSpace = 0;  // счетчик пробелов
                Array.from(titleSlide).forEach((char) => {    // проходим по заголовку
                    if(char === ' '){                        // если пробел
                        countSpace++;                       // записываем в счетчик пробелов
                    } else {                               // если буква
                        switch (char) {                   // смотрим какой символ
                            case 'ш':
                                countLetter += 0.455;    // буква "ш" шире, добавим за каждый такой символ к счетчик букв
                                break;
                            case 'ы':
                                countLetter += 0.46;  // буква "ы" шире, добавим за каждый такой символ к счетчик букв
                                break;
                            case 'ф':
                                countLetter += 0.35;// буква "ф" шире, добавим за каждый такой символ к счетчик букв
                                break;
                        }
                        countLetter++;           // записываем в счетчик букв
                    }
                });

                if(countLetter > 15){                                   //если букв больше 15
                    let correct = (countLetter - 15) * 0.0035;         //корректировуем коэффициент
                    coefficientLetter = coefficientLetter + correct;
                }

                let fontSizeNoSpace = ((widthWrap / countLetter) / coefficientLetter);   // font size без пробелов

                if(countSpace > 0){   //если пробелы есть
                    let fontSizeWithSpace = (((widthWrap - (fontSizeNoSpace * (coefficientSpace * countSpace))) / countLetter) / coefficientLetter); // :D
                    this.titleSlideSize = 'font-size: ' + fontSizeWithSpace.toFixed(2) + 'px'; // зписываем font-size с проеблами
                } else { //если пробелов нет
                    this.titleSlideSize = 'font-size: ' + fontSizeNoSpace.toFixed(2) + 'px'; // зписываем font-size без пробелов
                }
            },

            startAnimation(){
                let paramsString = document.location.hash.replace('#', '');

                if(this.getProgressAxios.statusResponseAxios && paramsString === ''){
                    this.showAfterIntro = false;
                    window.setTimeout(() => {this.show = this.arResult[0].arFields.CODE}, 1000);
                    window.setTimeout(() => this.updateSlideHeight(), 1200);
                    this.updateSwiperHeight();
                }
            },
            imgLoaded(){
                if(this.countImgLoaded < 3){
                    this.$store.dispatch('receiveIntroStatus', -1);
                    this.countImgLoaded++;
                }
            },
        },

        created() {
            window.addEventListener('resize', this.resizeWindow);
            this.$store.dispatch('receiveIntroStatus', 3);

            if(this.activeScreen === nameThisComponent && window.innerWidth > 767){
                scrollStyle.methods.hidden(false, true);
            }

            let arSort = {
                'SORT' : 'ASC'
            };
            let arFilter = {
                'IBLOCK_ID' : 7,
                'ACTIVE' : 'Y',
            };
            let arSelect = [
                'ID', 'IBLOCK_ID', 'NAME', 'CODE', 'PREVIEW_PICTURE'
            ];

            if(!this.bitrixStore[arFilter.IBLOCK_ID]) {
                getClBlockElement.methods.GetList(arSort, arFilter, false, false, arSelect).then((data) => {
                    this.arResult = data.ITEMS;
                    this.titleSlide = this.arResult[0].arFields.NAME;
                    if (window.innerWidth <= 1199) {
                        this.updateTitleSize(this.titleSlide);
                    }

                    this.$store.dispatch('receiveCacheData', {id: arFilter.IBLOCK_ID, cacheData: data})
                });
            } else {
                this.arResult = this.bitrixStore[arFilter.IBLOCK_ID].ITEMS;
                this.titleSlide = this.arResult[0].arFields.NAME;
                if (window.innerWidth <= 1199) {
                    this.updateTitleSize(this.titleSlide);
                }
            }
        },
        mounted() {
            this.SwiperMainPage = this.$refs.SwiperMainPage.$swiper;

            if(!this.changeAxios){
                this.startAnimation()
            }

            let paramsString = document.location.hash.replace('#', '');
            if(paramsString === ''){
                this.$store.dispatch('receiveAppClass' ,{appClass: 'bgColorLightGray' , showSeparator: true} );
            }
        },
        destroyed() {
            window.removeEventListener('resize', this.resizeWindow);
            this.SwiperMainPage.destroy(false, false);
        }

    }


</script>

<!-- Add "scoped" attribute 1to limit CSS to this component only -->
<style scoped>

</style>
