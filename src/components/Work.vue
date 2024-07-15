<script setup>
import { projects } from "../utils/projectData"

const importGlob = import.meta.glob("../../static/images/previews/*");
const previewPhotoDir = "../../static/images/previews/"
const jpgSuffix = "-preview-active-full.jpg"

const buildPreviewImageUrl = (name) => {
    // return "/static/images/previews/" + name + "-preview@0,5x.jpg"
    // return "/static/images/previews/" + name + "-preview-full.jpg"
    // return "/static/images/previews/" + name + "-preview-active@0,5x.jpg"
    return `${previewPhotoDir}${name}${jpgSuffix}`
}

const imagesMap = new Map()
for (const [file, importCall] of Object.entries(importGlob)) {
    if (file.endsWith(jpgSuffix)) {
        const module = await importCall()
        imagesMap.set(file, module.default)
    }
}

const getPreviewImage = (name) => {
    const fileName = `${previewPhotoDir}${name}${jpgSuffix}`
    return imagesMap.get(fileName)
}

</script>

<template>
    <div class="work">
        <div class="project-card" v-for="(project, index) in projects">
            <a :href="`/work/${project.projectId}`" >
                <div class="project-card-img">
                    <img loading="lazy" :src="getPreviewImage( project.thumbnail ).src" />
                </div>
                <div v-if="!(index % 2)" class="project-card-info-container almost-white-fg right">
                    <div class="project-card-info">
                        <h2>{{ project.title }}</h2>
                        <div class="intro-tag">{{ project.intro }}</div>
                    </div>
                </div>
                <div v-if="index % 2" class="project-card-info-container almost-white-fg left">
                    <div class="project-card-info">
                        <h2>{{ project.title }}</h2>
                        <div class="intro-tag">{{ project.intro }}</div>
                    </div>
                </div>

            </a>
        </div>
    </div>
</template>

<style scoped>

.project-card {
        padding: 1rem 0rem;
        position: relative;
}

.project-card a {
    display: block;
    position: relative;
}

.project-card-img {
    line-height: 0;

}

.project-card-info-container {
    width: 40%;
    padding: 2rem;

}

.project-card-info {
    padding: 1.5rem;
    /* background-color: rgb(74, 80, 87); */
    background-color: rgb(49, 54, 60);
    -webkit-box-shadow: 1px 7px 20px 2px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 7px 20px 2px rgba(0,0,0,0.75);
    box-shadow: 1px 7px 20px 2px rgba(0,0,0,0.75);
}

.project-card h2 {
        padding-bottom: 2rem;
        font-weight: 500;
        letter-spacing: 0.4px;
}

.project-card h2:after {
         background: none repeat scroll 0 0 #ffffff;
         bottom: -1rem;
         content: "";
         display: block;
         height: 1px;
         position: relative;
         width: 120px;
 }

.project-card img {
    width: 100%;
}

.intro-tag {
    font-weight: 300;
}

.project-card-info-container.left {
    position: absolute;
    top: 0;
    left: 0;
    text-align: right;
}

.project-card-info-container.left h2 {
    text-align: right;
}

.project-card-info-container.left h2:after {
    margin-left: auto;
}

.project-card-info-container.right {
    position: absolute;
    top: 0;
    right: 0;
    text-align: left;
}

.project-card-info-container.right h2 {
    text-align: left;
}

.project-card-info-container.right h2:after {
    margin-right: auto;
}

@media only screen and (max-width: 1024px) {
    .project-card-info-container {
        /* padding: 0.5rem; */
        width: 60%;
    }

    .project-card h2 {
        /* font-size: 1.4rem; */
        /* padding-bottom: 0.5rem; */
        padding-top: 0rem;
    }
}

@media only screen and (max-width: 768px) {
        /* For mobile phones: */
        .project-card-info-container {
            padding: 0.5rem;
            width: 60%;
        }

        .project-card-info {
            padding: 0.5rem;
        }

        .project-card h2 {
            font-size: 1.2rem;
            padding-bottom: 0.5rem;
            padding-top: 0;
        }

        .project-card h2:after {
                 bottom: -0.25rem;
                 width: 80px;
         }

        .project-card-img {
            overflow: hidden;
        }

        .project-card img {
            width: 150%;
            margin: 0 -25%;
            display: block;
        }

}

</style>
