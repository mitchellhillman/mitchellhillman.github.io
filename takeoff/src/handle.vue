<script>
    export default {
        props: ['point'],    
        computed: {
            point: function () {
                this._props.point
                return {
                    x: this.point.split(',')[0],
                    y: this.point.split(',')[1]
                }
            }
        }
    }
</script>
<template>
    <circle cx="point.x" cy="point.y" r="50" stroke="rgba(0,0,0,1)" fill="rgba(255,255,255,1)" stroke-width="1"/>
</template>