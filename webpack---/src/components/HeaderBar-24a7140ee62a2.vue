<template>
    <div class="header container" :class="[{ 'stopAnimation': getIntroStatus}]" :style="widthStyle">
        <div class="header-bar row">
            <logo class="header-logo col-xxl-4 col-5 col-auto"/>
            <menu-link  class="top-menu animation-show-move-down-head-bar col-xxl-12 col-11" :arMenu="$topMenu" @openSelectedMenu="openSelectedMenu($event)"/>
            <div itemscope itemtype="http://schema.org/Organization" class="right-side-bar animation-show-move-down-head-bar col-xl-7 col-auto offset-auto">
                 <phone  class="phone hide-line"/>
                 <div class="btn-burger animation-show-deformation-burg" @click="openRightMenu()" :class="{'open': showRightMenu}">
                     <span/>
                 </div>
            </div>
         </div>
         <separator :show="statusSeparator" :static-separator="true"/>

        <selected-menu :id-block="this.idBlock" @closeSelectedMenu="closeSelectedMenu()"/>

        <right-menu :class="{'show-right-menu': showRightMenu}" :count-favourite="countFavourite" :active-line-btn="activeLineBtn"  @closeRightMenu="closeRightMenu()"/>

     </div>
 </template>

 <script>
     import Phone from './layout/contacts/Phone'
     import Logo from './layout/Logo'
     import MenuLink from './top_menu/MenuLink'
     import Separator from './layout/Separator'
     import SelectedMenu from "./top_menu/part/selected-menu";
     import RightMenu from "./right-menu/RightMenu";
     import {cookie} from "../jsFunction/cookie";
     import {scrollStyle} from "../jsFunction/hiddenScroll";
     export default {
         name: "HeaderBar",
         components:{
             RightMenu,
             SelectedMenu,
             Phone,
             Logo,
             MenuLink,
             Separator
         },
         data(){
             return{
                 statusSeparator: true,
                 idBlock: 0,
                 showRightMenu: false,
                 countFavourite: 0,
                 widthStyle: '',
                 activeLineBtn: false,
             }
         },
         props:{
             showSeparator: Boolean,
         },
         watch:{
             showSeparator: function (status) {
                 this.statusSeparator = status;
             },
             '$route.path': function () {
                 this.closeSelectedMenu();
                 this.closeRightMenu();
             }
         },
         computed: {
             getIntroStatus(){
                 return this.$store.getters.getIntroStatus;
             },
         },


         methods: {
             openSelectedMenu(idBlock){
                 this.idBlock = idBlock;
                 scrollStyle.methods.hidden(false,true);
             },
             closeSelectedMenu(){
                 this.idBlock = 0;
                 scrollStyle.methods.show();
             },

             openRightMenu(){
                 document.querySelectorAll('.right-menu')[0].style.display = 'block'
                 setTimeout( () => this.showRightMenu = true, 100)

                 scrollStyle.methods.hidden(false,true);

                 let cookies = cookie.methods.get('favouriteId');

                 if(cookies !== null && cookies !== ''){
                     this.countFavourite = cookies.split(',').length;
                 }

                 if(window.innerWidth < 768 && this.$route.path === '/projects/'){
                     this.activeLineBtn = true;
                 } else {
                     this.activeLineBtn = false;
                 }
             },
             closeRightMenu(){
                 this.showRightMenu = false;
                 setTimeout( () => document.querySelectorAll('.right-menu')[0].style.display = 'none', 500 )

                 scrollStyle.methods.show();
             },
         },
     }
 </script>

 <style scoped>

 </style>