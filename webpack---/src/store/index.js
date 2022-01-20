import Vue from 'vue'
import Vuex from 'vuex'
import introStatus from "./modules/introStatus";
import appStyle from "./modules/appStyle";
import updatePositionFooter from "./modules/updatePositionFooter"
import lightBoxStore from "./modules/lightBoxStore"
import callFormStore from "./modules/callFormStore"
import saveScrollPosition from "./modules/saveScrollPosition"
import bitrixStore from "./modules/bitrixStore"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        introStatus,
        appStyle,
        updatePositionFooter,
        lightBoxStore,
        callFormStore,
        saveScrollPosition,
        bitrixStore,
    }
})