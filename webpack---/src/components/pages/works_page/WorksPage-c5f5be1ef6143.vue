<template>
    <div class="works-page container" :class="[{ 'stopAnimation': !getProgressAxios.statusResponseAxios && !changeProjectList}]">
        <h1 showScroll="title" :class="[{ 'moveTop': elementVisibleScroll.title.visible}]">{{$route.name}}</h1>

        <separator :show="true" :static-separator="changeProjectList"/>

        <div class="gallery-filter" >
            <div class="col-xl-12 gallery-type-row">
                <div class="gallery-type"
                     :class="[{active: activeFilter === 0}, { 'moveTop': elementVisibleScroll.allWork.visible}]"
                     @click="updateListProjects('')"
                     showScroll="allWork"
                >Все <span>{{countAll}}</span></div>
                <div class="gallery-type"
                     @click="updateListProjects('PROPERTY_VIDEOGALLERY')"
                     :class="[{active: activeFilter == 1}, { 'moveTop': elementVisibleScroll.onlyVideo.visible}]"
                     showScroll="onlyVideo"
                >Видео <span>{{countVideo}}</span></div>
                <div class="gallery-type"
                     @click="updateListProjects('PROPERTY_PHOTOGALLERY')"
                     :class="[{active: activeFilter == 2}, { 'moveTop': elementVisibleScroll.onlyPicture.visible}]"
                     showScroll="onlyPicture"
                >Фотогалереи <span>{{countImages}}</span></div>
            </div>

            <div class="col-xl-11 gallery-sort col-md-23" showScroll="sortBtn" :class="[{ 'moveTop': elementVisibleScroll.sortBtn.visible}]"
            >Сортировать по дате:
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

        <separator  :show="true" :static-separator="changeProjectList"/>

        <listing-projects v-if="arResult && elementVisibleScroll"
                          :ar-result="arResult"
                          :width-order="widthOrder"
                          :element-visible-scroll="elementVisibleScroll"
                          :class="[{'change-screen': changeFilter}]"
        />

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
    import ListingProjects from "../../layout/projects/ListingProjects";
    import Separator from "../../layout/Separator";
    import {showElementScroll} from "../../../jsFunction/showElementScroll";
    import BaseButton from "../../layout/BaseButton";
    export default {
        name: "WorksPage",
        components: {BaseButton, ListingProjects, Separator},
        mixins:[getClBlockElement, showElementScroll],
        data() {
            return {
                arResult: [],
                elementVisibleScroll: {   // записывам в объект имена showScroll элементов
                    title: {},
                    titleFilter: {},
                    wrapFilter: {},
                    filerList: {},
                    linkProjectsWork1: {},
                    allWork: {},
                    onlyVideo: {},
                    onlyPicture: {},
                    sortBtn: {},
                },
                arFilters: {},
                showAfterIntro: true,
                arElementsShow: [],
                arSort: {
                    'CREATED_DATE': 'DESC',
                    'TIMESTAMP_X':'DESC'
                },
                arFilter: {
                    'IBLOCK_ID': 10,
                    'ACTIVE': 'Y',
                },
                arSelect: [
                    'NAME',
                    'CODE',
                    'PREVIEW_PICTURE',
                    'DETAIL_PAGE_URL'
                ],
                arNuvParam: {
                    'iNumPage': 1,
                    'nPageSize': 4,
                    'realPageSize': 4,
                },
                lazyLoadPage: {
                    'iNumPage': 1,
                    'nPageSize': 4,
                },
                countActiveElement: 0,
                countPage: 0,
                countVideo: 0,      // количество элементов с видео
                countImages: 0,     // количество элементов с фото
                countAll: 0,        // количество всех элементов
                activeFilter: 0,     // индекс блока, который будет выделяться как активный
                widthOrder:['col-xl-12 col-md-10','col-xl-11 col-md-13 heightSecondImg',
                    'col-xl-7 col-md-13','col-xl-16 col-md-10',
                    'col-xl-12 col-md-10','col-xl-11 col-md-13 heightSecondImg',
                    'col-xl-16 col-md-10 ','col-xl-7 col-md-13',
                ],
                sortArrow: {
                    status: true,
                    style: '',
                },
                changeFilter: false,
                changeProjectList: false,
                contentLoaded: false,
            }
        },
        computed: {
            getProgressAxios(){
                return this.$store.getters.getProgressAxios; // чекаем статус загузки контента
            },
        },
        watch: {
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
                this.setObjectAnimation(visibleStatus);                                                  // закидываем полученный массив на обработку под реактивность Vue
            },
            startAnimation(){                                                                            // запуск анимации видимых элементов
                this.arElementsShow = showElementScroll.methods.GetElements('.works-page');   // получаем позиции элементов на странице для анимации
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
                this.changeFilter = true;
                this.changeProjectList = true;
                this.lazyLoadPage.iNumPage = 1; // переходим на 1 стр пагинации
                switch (arFilter) {             // проверяем какое свойство пришло с фильтра
                    case 'PROPERTY_VIDEOGALLERY':           // если выбираем элементы с видео
                        this.activeFilter = 1;              // устанавливаем активный индекс
                        this.arFilter = {                   // перезаписываем фильтр
                            'IBLOCK_ID': 10,
                            'ACTIVE': 'Y',
                            '!PROPERTY_VIDEOGALLERY': false
                        };
                        break;
                    case 'PROPERTY_PHOTOGALLERY':           // если выбираем элементы с фото
                        this.activeFilter = 2;              // устанавливаем активный индекс
                        this.arFilter = {                   // перезаписываем фильтр
                            'IBLOCK_ID': 10,
                            'ACTIVE': 'Y',
                            '!PROPERTY_PHOTOGALLERY': false
                        };
                        break;
                    case '':                                // если выбираем все элементы
                        this.activeFilter = 0;              // устанавливаем активный индекс
                        this.arFilter = {                   // перезаписываем фильтр
                            'IBLOCK_ID': 10,
                            'ACTIVE': 'Y',
                        };
                        break;
                    default: break;
                }

                this.updateUlr();                       // обновляем url
                setTimeout(()=> {
                    getClBlockElement.methods.GetList(this.arSort, this.arFilter,  false, this.arNuvParam, this.arSelect).then((data) => {
                        this.arResult = data.ITEMS;         // получаем отфильтрованные объекты
                        this.$store.dispatch('receiveCheckPosition');     // заставляем пересмотреть футер положение своих элементов
                        if(data.infoBlock){
                            this.countPage = data.infoBlock.COUNT_PAGE;   // получаем кол-во стр отфилтровнных проектов
                        }
                        this.changeFilter = false;
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
                  }
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
                        this.$store.dispatch('receiveCheckPosition'); // заставляем пересмотреть футер положение своих элементов
                        if(data.infoBlock){
                            this.countPage = data.infoBlock.COUNT_PAGE;   // получаем кол-во стр отфилтровнных проектов
                        }
                        this.changeFilter = false;
                    }, 1000)
                });
            },
            lazyLoad(){
                this.lazyLoadPage.iNumPage++; // следующая стр
                this.changeProjectList = true;
                this.updateUlr();  // обновляем url

                getClBlockElement.methods.GetList(this.arSort, this.arFilter,  false, this.lazyLoadPage, this.arSelect).then((data) => {
                    this.arResult = this.arResult.concat(data.ITEMS); // записываем следующую стр проектов к предыдущим
                    this.$store.dispatch('receiveCheckPosition', this.lazyLoadPage.iNumPage); // заставляем пересмотреть футер положение своих элементов
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
                    if (filter.includes('PROPERTY_VIDEOGALLERY')) {
                        newUlr = '?gallery=video';          // записываем в url новый параметр
                    }
                    if (filter.includes('PROPERTY_PHOTOGALLERY')) {
                        newUlr = '?gallery=photo';          // записываем в url новый параметр
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
                        case 'gallery':
                            if (param[1] === 'video') {
                                this.activeFilter = 1;
                                this.arFilter['!PROPERTY_VIDEOGALLERY'] = false;
                            } else if (param[1] === 'photo') {
                                this.activeFilter = 2;
                                this.arFilter['!PROPERTY_PHOTOGALLERY'] = false;
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
                this.countPage = data.infoBlock.COUNT_PAGE;
                this.countAll = data.infoBlock.ALL_COUNT_ITEM;          // общее количество элементов не зависимо от фильтра
                this.countVideo = data.infoBlock.ALL_COUNT_ITEM_VIDEO;  // общее количество элементов с видео не зависимо от фильтра
                this.countImages = data.infoBlock.ALL_COUNT_ITEM_PICTURE;   // общее количество элементов с фото не зависимо от фильтра

            });
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
            window.removeEventListener('resize', this.handleResize);
            this.$store.dispatch('receiveAppClass' ,{appClass: ''} );
        }
    }
</script>

<style scoped>

</style>