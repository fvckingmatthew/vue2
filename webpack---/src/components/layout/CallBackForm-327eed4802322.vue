<template>
    <transition name="pop-up-form">
        <div class="pop-up-wrap" v-if="show" @click="closeForm()">
            <div class="form-call-back" @click="stopPropagation()">
                <div class="block-from">
                    <div class="title-wrap">
                        <h1>{{getParamForm.title}}</h1>
                        <p class="subtitle">Оставьте свои контактные данные и мы обязательно с вами свяжемся</p>
                    </div>

                    <form>
                        <div class="list-fields" :class="[{'hidden': sendSuccess || sendCheck}]">
                            <div class="field-form" v-for="(field, i) in arResult" :key="i" :class="[{'hiddenField': field.COMMENTS}]">
                                <input type="text"
                                       v-model="arValues['form_' + field.FIELD_TYPE + '_' + field.ANSWER_ID]"
                                       :class="[{'error': field.error}]"
                                >
                                <span>{{field.TITLE}}<i v-if="field.REQUIRED === 'Y'">*</i></span>
                            </div>
                        </div>

                        <transition name="pop-up-form">
                            <h2 v-if="sendSuccess" class="success-form">Ваше сообщение отправленно</h2>
                        </transition>

                        <transition name="pop-up-form">
                            <h2 v-if="sendCheck" class="success-form">Ваше сообщение проверяется</h2>
                        </transition>

                        <div class="send-block">
                            <p>нажимая на кнопку «Отправить» вы даете согласие на <base-button :link="'/privacy-policy/'" :text="'обработку персональных данных'"/></p>
                            <base-button @clickBtn="sendMail(getParamForm.id, arValues)"
                                         :text="'отправить'" :link="'javascript:void(0);'"
                                         :type-btn="typeBtn"
                                         :class="[{'disabled': disableButton}]"
                            />
                        </div>
                    </form>
                </div>

                <div class="line-close" @click="closeForm()"/>
            </div>

        </div>
    </transition>
</template>

<script>
    import {getClBlockElement} from "../../jsFunction/getCIBlockElement";
    import BaseButton from "./BaseButton";
    import { VueReCaptcha } from 'vue-recaptcha-v3';
    import Vue from "vue";
    import {scrollStyle} from "../../jsFunction/hiddenScroll";

    Vue.use(VueReCaptcha, { siteKey: '6LcZhfUaAAAAAIvhXgSqeq80yPDE2Mp5VU21_S71' })
    const axios = require('axios');

    export default {
        name: "CallBackForm",
        components: {BaseButton },
        data(){
          return{
              show: false,
              arResult: [],
              arValues: {},
              checkErrorInput: 0,
              disableButton: false,
              sendSuccess: false,
              sendCheck: false,
              typeBtn: 'secondary-button',
              reCaptcha: {},
          }
        },
        watch:{
            getParamForm: function (paramForm) {
                if(paramForm.id !== 0){
                    this.updateFieldsForm(paramForm);
                    scrollStyle.methods.hidden(false,true);
                }
            }
        },
        computed: {
            getParamForm(){
                return this.$store.getters.getParamForm;
            },
            bitrixStore(){
                return this.$store.getters.cacheData;
            }
        },
        methods:{
            createFieldsForm(data){
                this.arResult = data;
                for (let i in this.arResult) {
                    if (this.arResult[i].COMMENTS === 'hidden') {
                        this.$set(this.arValues, ['form_' + this.arResult[i].FIELD_TYPE + '_' + this.arResult[i].ANSWER_ID], window.location.href);
                    } else {
                        this.$set(this.arValues, ['form_' + this.arResult[i].FIELD_TYPE + '_' + this.arResult[i].ANSWER_ID], '');
                    }
                }
                this.show = true;
            },
            updateFieldsForm(paramForm){
                this.arValues = {};

                let cacheId = 'Form_' + paramForm.id;
                if(!this.bitrixStore[cacheId]) {
                    getClBlockElement.methods.getFieldsForm(paramForm.id, paramForm.getOnlyFields, paramForm.sort, paramForm.order, paramForm.arFilter).then((data) => {
                        this.createFieldsForm(data);

                        this.$store.dispatch('receiveCacheData', {id: cacheId, cacheData: data})
                    })
                } else {
                    this.createFieldsForm(this.bitrixStore[cacheId]);
                }
            },
            async recaptcha() {

                await this.$recaptchaLoaded()
                let token = await this.$recaptcha('sendMail');
                return token;
            },
            sendMail(formId, arValues){
                this.checkErrorInput = 0;
                for(let input in arValues){
                    let idEmptyInput = input.replace(/[^+\d]/g, '');
                    if(arValues[input].length <= 1){
                        for(let i in this.arResult){
                            if(this.arResult[i].ANSWER_ID === idEmptyInput && this.arResult[i].REQUIRED === 'Y'){
                                this.$set(this.arResult[i], 'error', true);
                                this.checkErrorInput++;
                            }
                        }
                    } else {
                        for(let i in this.arResult) {
                            if(this.arResult[i].ANSWER_ID === idEmptyInput && this.arResult[i].REQUIRED === 'Y'){
                                this.$set(this.arResult[i], 'error', false);
                                this.checkErrorInput--;
                            }
                        }
                    }
                }

                if(this.checkErrorInput < 0) {
                    this.sendCheck = true;
                    this.$metrika.reachGoal('ZVONOK');
                    this.recaptcha().then((token) => {
                        this.disableButton = true;
                        let urlPost = Vue.prototype.$hostname + '/backComponents/WriteWebForm.php';
                        return axios
                            .post(urlPost, {
                                formId: formId,
                                arValues: arValues,
                                token: token,
                            })
                            .then((response) => {

                                setTimeout(()=> {
                                    this.sendSuccess = true;
                                    this.sendCheck = false;
                                }, 500)
                                setTimeout(()=> this.activeForm(), 6000)

                                return response.data;
                            })
                            .catch((error) => {
                                console.log(error);
                                return null;
                            })
                    });
                }
            },

            closeForm(){
                this.show = false;
                scrollStyle.methods.show();
            },
            stopPropagation(){
                event.stopPropagation()
            },
            activeForm(){
                this.sendSuccess = false;
                this.disableButton = false
            },
            handleResize(){
                if(window.innerWidth < 768){
                    this.typeBtn = 'base-btn revers';
                } else {
                    this.typeBtn = 'secondary-button';
                }
            },
        },
        created() {
            window.addEventListener('resize', this.handleResize);
            if(window.innerWidth < 768){
                this.typeBtn = 'base-btn revers';
            } else {
                this.typeBtn = 'secondary-button';
            }

        }
    }
</script>

<style scoped>

</style>