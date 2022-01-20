export default {
    actions: {
        async receiveAppClass(ctx, {
            appClass: appClass,
            showSeparator: showSeparator,
        }) {
            if (typeof showSeparator === 'undefined') {
                showSeparator = true;
            }
            if (typeof appClass === 'undefined') {
                appClass = '';
            }
            let arStyle = {
                appClass: appClass,
                showSeparator: showSeparator,
            };
            //document.getElementsByTagName('body')[0].style.overflow = 'hidden';
            ctx.commit('updateAppClass', arStyle)
        }
    },
    mutations: {
        updateAppClass(state, arStyle) {
            state.arStyle = arStyle;
        }
    },
    state: {
        arStyle: {
            appClass: {},
            showSeparator: true,
        },
    },
    getters: {
        getAppClass(state) {
            return state.arStyle
        }
    },
}