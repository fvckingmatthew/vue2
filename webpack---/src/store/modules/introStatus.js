export default {
    actions: {
        async receiveIntroStatus(ctx, vector) {
            ctx.commit('updateIntroStatus', vector); // считаем прогресс загузки стр
        }
    },
    mutations: {
        updateIntroStatus(state, vector) {

            state.progressAxios.countRequestAxios += vector // считаем кол-во запросов и ответов. запрос +1, ответ -1. В итоге должен быть 0

            if (vector > 0) {
                state.progressAxios.maxRequestAxios += vector; // считаем только запросы
                clearTimeout(state.timerLoadedContent)
                clearTimeout(state.timerLeaveIntro)
            } else {
                state.progressAxios.loadedResponseAxios -= vector; // считаем только ответы
            }

            if (state.progressAxios.countRequestAxios === 0) { // если 0 - количество вопросов совпадает с количеством ответов
                clearTimeout(state.timerDelayLoaded)
                state.timerLoadedContent = window.setTimeout(() => {
                        state.progressAxios.statusResponseAxios = true; // статус заугрзки контента через axios
                        state.progressAxios.introSPA = false; // интро для переходова между стр
                    },
                    400);
                state.timerLeaveIntro = window.setTimeout(() => {
                        state.intro = false; // скрываем прелоадер
                    },
                    900);
            } else {
                state.progressAxios.statusResponseAxios = false; // статус заугрзки контента через axios
                if (state.progressAxios.countRequestAxios === 1) {
                    state.timerDelayLoaded = window.setTimeout(() => {
                        if (state.progressAxios.countRequestAxios !== 0) {
                            state.progressAxios.introSPA = true;
                        }
                    }, 2000)
                }
            }


        }
    },
    state: {
        intro: true,
        progressAxios: {
            countRequestAxios: 0,
            maxRequestAxios: 0,
            loadedResponseAxios: 0,
            statusResponseAxios: false,
            introSPA: false,
        },
        timerLoadedContent: {},
        timerLeaveIntro: {},
        timerDelayLoaded: {},
    },
    getters: {
        getIntroStatus(state) {
            return state.intro
        },
        getProgressAxios(state) {
            return state.progressAxios
        }
    },
}