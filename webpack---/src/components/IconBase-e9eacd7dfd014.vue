<template>
    <svg xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink"
         type="image/svg+xml"
         :width="width"
         :height="height"
         :viewBox=setViewBox
         role="presentation"
         :id="iconName"
         fill="none"
    >
        <g>
            <slot />
        </g>
  </svg>
</template>

<script>
    export default {
        name: "IconBase",
        props: {
            iconName: {
                type: String,
                default: 'icon'
            },
            width: {
                type: [Number, String],
                default: 26
            },
            height: {
                type: [Number, String],
                default: 26
            }
        },
        computed: {
            setViewBox(){
                return "0 0 " + this.width + " " + this.height;
            }
        }
    }
</script>

<style scoped>

</style>