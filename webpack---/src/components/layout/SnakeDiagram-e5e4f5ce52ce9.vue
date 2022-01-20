<template>
    <div class="row snake-diagram">
        <icon-base :width="parametersSvgMask.width" :height="parametersSvgMask.height" v-if="snakePartInfo.length > 0">
            <g v-for="(partLine , i) in snakePartInfo" :key="i">
                <rect class="separator-snake" :style="partLine.styleSeparator" :x="partLine.separatorPos.left" :y="partLine.separatorPos.top - 1" height="5" :width="partLine.width" fill="#FFF"/>
                <rect class="border-snake" :style="partLine.styleBorder" v-if="partLine.rightBorder !== false" :x="partLine.rightBorder" :y="partLine.positionBorder" :height="partLine.heightBorder" width="5" fill="#FFF"/>
                <rect class="border-snake" :style="partLine.styleBorder" v-if="partLine.leftBorder !== false" :x="partLine.leftBorder" :y="partLine.positionBorder" :height="partLine.heightBorder" width="5.5" fill="#FFF"/>
            </g>
        </icon-base>
        <div class="part-snake" v-for="(infoText, i) in listValue" :key="i"
             :class="[snakePart[i], 'part-snake-' + i]"
             :showScroll="'partSnake' + i"
        >
            <div v-if="i < 9">
                <div class="number-part" :class="[{ 'border-show': elementVisibleScroll['partSnake' + i] && elementVisibleScroll['partSnake' + i].visible}]">
                    <span :showScroll="'numberPart' + i" :class="[{ 'moveTop': elementVisibleScroll['numberPart' + i] && elementVisibleScroll['numberPart' + i].visible}]">
                        {{[i > 10 ? '' : '0'] + (i + 1)}}
                    </span>
                </div>

                <separator :show="true"/>

                <div class="info-block" :class="[{ 'border-show': elementVisibleScroll['partSnake' + i] && elementVisibleScroll['partSnake' + i].visible}]">
                    <div v-html="infoText.TEXT" :showScroll="'blockPart' + i" :class="[{ 'moveTop': elementVisibleScroll['blockPart' + i] && elementVisibleScroll['blockPart' + i].visible}]"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Separator from "./Separator";
    import IconBase from "../IconBase";
    export default {
        name: "SnakeDiagram",
        components: {IconBase, Separator},
        props: {
            listValue: [Object, Array],
            elementVisibleScroll: [Object, Array]
        },
        computed: {
            getProgressAxios(){
                return this.$store.getters.getProgressAxios; // чекаем статус загузки контента
            },
        },
        data(){
            return{
                snakePart: ['col-xl-13 offset-xl-7 tail-body-right',
                            'col-xl-18 offset-xl-2 part-right tail-body-left tail-head-right',
                            'col-xl-10 offset-xl-2 tail-head-left part-left-inside ',
                            'col-xl-8 tail-body-right part-xl-center',
                            'col-xl-13 offset-xl-7 part-right tail-body-left tail-head-right',
                            'col-xl-8 offset-xl-7 part-left-inside tail-head-left part-xl-center',
                            'col-xl-5 part-right tail-body-right',
                            'col-xl-18 offset-xl-2 part-left tail-head-right',
                ],
                snakePartInfo: [],
                parametersSvgMask: {
                    width: 0,
                    height: 0,
                },
                animatedPart: [],
                touchStart: 0,
                scrollPos: 0,
                moveTouchTop: false,
                scrollMoveTop: false,
                visibleSnake: false,
            }
        },
        watch:{
            'getProgressAxios.statusResponseAxios' (value){
                if(value && this.listValue){
                    this.snakePartSearch();
                    this.animateSnake(1);
                }
            },
            'animatedPart' (){
                if (this.scrollMoveTop){
                    this.animateSnake(-1);
                } else {
                    this.animateSnake(1);
                }
                //this.scrollPos = st;
            }
        },
        methods:{
            snakePartSearch(){
                let snakePart = document.querySelectorAll('.part-snake');
                this.parametersSvgMask = {
                    'width': document.querySelectorAll('.snake-diagram')[0].getBoundingClientRect().width,
                    'height': document.querySelectorAll('.snake-diagram')[0].getBoundingClientRect().height,
                }
                for(let i = 0; i < snakePart.length; i++){

                    this.$set(this.snakePartInfo, i, {
                        'element': snakePart[i],
                        'width': snakePart[i].clientWidth + 1,
                        'separatorPos': {
                            'left': snakePart[i].querySelectorAll('.separator')[0].offsetLeft - 1,
                            'top':  snakePart[i].querySelectorAll('.separator')[0].offsetTop,
                        },
                        'rightBorder':
                            (snakePart[i].classList.value.indexOf('tail-body-right') !== -1 && window.innerWidth > 1199) || (window.innerWidth < 1200 && (i + 1)%2 !== 0)
                                ? snakePart[i].querySelectorAll('.separator')[0].offsetLeft  + snakePart[i].getBoundingClientRect().width - 4
                                : false,
                        'leftBorder':
                            (snakePart[i].classList.value.indexOf('tail-body-left') !== -1 && window.innerWidth > 1199) || (window.innerWidth < 1200 && (i + 1)%2 === 0)
                                ? snakePart[i].querySelectorAll('.separator')[0].offsetLeft - 2
                                : false,
                        'heightBorder': snakePart[i].getBoundingClientRect().height - 3,
                        'positionBorder': snakePart[i].querySelectorAll('.separator')[0].offsetTop + 3,
                        'animatedPart': false,
                        'startAnimatePart': false,
                    })

                    this.$set(this.animatedPart, i, false);
                }
            },
            handleScroll(event){
                if(event.changedTouches){                                       // если сработал сенсер
                    if(this.touchStart - event.changedTouches[0].pageY > 0){   // и разница между координатами начальным касанием и свайпа больше 0
                        this.moveTouchTop = false;                                      // было движение вниз
                    } else {                                                 // если меньше 0
                        this.moveTouchTop = true;                                     // движение вверх
                    }
                }


                let st = window.pageYOffset;
                if (st < this.scrollPos || this.moveTouchTop){
                    this.animateSnake(-1);
                    this.scrollMoveTop = true;
                } else {
                    this.animateSnake(1);
                    this.scrollMoveTop = false;
                }
                this.scrollPos = st;

                if(!this.visibleSnake){
                    this.snakePartSearch();
                }

            },
            animateSnake(vector){
                for(let i = 0; i < this.snakePartInfo.length; i++){
                    let prevPart = i - (1 * vector);
                    let elementPositionCheck = '';
                    if(vector > 0){
                        elementPositionCheck = 'blockPart';
                    } else {
                        elementPositionCheck = 'numberPart';
                    }

                    if(this.elementVisibleScroll[elementPositionCheck + i].visible){
                        this.visibleSnake = true;
                        if(!this.snakePartInfo[i].startAnimatePart){
                            if(this.snakePartInfo[prevPart]){
                                if(this.animatedPart[prevPart] && !this.animatedPart[i]){
                                    if(vector > 0){
                                        this.animatePartDown(i);
                                    } else {
                                        this.animatePartUp(i);
                                    }
                                } else if(this.elementVisibleScroll[elementPositionCheck + prevPart] && !this.elementVisibleScroll[elementPositionCheck + prevPart].visible && !this.animatedPart[i]){
                                    if(vector > 0){
                                        this.animatePartDown(i);
                                    } else {
                                        this.animatePartUp(i);
                                    }
                                }
                            } else if(!this.animatedPart[i]){
                                if(vector > 0){
                                    this.animatePartDown(i)
                                } else {
                                    this.animatePartUp(i);
                                }
                            }
                        }
                    } else if(this.elementVisibleScroll[elementPositionCheck + 0] && !this.elementVisibleScroll[elementPositionCheck + 0].visible && this.elementVisibleScroll[elementPositionCheck + 0].elementPos > window.pageYOffset || this.elementVisibleScroll[elementPositionCheck + (this.snakePartInfo.length - 1)].elementPos < window.pageYOffset){
                        this.$set(this.snakePartInfo[i], 'styleSeparator', 'transition: transform 0.1s linear, width 0.1s linear; transform: translateX(0px);');
                        this.$set(this.snakePartInfo[i], 'styleBorder', 'transition: transform 0.1s linear; transform: translateY(0px);');
                        this.animatedPart[i] =  false;
                        this.$set(this.snakePartInfo[i], 'startAnimatePart', false);
                        this.visibleSnake = false;
                        //
                    }
                }
            },
            animatePartDown(i){
                let topWindow = this.snakePartInfo[i].element.getBoundingClientRect().top + document.body.clientTop;
                let heightWindow = window.innerHeight;
                let cubicBezier = 'linear';

                let timeAnimate = topWindow / heightWindow;
                if(timeAnimate < 0.2){
                    timeAnimate = 0.2
                } else if(timeAnimate > 0.5){
                    timeAnimate = 0.5
                }

                let timeDelay = timeAnimate * 1000;


                let moveSeparatorRight = 'transition: transform ' + timeAnimate + 's ' + cubicBezier + ', width ' + timeAnimate + 's ' + cubicBezier + '; transform: translateX(' + (this.snakePartInfo[i].width) + 'px); width: 0; ';
                let moveSeparatorLeft = 'transition: width ' + timeAnimate + 's ' + cubicBezier + '; width: 0; ';

                if(this.snakePartInfo[i].rightBorder){
                    this.$set(this.snakePartInfo[i], 'styleSeparator', moveSeparatorRight);
                    this.$set(this.snakePartInfo[i], 'startAnimatePart', true);
                    setTimeout(()=> {
                        this.$set(this.animatedPart, i, true);
                    }, timeDelay * 2)
                } else if(this.snakePartInfo[i].leftBorder !== false){
                    this.$set(this.snakePartInfo[i], 'startAnimatePart', true);
                    this.$set(this.snakePartInfo[i], 'styleSeparator', moveSeparatorLeft);
                    setTimeout(()=> {
                        this.$set(this.animatedPart, i, true);
                    }, timeDelay * 2)
                } else if(this.snakePartInfo[i-1] && this.snakePartInfo[i-1].leftBorder){
                    this.$set(this.snakePartInfo[i], 'startAnimatePart', true);
                    this.$set(this.snakePartInfo[i], 'styleSeparator', moveSeparatorRight);
                    setTimeout(()=> {
                        this.$set(this.animatedPart, i, true);
                    }, timeDelay)
                } else if(this.snakePartInfo[i-1] && this.snakePartInfo[i-1].rightBorder){
                    this.$set(this.snakePartInfo[i], 'startAnimatePart', true);
                    this.$set(this.snakePartInfo[i], 'styleSeparator', moveSeparatorLeft);
                    setTimeout(()=> {
                        this.$set(this.animatedPart, i, true);
                    }, timeDelay)
                }
                this.$set(this.snakePartInfo[i], 'styleBorder', 'transition: transform ' + timeAnimate + 's ' + timeAnimate + 's ' + cubicBezier + ', height ' + timeAnimate + 's ' + timeAnimate + 's ' + cubicBezier + '; transform: translateY(' + (this.snakePartInfo[i].heightBorder + 3) + 'px); height: 0;');
            },
            animatePartUp(i){
                let topWindow = this.snakePartInfo[i].element.getBoundingClientRect().top + this.snakePartInfo[i].element.getBoundingClientRect().height + document.body.clientTop;
                let heightWindow = window.innerHeight;
                let cubicBezier = 'linear';

                let timeAnimate = 1 - (topWindow / heightWindow);

                if(timeAnimate < 0.2){
                    timeAnimate = 0.2
                } else if(timeAnimate > 0.5){
                    timeAnimate = 0.5
                }

                let timeDelay = timeAnimate * 1000;

                let moveSeparatorRight = 'transition: transform ' + timeAnimate + 's ' + timeAnimate + 's ' + cubicBezier + '; transform: translateX(' + (this.snakePartInfo[i].width) + 'px);';
                let moveSeparatorRightNonBorder = 'transition: transform ' + timeAnimate + 's ' + cubicBezier + ', width ' + timeAnimate + 's ' + cubicBezier + '; transform: translateX(' + (this.snakePartInfo[i].width) + 'px); width: 0;';
                let moveSeparatorLeft = 'transition: width ' + timeAnimate + 's ' + timeAnimate + 's ' + cubicBezier + '; width: 0; ';
                let moveSeparatorLeftNonBorder = 'transition: transform ' + timeAnimate + 's ' + cubicBezier + ', width ' + timeAnimate + 's ' + cubicBezier + '; transform: translateX(' + (-this.snakePartInfo[i].width) + 'px); width: 0; ';

                if(this.snakePartInfo[i].rightBorder){
                    this.$set(this.snakePartInfo[i], 'styleSeparator', moveSeparatorLeft);
                    this.$set(this.snakePartInfo[i], 'startAnimatePart', true);

                    setTimeout(()=> {
                        this.$set(this.animatedPart, i, true);
                    },timeDelay * 2)
                } else if(this.snakePartInfo[i].leftBorder !== false){
                    this.$set(this.snakePartInfo[i], 'styleSeparator',  moveSeparatorRight);
                    this.$set(this.snakePartInfo[i], 'startAnimatePart', true);

                    setTimeout(()=> {
                        this.$set(this.animatedPart, i, true);
                    }, timeDelay * 2)
                } else if(this.snakePartInfo[i-1] && this.snakePartInfo[i-1].leftBorder){
                    this.$set(this.snakePartInfo[i], 'styleSeparator', moveSeparatorLeftNonBorder);
                    this.$set(this.snakePartInfo[i], 'startAnimatePart', true);

                    setTimeout(()=> {
                        this.$set(this.animatedPart, i, true);
                    }, timeDelay )
                } else if(this.snakePartInfo[i-1] && this.snakePartInfo[i-1].rightBorder){
                    this.$set(this.snakePartInfo[i], 'styleSeparator',  moveSeparatorRightNonBorder);
                    this.$set(this.snakePartInfo[i], 'startAnimatePart', true);

                    setTimeout(()=> {
                        this.$set(this.animatedPart, i, true);
                    }, timeDelay )
                }
                this.$set(this.snakePartInfo[i], 'styleBorder', 'transition: transform ' + timeAnimate + 's ' + cubicBezier + '; transform: translateY(' + (-this.snakePartInfo[i].heightBorder - 3) + 'px);');
            },
            handleResize(){
                if(!this.visibleSnake){
                    this.snakePartSearch();
                }
            },
            handleTouchStart(event){
                this.touchStart = event.changedTouches[0].pageY;
            },
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);
            window.addEventListener('touchmove', this.handleScroll);
            window.addEventListener('touchstart', this.handleTouchStart);
            window.addEventListener('resize', this.handleResize);
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
            window.removeEventListener('touchmove', this.handleScroll);
            window.removeEventListener('touchstart', this.handleTouchStart);
            window.removeEventListener('resize', this.handleResize);
        }
    }
</script>

<style scoped>

</style>