<script>
    import handle from './handle.vue'
    export default {
        props: ['polygon'],
        computed: {
            points: function () {
                console.log(this.polygon.split(' '))
                return this.polygon.split(' ')
            }
        }
    }
</script>
<template>
    <g>
        <handle v-for="point in points" 
            v-bind:key="point" 
            v-bind:point="point"></handle>
    </g>
</template>