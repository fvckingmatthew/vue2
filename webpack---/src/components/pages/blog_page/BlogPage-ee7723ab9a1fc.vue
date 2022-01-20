<template>
    <div class="blog-page container" :class="[{ 'stopAnimation': !getProgressAxios.statusResponseAxios && !changeProjectList}]">
        <h1 showScroll="title" :class="[{ 'moveTop': elementVisibleScroll.title.visible}]">{{$route.name}}</h1>
        <!--{{sectionInfo[15]['NAME']}}-->
        <div class="">
            <separator :show="true" :static-separator="changeProjectList"/>
            <div class="gallery-filter">
                <div class="col-xl-12 gallery-type-row">
                    <div class="col-md-auto col-11 gallery-type"
                         :class="[{active: activeFilter === 0}, { 'moveTop': elementVisibleScroll.allBlog.visible}]"
                         @click="updateListProjects('')"
                         showScroll="allBlog"
                    >Все <span>{{countAll}}</span></div>
                    <div class="col-md-auto col-12 gallery-type"
                         @click="updateListProjects(sectionInfo[0]['ID'])"
                         :class="[{active: activeFilter === 1},{ 'moveTop': elementVisibleScroll.countNews.visible}]"
                         v-if="sectionInfo[0]"
                         showScroll="countNews"
                    >{{sectionInfo[0]['NAME']}} <span>{{countNews}}</span></div>
                    <div class="col-md-auto col-23 gallery-type"
                         @click="updateListProjects(sectionInfo[1]['ID'])"
                         :class="[{active: activeFilter === 2},{ 'moveTop': elementVisibleScroll.countArticles.visible}]"
                         v-if="sectionInfo[1]"
                         showScroll="countArticles"
                    >{{sectionInfo[1]['NAME']}} <span>{{countArticles}}</span></div>
                </div>

                <div class="col-xl-11 gallery-sort col-md-23" showScroll="sortNews"
                     :class="[{ 'moveTop': elementVisibleScroll.sortNews.visible}]">Сортировать по дате:
                    <div class="gallery-sort-value"
                         @click="updateSortListProjects()"
                         :class="{up: !this.sortArrow.status}">
                        <div class="gallery-sort-value-container">
                            <div class="new-value">
                                <span>сначала новые</span>
                                <div class="triangle-toggle-btn" >
                                    <img src="../../../../src/assets/icon/triangle-down.svg"  />
                                </div>
                            </div>
                            <div class="old-value">
                                <span>сначала старые</span>
                                <div class="triangle-toggle-btn" >
                                    <img src="../../../../src/assets/icon/triangle-down.svg"  />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <separator :show="true" :static-separator="changeProjectList"/>
            <listing-blog v-if="arResult.length !== 0 && elementVisibleScroll"
                          :ar-result="arResult"
                          :width-order="widthOrder"
                          :element-visible-scroll="elementVisibleScroll"
                          :path-list-page="$route.path"
                          :ar-result-length="arResult.length"
                          @triggerUpdateUrl="updateListProjects($event)"
                          :class="[{'change-screen': changeFilter}]"
            />
            <base-button
                    v-if="countPage > lazyLoadPage.iNumPage"
                    @clickBtn="lazyLoad()"
                    :text="'показать еще'"
                    :link="'javascript:void(0);'"
                    :typeBtn="'base-btn'"
                    showScroll="linkProjectsWork1" :class="[{ 'show-button': elementVisibleScroll.linkProjectsWork1.visible}]"
            />
        </div>
    </div>
</template>

