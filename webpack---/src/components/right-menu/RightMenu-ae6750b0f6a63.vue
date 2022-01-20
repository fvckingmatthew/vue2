<template>
        <div class="container right-menu">
            <div class="menu-wrap">
                <menu-cell :path="'/projects/'" class="first-line" @mouseover="hoverMenuCell('projects')"
                    @mouseout="mouseoutMenuCell()"
                >
                    <menu-cell-project @closeRightMenu="$emit('closeRightMenu')"/>
                </menu-cell>
                <menu-cell :path="'/works/'" class="blueBg first-line">
                    <menu-cell-work @closeRightMenu="$emit('closeRightMenu')"/>
                </menu-cell>
                <menu-cell :path="''" class="greenBg first-line" @mouseover="hoverMenuCell('service')" @click="triggerToggleAccordion('toggleServiceAccordion')"
                           @mouseout="mouseoutMenuCell()"
                >
                    <menu-cell-service @closeRightMenu="$emit('closeRightMenu')" :toggle-accordion="toggleServiceAccordion"/>
                </menu-cell>
                <menu-cell :path="'/company/'" class="second-line">
                    <h3>О компании</h3>
                </menu-cell>
                <menu-cell :path="''" class="second-line" @click="triggerToggleAccordion('togglePartnerAccordion')">
                    <menu-cell-partner :toggle-accordion="togglePartnerAccordion" />
                </menu-cell>
                <menu-cell :path="'/price/'" class="second-line">
                    <h3>Цены</h3>
                </menu-cell>
                <menu-cell :path="'/contacts/'" class="third-line">
                    <h4>Контакты</h4>
                </menu-cell>
                <menu-cell :path="'/favourites/'" class="third-line">
                    <div class="title-wrap-menu">
                        <h4>Избранное</h4><span v-if="countFavourite !== 0">{{countFavourite}}</span>
                    </div>
                </menu-cell>
                <menu-cell :path="'/blog/'" class="third-line">
                    <h4>Блог</h4>
                </menu-cell>
                <div class="line-close" :class="{'active': hoverLineClose || activeLineBtn}" @click="$emit('closeRightMenu')"><span></span></div>
            </div>
        </div>
</template>

<script>
    import MenuCell from "./MenuCell";
    import MenuCellProject from "./part/MenuCellProject";
    import MenuCellWork from "./part/MenuCellWork";
    import MenuCellService from "./part/MenuCellService";
    import MenuCellPartner from "./part/MenuCellPartner";

    export default {
        name: "RightMenu",
        components: {MenuCellPartner, MenuCellService, MenuCellWork, MenuCellProject, MenuCell},
        props:{
            show: Boolean,
            countFavourite: Number,
            activeLineBtn: Boolean,
        },
        data(){
            return{
                toggleServiceAccordion: false,
                togglePartnerAccordion: false,
                hoverLineClose: false,
            }
        },
        methods: {
            triggerToggleAccordion(toggle){
                this[toggle] = !this[toggle];
            },
            hoverMenuCell(valueCell){
                if((window.innerWidth >= 768 && valueCell === 'service') || (window.innerWidth < 768 && valueCell === 'projects')){
                    this.hoverLineClose = true;
                }
            },
            mouseoutMenuCell(){
                this.hoverLineClose = false;
            }
        },
    }
</script>

<style scoped>

</style>