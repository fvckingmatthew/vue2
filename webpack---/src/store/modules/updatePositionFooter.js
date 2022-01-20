export default {
    actions: {
        async receiveCheckPosition(ctx) {
            ctx.commit('updateCheckPosition');
        }
    },
    mutations: {
        updateCheckPosition(state) {
            state.checkPosition = !state.checkPosition;
        }
    },
    state: {
        checkPosition: false,
    },
    getters: {
        startCheckPosition(state) {
            return state.checkPosition
        }
    },
}