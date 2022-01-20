export const scrollStyle = {
    data() {
        return {
            timerStyle: null,
        }
    },
    methods: {
        hidden: function(time, paddingSet = false) {
            let body = document.getElementsByTagName('body')[0];
            //let app = document.querySelectorAll('#app')[0];
            let padding = 0;
            let isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;


            if (window.innerWidth > 1199 && !isMac && paddingSet) {
                padding = 8;
            }

            body.style = 'overflow: hidden; padding-right: ' + padding + 'px;';


            if (time > 0 && typeof time !== 'undefined') {
                clearTimeout(this.timerStyle);
                this.timerStyle = setTimeout(() => {
                    body.style = '';
                }, time)
            }
        },
        show: function() {
            let body = document.getElementsByTagName('body')[0];
            body.style = '';
        }
    },
};