export default {
    actions: {
        async receiveParamScroll(ctx, {
            pathRoute: pathRoute
        }) {
            ctx.commit('updateParamScroll', pathRoute)
        }
    },
    mutations: {
        updateParamScroll(state, pathRoute) {
            state.paramScroll[pathRoute] = window.pageYOffset;
        }
    },
    state: {
        paramScroll: {},
    },
    getters: {
        getParamScroll(state) {
            return state.paramScroll
        }
    },
}