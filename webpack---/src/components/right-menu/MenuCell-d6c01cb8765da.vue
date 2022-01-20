<template>
    <div class="menu-cell"
         @mouseover="$emit('mouseover')"
         @mouseout="$emit('mouseout')"
         @click="[changePage(path)],[$emit('click')]"
         :class="[{'selected': this.$route.path === path}]">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "MenuCell",
        props: {
            path: String,
        },
        methods:{
            changePage(path){
                if(path !== this.$route.path && path !== ''){
                    this.$router.push(path);
                    this.$emit('closeRightMenu');
                }
            },
        }
    }
</script>

<style scoped>

</style>