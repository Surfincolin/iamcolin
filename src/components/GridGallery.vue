<script setup>
import GridGalleryImage from './GridGalleryImage.vue';
// interface GalleryImageProp {
//     imgFile: String;
//     size: Number;
//     transX: Number;
//     transY: Number;
// }
// const props = defineProps({
//     images: {
//         type: Array<GalleryImageProp>
//     }
// })
const props = defineProps(['images'])
const pics = [
    "picture1",
    "picture2",
    "picture3",
    "picture4",
    "picture5",
    "picture6",
    "picture7"
]

const zipImgs = pics.map((label, i) => {
    const galImg = props.images[i]
    if (galImg === undefined) {
        throw new Error(`No image for ${label} of the gallery.`);
    }

    return {
        label: label,
        imgFile: galImg.imgFile,
        size: galImg.size,
        transX: galImg.transX,
        transY: galImg.transY,
    }
})

</script>

<template>
    <div class="guide"></div>
    <div class="wrapper">
        <div class="gallery-container">
            <GridGalleryImage v-for="galImg in zipImgs"
                :imgFile="galImg.imgFile"
                :gridArea="galImg.label"
                :size="galImg.size"
                :transX="galImg.transX"
                :transY="galImg.transY"
            ></GridGalleryImage>
        </div>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* .home {
  container-type: inline-size;
} */

.guide {
  box-sizing: border-box;
  position: absolute;
  height: 28.33cqw;
  width: 100cqw;
  border: 2px solid blue;
  z-index: 99;
  pointer-events: none;
  display: none;

}

.wrapper {
  --content-width: 100cqw; 
  --hero-height: 28.33cqw;
  --gallery-width: calc(0px + (var(--content-width) + var(--hero-height))/ 1.414 );
  /* background-color: blueviolet; */
  height: var(--hero-height);
  width: var(--content-width);
  overflow: hidden;
}

.gallery-container {
  box-sizing: border-box;
  width: var(--gallery-width);
  height: var(--gallery-width);
  /* background: var(--bg-color); */
  /* background: black; */
  /* border: 4px solid black; */
  display: grid;
/*   padding: 4px; */
  grid-template-columns: 1fr 1.5fr 1.5fr 0.5fr 1fr;
  grid-template-rows: 1.2fr 1.5fr 1fr;
  grid-template-areas:
    ". . picture5 picture5 picture7"
    "picture1 picture2 picture4 picture6 picture6"
    "picture1 picture3 picture3 . .";
  gap: 5px;
  margin: auto;
  transform: translate(0%, calc(-50% + var(--hero-height)/2)) rotateZ(45deg);
}

</style>
