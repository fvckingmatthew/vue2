<template>
    <div class="projects-page container " :class="[{ 'stopAnimation': !getProgressAxios.statusResponseAxios && !changeProjectList}]">
        <h1 showScroll="title" :class="[{ 'moveTop': elementVisibleScroll.title.visible}]">{{$route.name}}</h1>

        <separator :show="true" :static-separator="changeProjectList"/>

        <div class="wrap-filter" showScroll="wrapFilter" :class="[{ 'opacity-animate': elementVisibleScroll.wrapFilter.visible || fixedFilterStyle !== ''}]">
            <div class="imaginary-filter" :style="imaginaryHeightFilter">
                <div class="row filter-search-bar"  :style="fixedFilterStyle" :class="[{'disableCheck': changeFilter}]">
                    <p class="mobile-title-filter col-23 titleAccordion"
                       :class="[{ 'moveTop': elementVisibleScroll.wrapFilter.visible || fixedFilterStyle !== ''}]"
                       @click="accordion()">
                        Фильтры
                    </p>
                    <div class="col-xxl-12 filters-wrap" :style="searchBarAccordion.style" :class="{active: searchBarAccordion.status}">
                        <div class="filter-type" v-for="(filter, i) in this.arFilters" :key="i"
                             :class="[{ 'col-lg-6':  i !== 'MATERIAL_FILTER'} , { 'col-lg-5':  i === 'MATERIAL_FILTER'}]">
                            <p :class="[{ 'moveTop': elementVisibleScroll.wrapFilter.visible || fixedFilterStyle !== ''},  {'active': i === activeAccordion && filtersAccordion.style !== ''}]"
                               @click="accordionMobile(i)">
                                {{filter.NAME}}
                            </p>
                            <div class="accordion-mobile-hidden" :style="i === activeAccordion ? filtersAccordion.style : ''" >
                                <div class="filer-list">
                                    <span v-for="(property, key) in filter.arProperty" :key="key"
                                          @click="updateListProjects(['PROPERTY_' + property.PROPERTY_CODE, property.ID]), property.active = !property.active"
                                          :class="[
                                              { 'active':arFilter['PROPERTY_' + property.PROPERTY_CODE] && arFilter['PROPERTY_' + property.PROPERTY_CODE].indexOf(property.ID) >= 0 },
                                              { 'moveTop': elementVisibleScroll.wrapFilter.visible || fixedFilterStyle !== ''},
                                              { 'disable': property.disable}
                                              ]"
                                          v-html="property.VALUE">
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-11 search-wrap">
                        <div class="search-bar" :class="{'error-found': projectNameNotFound}">
                            <img width="19" height="19" src="../../../../src/assets/icon/search-btn.svg" @click="updateListProjects(['%NAME', message])"/>
                            <input @keyup.enter="updateListProjects(['%NAME', message])" v-model="message" size="26" placeholder="поиск по номеру проекта..." class="search-input"/>
                            <div class="search-btn" @click="updateListProjects(['%NAME', message])">
                                <icon-base width="18" height="18"><search-icon/></icon-base>
                            </div>
                        </div>
                    </div>
                    <div class="triangle-toggle-btn" :class="{active: searchBarAccordion.status}" @click="accordion()">
                        <img width="14" height="12" src="../../../../src/assets/icon/triangle-down.svg"  />
                    </div>
                    <separator class="col-23"  :show="true" :static-separator="changeProjectList"/>
                </div>
            </div>
        </div>


        <div :class="[{'change-screen': changeFilter}]">
            <listing-projects v-if="arResult && elementVisibleScroll"
                              :ar-result="arResult"
                              :width-order="widthOrder"
                              :element-visible-scroll="elementVisibleScroll"
                              @imgLoaded="startAnimation()"
            />

            <div class="error-project" v-else-if="!arResult">
                <h2 showScroll="errorFilter" v-if="projectNameNotFound === ''"
                    :class="[{ 'moveTop': elementVisibleScroll.errorFilter.visible}]">
                    по вашему запросу отсутствует проект
                </h2>
                <h2 showScroll="errorFilter" v-else
                    :class="[{ 'moveTop': elementVisibleScroll.errorFilter.visible}]">
                    проект №{{projectNameNotFound}} отсутствует
                </h2>
            </div>
        </div>

        <base-button
                v-if="countPage > lazyLoadPage.iNumPage && contentLoaded"
                @clickBtn="lazyLoad()"
                :text="'показать еще'"
                :link="'javascript:void(0);'"
                :typeBtn="'show-more'"
                showScroll="linkProjectsWork1" :class="[{ 'show-button': elementVisibleScroll.linkProjectsWork1.visible}]"
        />


    </div>
