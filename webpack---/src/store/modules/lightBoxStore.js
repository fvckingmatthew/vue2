//import {searchElement} from "../../jsFunction/searchElement";


export default {
    actions: {
        async receiveArSrcImg(ctx, {
            src: srcImg,
            title: title,
            ind: ind
        }) {
            let arImg = [];

            //console.log(searchElement.methods.parent(targetElement, 'light-box-item').attributes.lightboxcode.value);
            /*let lightBoxElem = searchElement.methods.parent(targetElement, 'light-box-item');
            let lightBoxElemCode = lightBoxElem.attributes.lightboxcode.value;

            let arLightBoxElem = document.querySelectorAll('[lightboxcode="' + lightBoxElemCode + '"]');
            for(let i in arLightBoxElem){

                console.log(arLightBoxElem[i].attributes)
            }*/
            //document.getElementsByTagName('body')[0].style.overflow = 'hidden';

            if (typeof ind === 'undefined') {
                ind = 0;
            }
            if (typeof title === 'undefined') {
                title = '';
            }

            /* arImg = [{
                 srcImg: srcImg,
                 name: name,
                 // index: index,
             }];*/


            arImg.push({
                src: srcImg,
                title: title,
                ind: ind
            });

            // console.log(arImg);
            ctx.commit('updateArSrcImg', arImg)
        }
    },
    mutations: {
        updateArSrcImg(state, arImg) {
            state.arImg = arImg;
        }
    },
    state: {
        arImg: {},
    },
    getters: {
        getImgGallery(state) {
            return state.arImg
        }
    },
}