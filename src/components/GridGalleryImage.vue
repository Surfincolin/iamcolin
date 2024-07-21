<script setup lang="ts">
import { getImage, getProjectId } from "../utils/galleryImages"

const props = defineProps({
    imgFile: {
        type: String,
        required: true
    },
    gridArea: {
        type: String,
        required: true
    },
    size: Number,
    transX: Number,
    transY: Number
})

const imgUrl = await getImage(props.imgFile)
const projectId = getProjectId(props.imgFile)
const projectRoute = `/work/${projectId}`

const picTransform = `translate(${props.transX}%, ${props.transY}%) rotateZ(-45deg)`
const picTransformHover = `scale(1.1) ${picTransform}`
const bgSize = `${props.size}%`
</script>

<template>
    <div id="item-a" class="item">
        <a v-bind:href="projectRoute">
            <div class="pic"></div>
        </a>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.item {
  grid-area: v-bind("props.gridArea");
  overflow: hidden;
  position: relative;
}

.item .pic {
  position: absolute;
  width: 200%;
  height: 200%;
  background-image: v-bind("`url('${imgUrl}')`");
  background-repeat:no-repeat;
  background-position: center center;
  background-size: v-bind(bgSize);
  transform: v-bind(picTransform);
  transition: transform 0.5s;
}

.item .pic:hover {
  transition: transform 1s;
  transform: v-bind(picTransformHover);
}
</style>
