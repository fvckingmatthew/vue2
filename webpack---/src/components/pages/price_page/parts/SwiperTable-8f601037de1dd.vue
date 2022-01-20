<template>
    <div class="swiper-table" :class="[{'slide-effect': scrollTable.activeSlideEffect}, {'single-project' :arResult.length === 1}]">
        <div class="nav-btn-table" showScroll="navBtn" :class="[{ 'animation-show-nav-btn': elementVisibleScroll.navBtn.visible}]">
            <div class="arrow-left" @click="slideTable(-1)" :class="[{'disable': scrollTable.leftArrowDisable}]">
                <img width="50" height="28" src="../../../../assets/icon/arrow-left.svg" />
            </div>
            <div class="arrow-right" @click="slideTable(1)" :class="[{'disable': scrollTable.rightArrowDisable}]">
                <img width="50" height="28" src="../../../../assets/icon/arrow-right.svg" />
            </div>
        </div>

        <separator v-if="idBlock === 9 && arResult.length > 1" :show="true"/>

        <div v-if="idBlock === 9 && arResult.length > 1" class="filter-param">
            <div @click="showAllParam()" :class="[{'selected': !scrollTable.activeDiffElement}]">
                <span>Все параметры</span>
            </div>
            <div @click="showDifferencesParam()" :class="[{'selected': scrollTable.activeDiffElement}]">
                <span>Различающиеся</span>
            </div>
        </div>

        <separator :show="true"/>

        <div class="table-wrap"
             @mousedown="startScrollTable()"
             @mousemove="horizontalScrollTable()"
             @mouseup="endScrollTable()"
             @touchstart="startScrollTable()"
             @touchmove="horizontalScrollTable()"
             @touchend="endScrollTable()"
            :style="this.scrollTable.styleContent"
        >
            <div class="row row-img">
                <div class="col-xxl-4 col-md-5 fixed-col" :style="scrollTable.styleFixedCol" >
                    <p class="text-price-table" showScroll="textTable" :class="[{ 'moveTop': elementVisibleScroll.textTable.visible}]"
                       v-if="idBlock === 15"
                    >
                        стоимость указана за материалы и работы
                    </p>
                    <base-button
                            v-if="idBlock === 15"
                            :text="'консультация'"
                            :link="'javascript:void(0);'"
                            :typeBtn="'base-btn'"
                            showScroll="btnConsul" :class="[{ 'show-button': elementVisibleScroll.btnConsul.visible}]"
                            @clickBtn="openCallBackForm(4, 'консультация')"
                    />
                </div>
                <div class="value-col" v-for="(item, i) in this.arResult" :key="i" :class="[{'col-6': i !== arResult.length - 1}, {'col-xxl-7 col-6' : i === arResult.length - 1}]">
                    <base-button
                            v-if="idBlock === 9"
                            :text="item.arFields.NAME.replace('проект', '№')"
                            :link="'/projects/' + item.arFields.CODE"
                            :typeBtn="'link-arrow-right'"
                            :showScroll="'linkProject' + i" :class="[{ 'show-link-arrow': elementVisibleScroll['linkProject' + i] && elementVisibleScroll['linkProject' + i].visible}]"
                    />
                    <div class="img-wall"
                         :showScroll="'materialImg' + i"
                         :class="[{ 'show-img-project': elementVisibleScroll['materialImg' + i] && elementVisibleScroll['materialImg' + i].visible}]">
                            <img :src="$hostname + item.arFields.PREVIEW_PICTURE_INFO.SRC"
                                 :width="item.arFields.PREVIEW_PICTURE_INFO.WIDTH"
                                 :height="item.arFields.PREVIEW_PICTURE_INFO.HEIGHT"
                            >
                    </div>
                </div>
            </div>

            <div class="row" showScroll="rowTable" :class="[{ 'opacity-animate': elementVisibleScroll.rowTable.visible}]">
                <div class="col-xxl-4 col-md-5 fixed-col" :style="scrollTable.styleFixedCol">
                    <p showScroll="priceTextMaterial" :class="[{ 'moveTop': elementVisibleScroll.priceTextMaterial.visible}]">
                        цена строительства
                    </p>
                </div>
                <div class="value-col" v-for="(item, i) in this.arResult" :key="i" :class="[{'col-6': i !== arResult.length - 1}, {'col-xxl-7 col-6' : i === arResult.length - 1}]">
                    <div v-if="idBlock === 15" class="price-item" showScroll="priceMaterial" :class="[{ 'moveTop': elementVisibleScroll.priceMaterial.visible}]">
                        <p>{{item.arFields.NAME}}</p>
                        <span v-if="item.arProperty[tablePrice].VALUE !== ''">{{item.arProperty[tablePrice].VALUE}} ₽/м<sup>2</sup></span>
                        <span v-else>—</span>
                    </div>
                    <div v-else-if="idBlock === 9" class="price-item" showScroll="priceMaterial" :class="[{ 'moveTop': elementVisibleScroll.priceMaterial.visible}]">
                        <span v-if="item.arProperty[tablePrice].VALUE !== ''">{{item.arProperty[tablePrice].VALUE}} ₽</span>
                        <span v-else>—</span>
                    </div>
                </div>
            </div>

            <div class="row" v-for="(rowInfo, u) in this.rowTable" :key="u"
                 :showScroll="'rowTable' + u" :class="[{ 'opacity-animate': elementVisibleScroll['rowTable' + u] && elementVisibleScroll['rowTable' + u].visible}]"
                 :style="scrollTable.widthBorderValue"
            >
                <div class="col-xxl-4 col-md-5 fixed-col" :style="scrollTable.styleFixedCol">
                    <p :showScroll="'rowTitle' + u" :class="[{ 'moveTop': elementVisibleScroll['rowTitle' + u] && elementVisibleScroll['rowTitle' + u].visible}]">
                        {{rowInfo.NAME}}
                    </p>
                </div>
                <div class="value-col" v-for="(item, i) in arResult" :key="i" :class="[{'col-6': i !== arResult.length - 1}, {'col-xxl-7 col-6' : i === arResult.length - 1}]">
                    <div>
                        <p  v-if="item.arProperty[rowInfo.CODE].VALUE !== ''" :showScroll="'rowValue' + u + i"
                           :class="[{ 'moveTop': elementVisibleScroll['rowValue' + u + i] && elementVisibleScroll['rowValue' + u + i].visible}]">
                            {{item.arProperty[rowInfo.CODE].VALUE}}
                            <span v-if="rowInfo.CODE === 'AREA_PROJECT'"> м<sup>2</sup></span>
                            <span v-else-if="rowInfo.CODE === 'SIZE_PROJECT'"> м</span>
                            <span v-else-if="rowInfo.CODE === 'PRICE_PROJECT'"> ₽</span>
                        </p>
                        <p v-else>—</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Separator from "../../../layout/Separator";
    import SwiperCore, { Navigation, EffectFade, Controller  } from 'swiper';
    import 'swiper/swiper-bundle.min.css'
    import BaseButton from "../../../layout/BaseButton";
    import {getClBlockElement} from "../../../../jsFunction/getCIBlockElement";

    SwiperCore.use([Navigation, EffectFade, Controller]);
    export default {
        name: "SwiperTable",
        components: {BaseButton, Separator},
        props:{
            elementVisibleScroll: Object,
            idItem: [Object, Array],
            idBlock: Number,
            tableProperty: Array,
            tablePrice: String,
        },
        data(){
          return{
              arResult: [],
              showAfterIntro: true,
              arSort: {
                  'SORT' : 'ASC'
              },
              arFilter: {
                  'IBLOCK_ID' : this.idBlock, 'ACTIVE' : 'Y', 'ID': this.idItem,
              },
              arSelect: [
                  'NAME', 'CODE', 'PREVIEW_PICTURE', 'DETAIL_PAGE_URL',
              ],
              arNuvParam: {},
              ColTable: [],
              rowTable: [],
              scrollTable:{
                  widthContent: 0,           // полная ширина таблицы
                  borderRight: 0,           // правая граница таблицы (максимальное смещение влево)
                  positionContent: 0,      // позиция таблицы
                  newPositionContent: 0,  // Новая позиция таблицы
                  clickCoordX: 0,           // Координаты курсора при клике
                  moveCoordX: 0,           // Координаты курсора при движении
                  styleContent:'',          // стиль для таблицы
                  styleFixedCol: '',       // стиль для фиксированных заголовков
                  activeEventMove: false,   // флаг для активация события "движения мышки"
                  activeEventClick: true,  // флаг для активация события "клик мышки"
                  widthSlide: 0,            // ширина 1 колонки с информацией
                  widthFixedCol: 0,        // ширина 1 колонки с заголовками
                  leftArrowDisable: true,   // флаг отключения навигации
                  rightArrowDisable: false,// флаг отключения навигации
                  activeSlideEffect: false, // флаг включения эффекта слайдера
                  widthBorderValue: '',    // стиль для продолжения таблицы
                  activeDiffElement: false,
              },
          }
        },
        computed:{
            bitrixStore(){
                return this.$store.getters.cacheData;
            }
        },
        watch:{
            'scrollTable.styleContent': function () {

                if(this.scrollTable.newPositionContent + 15 > 0){   // если таблица пытается выйит за левый край
                    this.scrollTable.leftArrowDisable = true       // отключаем левую стреочку
                } else {
                    this.scrollTable.leftArrowDisable = false
                }

                if(this.scrollTable.borderRight > this.scrollTable.newPositionContent - 15){ // если таблица пытается выйит за правый край
                    this.scrollTable.rightArrowDisable = true                               // отключаем правую стреочку
                }   else {
                    this.scrollTable.rightArrowDisable = false
                }
            }
        },
        methods:{
            propertyWrap(){
                let paddingApp = 20;    // отступ контейнера
                if(window.innerWidth <= 767){
                    paddingApp = 10;
                }

                this.checkWidthContent();

                this.scrollTable.borderRight = window.innerWidth - this.scrollTable.widthContent - (window.innerWidth - (this.scrollTable.widthSlide * Math.floor((window.innerWidth - this.scrollTable.widthFixedCol) / this.scrollTable.widthSlide)) - this.scrollTable.widthFixedCol);
                this.scrollTable.positionContent = document.querySelectorAll('.table-wrap')[0].offsetLeft - paddingApp;
                this.scrollTable.widthSlide = document.querySelectorAll('.table-wrap .value-col')[0].scrollWidth;
            },
            startScrollTable(){
                if(this.scrollTable.activeEventClick === true && this.scrollTable.activeSlideEffect === true){ // если прошла анимация с предыдущего скролла
                    this.propertyWrap();                       // обновляем информацию о таблице
                    if(event.pageX){                          // если мышка
                        this.scrollTable.clickCoordX = event.pageX;
                    } else {                                // если палец
                        this.scrollTable.clickCoordX = event.changedTouches[0].pageX;
                    }
                    this.scrollTable.activeEventMove = true;    // активируем событие Движение курсора
                }
            },
            horizontalScrollTable(){
                if(this.scrollTable.activeEventMove === true){       // если был клик
                    if(event.pageX){                                // если мышка
                        this.scrollTable.moveCoordX = event.pageX;
                    } else {                                       // если палец
                        this.scrollTable.moveCoordX = event.changedTouches[0].pageX
                    }

                    this.scrollTable.newPositionContent = this.scrollTable.moveCoordX - this.scrollTable.clickCoordX + this.scrollTable.positionContent; // путь курсора + старая позиция таблицы
                    if(this.scrollTable.newPositionContent > 0){  // если таблица пытается выйит за левый край
                        this.scrollTable.newPositionContent = 0;
                    } else if(this.scrollTable.borderRight - (this.scrollTable.widthSlide / 2) > this.scrollTable.newPositionContent){ // если таблица пытается выйит за правый край + эффект пружинки
                        this.scrollTable.newPositionContent = this.scrollTable.borderRight - (this.scrollTable.widthSlide / 2);
                    }
                    this.scrollTable.styleContent = 'left: ' + this.scrollTable.newPositionContent + 'px';
                    this.scrollTable.styleFixedCol = 'left: ' + this.scrollTable.newPositionContent * (-1) + 'px';
                }
            },
            endScrollTable(){
                //console.log()
                this.scrollTable.activeEventClick = false;
                this.scrollTable.activeEventMove = false;
                let deltaCoordX = this.scrollTable.clickCoordX - this.scrollTable.moveCoordX; // путь курсора
                let moveRange = 0;
                let vector = -1;
                let multiplierWidthSlide = 1;    // кол-во пролистанных колонок курсором
                if(deltaCoordX > 0){            // движение курсора влево
                    vector = 1;
                } else if(deltaCoordX < 0) {  // движение курсора вправо
                    vector = -1;
                }

                multiplierWidthSlide += Math.floor(Math.abs(deltaCoordX) / this.scrollTable.widthSlide);
                moveRange = Math.abs(((this.scrollTable.widthSlide * multiplierWidthSlide) - Math.abs(deltaCoordX))) * vector; // путь для таблицы

                this.scrollTable.newPositionContent = (this.scrollTable.newPositionContent - moveRange);    // новая позиция таблицы
                if(this.scrollTable.newPositionContent > 0){
                    this.scrollTable.newPositionContent = 0;
                } else if(this.scrollTable.borderRight > this.scrollTable.newPositionContent){
                    this.scrollTable.newPositionContent = this.scrollTable.borderRight;
                }

                this.scrollTable.styleContent = 'left: ' + this.scrollTable.newPositionContent + 'px; transition: left 0.6s cubic-bezier(0, 0, 0.26, 1)';
                this.scrollTable.styleFixedCol = 'left: ' + this.scrollTable.newPositionContent * (-1) + 'px; transition: left 0.6s cubic-bezier(0, 0, 0.26, 1)';

                this.scrollTable.clickCoordX = 0;
                this.scrollTable.moveCoordX = 0;

                window.setTimeout( () => this.scrollTable.activeEventClick = true, 300);
            },
            slideTable(vector){
                this.propertyWrap();

                //let countActiveSlide = 0;
                /*if(vector > 0){
                    countActiveSlide = (window.innerWidth - this.scrollTable.widthFixedCol - (this.scrollTable.positionContent)) / this.scrollTable.widthSlide;
                } else {
                    countActiveSlide = (this.scrollTable.widthContent - (window.innerWidth - this.scrollTable.positionContent)) / this.scrollTable.widthSlide;
                }
                countActiveSlide = (this.scrollTable.widthContent - (window.innerWidth - this.scrollTable.positionContent)) / this.scrollTable.widthSlide;
                let countWhollySlide = Math.floor(countActiveSlide);
                let percentageInvisibleSlide = 1 - (countActiveSlide - countWhollySlide);*/

                let moveRange = this.scrollTable.widthSlide * vector;

                this.scrollTable.newPositionContent = (this.scrollTable.positionContent - moveRange);
                if(this.scrollTable.newPositionContent > 0){
                    this.scrollTable.newPositionContent = 0;
                } else if(this.scrollTable.borderRight - this.scrollTable.widthSlide > this.scrollTable.newPositionContent){
                    this.scrollTable.newPositionContent = this.scrollTable.borderRight - this.scrollTable.widthSlide;
                }

                this.scrollTable.styleContent = 'left: ' + this.scrollTable.newPositionContent + 'px; transition: left 0.6s cubic-bezier(0, 0, 0.26, 1)';
                this.scrollTable.styleFixedCol = 'left: ' + this.scrollTable.newPositionContent * (-1) + 'px; transition: left 0.6s cubic-bezier(0, 0, 0.26, 1)';
            },
            checkWidthContent(){
                this.scrollTable.widthFixedCol = document.querySelectorAll('.table-wrap .fixed-col')[0].scrollWidth;
                if(window.innerWidth <= 767){
                    this.scrollTable.widthFixedCol = 0;
                }

                let firstRow = document.querySelectorAll('.table-wrap .row')[0];    // берем 1 строку в таблице
                let sumWidthSlide = 0;
                firstRow.querySelectorAll('.value-col').forEach(function(item) { // ищем в строк все колонки с информацией
                    sumWidthSlide += item.offsetWidth;                                    // получаем ширину всех колонк с информацией
                });

                this.scrollTable.widthContent = sumWidthSlide + this.scrollTable.widthFixedCol;

                if(this.scrollTable.widthContent > window.innerWidth){  // если ширина таблицы выходдит за рамки браузера
                    this.scrollTable.activeSlideEffect = true;         // включаем эффект слайдера
                    this.scrollTable.widthBorderValue = 'width: ' + (this.scrollTable.widthContent + this.scrollTable.widthSlide) + 'px;'; // продлеваем бордеры

                } else if (this.scrollTable.widthContent + 40 < window.innerWidth){                                              // если ширина таблицы в рамках браузера
                    this.scrollTable.activeSlideEffect = false;      // отключаем эффект слайдера
                    this.scrollTable.widthBorderValue = '';         // удаляем стиль ширины для бордера
                }
            },
            resizeWindow(){
                this.scrollTable.styleContent = 'left: ' + 0 + 'px; transition: left 0.6s cubic-bezier(0, 0, 0.26, 1)';
                this.scrollTable.styleFixedCol = 'left: ' + 0 + 'px; transition: left 0.6s cubic-bezier(0, 0, 0.26, 1)';
                this.checkWidthContent();
            },
            showDifferencesParam(){
                for (let item in this.arResult ) { // сбор полей инфоблока для таблицы
                    this.ColTable[item] = {};
                    for (let u in this.tableProperty) {
                        let propertyTable = this.tableProperty[u];
                        if (typeof this.arResult[item].arProperty[propertyTable] !== 'undefined') {
                            for(let x = 1; x < this.arResult.length; x++){
                                if(this.arResult[0].arProperty[propertyTable].VALUE !== this.arResult[x].arProperty[propertyTable].VALUE){
                                    this.ColTable[item][propertyTable] = this.arResult[item].arProperty[propertyTable];
                                    break;
                                }
                            }
                        }
                    }
                }
                this.scrollTable.activeDiffElement = true;
                this.rowTable = this.ColTable[0];

                window.setTimeout(() => {
                    this.$emit('loadGetList')
                    this.$store.dispatch('receiveCheckPosition');
                }, 200);
            },
            showAllParam(){
                for (let item in this.arResult ) { // сбор полей инфоблока для таблицы
                    this.ColTable[item] = {};
                    for (let u in this.tableProperty) {
                        let propertyTable = this.tableProperty[u];
                        if (typeof this.arResult[item].arProperty[propertyTable] !== 'undefined') {
                            this.ColTable[item][propertyTable] = this.arResult[item].arProperty[propertyTable];
                        }
                    }
                }
                this.scrollTable.activeDiffElement = false;
                this.rowTable = this.ColTable[0];

                window.setTimeout(() => {
                    this.$emit('loadGetList')
                    this.$store.dispatch('receiveCheckPosition');
                }, 200);
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
        created() {
            window.addEventListener('resize', this.resizeWindow);

            let cacheId = this.arFilter.IBLOCK_ID + '_table_' + this.idItem;

            if(!this.bitrixStore[cacheId]) {
                getClBlockElement.methods.GetList(this.arSort, this.arFilter, false, this.arNuvParam, this.arSelect).then((data) => {
                    this.arResult = data.ITEMS;
                    this.showAllParam()
                    window.setTimeout(() => this.checkWidthContent(), 200);

                    this.$store.dispatch('receiveCacheData', {id: cacheId, cacheData: data})
                })
            } else {
                this.arResult = this.bitrixStore[cacheId].ITEMS;
                this.showAllParam()
                window.setTimeout(() => this.checkWidthContent(), 200);
            }
        },
        mounted() {

        },
        destroyed() {
            window.removeEventListener('resize', this.resizeWindow);
        }
    }
</script>

<style scoped>

</style>