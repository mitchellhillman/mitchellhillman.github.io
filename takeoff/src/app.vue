<script>
    import handles from './handles.vue'
    export default {
        components: {
            handles
        },
        data() {
            return {
                draftPolygon: [],
                polygons: [],
                start: undefined
            }
        },
        methods: {
            drawPolygon: function (e) {
                if(this.start === undefined) {
                    this.start = {x: e.offsetX, y: e.offsetY}
                }
                this.draftPolygon = this.draftPolygon + e.offsetX + ',' + e.offsetY + ' '
            },
            closePolygon: function (e) {
                this.polygons.push(this.draftPolygon)
                this.draftPolygon = []
                this.start = undefined
            }
        }
    }
</script>
<template>
    <div>
        <h1 class="title">Takeoff</h1>
        <div class="view">
            <svg class="svg" width="842" height="569">
                <image v-on:click="drawPolygon" xlink:href="src/img/plan.jpg" x="0" y="0"></image>                
                <polygon 
                    v-on:click="drawPolygon" 
                    v-for="polygon in polygons" 
                    v-bind:key="polygon"
                    v-bind:points="polygon" 
                    fill="rgba(255,0,255,0.6)" stroke="rgba(255,0,255,0.8)" />
                <polygon 
                     v-on:click="drawPolygon" 
                    v-if="draftPolygon" 
                    v-bind:points="draftPolygon" 
                    fill="rgba(255,100,255,0.6)" stroke="rgba(255,100,255,0.8)" />
                <circle v-if="start" v-on:click="closePolygon" v-bind:cx="start.x" v-bind:cy="start.y" r="20" stroke="transparent" fill="rgba(255,0,255,0.1)" stroke-width="1"/>
            </svg>
        </div>
        <h3>Polygons:</h3>
        <p>{{ polygons }}</p>
        <h3>TODO:</h3>
        <ol>
            <li>More polygon features
                <ol>
                    <li>Draggable</li>
                    <li>Adjustable vertices</li>
                    <li>Selected state</li>
                    <li>Deletable</li>
                    <li>Prevent invalid polygons</li>
                </ol>
            </li>
            <li>Add line tool to draw walls and set scale</li>
            <li>Compute polygon area? (probably a Back End Task)</li>
        </ol>
    </div>
</template>
<style scoped>
    .title {
        text-align: center;
    }
    .view {
        border: 1px solid black;
        margin: 20px auto;
        display: block;
        overflow-x: scroll;
        overflow-y: scroll;
        width: 640px;
        height: 480px;
    }
</style>