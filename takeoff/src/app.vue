<script>
    import handles from './handles.vue'

    export default {
        components: {
            handles
        },
        data() {
            return {
                tool: "scale",
                draftPolygon: [],
                polygons: [],
                polygonStart: undefined,
                scale: {
                    yardstickLength: undefined,
                    start: undefined, 
                    end: undefined
                }
            }
        },
        methods: {
            setTool: function (tool) {
                this.tool = tool
                if(this.tool === 'scale') {
                    this.scale.start = undefined
                    this.scale.end = undefined
                }
            },
            useTool: function (e) {
                if(this.tool === 'polygon') {
                    this.drawPolygon(e)
                }
                if(this.tool === 'scale') {
                    this.drawScale(e)
                }
            },
            drawPolygon: function (e) {                
                // Close the polygon
                if(e.target.id === "closePolygonTarget") {
                    this.polygons.push(this.draftPolygon)
                    this.draftPolygon = []
                    this.polygonStart = undefined                    
                }
                // Add vertices
                else {
                    if(this.polygonStart === undefined) {
                        this.polygonStart = {x: e.offsetX, y: e.offsetY}
                    }
                    this.draftPolygon = this.draftPolygon + e.offsetX + ',' + e.offsetY + ' '
                }
            },
            drawScale: function(e) {
                if(this.scale.yardstickLength) {
                    if(this.scale.start) {
                        this.scale.end = {x: e.offsetX, y: e.offsetY}
                        this.tool = undefined
                    }
                    else {
                        this.scale.start = {x: e.offsetX, y: e.offsetY}
                    } 
                }                  
            }
        }
    }
</script>
<template>
    <div>
        <h1 class="title">Takeoff</h1>
        <h3>Tools:</h3>
        <button v-bind:disabled="(tool === 'polygon')" v-on:click="(setTool('polygon'))">Draw Polygon</button>
        <button v-bind:disabled="(tool === 'scale')" v-on:click="(setTool('scale'))">Set Scale</button>

        <p v-if="(tool === 'scale')"><label>Yardstick:</label><input type="number" v-model="scale.yardstickLength"> Feet</p>
        <div class="view">
            <svg class="svg" width="842" height="569">                
                <image v-on:click="useTool" xlink:href="src/img/plan.jpg" x="0" y="0"></image>    
                <g id="saved-elements">
                    <!-- POLYGONS -->
                    <polygon 
                        v-on:click="useTool" 
                        v-for="polygon in polygons" 
                        v-bind:key="polygon"
                        v-bind:points="polygon" 
                        fill="rgba(255,0,255,0.6)" stroke="rgba(255,0,255,0.8)" />
                    <!-- SCALE -->
                    <circle v-if="scale.start" v-bind:cx="scale.start.x" v-bind:cy="scale.start.y" r="20" stroke="transparent" fill="rgba(255,0,0,0.5)" stroke-width="1"/>
                    <line 
                        v-if="(scale.start && scale.end)" 
                        v-bind:x1="scale.start.x" 
                        v-bind:y1="scale.start.y" 
                        v-bind:x2="scale.end.x" 
                        v-bind:y2="scale.end.y" 
                        style="stroke:rgb(255,0,0);stroke-width:3" />
                    <circle v-if="scale.end" v-bind:cx="scale.end.x" v-bind:cy="scale.end.y" r="20" stroke="transparent" fill="rgba(255,0,0,0.5)" stroke-width="1"/>
                </g>
                <g id="draft-polygon">
                    <polygon 
                        v-on:click="useTool" 
                        v-if="draftPolygon" 
                        v-bind:points="draftPolygon" 
                        fill="rgba(255,100,255,0.6)" stroke="rgba(255,100,255,0.8)" />
                    <circle id="closePolygonTarget" v-if="polygonStart" v-on:click="useTool" v-bind:cx="polygonStart.x" v-bind:cy="polygonStart.y" r="20" stroke="transparent" fill="rgba(255,0,255,0.2)" stroke-width="1"/>
                </g>
            </svg>
        </div>
        <h3>Polygons:</h3>
        <p>{{ polygons }}</p>
        <h3>Scale:</h3>
        
        <div v-if="scale.end">
            <p v-if="scale.yardstickLength">{{scale.yardstickLength}} Feet</p>
            <p>{{ scale.start.x }},{{scale.start.y}} {{scale.end.x}},{{scale.end.y}}</p>
        </div>
        
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