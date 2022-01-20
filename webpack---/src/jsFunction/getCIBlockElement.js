import Vue from "vue";
import store from '../store/index';
import device from 'vue-device-detector-js'
Vue.use(device);

const axios = require('axios');

export const getClBlockElement = {
    methods: {
        GetList: function(arSort, arFilter, arGroupBy, arNavStartParams, arSelect, checkProgress = true) {

            let deviceDetector = Vue.prototype.$device;
            let deviceType = ''

            if (deviceDetector.isDesktop) {
                deviceType = 'desktop';
            } else if (deviceDetector.isTablet || (deviceDetector.client.name.toLowerCase().includes('mobile') && window.innerWidth >= 769)) {
                deviceType = 'tablet';
            } else if (deviceDetector.isMobile || (deviceDetector.client.name.toLowerCase().includes('mobile') && window.innerWidth <= 768)) {
                deviceType = 'mobile';
            }

            if (checkProgress) {
                store.dispatch('receiveIntroStatus', 1);
            }
            let urlPost = Vue.prototype.$hostname + '/backComponents/CallToServer.php';
            return axios
                .post(urlPost, {
                    arSort: arSort,
                    arFilter: arFilter,
                    arGroupBy: arGroupBy,
                    arNavStartParams: arNavStartParams,
                    arSelect: arSelect,
                    device: deviceType,
                })
                .then((response) => {
                    if (checkProgress) {
                        store.dispatch('receiveIntroStatus', -1);
                    }
                    return response.data;
                })
                .catch((error) => {
                    console.log(error);
                    return null;
                })
        },

        getFieldsForm: function(formId, getOnlyFields, sort, order, arFilter) {


            let urlPost = Vue.prototype.$hostname + '/backComponents/GetFormFields.php';

            return axios
                .post(urlPost, {
                    formId: formId,
                    getOnlyFields: getOnlyFields,
                    sort: sort,
                    order: order,
                    arFilter: arFilter
                })
                .then((response) => {
                    return response.data;
                })
                .catch((error) => {
                    console.log(error);
                    return null;
                })

        }
    },
}