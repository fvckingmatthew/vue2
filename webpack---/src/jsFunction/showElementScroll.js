import Vue from 'vue'
export const showElementScroll = {

    methods: {
        GetElements: function(parent) {
            let arElements = document.querySelectorAll(parent + ' [showScroll]'); // собераем анимированные элементы
            let result = [];
            for (let i = 0; i < arElements.length; i++) {
                let nameId = arElements[i].attributes["showScroll"].value; // записываем уникальный ID
                let selectID = parent + " [showScroll ='" + nameId + "']"; // записываем селектор для каждого элемента
                let elementPos = document.querySelector(selectID).getBoundingClientRect().top + window.pageYOffset + document.body.clientTop; // позиция элемента
                let delayAnimation = arElements[i].attributes["delay-animation"] ? Number(arElements[i].attributes["delay-animation"].value) : 0;
                let delayAnimationWidth = arElements[i].attributes["delay-animation-width"] ? Number(arElements[i].attributes["delay-animation-width"].value) : 0;
                if (isNaN(delayAnimation) || (window.innerWidth > delayAnimationWidth && delayAnimationWidth !== 0)) {
                    delayAnimation = 0;
                }
                result[nameId] = {
                    nameId: nameId,
                    selectID: selectID,
                    elementPos: elementPos,
                    visible: false,
                    delayAnimation: delayAnimation
                };
            }
            return result;
        },
        comparisonPosition: function(arElements) {
            let topScroll = window.pageYOffset; // позиция скролла
            for (let item in arElements) {
                if (document.querySelector(arElements[item].selectID) !== null) {
                    let heightElement = document.querySelector(arElements[item].selectID).offsetHeight; //высота элемента
                    if (arElements[item].elementPos - (window.innerHeight - 10) < topScroll && topScroll < arElements[item].elementPos + heightElement + 10) { // если элемент в зоне видимости

                        if (arElements[item].delayAnimation > 0) {
                            setTimeout(() => {
                                Vue.set(arElements[item], 'visible', true) // записываем статус видимости
                            }, arElements[item].delayAnimation)
                        } else {
                            Vue.set(arElements[item], 'visible', true) // записываем статус видимости
                        }
                        //arElements[item].visible = true;
                    } else {
                        Vue.set(arElements[item], 'visible', false) // записываем статус видимости
                        //arElements[item].visible = false;
                    }
                }
            }
            return arElements;
        },
    },
};