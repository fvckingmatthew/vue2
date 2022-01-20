<template>
    <div>
        <div v-for="(menu, i) in arMenu" :key="i"  >
            <a v-if="!menu.path.includes(':code')"  class="link-menu" :href="menu.path" :class="[{'active': menu.path === $route.path}]" @click="changePage(i)">
                {{menu.name}}
            </a>
            <div v-else class="selected-menu" @click="$emit('openSelectedMenu', menu.idBlock)">
                <a class="link-menu">
                    {{menu.name}}
                </a>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "MenuLink",
        props: [
            'arMenu'
        ],
        data(){
          return{
              positionMenu: [],
              nextMenu: null
          }
        },
        watch:{
            '$route.path': function () {
                this.nextMenu = null;
            }
        },
        methods: {
            changePage(numberMenu){
                event.preventDefault();
                if(this.arMenu[numberMenu].path !== this.$route.path){
                    this.$router.push(this.arMenu[numberMenu].path);
                }
            },
        },
    }
</script>

<style scoped>

</style>