export default {
    actions: {
        receiveCacheData(ctx, {
            id: id,
            cacheData: cacheData
        }) {
            ctx.commit('setCacheData', {
                cacheData,
                id
            });
        }
    },
    mutations: {
        setCacheData(state, {
            cacheData: cacheData,
            id: id
        }) {
            state.cacheData[id] = cacheData;
        }
    },
    state: {
        cacheData: {}
    },
    getters: {
        cacheData(state) {
            return state.cacheData
        }
    },
}