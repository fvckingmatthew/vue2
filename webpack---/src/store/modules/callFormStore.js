export default {
    actions: {
        async receiveParamForm(ctx, {
            id: id,
            getOnlyFields: getOnlyFields,
            sort: sort,
            order: order,
            arFilter: arFilter,
            title: title
        }) {

            if (typeof id === 'undefined') {
                id = 0;
            }
            if (typeof title === 'undefined') {
                title = 'консультация';
            }

            let paramForm = {
                id: id,
                getOnlyFields: getOnlyFields,
                sort: sort,
                order: order,
                arFilter: arFilter,
                title: title,
            }

            ctx.commit('updateParamForm', paramForm)
        }
    },
    mutations: {
        updateParamForm(state, paramForm) {
            state.paramForm = paramForm;
        }
    },
    state: {
        paramForm: 0,
    },
    getters: {
        getParamForm(state) {
            return state.paramForm
        }
    },
}