</template>

<script>
    import {getClBlockElement} from '../../../jsFunction/getCIBlockElement'
    import {seo} from '../../../jsFunction/seo'
    import Separator from "../../layout/Separator";
    import ListingProjects from "../../layout/projects/ListingProjects";
    import {showElementScroll} from "../../../jsFunction/showElementScroll";
    import BaseButton from "../../layout/BaseButton";
    import IconBase from "../../IconBase";
    import SearchIcon from "../../icons/SearchIcon";

    export default {
        name: 'ProjectPage',
        components: {SearchIcon, IconBase, BaseButton, ListingProjects, Separator},
        mixins:[getClBlockElement, showElementScroll],
        data(){
            return{
                arResult: [],
                device: {},
                elementVisibleScroll: { // зписывам в объект имена showScroll элементов
                    title:{},
                    titleFilter: {},
                    wrapFilter: {},
                    filerList: {},
                    linkProjectsWork1: {},
                    mobileTitleFilter: {},
                    separator1: {},
                    errorFilter: {}
                },
                arFilters: {},
                showAfterIntro: true,
                arElementsShow: [],
                arSort: {
                    'SORT' : 'ASC'
                },
                arFilter: {
                    'IBLOCK_ID' : 9, 'ACTIVE' : 'Y',
                },
                arSelect: [
                    'NAME', 'CODE', 'PREVIEW_PICTURE', 'DETAIL_PAGE_URL', 'PROPERTY_PRICE_DOC_PROJECT', 'GET_FILTER'
                ],
                arNuvParam: {
                    'iNumPage' : 1, 'nPageSize': 10, 'realPageSize': 10,
                },
                lazyLoadPage: {
                    'iNumPage' : 1, 'nPageSize': 10,
                },
                message: '',
                countActiveElement: 0,
                countPage: 0,
                widthOrder:['col-xl-12 col-md-10','col-xl-11 col-md-13 heightSecondImg',
                            'col-xl-7 col-md-13','col-xl-16 col-md-10',
                            'col-xl-12 col-md-10','col-xl-11 col-md-13 heightSecondImg',
                            'col-xl-16  col-md-13','col-xl-7  col-md-10',
                ],
                searchBarAccordion: {
                    status: true,
                    style: '',
                },
                fixedFilterStyle: '',
                imaginaryHeightFilter: '',
                activeAccordion: '',
                filtersAccordion: {
                    status: true,
                    style: '',
                },
                tmpHeightAccordionMobile: 0,
                changeFilter: false,
                changeProjectList: false,
                projectNameNotFound: '',
                contentLoaded: false,
            }
        },

        computed: {
            getProgressAxios(){
                return this.$store.getters.getProgressAxios; // чекаем статус загузки контента
            },
            bitrixStore(){
                return this.$store.getters.cacheData;
            }
        },
        watch:{
            'getProgressAxios.statusResponseAxios' (value){
                if(value){
                    this.startAnimation();
                    this.observer();
                    this.contentLoaded = true;
                } else {
                    this.contentLoaded = false;
                }
            }
        },
        methods:{
            handleScroll(){
                let visibleStatus = showElementScroll.methods.comparisonPosition(this.arElementsShow);   // получаем статус видимости элементов на экранен
                this.setObjectAnimation(visibleStatus);                                                 // закидываем полученный массив на обработку под реактивность Vue
                this.fixedFilterBar();                                                                 // фиксируем фильтр
            },
            startAnimation(){                                                                            // запуск анимации видимых элементов
                this.arElementsShow = showElementScroll.methods.GetElements('.projects-page');   // получаем позиции элементов на странице для анимации
                let visibleStatus = showElementScroll.methods.comparisonPosition(this.arElementsShow); 
                this.setObjectAnimation(visibleStatus);
                this.$store.dispatch('receiveCheckPosition');
            },
            setObjectAnimation(visibleStatus){                   // обработка объекта с позициями элементов под реактивность Vue
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
                this.updateHeightAccordion();         // обновляем высоту фильтра
                if(this.searchBarAccordion.status){  // если фильтр открыл
                    this.accordion();               // закрываем его
                }

                this.tmpHeightAccordionMobile = 0;
                this.filtersAccordion.style = '';

            },
            updateListProjects(arFilter){        // обновление проектов по фильтру
                this.changeFilter = true;
                this.changeProjectList = true;

                this.lazyLoadPage.iNumPage = 1; // переходим на 1 стр пагинации
                if(arFilter[0] === '%NAME'){                     // если запрос пришел с поиска
                    this.arFilter = {
                        'IBLOCK_ID' : 9,
                        'ACTIVE' : 'Y',
                        [arFilter[0]]: arFilter[1] // присваеваем общему фильтру значение поиска
                    };
                } else {                                       // если запрос пришел с фильтра
                    this.arFilter['%NAME'] = '';              // удаляем фильтр по имени
                    this.message = '';                       // текст с поиска

                    let countFilter = 0;
                    for (let property in this.arFilter ) {
                        if(property === arFilter[0]){       // проверяем есть ли уже такой же тип фильтра в массиве
                            countFilter++
                        }
                    }
                    if(countFilter === 0){                           // если данный тип фильтра не встретился
                        this.arFilter[arFilter[0]] = [arFilter[1]]; // записываем его
                    } else if(countFilter > 0){                    // если было совпаденние
                        let indexFilter = this.arFilter[arFilter[0]].indexOf(arFilter[1]); // узнаем номер свойства у фильтра
                        if(indexFilter === -1){                                           // если данного совйтва нет
                            this.arFilter[arFilter[0]].push(arFilter[1]);                // записываем это свойство
                        } else {                                                        // если это свойство есть
                            this.arFilter[arFilter[0]].splice(indexFilter, 1);         // удаляем его по номеру
                        }
                    }
                }

                this.updateUlr();       // обновляем url

                setTimeout(()=> {
                    getClBlockElement.methods.GetList(this.arSort, this.arFilter,  false, this.arNuvParam, this.arSelect).then((data) => {
                        this.arResult = data.ITEMS; // получаем отфильтрованные проекты
                        this.$store.dispatch('receiveCheckPosition'); // заставляем пересмотреть футер положение своих элементов
                        if(data.infoBlock){
                            this.countPage = data.infoBlock.COUNT_PAGE;   // получаем кол-во стр отфилтровнных проектов
                        }
                        this.arFilters = data.infoBlock.FILTERS;
                        this.changeFilter = false;
                        this.projectNameNotFound = '';
                        if(!data.ITEMS && this.arFilter['%NAME'] !== ''){
                            this.projectNameNotFound = this.message;
                        }
                    });
                }, 1000)
            },
            lazyLoad(){
                this.lazyLoadPage.iNumPage++; // следующая стр
                this.changeProjectList = true;
                this.updateUlr();  // обновляем url

                getClBlockElement.methods.GetList(this.arSort, this.arFilter,  false, this.lazyLoadPage, this.arSelect).then((data) => {
                    this.arResult = this.arResult.concat(data.ITEMS);   // записываем следующую стр проектов к предыдущим
                    this.$store.dispatch('receiveCheckPosition'); // заставляем пересмотреть футер положение своих элементов
                });
            },
            observer(){
                let vueThis = this;

                this.observerShowMore = new IntersectionObserver(function (entries) {
                        entries.forEach(function (entry) {
                            if (entry.isIntersecting){
                                vueThis.lazyLoad();
                            }
                        });
                    },{
                        threshold: [0.1],
                        rootMargin: (window.innerHeight) + 'px 0px 0px 0px'
                    }
                );

                setTimeout(()=> {
                    if(document.querySelector('.show-more')){
                        this.observerShowMore.observe(document.querySelector('.show-more')); // Прикрепляем его к «наблюдателю»v
                    } else {
                        this.observerShowMore.disconnect();
                    }
                }, 300)
            },

            updateUlr(){
                let newUlr = '?';
                for (let filter in this.arFilter ) {
                    if((filter.includes('FILTER') || filter.includes('%NAME')) && this.arFilter[filter].length !== 0){    // если в общем массиве выборки есть фильтры или поиск
                        newUlr += '&' + filter.replace('%', '') + '=' + this.arFilter[filter];       // записываем в url новые параметры
                    }
                }
                if(this.lazyLoadPage.iNumPage > 1){ // если не первая страница
                    newUlr += '&Page=' + this.lazyLoadPage.iNumPage;   // дописываем в url номер стр
                }

                window.history.replaceState('',"", window.location.pathname + newUlr); // перезаписываем url
            },

            accordion(){
                this.searchBarAccordion.status = !this.searchBarAccordion.status;
                this.updateHeightAccordion();

                if(this.fixedFilterStyle === ''){
                    window.setTimeout(() => this.startAnimation(), 500);
                    window.setTimeout(() => this.$store.dispatch('receiveCheckPosition'), 500);
                }
            },

            updateHeightAccordion(){
                let heighttitle = 0;
                let strStyle = '';
                let title = '';
                let heightSearch = document.querySelectorAll('.search-wrap')[0].getBoundingClientRect().height;
                let heightWrap = document.querySelectorAll('.filter-type')[0].scrollHeight;

                if (window.innerWidth <= 991) {
                    let items = document.querySelectorAll('.filter-type');
                    heightWrap = 0;
                    items.forEach(function(item) {
                        heightWrap += item.offsetHeight;
                    });
                    title = '.titleAccordion';
                } else {
                    title = '.filters-wrap p';
                }

                let element = document.querySelectorAll(title)[0];
                let marginBottom = window.getComputedStyle(element).marginBottom;
                let marginTop = window.getComputedStyle(element).marginTop;
                strStyle += ' + ' + marginBottom;
                strStyle += ' + ' + marginTop;
                heighttitle = document.querySelectorAll(title)[0].offsetHeight;

                if(this.searchBarAccordion.status === false){

                    if(window.innerWidth <= 991){
                        this.searchBarAccordion.style = 'height:0px';
                    } else {
                        this.searchBarAccordion.style = 'height:calc('+ heighttitle + 'px ' + strStyle + ')';
                    }

                    if(this.fixedFilterStyle === '') {
                        if(window.innerWidth <= 1399){
                            this.imaginaryHeightFilter = 'height:calc(' + heightSearch + 'px + ' + heighttitle + 'px ' + strStyle  + ')';
                        } else {
                            this.imaginaryHeightFilter = 'height:calc(' + heighttitle + 'px ' + strStyle + ')';
                        }
                    }

                } else {

                    this.searchBarAccordion.style = 'height:'+ heightWrap + 'px';

                    if(this.fixedFilterStyle === '') {
                        if(window.innerWidth <= 991){
                            this.imaginaryHeightFilter = 'height: calc(' + heighttitle + 'px + ' + heightWrap + 'px + ' + heightSearch + 'px ' + strStyle  + ')';
                        } else if (window.innerWidth <= 1399) {
                            this.imaginaryHeightFilter = 'height: calc(' + heightWrap + 'px + ' + heightSearch + 'px)';
                        } else {
                            this.imaginaryHeightFilter = 'height:' + heightWrap + 'px';
                        }
                    }
                }
            },

            fixedFilterBar(){
                let heightHead = document.querySelectorAll('.header')[0].offsetHeight;
                
                if(window.pageYOffset + heightHead >= this.elementVisibleScroll.wrapFilter.elementPos){
                    if(this.searchBarAccordion.status){
                        this.accordion();
                    }
                    this.fixedFilterStyle = 'width: 100%; z-index: 999; position: fixed; top:' + heightHead + 'px';


                } else {
                    /*if(this.fixedFilterStyle !== ''){
                        this.arElementsShow = showElementScroll.methods.GetElements('.projects-page');
                    }*/
                    if(!this.searchBarAccordion.status && this.fixedFilterStyle !== ''){
                       setTimeout(()=> { this.accordion()}, 10)
                    }
                    this.fixedFilterStyle = '';
                }
            },
            accordionMobile(item){
                if(window.innerWidth <= 991){
                    let thisClickTarget = event.target;
                    let heightContent = thisClickTarget.offsetParent.querySelector('.filer-list').offsetHeight;
                    let heightImaginaryWrap = document.querySelector('.imaginary-filter').offsetHeight;
                    let heightFilterWrap = document.querySelector('.filters-wrap').offsetHeight;

                    //this.imaginaryHeightFilter = 'height:  auto;';
                    //this.searchBarAccordion.style = 'height:  auto;';

                    if(this.activeAccordion !== item || this.filtersAccordion.style === ''){
                        this.activeAccordion = item;

                        this.filtersAccordion.style = 'height: '+ heightContent +'px;';

                        if(this.tmpHeightAccordionMobile !== 0){
                            let tmpheightContent = heightContent;
                            heightContent = heightContent - this.tmpHeightAccordionMobile;
                            this.tmpHeightAccordionMobile = tmpheightContent;
                        } else {
                            this.tmpHeightAccordionMobile = heightContent;
                        }
                        if(this.fixedFilterStyle === ''){
                            this.imaginaryHeightFilter = 'height: calc('+ heightImaginaryWrap +'px + ' + heightContent + 'px);';
                        }
                        this.searchBarAccordion.style = 'height: calc('+ heightFilterWrap +'px + ' + heightContent + 'px);';


                    } else {
                        this.tmpHeightAccordionMobile = 0;
                        this.filtersAccordion.style = '';
                        if(this.fixedFilterStyle === ''){
                            this.imaginaryHeightFilter = 'height: calc('+ heightImaginaryWrap +'px - ' + heightContent + 'px);';
                        }
                        this.searchBarAccordion.style = 'height: calc('+ heightFilterWrap +'px - ' + heightContent + 'px);';
                    }
                } else {
                    this.accordion();
                }
            },
            setProjects(){
                let arParamUrl = document.location.search.replace('?', '').split('&');
                let param;
                //this.changeCode = false;
                //console.log(arParamUrl);
                if(arParamUrl[0] !== ''){
                    for (let i in arParamUrl ) {                         // перебирваем параметры url и зписываем в соответствующие поля фильтра
                        param = arParamUrl[i].split('=');
                        if(param[0] === 'NAME'){
                            this.arFilter['%' + param[0]] = [param[1]];
                            this.message = param[1];
                        } else if(param[0] === 'Page') {
                            this.arNuvParam.nPageSize *= param[1];
                            this.lazyLoadPage.iNumPage = param[1];
                        } else {
                            this.arFilter[param[0]] = param[1].split(',');
                        }
                    }
                }

                getClBlockElement.methods.GetList(this.arSort, this.arFilter,  false, this.arNuvParam, this.arSelect).then((data) => {
                    this.arResult = data.ITEMS;
                    this.arFilters = data.infoBlock.FILTERS;
                    this.countPage = data.infoBlock.COUNT_PAGE;

                    if(!data.ITEMS && this.arFilter['%NAME'] !== '') {
                        this.projectNameNotFound = this.message;
                    }

                    this.arResult[0]['SECTION_NAME'] = data.infoBlock.IBLOCK_NAME;

                    seo.methods.set(this.arResult[0], 'section');

                    window.setTimeout(() => this.searchBarAccordion.style = 'height:'+ document.querySelectorAll('.filters-wrap')[0].offsetHeight + 'px', 500);
                    window.setTimeout(() => this.imaginaryHeightFilter = 'height:'+ document.querySelectorAll('.filter-search-bar')[0].offsetHeight + 'px', 500);
                });
            }
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);
            window.addEventListener('resize', this.handleResize);
            this.$store.dispatch('receiveAppClass' ,{appClass: 'bgColorLightGray' , showSeparator: true} );
            this.setProjects();
        },

        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
            window.removeEventListener('resize', this.handleResize);
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
