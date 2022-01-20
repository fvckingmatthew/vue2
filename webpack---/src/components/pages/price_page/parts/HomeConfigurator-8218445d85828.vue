<template>
    <div class="configurator-price">
        <separator :show="true"/>
        <h2 showScroll="titleConfigurator" :class="[{ 'moveTop': elementVisibleScroll.titleConfigurator.visible}]">
            Конфигуратор дома
        </h2>
        <div class="row">
            <div class="col-xl-11 input-col order-1">
                <div class="input-calculator col-md-auto col-11" showScroll="inputCalculator" :class="[{ 'moveTop': elementVisibleScroll.inputCalculator.visible}]">
                    <div class="input" >
                        <input v-model="areaValue"/> <p>м<sup>2</sup></p>
                    </div>
                    <span>площадь дома*</span>
                </div>

                <div class="input-calculator col-md-auto col-12" :class="[{ 'moveTop': elementVisibleScroll.inputCalculator.visible}]">
                    <div class="input">
                        <input v-model="floorValue"/>
                    </div>
                    <span>количество этажей*</span>
                </div>
            </div>

            <div class="col-xl-auto offset-xl-1 result-price order-xl-2 order-md-3 order-2">
                <p showScroll="resultPrice" :class="[{ 'moveTop': elementVisibleScroll.resultPrice.visible}]">
                    {{resultPrice.toLocaleString()}} ₽*
                </p>
            </div>

            <div class="text-result-price col-xl-auto offset-xl-12 order-xl-3 order-4">
                <p showScroll="textResultPrice" :class="[{ 'moveTop': elementVisibleScroll.textResultPrice.visible}]">
                    *рассчитанная стоимость является предварительной. для уточнения окончательной стоимости обратитесь к нашим менеджерам
                </p>
            </div>

            <div class="material-wrap col-xl-11 col-md-19 order-xl-4 order-md-2 order-3"
                 :showScroll="'materialBlock'" :class="[{ 'moveTop': elementVisibleScroll['materialBlock'].visible}]"
            >
                <div class="material-block"
                     v-for="(material, i) in this.arMaterial" :key="i"
                     :style="material.styleWrapMaterial"
                     :class="[{'overlap': material.styleList !== ''}]"
                >
                    <div class="material-list" :class="[{'open-list': material.styleWrapMaterial !== ''},{'toggle-list': material.styleList !== ''}]">
                        <div class="img-material" v-if="material.imgSelectedMaterial !== null && material.imgSelectedMaterial !== ''">
                            <img :src="$hostname + material.imgSelectedMaterial" />
                        </div>
                        <div class="wrap-material" :class="[{'no-img': material.imgSelectedMaterial === null || material.imgSelectedMaterial === ''}]">
                            <div class="name-material">{{material.nameSelectedMaterial}}</div>
                            <div class="list-overflow-wrap" :style="material.styleList">
                                <div class="list">
                                    <p v-for="(materialType, u) in material.ITEMS" :key="u" @click="changeMaterial(material.CODE, materialType)">
                                       {{materialType.NAME}}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="plus-icon" @click="openListMaterial(material.CODE)"></div>
                    </div>
                </div>
            </div>

            <div class="col-xl-auto offset-xl-1 btn-col order-5">
                <base-button
                        :text="'консультация'"
                        :link="'javascript:void(0);'"
                        :typeBtn="'base-btn revers'"
                        showScroll="btnConsul2" :class="[{ 'show-button': elementVisibleScroll.btnConsul2.visible}]"
                        @clickBtn="openCallBackForm(5, 'консультация')"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import Separator from "../../../layout/Separator";
    import {getClBlockElement} from "../../../../jsFunction/getCIBlockElement";
    import BaseButton from "../../../layout/BaseButton";

    export default {
        name: "HomeConfigurator",
        components: {BaseButton, Separator},
        props: {
            parentResult: [Object, Array],
            elementVisibleScroll: Object,
        },
        data(){
            return{
                arResult: [],
                showAfterIntro: true,
                arSort: {
                    'SORT' : 'ASC'
                },
                arFilter: {
                    'IBLOCK_ID' : 15, 'ACTIVE' : 'Y',
                },
                arSelect: [
                    'NAME', 'CODE', 'PREVIEW_PICTURE', 'DETAIL_PAGE_URL',
                ],
                arNuvParam: {},
                arMaterial: {},
                resultPrice: 0,
                areaValue: 200,
                floorValue: 2,
            }
        },
        computed:{
            bitrixStore(){
                return this.$store.getters.cacheData;
            }
        },
        watch:{
            areaValue: function () {
                this.calculationFormula();
            },
            floorValue: function () {
                this.calculationFormula();
            }
        },
        methods:{
            openListMaterial(codeMaterial){
                let materialList = event.target.offsetParent;                // получаем оболочку списка
                if(this.arMaterial[codeMaterial].styleList === ''){         // если поле стиля пустое - значит этот клик на открытие списка
                    this.closeAllListMaterial(codeMaterial);               // закрываем все элементы, кроме этого
                    let list = materialList.querySelectorAll('.list')[0]; // получаем список
                    this.arMaterial[codeMaterial].styleList = 'width:' + list.offsetWidth + 'px; height: ' + (list.offsetHeight + 25) + 'px; opacity: 1'; // записываем стиль списка при открывании
                    this.arMaterial[codeMaterial].styleWrapMaterial = 'width:' + (materialList.offsetWidth + 10) + 'px;';                                // записываем стиль оболчоку списка при открывании
                    this.arMaterial[codeMaterial].nameSelectedMaterial = this.arMaterial[codeMaterial].NAME + ':';                                      // заменяем текст в выбранном списке
                    this.arMaterial[codeMaterial].tmpTextWidth = materialList.querySelectorAll('.name-material')[0].offsetWidth;                       // запоминмаем ширину текста до открытия
                    this.arMaterial[codeMaterial].tmpWrapWidth = materialList.offsetWidth + 10;                                                       // запоминмаем ширину оболочки до открытия
                } else {                                                                                                                                    // значит клик на закрытие
                    let deltaWidthText = materialList.querySelectorAll('.name-material')[0].offsetWidth - this.arMaterial[codeMaterial].tmpTextWidth - 4;  // разница между шириной текста до открытие и после закрытия
                    this.arMaterial[codeMaterial].styleWrapMaterial = 'width:' + (this.arMaterial[codeMaterial].tmpWrapWidth + deltaWidthText) + 'px;';   // изменяем ширину оболочки в зависимости от разницы текста ( для плавногог смещения)
                    this.closeListMaterial(codeMaterial);                                                                                                // закрываем список
                }
            },
            closeAllListMaterial(codeMaterial){
                for (let material in this.arMaterial ) {
                    if(codeMaterial !== material){         // исключение на закрытие элемента по кторому был клик
                        this.closeListMaterial(material); // закрываем список
                    }
                }
            },
            closeListMaterial(codeMaterial){
                this.arMaterial[codeMaterial].styleList  = '';
                this.arMaterial[codeMaterial].nameSelectedMaterial = this.arMaterial[codeMaterial].nameSelectedMaterial.replace(':', '');
                setTimeout(() => this.arMaterial[codeMaterial].styleWrapMaterial = '', 400);
            },
            changeMaterial(codeMaterial, materialType){
                this.arMaterial[codeMaterial].nameSelectedMaterial = materialType.NAME;     // записываем имя выбранного материала в заголовок списка
                this.arMaterial[codeMaterial].imgSelectedMaterial = materialType.PICTURE;  // записываем изображение выбранного материала
                this.arMaterial[codeMaterial].priceSelectedMaterial = materialType.PRICE; // записываем цену выбранного материала

                let deltaWidthText = event.target.offsetWidth - this.arMaterial[codeMaterial].tmpTextWidth; // разница между шириной текста до открытие и после закрытия

                this.arMaterial[codeMaterial].styleWrapMaterial = 'width:' + (this.arMaterial[codeMaterial].tmpWrapWidth + deltaWidthText) + 'px;'; // изменяем ширину оболочки в зависимости от разницы текста ( для плавногог смещения)
                this.closeListMaterial(codeMaterial);                                                                                              // закрываем список

                this.calculationFormula();
                setTimeout(()=>{
                    this.$emit('created');
                }, 200)
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
            created(data){
                this.arResult = data.ITEMS;
                for (let item in this.arResult ) {
                    let fields = this.arResult[item].arFields;
                    let property = this.arResult[item].arProperty;
                    if(typeof this.arMaterial[fields.SECTION_INFO.CODE] === 'undefined'){ // если такой материал существет в массиве
                        this.arMaterial[fields.SECTION_INFO.CODE] = fields.SECTION_INFO; // записываем информацию о нем
                        this.arMaterial[fields.SECTION_INFO.CODE]['ITEMS'] = [{'NAME': fields.NAME, 'CODE': fields.CODE, 'PICTURE': fields.PREVIEW_PICTURE_INFO ? fields.PREVIEW_PICTURE_INFO.SRC: '', 'PRICE': property.PRICE_MATERIAL.VALUE}]; // первая запись о типе материала

                        this.$set(this.arMaterial[fields.SECTION_INFO.CODE], 'imgSelectedMaterial', fields.PREVIEW_PICTURE_INFO ? fields.PREVIEW_PICTURE_INFO.SRC: ''); // записываем изоборажение в выбранные параметры конфигуратора первого маетраила
                        this.$set(this.arMaterial[fields.SECTION_INFO.CODE], 'nameSelectedMaterial', fields.SECTION_INFO.NAME);       // создаем поле для имя выбранного конфигуратора
                        this.$set(this.arMaterial[fields.SECTION_INFO.CODE], 'priceSelectedMaterial', '0');                           // создаем поле для имя выбранного конфигуратора
                        this.$set(this.arMaterial[fields.SECTION_INFO.CODE], 'styleList', '');                                      // создаем поле для стиля показа материалов
                        this.$set(this.arMaterial[fields.SECTION_INFO.CODE], 'styleWrapMaterial', '');                             // создаем поле для стиля оболчоки при показе материала

                    } else { // если запись уже существет
                        this.arMaterial[fields.SECTION_INFO.CODE]['ITEMS'].push({'NAME': fields.NAME, 'CODE': fields.CODE, 'PICTURE': fields.PREVIEW_PICTURE_INFO ? fields.PREVIEW_PICTURE_INFO.SRC: '', 'PRICE': property.PRICE_MATERIAL.VALUE}); // добавляем тип материала
                    }
                }
                this.calculationFormula();
                setTimeout(()=>{
                    this.$emit('created');
                }, 200)
            },
            calculationFormula(){
                //console.log(this.arMaterial);
                this.resultPrice = 0;

                this.resultPrice += this.areaValue * (Number(this.arMaterial['wall_material'].priceSelectedMaterial.replace(' ', '')) / 2);
                if(this.floorValue > 1){
                    this.resultPrice += this.areaValue * (this.floorValue *  0.3) * (Number(this.arMaterial['wall_material'].priceSelectedMaterial.replace(' ', '')) / 2);
                }
                this.resultPrice += this.areaValue * Number(this.arMaterial['foundation'].priceSelectedMaterial.replace(' ', ''));
                this.resultPrice += this.areaValue * this.floorValue * Number(this.arMaterial['facade'].priceSelectedMaterial.replace(' ', ''));
                this.resultPrice += this.areaValue * Number(this.arMaterial['roof'].priceSelectedMaterial.replace(' ', ''));
            }
        },
        created() {
            if(!this.bitrixStore[this.arFilter.IBLOCK_ID]) {
                getClBlockElement.methods.GetList(this.arSort, this.arFilter, false, this.arNuvParam, this.arSelect).then((data) => {
                    this.created(data)
                    this.$store.dispatch('receiveCacheData', {id: this.arFilter.IBLOCK_ID, cacheData: data})
                })
            } else {
                this.created(this.bitrixStore[this.arFilter.IBLOCK_ID])
            }
        },

    }
</script>

<style scoped>

</style>