<script>
    import {getClBlockElement} from '../../../jsFunction/getCIBlockElement'
    import {seo} from '../../../jsFunction/seo'
    import Separator from "../../layout/Separator";
    import ListingBlog from "../../layout/blog/ListingBlog";
    import {showElementScroll} from "../../../jsFunction/showElementScroll";
    import BaseButton from "../../layout/BaseButton";

    export default {
        name: "BlogPage",
        components: {ListingBlog, Separator, BaseButton},
        mixins:[getClBlockElement, showElementScroll],
        data() {
            return {
                arResult: [],
                elementVisibleScroll: {   // записывам в объект имена showScroll элементов
                    title: {},
                    titleFilter: {},
                    linkProjectsWork1: {},
                    allBlog: {},
                    countArticles: {},
                    countNews:{},
                    sortNews:{},
                    galleryFilter:{},
                    fullPage: {}
                },
                arFilters: {},
                changeProjectList: false,
                changeFilter: false,
                arElementsShow: [],
                arSort: {
                    'CREATED_DATE': 'DESC',
                    'TIMESTAMP_X':'DESC'
                },
                arFilter: {
                    'IBLOCK_ID': 18,
                    'ACTIVE': 'Y',
                },
                arSelect: [
                    'NAME',
                    'CODE',
                    'PREVIEW_TEXT',
                    'PREVIEW_PICTURE',
                    'DETAIL_PAGE_URL',
                    'IBLOCK_SECTION_ID',
                ],

                arNuvParam: {
                    'iNumPage': 1,
                    'nPageSize': 6,
                    'realPageSize': 6,
                },
                lazyLoadPage: {
                    'iNumPage': 1,
                    'nPageSize': 6,
                },
                countActiveElement: 0,
                countPage: 0,
                countNews: 0,      // количество элементов с видео
                countArticles: 0,     // количество элементов с фото
                countAll: 0,        // количество всех элементов
                activeFilter: 0,     // индекс блока, который будет выделяться как активный
                sectionInfo: [],    // информация по разделам
                widthOrder:['col-xl-12 col-md-23 uneven large first','col-xl-11 col-md-23 even large right',
                    'col-xl-7 col-md-11 uneven small middle left','col-xl-16 col-md-12 even large md-small right middle',
                    'col-xl-7 col-md-23 uneven small md-large', 'col-xl-16 col-md-23 even large last right',
                    'col-xl-11 col-md-23 uneven large left first','col-xl-12 col-md-23 even large',
                    'col-xl-16 col-md-12 uneven large md-small left middle','col-xl-7 col-md-11 even small middle',
                    'col-xl-7 col-md-23 even small md-large', 'col-xl-16 col-md-23 uneven large left last',
                ],
                sortArrow: {
                    status: true,
                    style: '',
                },
            }
        },
        computed: {
            getProgressAxios(){
                return this.$store.getters.getProgressAxios; // чекаем статус загузки контента
            },
        },
        watch:{
            'getProgressAxios.statusResponseAxios' (value){
                if(value){
                    setTimeout(()=>{
                        this.startAnimation();
                    }, 600)
                }
            }
        },
        methods:{
            handleScroll(){
                let visibleStatus = showElementScroll.methods.comparisonPosition(this.arElementsShow);   // получаем статус видимости элементов на экранен
                this.setObjectAnimation(visibleStatus);                                                  // закидываем полученный массив на обработку под реактивность Vue
            },
            startAnimation(){                                                                            // запуск анимации видимых элементов
                this.arElementsShow = showElementScroll.methods.GetElements('.blog-page');   // получаем позиции элементов на странице для анимации
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
            },
            updateListProjects(arFilter){
                // console.log(arFilter);
                this.changeFilter = true;
                this.changeProjectList = true;
                this.lazyLoadPage.iNumPage = 1; // переходим на 1 стр пагинации
                if(arFilter !== '') {
                    this.arFilter = {                   // перезаписываем фильтр
                        'IBLOCK_ID': 18,
                        'ACTIVE': 'Y',
                        'IBLOCK_SECTION_ID': arFilter
                    };

                    if (arFilter == 15) {
                        this.activeFilter = 1;
                    } else if (arFilter == 16) {
                        this.activeFilter = 2;
                    }

                } else {
                    this.activeFilter = 0;
                    this.arFilter = {                   // перезаписываем фильтр
                        'IBLOCK_ID': 18,
                        'ACTIVE': 'Y'
                    };
                }

                this.updateUlr();                       // обновляем url
                setTimeout(()=> {
                    getClBlockElement.methods.GetList(this.arSort, this.arFilter,  false, this.arNuvParam, this.arSelect).then((data) => {
                        this.arResult = data.ITEMS;         // получаем отфильтрованные объекты
                        if(data.infoBlock){
                            this.countPage = data.infoBlock.COUNT_PAGE;   // получаем кол-во стр отфилтровнных проектов
                        }
                        this.changeFilter = false;
                        this.$store.dispatch('receiveCheckPosition');     // заставляем пересмотреть футер положение своих элементов
                    });
                }, 1000)
            },
            updateSortListProjects(){       // обновляем направление сортировки
                this.changeFilter = true;
                this.changeProjectList = true;
                this.sortArrow.status = !this.sortArrow.status;     // меняем класс направления сортировки
                if(this.arSort['CREATED_DATE'] === 'ASC'){        // если сортировка установлена по возрастанию
                    this.arSort = {                               // меняем на сортировку по убыванию
                        'CREATED_DATE': 'DESC',
                        'TIMESTAMP_X':'DESC'
                    };
                } else {
                    this.arSort = {                    // иначе по убыванию
                        'CREATED_DATE': 'ASC',           // меняем на сортировку по возрастанию
                        'TIMESTAMP_X':'ASC'
                    }
                }
                this.updateUlr();                       // обновляем url

                getClBlockElement.methods.GetList(this.arSort, this.arFilter,  false, this.arNuvParam, this.arSelect).then((data) => {
                    setTimeout(()=> {
                        this.arResult = data.ITEMS; // получаем отфильтрованные проекты
                        if(data.infoBlock){
                            this.countPage = data.infoBlock.COUNT_PAGE;   // получаем кол-во стр отфилтровнных проектов
                        }
                        this.changeFilter = false;
                        this.$store.dispatch('receiveCheckPosition'); // заставляем пересмотреть футер положение своих элементов
                    }, 1000)
                });
            },
            lazyLoad(){
                this.lazyLoadPage.iNumPage++; // следующая стр
                this.changeProjectList = true;
                this.updateUlr();  // обновляем url

                getClBlockElement.methods.GetList(this.arSort, this.arFilter,  false, this.lazyLoadPage, this.arSelect).then((data) => {
                    this.arResult = this.arResult.concat(data.ITEMS); // записываем следующую стр проектов к предыдущим
                    this.$store.dispatch('receiveCheckPosition'); // заставляем пересмотреть футер положение своих элементов
                });
            },
            updateUlr(){
                let newUlr = '?';
                // console.log(this.arFilter);
                for (let filter in this.arFilter ) {
                    // console.log(filter);
                    if (filter.includes('IBLOCK_SECTION_ID')) {
                        for(let i in this.sectionInfo){
                            if(this.sectionInfo[i]['ID'] === this.arFilter['IBLOCK_SECTION_ID']){
                                newUlr = '?blog='+this.sectionInfo[i]['CODE'];          // записываем в url новый параметр
                            }
                        }
                    }
                }
                newUlr += '&sort=' + this.arSort['CREATED_DATE'].toLowerCase(); // дописываем направление сортировки
                if(this.lazyLoadPage.iNumPage > 1){         // если не первая страница
                    newUlr += '&Page=' + this.lazyLoadPage.iNumPage;   // дописываем в url номер стр
                }
                window.history.replaceState('',"", window.location.pathname + newUlr); // перезаписываем url
            },
        },
        created() {
            this.$store.dispatch('receiveAppClass' ,{appClass: 'bgColorGray'} );
            window.addEventListener('scroll', this.handleScroll);
            window.addEventListener('resize', this.handleResize);
            this.activeFilter = 0;          // устанавливаем id активного блока как "все"
            let arParamUrl = document.location.search.replace('?', '').split('&');

            if(arParamUrl[0] !== '') {
                for (let i in arParamUrl) {                         // перебирваем параметры url и зписываем в соответствующие поля фильтра
                    let param = arParamUrl[i].split('=');
                    switch (param[0]) {
                        case 'blog':
                            if (param[1] === 'novosti') {
                                this.activeFilter = 1;
                                this.arFilter['IBLOCK_SECTION_ID'] = 15;
                            } else if (param[1] === 'poleznye-stati') {
                                this.activeFilter = 2;
                                this.arFilter['IBLOCK_SECTION_ID'] = 16;
                            }
                            break;
                        case 'sort':
                            if(param[1] === 'asc') {
                                this.sortArrow.status = false;
                            } else {
                                this.sortArrow.status = true;
                            }
                            this.arSort = {
                                'CREATED_DATE': param[1].toUpperCase(),
                                'TIMESTAMP_X': param[1].toUpperCase()
                            };
                            break;
                        case 'Page':
                            this.arNuvParam.nPageSize *= param[1];
                            this.lazyLoadPage.iNumPage = param[1];
                            break;
                    }
                }
            }

            getClBlockElement.methods.GetList(this.arSort, this.arFilter,  false, this.arNuvParam, this.arSelect).then((data) => {

                this.arResult = data.ITEMS;
                this.arResult[0]['SECTION_NAME'] = data.infoBlock.IBLOCK_NAME;
                seo.methods.set(this.arResult[0], 'section');
                this.sectionInfo = data.infoBlock.SECTION_LIST;
                this.countPage = data.infoBlock.COUNT_PAGE;
                this.countAll = data.infoBlock.ALL_COUNT_ITEM;          // общее количество элементов не зависимо от фильтра
                this.countNews = data.infoBlock.ALL_COUNT_NEWS;  // общее количество элементов с видео не зависимо от фильтра
                this.countArticles = data.infoBlock.ALL_COUNT_ARTICLES;   // общее количество элементов с фото не зависимо от фильтра
            });
        },
        destroyed() {
            this.$store.dispatch('receiveAppClass' ,{appClass: ''} );
            window.removeEventListener('scroll', this.handleScroll);
            window.removeEventListener('resize', this.handleResize);
        }
    }
</script>

<style scoped>

</style>