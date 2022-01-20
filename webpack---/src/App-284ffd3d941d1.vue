<template>
  <div id="app" class="main-wrap" :style="paddingAppTop">
    <intro :height-header="heightHeader"/>
    <header-bar :showSeparator="getAppClass.showSeparator"/>
    <transition name="change-page" mode="out-in" :duration="{leave: 900 }">
      <router-view/>
    </transition>
    <footer-bar  v-if="!disableFooter" :show-contacts="true"/>
  </div>
</template>

<script>
  import HeaderBar from './components/HeaderBar'
  import FooterBar from './components/FooterBar'
  import intro from './components/intro'

export default {
  name: 'App',
  components: {
    intro,
    HeaderBar,
    FooterBar,
  },
  data(){
    return{
      disableFooter: false,
      paddingAppTop: '',
      heightHeader: 0,
      bodyClass: '',
      onpopstateStatus: false,
      tmpRoutePath: this.$route.path,
      timerLoadedContent: null,
    }
  },
  computed: {
    getAppClass(){
      return this.$store.getters.getAppClass;
    },
    getProgressAxios(){
      return this.$store.getters.getProgressAxios; // чекаем статус загузки контента
    },
    getParamScroll(){
      return this.$store.getters.getParamScroll; // чекаем статус загузки контента
    },
  },
  watch: {
    'getProgressAxios.statusResponseAxios' (value){

      if(value){
        this.updatePaddingTop();

      } else {
        if(this.tmpRoutePath !== this.$route.path){                 // был переход на новую страницу
          window.scrollTo(0, 0);                                   // установка скролла в 0
          this.tmpRoutePath = this.$route.path;                   // запомнить старинцу
        }
      }
    },
    'getProgressAxios.countRequestAxios' (value){
      if(value === 0){   // если 0 - количество вопросов совпадает с количеством ответов
        clearTimeout(this.timerDelayLoaded)
        this.timerLoadedContent = window.setTimeout(() =>
                {
                  if(this.onpopstateStatus){                                    // если был переход по кнопкам назад - вперед
                    this.onpopstateStatus = false;                             // сбрасываем статус перехода по кнопкам назад - вперед
                    window.scrollTo(0, this.getParamScroll[this.$route.path]);// возвращаем позицию скролла
                  }
                },
                200);
      }
    },
    'getAppClass.appClass'(classValue) {
      let body = document.getElementsByTagName('body')[0];
      if(classValue){
        if(this.bodyClass !== ''){
          body.classList.remove(this.bodyClass);
        }
        body.classList.add(classValue);
        this.bodyClass = classValue;
      } else if(this.bodyClass !== ''){
        body.classList.remove(this.bodyClass);
      }
    },
    '$route' (to, from){
      this.$store.dispatch('receiveParamScroll', {pathRoute: from.path}) // запоминаем позицию скролла для каждой стр
    }
  },
  methods:{
    updatePaddingTop(){
      let element = document.querySelectorAll('.header');
      let matchHeight = 0;
      let strStyle = '';
      element.forEach(function(item) {
        matchHeight += item.offsetHeight;
        let marginBottom = window.getComputedStyle(item).marginBottom;
        let marginTop = window.getComputedStyle(item).marginTop;
        if(parseInt(marginBottom.match(/\d+/)) > 0){
          strStyle += ' + ' + marginBottom;
        }
        if(parseInt(marginTop.match(/\d+/)) > 0){
          strStyle += ' + ' + marginTop;
        }
      });
      this.heightHeader = matchHeight;
      this.paddingAppTop = 'padding-top: calc(' +  matchHeight + 'px' +  strStyle + ');';
    },
    handleResize(){
      this.updatePaddingTop();

      let html = document.getElementsByTagName('html')[0];
      let isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

      if(window.innerWidth > 1199 && !isMac){
        html.classList.add('scroll-style');
      } else {
        html.classList.remove('scroll-style');
      }
    },

  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.$store.dispatch('receiveAppClass' ,{appClass: 'bgColorLightGray' , showSeparator: true} );
    let html = document.getElementsByTagName('html')[0];
    let isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

    if(window.innerWidth > 1199 && !isMac){
      html.classList.add('scroll-style');
    }

    let appVue = this;
    window.onpopstate = function() {
      appVue.onpopstateStatus = true; // был переход с помощью кнопок назад - вперед
    };

  },
  mounted() {
    if((document.location.pathname === '/') || (document.location.pathname === '/contacts/')){
      this.disableFooter = true;
    }

  },
  updated() {
    if((document.location.pathname === '/') || (document.location.pathname === '/contacts/')){
      this.disableFooter = true;
    } else {
      setTimeout(()=> {
        this.disableFooter = false;
      }, 1000)
    }
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
}

</script>

<style>

</style>
