<template>
    <div class="swiper-project row" :class="[{ 'opacity-animate': elementVisibleScroll.activeImgSlide.visible}]" showScroll="activeImgSlide">
        <separator class="col-23" :show="true"/>
        <div class="active-img col-lg-19" >
            <swiper  :options="swiperOption" @slideChange="onSlideChange" ref="SwiperActiveImg" :class="[activeSlideAnimation]" class="animation-overlap">
                <swiper-slide  v-for="(slide, i) in this.arSlide" :key="i"
                               :class="[{'prev-prev': prevSlide === i}, 'slide-index-' + i]"

                >
                    <div class="img-slide" v-if="slide.type === 'V'">
                        <iframe
                                :src="'https://www.youtube.com/embed/' + slide.ID + '?enablejsapi=1'"
                                frameborder="0"  allowfullscreen
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        />
                    </div>
                    <div class="img-slide" @click="$emit('click', i)" v-else :class="{'watermark': slide.WATERMARK}">
                        <img :src="$hostname + slide.SRC"
                             :width="slide.WIDTH"
                             :height="slide.HEIGHT"
                             itemprop="image"
                             @load="backWatermark(i, slide)"/>
                        <div class="wrap-backWatermark">
                            <div class="backWatermark" v-if="styleBackWatermark[i]" :style="styleBackWatermark[i]"/>
                        </div>

                    </div>
                </swiper-slide>
            </swiper>
        </div>

        <div class="thumb-swiper col-lg-4">
            <div class="list-img">
                <swiper :options="swiperOptionVertical"  ref="thumbSwiper">
                    <swiper-slide v-for="(slide, i) in this.arSlide" :key="i"
                                  :class="[
                                          {'active-active': activeSlide === i},
                                          {'show-img-scale': elementVisibleScroll['projectImg' + i] && elementVisibleScroll['projectImg' + i].visible},
                                          {'video-prev': slide.type === 'V'}
                                      ]"
                                  :showScroll="'projectImg' + i"
                    >
                        <div v-if="slide.type === 'V'" class="video-icon" @click="changeSlide(i)">
                            <img    :src="'https://i.ytimg.com/vi/' + slide.ID + '/hqdefault.jpg'"/>
                            <icon-base width="16" height="12" name="video-icon"><video-icon/></icon-base>
                        </div>
                        <div class="img-wrap" @click="changeSlide(i)" v-else-if="typeof slide.SRC !== 'undefined'" >
                            <img  :src="$hostname + slide.SRC" :width="slide.WIDTH" :height="slide.HEIGHT" />
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>

    import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
    import SwiperCore, { Navigation, EffectFade, Controller  } from 'swiper';
    import 'swiper/swiper-bundle.min.css'
    import Separator from "../Separator";
    import IconBase from "../../IconBase";
    import VideoIcon from "../../icons/VideoIcon";
    import {hiddenWatermark} from "../../../jsFunction/hiddenWatermark";

    SwiperCore.use([Navigation, EffectFade, Controller]);
    export default {
        name: "SwiperDetailedProjects",
        components: {VideoIcon, IconBase, Separator, Swiper, SwiperSlide},
        props:{
            arSlide: Array,
            elementVisibleScroll: Object,
        },
        data(){
            return{
                prevSlide: 0,
                activeSlide: 0,
                activeSlideAnimation: '',
                SwiperActiveImg: null,
                thumbSwiper: null,
                swiperOption: {
                    grabCursor: false,
                    speed: 500,
                    effect: 'fade',
                },
                swiperOptionVertical: {
                    direction: 'vertical',
                    slidesPerView: 5,
                    spaceBetween: 15,
                    speed: 500,
                    slideToClickedSlide: true,
                    breakpoints: {
                        20:{
                            direction: 'horizontal',
                            slidesPerView: 2.6,
                            spaceBetween: 10,
                        },
                        992: {
                            direction: 'vertical',
                            slidesPerView: 5,
                            spaceBetween: 15,
                        },
                    }
                },
                tmpSlideVideo: false,
                styleBackWatermark: [],
                timerPrevSlide: null,
            }
        },
        watch:{
            arSlide: function () {
                this.checkTypeField();
            }
        },
        methods:{
            onSlideChange(change) {
                this.prevSlide = this.activeSlide; // записываем предыдущий слайд

                if(this.activeSlide < change.activeIndex){  // если мы показывает следующий слайд
                    this.activeSlideAnimation = 'active-slide-move-left';     // включаем анимацию активного слайда ( движение - налево )
                } else {                                 // если мы показываем предыдущий слайд
                    this.activeSlideAnimation = 'active-slide-move-right';  // включаем анимацию активного слайда ( движение - направо )
                }

                this.activeSlide = change.activeIndex; // запоминаем активный слайд

                this.toggleVideo(change.activeIndex);

                clearTimeout(this.timerPrevSlide);
                this.timerPrevSlide = setTimeout(()=>{
                    this.prevSlide = -1;
                    this.$emit('slideChange');
                }, 1000);

            },
            changeSlide(index){

                this.prevSlide = this.activeSlide;      // записываем предыдущий слайд
                this.SwiperActiveImg.slideTo(index);   // переключение главного слайда по клику
                this.activeSlide = index;             // запоминаем активный слайд

                clearTimeout(this.timerPrevSlide);
                this.timerPrevSlide = setTimeout(()=>{
                    this.prevSlide = -1;
                    this.$emit('slideChange');
                }, 1000);

            },
            checkTypeField(){
                for(let slide in this.arSlide){
                    if(typeof this.arSlide[slide] === 'string' && this.arSlide[slide].includes('youtube')){

                        let arParam = this.arSlide[slide].split('?')[1];
                        arParam = arParam.split('&');

                        for(let i in arParam){
                            if(arParam[i].split('=')[0] === 'v'){
                                this.arSlide[slide] = {};
                                this.arSlide[slide]['type'] = 'V';
                                this.arSlide[slide]['ID'] = arParam[i].split('=')[1];
                            }
                        }
                    }
                }
            },
            toggleVideo() {
                let div = document.querySelectorAll('.slide-index-' + this.activeSlide)[0];

                if(typeof div.getElementsByTagName("iframe")[0] !== 'undefined'){
                    let iframe = div.getElementsByTagName("iframe")[0].contentWindow;

                    this.controlVideo(iframe, 'playVideo');
                    this.controlVideo(iframe, 'mute');

                } else if(this.tmpSlideVideo && typeof this.tmpSlideVideo.getElementsByTagName("iframe")[0] !== 'undefined'){
                    let iframe = this.tmpSlideVideo.getElementsByTagName("iframe")[0].contentWindow;
                    this.controlVideo(iframe, 'pauseVideo');
                }
            },
            controlVideo(iframe, func){
                iframe.postMessage('{"event":"command","func":"' + func + '" ,"args":""}', '*');
                this.tmpSlideVideo = document.querySelectorAll('.slide-index-' + this.activeSlide)[0];
            },
            backWatermark(i, realParam){
                this.$set(this.styleBackWatermark, i , hiddenWatermark.methods.set(i, realParam, '.img-slide'));
            },
            handleResize(){
                for(let i in this.arSlide){
                    if(this.arSlide[i].type !== 'V'){
                        this.backWatermark(i, this.arSlide[i]);
                    }
                }
            }
        },
        created() {
            window.addEventListener('resize', this.handleResize);
        },
        mounted() {
            this.SwiperActiveImg = this.$refs.SwiperActiveImg.$swiper; // инициализируем главный слайдер через атрибут ref
            this.thumbSwiper = this.$refs.thumbSwiper.$swiper;

            for(let i in this.arSlide){
                if(this.arSlide[i].type !== 'V'){
                    this.backWatermark(i, this.arSlide[i]);
                }
            }
        },
        destroyed() {
            this.SwiperActiveImg.destroy(false, false);
            this.thumbSwiper.destroy(false, false);
            window.removeEventListener('resize', this.handleResize);
        }
    }
</script>

<style scoped>

</style>