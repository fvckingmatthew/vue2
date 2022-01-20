<template>
    <a :class="typeBtn" :href="link" @click="$emit('clickBtn'), routeDetailPage()">
        
            <span v-if="typeBtn === 'link-arrow-right'" v-html="arrowInText"/>
            <span v-else v-html="text"></span>

    </a>
</template>

<script>

    export default {
        name: "BaseButton",
        props:['text','link','typeBtn'],
        data(){
            return{
                arrowInText: '',
            }
        },
        watch:{
            text: function () {
                if(this.typeBtn === 'link-arrow-right'){
                    this.arrowInText = '';
                    this.pushArrowInText()
                }
            }
        },
        methods:{
            routeDetailPage(){
                if(this.link !== '' && this.link !== 'javascript:void(0);'){
                    event.preventDefault();
                    this.$router.push(this.link)
                }
            },
            pushArrowInText(){
                let arWord = this.text.split(' ');
                if(arWord.length > 1){
                    for(let i = 0; i < arWord.length - 1; i++){
                        if(arWord[i] !== ' ' && arWord[i] !== ''){
                            this.arrowInText += arWord[i] + ' ';
                        }
                    }

                    this.arrowInText += '<span class="arrowWithText">' + arWord[arWord.length - 1] + '<svg width="50" height="28" viewBox="0 0 50 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                        '<path d="M0 12.336H43.5992L33.5683 2.35308L35.9327 0L50 14L35.9327 28L33.5683 25.6469L43.5994 15.6638H0V12.336Z" fill="#383838"/>\n' +
                        '</svg>\n </span>';
                } else {
                    this.arrowInText += '<span class="arrowWithText">' + this.text + '<svg width="50" height="28" viewBox="0 0 50 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                        '<path d="M0 12.336H43.5992L33.5683 2.35308L35.9327 0L50 14L35.9327 28L33.5683 25.6469L43.5994 15.6638H0V12.336Z" fill="#383838"/>\n' +
                        '</svg>\n </span>';
                }
            }
        },
        mounted() {
            if(this.typeBtn === 'link-arrow-right'){
                this.pushArrowInText()
            }
        },
        updated() {
        }
    }
</script>

<style scoped>

</style>