<template>
        <div class="separator" >
            <transition name="show-separator">
                <i v-if="(getProgressAxios.statusResponseAxios || staticSeparator) && show"/>
            </transition>
        </div>
</template>

<script>
    export default {
        name: "Separator",
        props:['show', 'staticSeparator'],
        computed: {
            getIntroStatus(){
                return this.$store.getters.getIntroStatus;
            },
            getProgressAxios(){
                return this.$store.getters.getProgressAxios; // чекаем статус загузки контента
            },
        },
    }
</script>

<style scoped>

</style>