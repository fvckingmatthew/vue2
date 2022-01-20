export const hiddenWatermark = {
    methods: {
        set: function(i, realParam, parentClassImg) {
            let widthContainer = 0;
            let heightContainer = 0;
            let realSizeBackWatermark = 2500;
            let realSizeWatermark = 1827;

            if (document.querySelectorAll(parentClassImg + ' > img')[i]) {
                widthContainer = document.querySelectorAll(parentClassImg + '> img')[i].getBoundingClientRect().width;
                heightContainer = document.querySelectorAll(parentClassImg + '> img')[i].getBoundingClientRect().height;
            }


            //if(typeof document.querySelectorAll('.project-block .project')[i] !== 'undefined' && document.querySelectorAll('.project-block .project')[i].classList.contains('heightSecondImg')){
            let percentagePictureWH = realParam.WIDTH / realParam.HEIGHT;
            let deltaHeightContainer = heightContainer - (widthContainer / percentagePictureWH);
            let realWidthContainer = (deltaHeightContainer * percentagePictureWH) + widthContainer;
            let zoomPercentage = realWidthContainer / realParam.WIDTH;
            if (realParam.WIDTH < realSizeWatermark) {
                //zoomPercentage = (widthContainer * 100) / realParam.WIDTH;
                realSizeBackWatermark = (realParam.WIDTH / realSizeWatermark) * realSizeBackWatermark;
            }
            let sizeBackWatermark = zoomPercentage * realSizeBackWatermark;
            let leftPositionBackWatermark = ((sizeBackWatermark - widthContainer) / 2) * (-1);
            let topPositionBackWatermark = ((sizeBackWatermark - heightContainer) / 2) * (-1);
            //}

            //console.log(zoomPercentage)

            //this.styleBackWatermark[i] = 'width:' + sizeBackWatermark + 'px; height:' + sizeBackWatermark + 'px; left:' + leftPositionBackWatermark+ 'px; top:' + topPositionBackWatermark + 'px;';
            return 'width:' + sizeBackWatermark + 'px; height:' + sizeBackWatermark + 'px; left:' + leftPositionBackWatermark + 'px; top:' + topPositionBackWatermark + 'px;';
        },
    }
}